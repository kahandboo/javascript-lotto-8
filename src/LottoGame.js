import { RANK } from "./Constants";

class LottoGame {
  constructor(purchasedLottos, inputLotto, bonus) {
    this.purchasedLottos = purchasedLottos; 
    this.inputLotto = inputLotto;
    this.bonus = bonus;  
  }

  determineRank(purchasedLotto) {
    const matchCount = purchasedLotto.filter(num => this.inputLotto.includes(num)).length;
    const hasBonus = purchasedLotto.includes(this.bonus);

    if (matchCount === 6) return RANK.FIRST;
    if (matchCount === 5) {
      if (hasBonus) return RANK.SECOND;
      else return RANK.THIRD;
    }
    if (matchCount === 4) return RANK.FOURTH;
    if (matchCount === 3) return RANK.FIFTH;
    return RANK.NONE;
  }
}

export default LottoGame;