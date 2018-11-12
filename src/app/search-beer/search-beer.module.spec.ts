import { SearchBeerModule } from './search-beer.module';

describe('SearchBeerModule', () => {
  let searchBeerModule: SearchBeerModule;

  beforeEach(() => {
    searchBeerModule = new SearchBeerModule();
  });

  it('should create an instance', () => {
    expect(searchBeerModule).toBeTruthy();
  });
});
