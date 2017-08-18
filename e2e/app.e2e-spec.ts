import { MentionHashPage } from './app.po';

describe('mention-hash App', () => {
  let page: MentionHashPage;

  beforeEach(() => {
    page = new MentionHashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
