import { RandomBeerModule } from './random-beer.module';

describe('RandomBeerModule', () => {
  let randomBeerModule: RandomBeerModule;

  beforeEach(() => {
    randomBeerModule = new RandomBeerModule();
  });

  it('should create an instance', () => {
    expect(randomBeerModule).toBeTruthy();
  });
});
