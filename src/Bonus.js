import { ERROR_MESSAGES } from "./Constants";

class Bonus {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    if (typeof number !== "number" || number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE);
    }
  }
}

export default Bonus;