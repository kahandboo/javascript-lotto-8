import { ERROR_MESSAGES } from "./Constants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_COUNT);
    }

    const numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBERS);
    }

    numbers.forEach((num) => {
      if (typeof num !== "number" || num < 1 || num > 45) {
        throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);
      }
    });
  }
}

export default Lotto;
