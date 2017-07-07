import { MaterialPrimengPage } from './app.po';

describe('material-primeng App', () => {
  let page: MaterialPrimengPage;

  beforeEach(() => {
    page = new MaterialPrimengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
