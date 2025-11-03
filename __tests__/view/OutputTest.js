import { MissionUtils } from "@woowacourse/mission-utils";
import Output from "../../src/view/Output";
import { OUTPUT_MESSAGES } from "../../src/utils/Constants";

jest.mock('../../src/utils/Constants', () => ({
  RANK: Object.freeze({
    FIFTH: { key: 'FIFTH' },
    FOURTH: { key: 'FOURTH' },
    THIRD: { key: 'THIRD' },
    SECOND: { key: 'SECOND' },
    FIRST: { key: 'FIRST' },
  }),
  OUTPUT_MESSAGES: {
    PURCHASE_COUNT: (count) => `${count}개 구매`,
    RESULT_HEADER: "결과",
    DIVIDER: "=========",
    FIFTH: (count) => `5th: ${count}`,
    FOURTH: (count) => `4th: ${count}`,
    THIRD: (count) => `3rd: ${count}`,
    SECOND: (count) => `2nd: ${count}`,
    FIRST: (count) => `1st: ${count}`,
    TOTAL_RETURN: (rate) => `총 수익률: ${rate}%`,
  },
}));
  
describe("Output 클래스 테스트", () => {
  let mockPrint;
  beforeEach(() => {
    mockPrint = jest.spyOn(MissionUtils.Console, 'print');
    mockPrint.mockImplementation(() => {});
  });
    
  afterEach(() => {
    mockPrint.mockRestore();
  });
    
  describe("printPurchaseCount 기능 테스트", () => {
    test("구매 개수 메시지를 올바르게 출력한다.", () => {
      // given
      const count = 8;
      const expectedMessage = OUTPUT_MESSAGES.PURCHASE_COUNT(count); 
  
      // when
      Output.printPurchaseCount(count);
  
      // then
      expect(mockPrint).toHaveBeenCalledTimes(1);
      expect(mockPrint).toHaveBeenCalledWith(expectedMessage);
    });
  });
  
  describe("printPurchasedLottos 기능 테스트", () => {
    test("구매한 로또 목록을 한 줄씩 순서대로 출력한다.", () => {
      // given
      const lottos = [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
      ];
  
      // when
      Output.printPurchasedLottos(lottos);
  
      // then
      expect(mockPrint).toHaveBeenCalledTimes(2);
      expect(mockPrint).toHaveBeenNthCalledWith(1, lottos[0]);
      expect(mockPrint).toHaveBeenNthCalledWith(2, lottos[1]);
    });
  
    test("구매한 로또가 없을 때 아무것도 출력하지 않는다", () => {
      // given
      const lottos = [];
  
      // when
      Output.printPurchasedLottos(lottos);
  
      // then
      expect(mockPrint).not.toHaveBeenCalled();
    });
  });
  
  describe("printRankResults 기능 테스트", () => {
    test("당첨 통계를 헤더, 구분선, 5등부터 1등 순으로 올바르게 출력한다.", () => {
      // given
      const rankCounts = {
        FIRST: 1,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 1,
        FIFTH: 2,
      };
  
      // when
      Output.printRankResults(rankCounts);
  
      // then
      expect(mockPrint).toHaveBeenCalledTimes(7);
  
      // then
      expect(mockPrint).toHaveBeenNthCalledWith(1, OUTPUT_MESSAGES.RESULT_HEADER);
      expect(mockPrint).toHaveBeenNthCalledWith(2, OUTPUT_MESSAGES.DIVIDER);
      expect(mockPrint).toHaveBeenNthCalledWith(3, OUTPUT_MESSAGES.FIFTH(2));
      expect(mockPrint).toHaveBeenNthCalledWith(4, OUTPUT_MESSAGES.FOURTH(1));
      expect(mockPrint).toHaveBeenNthCalledWith(5, OUTPUT_MESSAGES.THIRD(0));
      expect(mockPrint).toHaveBeenNthCalledWith(6, OUTPUT_MESSAGES.SECOND(0));
      expect(mockPrint).toHaveBeenNthCalledWith(7, OUTPUT_MESSAGES.FIRST(1));
    });
  });
  
  describe("printProftestRate 기능 테스트", () => {
    test("수익률 메시지를 올바르게 출력한다.", () => {
      // given
      const profitRate = 62.5;
      const expectedMessage = OUTPUT_MESSAGES.TOTAL_RETURN(profitRate); 
  
      // when
      Output.printProfitRate(profitRate);
  
      // then
      expect(mockPrint).toHaveBeenCalledTimes(1);
      expect(mockPrint).toHaveBeenCalledWith(expectedMessage);
    });
  });
});