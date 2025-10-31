import { INPUT_MESSAGES } from "./Constants";
import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
  getPurchaseAmountInput() {
    return MissionUtils.Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
  }

  getLottoNumbersInput() {
    return MissionUtils.Console.readLineAsync(INPUT_MESSAGES.LOTTO_NUMBERS);
  }

  getBonusNumberInput() {
    return MissionUtils.Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
  }

  parseLottoNumbersInput(lottoNumbersInput) {
    return lottoNumbersInput.split(" ").map(Number);
  }

  convertPurchaseAmountToNumber(purchaseAmountInput) {
    return Number(purchaseAmountInput);
  }

  convertBonusNumberToNumber(bonusNumberInput) {
    return Number(bonusNumberInput);
  }
}

export default Input;