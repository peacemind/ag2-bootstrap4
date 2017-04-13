import { NeuralNetPage } from './app.po';

describe('neural-net App', () => {
  let page: NeuralNetPage;

  beforeEach(() => {
    page = new NeuralNetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
