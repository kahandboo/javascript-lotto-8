import Input from '../src/Input';
import { INPUT_MESSAGES } from '../src/Constants';
import { MissionUtils } from "@woowacourse/mission-utils";

describe("Input 클래스 테스트", () => {
  let input;
    
  beforeEach(() => {
    input = new Input();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  })

  test("getPurchaseInput 호출 시 INPUT_MESSAGES.PURCHASE를 출력하고 사용자 입력을 반환한다", async () => {
    // given
    const mockReturnValue = "1000"; 
    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue(mockReturnValue);
    
    // when
    const result = await input.getPurchaseInput();
    
    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(INPUT_MESSAGES.PURCHASE);
    expect(result).toBe(mockReturnValue);
  });

  test("getLottoNumbersInput 호출 시 INPUT_MESSAGES.LOTTO_NUMBERS를 출력하고 사용자 입력을 반환한다", async () => {
    // given
    const mockReturnValue = "1000"; 
    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue(mockReturnValue);
    
    // when
    const result = await input.getLottoNumbersInput();
    
    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(INPUT_MESSAGES.LOTTO_NUMBERS);
    expect(result).toBe(mockReturnValue);
  });

  test("getBonusNumberInput 호출 시 INPUT_MESSAGES.BONUS_NUMBER를 출력하고 사용자 입력을 반환한다", async () => {
    // given
    const mockReturnValue = "1000"; 
    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue(mockReturnValue);
    
    // when
    const result = await input.getBonusNumberInput();
    
    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(INPUT_MESSAGES.BONUS_NUMBER);
    expect(result).toBe(mockReturnValue);
  });
});