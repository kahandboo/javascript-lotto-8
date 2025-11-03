import Bonus from "../src/Bonus.js";
import { ERROR_MESSAGES } from "../src/Constants.js";

describe("Bonus 클래스 테스트", () => {
  describe("validate 기능 테스트", () => {
    test("보너스 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        new Bonus(46);
      }).toThrow(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE);
    });
  });
    
});