import PurchaseAmount from "../src/PurchaseAmount";
import { ERROR_MESSAGES } from "../src/Constants";

describe("PurchaseAmount 클래스 테스트", () => {
  describe("validate 기능 테스트", () => {
    test("구입 금액이 1000원 이상의 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        new PurchaseAmount(0);
      }).toThrow(ERROR_MESSAGES.AMOUNT_LESS_THAN_MINIMUM);
    });
      
    test("구입 금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
      expect(() => {
        new PurchaseAmount(1111);
      }).toThrow(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
    });
  });

  describe("getter 기능 테스트", () => {
    test("amount getter는 원 단위의 금액을 반환한다.", () => {
      // given
      const purchaseAmount = new PurchaseAmount(5000);

      // when
      const amount = purchaseAmount.amount;

      // then
      expect(amount).toBe(5000);
    });

    test("count getter는 구입 가능한 로또 장 수를 반환한다.", () => {
      // given
      const purchaseAmount = new PurchaseAmount(8000);

      // when
      const count = purchaseAmount.count;

      // then
      expect(count).toBe(8);
    });
  });    
});