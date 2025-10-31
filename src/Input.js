import { INPUT_MESSAGES } from "./Constants";
import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
    getPurchaseInput() {
        return MissionUtils.Console.readLineAsync(INPUT_MESSAGES.PURCHASE);
    }
}

export default Input;