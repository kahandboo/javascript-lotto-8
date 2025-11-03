import LottoGenerator from "../../src/utils/LottoGenerator";

describe("LottoGenerator 클래스 테스트", () => {
  test("단일 로또를 생성하면 6개의 번호가 반환되어야 한다.", () => {
    // when
    const lotto = LottoGenerator.generateSingle();
    
    // then
    expect(lotto.numbers).toHaveLength(6);
  });
    
    
  test("여러 개의 로또를 생성하면 지정한 개수만큼 반환되어야 한다.", () => {
    // given
    const count = 5;
    
    // when
    const lottoList = LottoGenerator.generateMultiple(count);
    
    // then
    expect(lottoList).toHaveLength(count);
    lottoList.forEach((lotto) => {
      expect(lotto.numbers).toHaveLength(6);
    });
  });
});