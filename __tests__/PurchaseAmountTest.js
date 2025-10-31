import PurchaseAmount from "../src/PurchaseAmount";

describe("PurchaseAmount 클래스 테스트", () => {
  describe("validate 기능 테스트", () => {
    test("구입 금액이 1000원 이상의 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        new PurchaseAmount(0);
      }).toThrow("[ERROR]");
    });
      
    test("구입 금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
      expect(() => {
        new PurchaseAmount(1111);
      }).toThrow("[ERROR]");
    });
  });    
});