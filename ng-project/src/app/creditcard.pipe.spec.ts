import { CreditcardPipe } from './creditcard.pipe';

describe('CreditcardPipe', () => {
  const pipe = new CreditcardPipe();

  it('create an instance', () => {
    const pipe = new CreditcardPipe();
    expect(pipe).toBeTruthy();
  });

  it('test that pipe return type of xxxx-xxxx-xxxx-xxxx', function () {
    expect(pipe.transform("1234567812345678", "")).toEqual("1234-5678-1234-5678")
  })

});
