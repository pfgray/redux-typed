jest
  .unmock('../src/driver.ts')
  .unmock('../src/helpers.ts')

describe('sum', () => {
  it('does stuff', () => {
    console.log('hmm???')
    const thing = require('../src/driver.ts');
    console.log('got thing:', thing);
  });

});
