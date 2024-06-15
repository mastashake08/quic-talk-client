const assert = require('assert');
const main = require('..');

describe('quic-talk-client', () => {
  it('returns with placeholder', () => {
    assert.equal(main(), 'quic-talk-client');
  });
});
