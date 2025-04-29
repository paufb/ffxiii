import { IsInstanceOfPipe } from './is-instance-of.pipe';

describe('IsInstanceOfPipe', () => {
  it('create an instance', () => {
    const pipe = new IsInstanceOfPipe();
    expect(pipe).toBeTruthy();
  });
});
