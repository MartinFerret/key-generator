class Validator {
    static validateOptions(options) {
        if (!options || typeof options !== 'object') {
            throw new Error('Options are required and must be an object.');
        }

        if (options.binary !== undefined && !Validator.validateBooleanOption(options.binary)) {
            throw new Error('Invalid value for binary. It must be a boolean.');
        }

        if (options.length !== undefined && !Validator.validateLengthOption(options.length)) {
            throw new Error('Invalid value for length. It must be a positive integer greater than or equal to 5.');
        }

        if (options.type !== undefined && !Validator.validateTypeOption(options.type)) {
            throw new Error('Invalid value for type. It must be either "string" or "number".');
        }

        if (options.uniqueChars !== undefined && !Validator.validateBooleanOption(options.uniqueChars)) {
            throw new Error('Invalid value for uniqueChars. It must be a boolean.');
        }

        if (options.keyStrength !== undefined && !Validator.validateKeyStrengthOption(options.keyStrength)) {
            throw new Error('Invalid value for keyStrength. It must be one of: "weak", "medium", or "strong".');
        }

        if (options.characterGroups !== undefined) {
            Validator.validateCharacterGroups(options.characterGroups);
        }

        return true;
    }

    static validateBooleanOption(value) {
        return typeof value === 'boolean';
    }

    static validateLengthOption(value) {
        return Number.isInteger(value) && value >= 5;
    }

    static validateTypeOption(value) {
        const replies = ['string', 'number'];
        return replies.includes(value);
    }

    static validateKeyStrengthOption(value) {
        const replies = ['weak', 'medium', 'strong'];
        return replies.includes(value);
    }

    static validateCharacterGroups(characterGroups) {
        if (typeof characterGroups !== 'object') {
            throw new Error('Invalid characterGroups. It must be an object.');
        }

        for (const key in characterGroups) {
            if (typeof characterGroups[key] !== 'boolean') {
                throw new Error(`Invalid value for ${key} in characterGroups. It must be a boolean.`);
            }
        }
    }
}

module.exports = Validator;
