const MAX = 100;

/**
 *
 * @param {int} x
 */
function doSomeWork(x) {
  if (x > MAX) {
    throw new Error(`At most ${MAX} allowed: ${x}!`);
  }
}

doSomeWork(1000);
