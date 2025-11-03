import Input from '../../src/view/Input';
import { INPUT_MESSAGES } from '../../src/utils/Constants';
import { MissionUtils } from "@woowacourse/mission-utils";

describe("Input 클래스 테스트", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })

  test("getPurchaseAmountInput 호출 시 INPUT_MESSAGES.PURCHASE를 출력하고 사용자 입력을 반환한다.", async () => {
    // given
    const mockReturnValue = "1000"; 
    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue(mockReturnValue);
    
    // when
    const result = await Input.getPurchaseAmountInput();
    
    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(INPUT_MESSAGES.PURCHASE_AMOUNT);
    expect(result).toBe(mockReturnValue);
  });

  test("getLottoNumbersInput 호출 시 INPUT_MESSAGES.LOTTO_NUMBERS를 출력하고 사용자 입력을 반환한다.", async () => {
    // given
    const mockReturnValue = "1000"; 
    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue(mockReturnValue);
    
    // when
    const result = await Input.getLottoNumbersInput();
    
    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(INPUT_MESSAGES.LOTTO_NUMBERS);
    expect(result).toBe(mockReturnValue);
  });

  test("getBonusNumberInput 호출 시 INPUT_MESSAGES.BONUS_NUMBER를 출력하고 사용자 입력을 반환한다.", async () => {
    // given
    const mockReturnValue = "1000"; 
    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue(mockReturnValue);
    
    // when
    const result = await Input.getBonusNumberInput();
    
    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(INPUT_MESSAGES.BONUS_NUMBER);
    expect(result).toBe(mockReturnValue);
  });

  describe("parseLottoNumbersInput 기능 테스트", () => {
    let lottoNumbersInput;

    test("공백으로 구분된 문자열을 숫자 배열로 변환한다.", () => {
      // given
      lottoNumbersInput = "1 2 3 4 5";

      // when
      const result = Input.parseLottoNumbersInput(lottoNumbersInput);

      // then
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test("빈 문자열 입력시 0을 반환한다.", () => {
      // given
      lottoNumbersInput = "";

      // when
      const result = Input.parseLottoNumbersInput(lottoNumbersInput);

      // then
      expect(result).toEqual([0]);
    });
  });

  describe("convertPurchaseAmountToNumber 기능 테스트", () => {
    let purchaseAmountInput;

    test("문자열을 숫자로 변환한다.", () => {
      // given
      purchaseAmountInput = "1000";

      // when
      const result = Input.convertPurchaseAmountToNumber(purchaseAmountInput);

      // then
      expect(result).toEqual(1000);
    });

    test("빈 문자열 입력시 0을 반환한다.", () => {
      // given
      purchaseAmountInput = "";

      // when
      const result = Input.convertPurchaseAmountToNumber(purchaseAmountInput);

      // then
      expect(result).toEqual(0);
    });
  });

  describe("convertBonusNumberToNumber 기능 테스트", () => {
    let bonusNumberInput;

    test("문자열을 숫자로 변환한다.", () => {
      // given
      bonusNumberInput = "123";

      // when
      const result = Input.convertBonusNumberToNumber(bonusNumberInput);

      // then
      expect(result).toEqual(123);
    });

    test("빈 문자열 입력시 0을 반환한다.", () => {
      // given
      bonusNumberInput = "";

      // when
      const result = Input.convertBonusNumberToNumber(bonusNumberInput);

      // then
      expect(result).toEqual(0);
    });
  });
});