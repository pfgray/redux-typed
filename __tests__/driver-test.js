jest
  .unmock('../src/driver.tsx')
  .unmock('../src/helpers.ts')
  .unmock('react');

describe('sum', () => {
  it('does stuff', () => {
    //console.log('hmm???');
    const thing = require('../src/driver.tsx');
    console.log('got thing:', thing);
    thing.assertionsaregood();
  });

});
