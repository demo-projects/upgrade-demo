import { NewPhonecatPage } from './app.po';

describe('new-phonecat App', () => {
  let page: NewPhonecatPage;

  beforeEach(() => {
    page = new NewPhonecatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
