import LottoResult from "../../src/domain/LottoResult";
import { RANK } from "../../src/utils/Constants";

jest.mock("../../src/utils/Constants.js", () => ({
  RANK: Object.freeze({
    NONE: { key: 'NONE', prize: 0 },
    FIFTH: { key: 'FIFTH', prize: 5000 },
    FOURTH: { key: 'FOURTH', prize: 50000 },
    THIRD: { key: 'THIRD', prize: 1500000 },
    SECOND: { key: 'SECOND', prize: 30000000 },
    FIRST: { key: 'FIRST', prize: 2000000000 },
  }),
}));

describe("LottoResult 클래스 테스트", () => {
  let lottoResult;

  beforeEach(() => {
    // given
    lottoResult = new LottoResult();
  });

  describe("getRankCounts 기능 테스트", () => {
    test("새 인스턴스가 생성될 때 모든 등수의 카운트를 0으로 초기화한다.", () => {
      // when
      const counts = lottoResult.getRankCounts();

      // then
      const expectedCounts = {
        NONE: 0,
        FIRST: 0,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 0,
        FIFTH: 0,
      };
      expect(counts).toEqual(expectedCounts);
    });
  });

  describe("recordRank", () => {
    test("단일 등수 배열을 올바르게 기록한다.", () => {
      // given
      const ranks = [RANK.FIFTH];

      // when
      lottoResult.recordRank(ranks);
      const counts = lottoResult.getRankCounts();

      // then
      const expectedCounts = {
        NONE: 0, 
        FIRST: 0, 
        SECOND: 0, 
        THIRD: 0, 
        FOURTH: 0, 
        FIFTH: 1,
      };
      expect(counts).toEqual(expectedCounts);
    });

    test("여러 개의 서로 다른 등수 배열을 올바르게 기록한다.", () => {
      // given
      const ranks = [RANK.FIRST, RANK.THIRD, RANK.FIFTH];

      // when
      lottoResult.recordRank(ranks);
      const counts = lottoResult.getRankCounts();

      // then
      const expectedCounts = {
        NONE: 0, 
        FIRST: 1, 
        SECOND: 0, 
        THIRD: 1, 
        FOURTH: 0, 
        FIFTH: 1,
      };
      expect(counts).toEqual(expectedCounts);
    });

    test("여러 개의 동일한 등수를 누적하여 기록한다.", () => {
      // given
      const ranks = [RANK.FIFTH, RANK.FOURTH, RANK.FIFTH];

      // when
      lottoResult.recordRank(ranks);
      const counts = lottoResult.getRankCounts();

      // then
      const expectedCounts = {
        NONE: 0, 
        FIRST: 0, 
        SECOND: 0, 
        THIRD: 0, 
        FOURTH: 1, 
        FIFTH: 2,
      };
      expect(counts).toEqual(expectedCounts);
    });

    test("RANK.NONE('꽝')이 포함된 배열을 올바르게 기록한다.", () => {
      // given
      const ranks = [RANK.FIFTH, RANK.NONE, RANK.NONE];

      // when
      lottoResult.recordRank(ranks);
      const counts = lottoResult.getRankCounts();

      // then
      const expectedCounts = {
        NONE: 2, 
        FIRST: 0, 
        SECOND: 0, 
        THIRD: 0, 
        FOURTH: 0, 
        FIFTH: 1,
      };
      expect(counts).toEqual(expectedCounts);
    });


    test("빈 배열을 받았을 때 아무것도 변경하지 않는다.", () => {
      // given
      const ranks = [];
      const initialCounts = lottoResult.getRankCounts();

      // when
      lottoResult.recordRank(ranks);
      const newCounts = lottoResult.getRankCounts();

      // then
      expect(newCounts).toEqual(initialCounts);
    });
  });

  describe("calculateProfitRate 기능 테스트", () => {
    test("5등 1개(5,000원) 당첨, 8,000원 구매 시 62.5%의 수익률을 반환한다.", () => {
      // given
      const purchaseAmount = 8000;
      lottoResult.recordRank([RANK.FIFTH]); 

      // when
      const profitRate = lottoResult.calculateProfitRate(purchaseAmount); 

      // then
      expect(profitRate).toBe(62.5);
    });

    test("당첨 금액이 0일 때 0을 반환한다.", () => {
      // given
      const purchaseAmount = 0; 

      // when
      const profitRate = lottoResult.calculateProfitRate(purchaseAmount);

      // then
      expect(profitRate).toBe(0);
    });
  });
});