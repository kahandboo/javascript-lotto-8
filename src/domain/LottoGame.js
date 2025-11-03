import { RANK } from "../utils/Constants";

class LottoGame {
  constructor(purchasedLottos, inputLotto, bonus) {
    this.purchasedLottos = purchasedLottos; 
    this.inputLotto = inputLotto;
    this.bonus = bonus;  
  }

  determineRank(purchasedLotto) {
    const matchCount = purchasedLotto.filter(num => this.inputLotto.includes(num)).length;
    const hasBonus = purchasedLotto.includes(this.bonus);

    if (matchCount === RANK.FIRST.match) return RANK.FIRST;
    if (matchCount === RANK.SECOND.match) {
      if (hasBonus) return RANK.SECOND;
      else return RANK.THIRD;
    }
    if (matchCount === RANK.FOURTH.match) return RANK.FOURTH;
    if (matchCount === RANK.FIFTH.match) return RANK.FIFTH;
  }

  getAllRanks() {
    return this.purchasedLottos.map(purchasedLotto => this.determineRank(purchasedLotto));
  }
}

export default LottoGame;