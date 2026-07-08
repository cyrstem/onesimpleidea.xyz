export function isDebugMode() {
    if (new URLSearchParams(location.search).has('debug')) return true;

    const hash = location.hash.slice(1);
    if (hash === 'debug') return true;

    const q = hash.indexOf('?');
    if (q >= 0 && new URLSearchParams(hash.slice(q + 1)).has('debug')) return true;

    return false;
}
