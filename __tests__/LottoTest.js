import Lotto from "../src/Lotto";
import { ERROR_MESSAGES } from "../src/Constants";

describe("로또 클래스 테스트", () => {
  describe("validate 기능 테스트", () => {
    test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_COUNT);
    });
  
    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBERS);
    });
    
    test("로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, "a", 3, 4, 5]);
      }).toThrow(ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);
    });
  });
});
