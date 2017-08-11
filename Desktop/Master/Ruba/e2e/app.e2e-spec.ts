import { RubaPage } from './app.po';

describe('ruba App', function() {
  let page: RubaPage;

  beforeEach(() => {
    page = new RubaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
