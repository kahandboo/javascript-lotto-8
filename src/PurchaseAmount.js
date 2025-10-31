class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    if (typeof amount !== "number" || amount < 1000) {
      throw new Error("[ERROR] 구입금액은 1000원 이상이어야 합니다.");
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1000원으로 나누어 떨어져야 합니다.");
    }
  }
}

export default PurchaseAmount;