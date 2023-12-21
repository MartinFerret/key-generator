# adaptable-key-generator

## Description

The adaptable-key-generator package is designed to facilitate the creation of customizable keys tailored to specific requirements. The primary focus of the package is the Generator class, equipped with the generateKey() method, dedicated to generating keys with flexibility and ease.

## Installation

Install the package via npm:

```bash
npm install adaptable-key-generator
```

## Usage

The generateKey() method provides a parameter object for customization, with the following optional parameters:

**binary** : boolean
**length** : number
**type** : 'string' | 'number'
**uniqueChars** : boolean
**prefix** : string
**suffix** : string
**customCharacters** : string
**characterGroups** : { uppercase: boolean, lowercase: boolean, numbers : boolean, specials: boolean }
**keyStrength** : 'weak' | 'strong'
**separator** : string

```js
const generator = require('key-generator');

// Generate a key with default options
const defaultKey = generator.generateKey({});
// Output example: '489bhr8t'

// Generate a binary key with length 16
const binaryKey = generator.generateKey({ binary: true, length: 16 });
// Output example: '1010101100110010'

// Generate a numeric key with length 10
const numericKey = generator.generateKey({ type: 'number', length: 10 });
// Output example: '9372458106'

// Generate a unique characters key with a prefix and suffix
const uniqueKey = generator.generateKey({ uniqueChars: true, prefix: 'ABC', suffix: 'XYZ' });
// Output example: 'ABCjfhgqXYZ'

// Generate a key with custom characters
const customCharKey = generator.generateKey({ customCharacters: '@#$%', length: 8 });
// Output example: '#$%@%$#'

// Generate a key with custom character groups
const charGroupsKey = generator.generateKey({
  characterGroups: { uppercase: true, lowercase: false, numbers: true, specials: false },
  length: 12,
});
// Output example: 'YK867239G1UQ'

// Generate a strong key with length 14
const strongKey = generator.generateKey({ keyStrength: 'strong', length: 14 });
// Output example: 'H&9l2_$aO*^B@'

// Generate a key with a separator
const separatorKey = generator.generateKey({ separator: '-', length: 9 });
// Output example: 'H-9-l-2-a'
```
