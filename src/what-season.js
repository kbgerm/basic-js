const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // Проверка на отсутствие аргумента (null или undefined)
  if (date == null) {
    return 'Unable to determine the time of year!';
  }

  // Проверка, что переданный аргумент является объектом Date и имеет корректный метод getTime
  if (!(date instanceof Date) || typeof date.getTime !== 'function' || isNaN(date.getTime())) {
    throw new Error("Invalid date!");
  }

  // Получаем месяц и определяем сезон
  let month = date.getMonth();
  let seasonNames = [
    "winter", "winter", "spring", "spring", "spring", "summer",
    "summer", "summer", "fall", "fall", "fall", "winter"
  ];

  let season = seasonNames[month];
  return season;
}

module.exports = {
  getSeason
};
