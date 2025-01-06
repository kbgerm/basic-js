const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
      if (!Array.isArray(array)) {
          throw new Error("Input must be an array");
      }

      let depth = 1;
      for (const element of array) {
          if (Array.isArray(element)) {
              depth = Math.max(depth, this.calculateDepth(element) + 1);
          }
      }

      return depth;
  }
}

module.exports = {
  DepthCalculator
};
