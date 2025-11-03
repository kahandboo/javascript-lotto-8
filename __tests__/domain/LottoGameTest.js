import LottoGame from "../../src/domain/LottoGame";

describe("LottoGame 클래스 테스트", () => {
  describe("getAllRanks 기능 테스트", () => {
    test("구매한 모든 로또에 대해 'determineRank'를 호출하고 그 결과 배열을 반환한다.", () => {
      // given
      const mockRankFirst = { key: "FIRST" };
      const mockRankFifth = { key: "FIFTH" };
      const mockInputLotto = { id: "inputLotto" }; 
      const mockBonus = { id: "bonus" }; 
      
      const mockDetermineRank1 = jest.fn().mockReturnValue(mockRankFirst);
      const mockLotto1 = { determineRank: mockDetermineRank1 };
      const mockDetermineRank2 = jest.fn().mockReturnValue(mockRankFifth);
      const mockLotto2 = { determineRank: mockDetermineRank2 };

      const purchasedLottos = [mockLotto1, mockLotto2];
      const lottoGame = new LottoGame(purchasedLottos, mockInputLotto, mockBonus);

      // when
      const ranks = lottoGame.getAllRanks();

      // then
      expect(ranks).toEqual([mockRankFirst, mockRankFifth]);
      expect(mockDetermineRank1).toHaveBeenCalledTimes(1);
      expect(mockDetermineRank1).toHaveBeenCalledWith(mockInputLotto, mockBonus);
      expect(mockDetermineRank2).toHaveBeenCalledTimes(1);
      expect(mockDetermineRank2).toHaveBeenCalledWith(mockInputLotto, mockBonus);
    });

    test("구매한 로또가 없을 때 빈 배열을 반환한다.", () => {
      // given
      const purchasedLottos = [];
      const mockInputLotto = { id: "inputLotto" };
      const mockBonus = { id: "bonus" };
      const lottoGame = new LottoGame(purchasedLottos, mockInputLotto, mockBonus);

      // when
      const ranks = lottoGame.getAllRanks();

      // then
      expect(ranks).toEqual([]);
    });
  });
});