const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // Проверка, является ли arr массивом
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];

  // Итерация по всем элементам массива
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    // Если команда "discard-next", пропускаем следующий элемент
    if (current === '--discard-next') {
      i++; // Пропускаем следующий элемент
    }
    // Если команда "discard-prev", удаляем предыдущий элемент
    else if (current === '--discard-prev') {
      if (i > 0) {
        newArr.pop(); // Удаляем предыдущий элемент из результата
      }
    }
    // Если команда "double-next", дублируем следующий элемент
    else if (current === '--double-next') {
      if (i + 1 < arr.length) {
        newArr.push(arr[i + 1]); // Дублируем следующий элемент
      }
    }
    // Если команда "double-prev", дублируем предыдущий элемент
    else if (current === '--double-prev') {
      if (i > 0) {
        newArr.push(arr[i - 1]); // Дублируем предыдущий элемент
      }
    }
    // Если это обычный элемент массива, добавляем его в новый массив
    else {
      newArr.push(current);
    }
  }

  return newArr;
}

module.exports = {
  transform
};
