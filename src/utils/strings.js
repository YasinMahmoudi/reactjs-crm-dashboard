/**
 * Generate a camel case structure
 */

export function generateCamelCaseString(words) {
  const [firstWord, ...otherWords] = words.split(' ');

  const capitalizedOtherWords = otherWords.map(
    (word) => word.at(0).toUpperCase() + word.slice(1)
  );

  const camelCaseSentence = [
    firstWord.toLowerCase(),
    ...capitalizedOtherWords,
  ].join('');

  return camelCaseSentence;
}

/**
 * Generate a combination of words with first word in Capitalize shap
 */

export function generateFirstWordCapitalize(words) {
  const [firstWord, ...otherWords] = words.split(' ');

  const capitalizedOtherWords = otherWords.map((word) => word.toLowerCase());

  const capitalizedSentence = [
    firstWord.at(0).toUpperCase() + firstWord.slice(1),
    ...capitalizedOtherWords,
  ].join(' ');

  return capitalizedSentence;
}

/**
 * Extract first letter from a strin
 */

export function extractFirstLetter(str) {
  return str?.at(0).toUpperCase();
}
