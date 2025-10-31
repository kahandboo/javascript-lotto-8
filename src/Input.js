import { INPUT_MESSAGES } from "./Constants";
import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
  getPurchaseInput() {
    return MissionUtils.Console.readLineAsync(INPUT_MESSAGES.PURCHASE);
  }

  getLottoNumbersInput() {
    return MissionUtils.Console.readLineAsync(INPUT_MESSAGES.LOTTO_NUMBERS);
  }

  getBonusNumberInput() {
    return MissionUtils.Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
  }
}

export default Input;