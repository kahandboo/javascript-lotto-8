import LottoResult from "../../src/domain/LottoResult";
import { RANK } from "../../src/utils/Constants";

describe("LottoReulst 클래스 테스트", () => {
  let lottoResult;
  
  beforeEach(() => {
    lottoResult = new LottoResult();
  });
  
  describe("getRankCounts 기능 테스트", () => {
    test("새 인스턴스가 생성될 때 모든 등수의 카운트를 0으로 초기화한다.", () => {
      // when
      const counts = lottoResult.getRankCounts();
  
      // then
      const expectedCounts = {
        FIRST: 0,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 0,
        FIFTH: 0,
      };
      expect(counts).toEqual(expectedCounts);
    });
  });
  
  describe("recordRank 기능 테스트", () => {
    test("단일 등수 배열을 올바르게 기록한다.", () => {
      // given
      const ranks = [RANK.FIFTH];
  
      // when
      lottoResult.recordRank(ranks);
      const counts = lottoResult.getRankCounts();
  
      // then
      const expectedCounts = {
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
        FIRST: 0,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 1,
        FIFTH: 2,
      };
      expect(counts).toEqual(expectedCounts);
    });
  
    test("빈 배열을 받았을 때 아무것도 변경하지 않는다.", () => {
      // given
      const ranks = [];
      const intestialCounts = lottoResult.getRankCounts();
  
      // when
      lottoResult.recordRank(ranks);
      const newCounts = lottoResult.getRankCounts();
  
      // then
      expect(newCounts).toEqual(intestialCounts);
    });
  });
  
  describe("calculateProfitRate 기능 테스트", () => {
    test("당첨 내역이 없을 때 0%의 수익률을 반환한다.", () => {
      // given
      const purchaseAmount = 8000;
  
      // when
      const proftestRate = lottoResult.calculateProfitRate(purchaseAmount);
  
      // then
      expect(proftestRate).toBe(0);
    });
  
    test("5등 1개(5,000원) 당첨, 8,000원 구매 시 62.5%의 수익률을 반환한다.", () => {
      // given
      const purchaseAmount = 8000;
      lottoResult.recordRank([RANK.FIFTH]); 
        
      // when
      const proftestRate = lottoResult.calculateProfitRate(purchaseAmount); 
  
      // then
      expect(proftestRate).toBe(62.5);
    });
  
    test("여러 건의 당첨(5등 2개, 4등 1개)에 대해 정확한 수익률을 계산한다.", () => {
      // given
      const purchaseAmount = 10000; 
      lottoResult.recordRank([RANK.FIFTH, RANK.FIFTH, RANK.FOURTH]); 
        
      // when
      const proftestRate = lottoResult.calculateProfitRate(purchaseAmount); 
  
      // then
      expect(proftestRate).toBe(600);
    });

    test("구매 금액과 당첨 금액이 모두 0일 때 NaN을 반환한다.", () => {
      // given
      const purchaseAmount = 0; // 0 / 0
        
      // when
      const proftestRate = lottoResult.calculateProfitRate(purchaseAmount);
  
      // then
      expect(proftestRate).toBeNaN();
    });
  
    test("당첨 금액은 있으나 구매 금액이 0일 때 Infinity를 반환한다.", () => {
      // given
      const purchaseAmount = 0;
      lottoResult.recordRank([RANK.FIFTH]); 
        
      // when
      const proftestRate = lottoResult.calculateProfitRate(purchaseAmount);
  
      // then
      expect(proftestRate).toBe(Infinity);
    });
  });
});