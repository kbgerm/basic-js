const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
      this.isDirect = isDirect; // true — прямая машина, false — обратная
  }

  encrypt(message, key) {
      if (!message || !key) throw new Error('Incorrect arguments!');

      return this.process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

      return this.process(encryptedMessage, key, 'decrypt');
  }

  process(input, key, mode) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const inputUpper = input.toUpperCase();
      const keyUpper = key.toUpperCase();
      let result = '';
      let keyIndex = 0;

      for (let i = 0; i < inputUpper.length; i++) {
          const inputChar = inputUpper[i];
          if (alphabet.includes(inputChar)) {
              const inputIndex = alphabet.indexOf(inputChar);
              const keyChar = keyUpper[keyIndex % keyUpper.length];
              const keyIndexValue = alphabet.indexOf(keyChar);

              let resultIndex;
              if (mode === 'encrypt') {
                  resultIndex = (inputIndex + keyIndexValue) % 26;
              } else {
                  resultIndex = (inputIndex - keyIndexValue + 26) % 26;
              }

              result += alphabet[resultIndex];
              keyIndex++;
          } else {
              result += inputChar; // Не шифруем не-буквенные символы
          }
      }

      // Если машина обратная, инвертируем строку
      return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
