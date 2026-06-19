const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Lightweight trailing+leading throttle (replaces the lodash dependency).
const throttle = (fn, wait = 16) => {
    let last = 0;
    let timer = null;
    let lastArgs = null;

    const invoke = (now, args) => {
        last = now;
        fn(...args);
    };

    const throttled = (...args) => {
        const now = Date.now();
        const remaining = wait - (now - last);
        lastArgs = args;

        if (remaining <= 0) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            invoke(now, args);
        } else if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                invoke(Date.now(), lastArgs);
            }, remaining);
        }
    };

    throttled.cancel = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    };

    return throttled;
};

export { randomNumber, throttle }