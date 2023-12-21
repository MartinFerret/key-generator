const chai = require('chai');
const expect = chai.expect;
const keyGenerator = require('../index');

describe('Key Generator Tests', () => {
  it('should generate a key with default options', () => {
    const key = keyGenerator.generateKey();
    expect(key).to.be.a('string');
    expect(key).to.have.lengthOf(8);
  });

  it('should generate a key with custom length', () => {
    const key = keyGenerator.generateKey({ length: 12 });
    expect(key).to.be.a('string');
    expect(key).to.have.lengthOf(12);
  });

  it('should generate a binary key', () => {
    const key = keyGenerator.generateKey({ binary: true });
    expect(key).to.match(/^[01]+$/);
  });

  it('should generate a numeric key', () => {
    const key = keyGenerator.generateKey({ type: 'number' });
    expect(key).to.match(/^[0-9]+$/);
  });

  it('should generate a key with unique characters', () => {
    const key1 = keyGenerator.generateKey({ uniqueChars: true });
    const key2 = keyGenerator.generateKey({ uniqueChars: true });
    expect(key1).to.not.equal(key2);
  });

  it('should generate a key with a prefix and suffix', () => {
    const key = keyGenerator.generateKey({ prefix: 'ABC', suffix: 'XYZ' });
    expect(key).to.match(/^ABC.*XYZ$/);
});

  it('should generate a weak key (remove similar characters)', () => {
    const key = keyGenerator.generateKey({ keyStrength: 'weak' });
    expect(key).to.not.match(/[oOlI]/);
  });

  it('should generate a strong key', () => {
    const key = keyGenerator.generateKey({ keyStrength: 'strong' });
    expect(key).to.match(/[!@#$%^&*()_+[\]{}|;:,.<>?]+/);
  });

  it('should throw an error for invalid options', () => {
    const invalidOptions = { length: 'invalid' };
    expect(() => keyGenerator.generateKey(invalidOptions)).to.throw('Invalid value for length');
});
});
