precision highp float;

// Raymarched Mandelbulb SDF, shaded as thin wireframe ink (silhouette +
// object-space lattice) so it sits with the impossible-figure line art.
// Loop ceilings are compile-time constants for WebGL1; uIterations / uMaxSteps
// early-exit within those bounds for the future GA phenotype.

#define MAX_ITER 12
#define MAX_STEPS 80

uniform vec2 uResolution;
uniform float uTime;
uniform float uPower;
uniform float uBailout;
uniform float uIterations;
uniform float uMaxSteps;
uniform float uScale;
uniform float uCameraDistance;
uniform float uDetail;
uniform float uGlow;
uniform float uContrast;
uniform float uAlpha;
uniform float uReveal; // 0..1 lifecycle gate (e.g. after N GA generations)
uniform vec2 uViewOffset; // screen pivot (aspect-corrected) where the bulb sits
uniform float uViewZoom;  // >1 = smaller on screen
uniform vec3 uColor;
uniform vec3 uBgColor;
uniform vec3 uLightDir;
uniform vec3 uRotation; // euler XYZ radians applied to the fractal

varying vec2 vUv;

mat3 rotX(float a) {
    float c = cos(a), s = sin(a);
    return mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c);
}

mat3 rotY(float a) {
    float c = cos(a), s = sin(a);
    return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
}

mat3 rotZ(float a) {
    float c = cos(a), s = sin(a);
    return mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0);
}

mat3 fractalBasis() {
    return rotZ(uRotation.z) * rotY(uRotation.y) * rotX(uRotation.x);
}

float mandelbulbDE(vec3 pos) {
    vec3 z = pos;
    float dr = 1.0;
    float r = 0.0;
    float power = uPower;
    int iters = int(uIterations + 0.5);

    for (int i = 0; i < MAX_ITER; i++) {
        if (i >= iters) break;
        r = length(z);
        if (r > uBailout) break;

        float theta = acos(clamp(z.z / r, -1.0, 1.0));
        float phi = atan(z.y, z.x);
        dr = pow(r, power - 1.0) * power * dr + 1.0;

        float zr = pow(r, power);
        theta *= power;
        phi *= power;

        z = zr * vec3(
            sin(theta) * cos(phi),
            cos(theta),
            sin(theta) * sin(phi)
        );
        z += pos;
    }

    return 0.5 * log(max(r, 1e-6)) * r / max(dr, 1e-6);
}

float mapScene(vec3 p) {
    vec3 q = (fractalBasis() * p) / max(uScale, 0.05);
    return mandelbulbDE(q) * uScale;
}

vec3 calcNormal(vec3 p) {
    float e = max(uDetail * 2.0, 0.0008);
    vec2 h = vec2(e, 0.0);
    return normalize(vec3(
        mapScene(p + h.xyy) - mapScene(p - h.xyy),
        mapScene(p + h.yxy) - mapScene(p - h.yxy),
        mapScene(p + h.yyx) - mapScene(p - h.yyx)
    ));
}

// Soft AA strip around each lattice plane (no derivatives extension needed).
float wireAxis(float x, float width) {
    float f = abs(fract(x) - 0.5);
    return 1.0 - smoothstep(0.0, width, f);
}

float surfaceWires(vec3 p, float t) {
    vec3 q = (fractalBasis() * p) / max(uScale, 0.05);
    // contrast → denser lattice; distance → slightly thicker far lines
    float freq = mix(5.0, 12.0, clamp(uContrast, 0.0, 1.0));
    float w = mix(0.045, 0.018, clamp(uContrast, 0.0, 1.0)) * (1.0 + t * 0.12);

    float wx = wireAxis(q.x * freq, w);
    float wy = wireAxis(q.y * freq, w);
    float wz = wireAxis(q.z * freq, w);

    // Keep the strongest axis so crossings read as joints, not blobs.
    float grid = max(wx, max(wy, wz));

    // Sparse radial rings for a little bulb structure without filling faces.
    float radial = wireAxis(length(q) * freq * 0.55, w * 1.1);
    return max(grid, radial * 0.75);
}

void main() {
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= aspect;

    // Park a smaller bulb on the left: zoom out around a left-side pivot.
    vec2 pivot = vec2(uViewOffset.x * aspect, uViewOffset.y);
    float screenRadius = length(uv - pivot);
    // Soft crop so stray rays far from the accent don't read as fog.
    float regionMask = 1.0 - smoothstep(0.55, 1.15, screenRadius * max(uViewZoom * 0.45, 0.5));
    uv = (uv - pivot) * max(uViewZoom, 0.5);

    float camAng = uTime * 0.05;
    vec3 ro = vec3(
        sin(camAng) * uCameraDistance,
        0.15,
        cos(camAng) * uCameraDistance
    );
    vec3 ta = vec3(0.0, 0.0, 0.0);
    vec3 ww = normalize(ta - ro);
    vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
    vec3 vv = cross(uu, ww);
    vec3 rd = normalize(uv.x * uu + uv.y * vv + 1.6 * ww);

    float t = 0.0;
    float minDist = 1e3;
    float hit = 0.0;
    vec3 pos = ro;
    int steps = int(uMaxSteps + 0.5);

    for (int i = 0; i < MAX_STEPS; i++) {
        if (i >= steps) break;
        pos = ro + rd * t;
        float d = mapScene(pos);
        minDist = min(minDist, d);
        if (d < uDetail * (1.0 + t * 0.5)) {
            hit = 1.0;
            break;
        }
        if (t > 12.0) break;
        t += clamp(d, uDetail, 0.35);
    }

    vec3 col = uBgColor;
    float ink = 0.0;

    if (hit > 0.5) {
        vec3 n = calcNormal(pos);
        float ndotv = clamp(abs(dot(n, -rd)), 0.0, 1.0);

        // Silhouette / crease ink — the main wireframe read.
        float silhouette = pow(1.0 - ndotv, mix(1.6, 3.2, clamp(uContrast, 0.0, 1.0)));

        // Object-space lattice on the hit surface.
        float wires = surfaceWires(pos, t);

        // Barely-there face tone so voids stay empty (true wireframe).
        float face = 0.04 * (1.0 - silhouette);

        ink = max(silhouette, wires);
        ink = max(ink, face);

        float fog = exp(-0.06 * t * t);
        ink *= fog * uAlpha;
    } else {
        // Hairline proximity glow only — no solid fill when missing the surface.
        float glow = exp(-14.0 * max(minDist, 0.0)) * uGlow * uAlpha * 0.35;
        ink = glow;
    }

    ink *= clamp(uReveal, 0.0, 1.0) * regionMask;
    col = mix(uBgColor, uColor, clamp(ink, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
}
