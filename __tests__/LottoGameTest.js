import LottoGame from "../src/LottoGame";
import { RANK } from "../src/Constants";

describe('LottoGame 클래스 테스트', () => {
  const inputLotto = [1, 2, 3, 4, 5, 6];
  const bonus = 7;
  const lottoGame = new LottoGame([], inputLotto, bonus);

  test('6개 번호가 모두 일치하면 1등을 반환한다', () => {
    // given
    const purchasedLotto = [1, 2, 3, 4, 5, 6];

    // when
    const result = lottoGame.determineRank(purchasedLotto);

    // then
    expect(result).toBe(RANK.FIRST);
  });

  test('5개 번호와 보너스 번호가 일치하면 2등을 반환한다', () => {
    // given
    const purchasedLotto = [1, 2, 3, 4, 5, 7];

    // when
    const result = lottoGame.determineRank(purchasedLotto);

    // then
    expect(result).toBe(RANK.SECOND);
  });

  test('5개 번호만 일치하면 3등을 반환한다', () => {
    // given
    const purchasedLotto = [1, 2, 3, 4, 5, 45];

    // when
    const result = lottoGame.determineRank(purchasedLotto);

    // then
    expect(result).toBe(RANK.THIRD);
  });

  test('4개 번호만 일치하면 4등을 반환한다', () => {
    // given
    const purchasedLotto = [1, 2, 3, 4, 44, 45];

    // when
    const result = lottoGame.determineRank(purchasedLotto);

    // then
    expect(result).toBe(RANK.FOURTH);
  });

  test('3개 번호만 일치하면 5등을 반환한다', () => {
    // given
    const purchasedLotto = [1, 2, 3, 40, 41, 42];

    // when
    const result = lottoGame.determineRank(purchasedLotto);

    // then
    expect(result).toBe(RANK.FIFTH);
  });

  test('2개 이하 일치 시 NONE을 반환한다', () => {
    // given
    const purchasedLotto = [1, 9, 10, 11, 12, 13];

    // when
    const result = lottoGame.determineRank(purchasedLotto);

    // then
    expect(result).toBe(RANK.NONE);
  });
});