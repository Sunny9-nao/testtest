describe('予約シナリオ', () => {
  it('一般会員が特定のホテルを予約するシナリオ', () => {
    //ホテルサイトへ遷移
    cy.visit('https://hotel.testplanisphere.dev/ja/')
    //ログインする
    cy.contains('ログイン').click()
    cy.get('[id="email"]').type("aaaaa@aaaaa")
  })
})