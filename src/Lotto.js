class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const numbersSet = new Set(numbers);
    if (numbersSet.length !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

    numbers.forEach((num) => {
      if (typeof num !== "number" || num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
      }
    });
  }
}

export default Lotto;
