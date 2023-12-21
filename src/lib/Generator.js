const Validator = require('./src/lib/Validator');

class Generator {
    static generateKey(options = {}) {

        Validator.validateOptions(options);
    
        const {
            binary = false,
            length = 8,
            type = 'string',
            uniqueChars = false,
            prefix = '',
            suffix = '',
            customCharacters = '',
            characterGroups = { uppercase: true, lowercase: true, numbers: true, specials: true },
            keyStrength = 'medium',
            separator = ''
        } = options;
    
    
        const characters = generateCharacterPool(characterGroups, customCharacters, keyStrength, binary, type, uniqueChars);
    
        let key = '';
        while (key.length < length) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            key += characters.charAt(randomIndex);
        }
    
        return prefix + key.slice(0, length).split('').join(separator) + suffix;
    }
    
    static generateCharacterPool(groups, customChars, strength, binary, type, uniqueChars) {
        const characterSets = {
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789',
            specials: '!@#$%^&*()-=_+[]{}|;:,.<>?'
        };
    
        let pool = '';
    
        if (customChars) {
            pool += customChars;
        } else {
            for (const group in groups) {
                if (groups[group]) {
                    pool += characterSets[group];
                }
            }
        }
    
        if (binary) {
            pool = '01';
        } else if (type === 'number') {
            pool = '0123456789';
        }
    
        if (uniqueChars) {
            pool = Array.from(new Set(pool.split(''))).join('');
        }
    
        if (strength === 'weak') {
            pool = pool.replace(/[oOlI]/g, '');
        } else if (strength === 'strong') {
            pool += '!@#$%^&*()_+[]{}|;:,.<>?'; 
        }
    
        return pool;
    }
}

module.exports = Generator;
