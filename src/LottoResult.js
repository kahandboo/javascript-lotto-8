import { RANK } from "./Constants";

class LottoResult {
  #rankCounts;

  constructor() {
    this.#rankCounts = {
      [RANK.FIRST.key]: 0,
      [RANK.SECOND.key]: 0,
      [RANK.THIRD.key]: 0,
      [RANK.FOURTH.key]: 0,
      [RANK.FIFTH.key]: 0,
    };
  }

  getRankCounts() {
    return this.#rankCounts;
  }

  recordRank(ranks) {
    ranks.forEach((rank) => {
      this.#rankCounts[rank.key] += 1;
    });
  }
  
  calculateProfitRate(purchaseAmount) {
    const totalPrize = Object.values(RANK).reduce((sum, rank) => {
      return sum + (this.#rankCounts[rank.key] || 0) * rank.prize;
    }, 0);
      
    return (totalPrize / purchaseAmount) * 100;
  }
}

export default LottoResult;