const throttle = (fn, wait = 100) => {
  let timeoutId = null;
  let lastRun = 0;

  return (...args) => {
    const now = Date.now();
    const remaining = wait - (now - lastRun);

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastRun = now;
      fn(...args);
      return;
    }

    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastRun = Date.now();
        timeoutId = null;
        fn(...args);
      }, remaining);
    }
  };
};

export { throttle };
