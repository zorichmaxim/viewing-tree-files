import { ViewingTreeFilesPage } from './app.po';

describe('viewing-tree-files App', () => {
  let page: ViewingTreeFilesPage;

  beforeEach(() => {
    page = new ViewingTreeFilesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
