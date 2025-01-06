const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = new Map();
  const result = [];

  for (const name of names) {
    if (usedNames.has(name)) {
      let count = usedNames.get(name);
      let newName;
      do {
        count++;
        newName = `${name}(${count})`;
      } while (usedNames.has(newName));
      result.push(newName);
      usedNames.set(name, count);
      usedNames.set(newName, 0);
    } else {
      result.push(name);
      usedNames.set(name, 0);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
