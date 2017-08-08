import { ScotiaFrontendA4Page } from './app.po';

describe('scotia-frontend-a4 App', () => {
  let page: ScotiaFrontendA4Page;

  beforeEach(() => {
    page = new ScotiaFrontendA4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
