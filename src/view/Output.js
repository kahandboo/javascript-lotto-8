import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES, RANK } from "../utils/Constants";

class Output {
  static printPurchaseCount(count) {
    MissionUtils.Console.print(OUTPUT_MESSAGES.PURCHASE_COUNT(count));
  }

  static printPurchasedLottos(PurchasedLottos) {
    PurchasedLottos.forEach((purchasedLotto) => {
      MissionUtils.Console.print(purchasedLotto);
    });
  }

  static printRankResults(rankCounts) {
    const ranks = Object.values(RANK);
    MissionUtils.Console.print(OUTPUT_MESSAGES.RESULT_HEADER);
    MissionUtils.Console.print(OUTPUT_MESSAGES.DIVIDER);

    ranks.forEach((rank) => {
      const rankKey = rank.key;
      const count = rankCounts[rankKey];
      const formatRankMessage = OUTPUT_MESSAGES[rankKey];

      MissionUtils.Console.print(formatRankMessage(count));
    });
  }

  static printProfitRate(profitRate) {
    MissionUtils.Console.print(OUTPUT_MESSAGES.TOTAL_RETURN(profitRate));
  }
}

export default Output;