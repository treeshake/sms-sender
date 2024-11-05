export function generateRandomString(
  param1: string,
  param2: string,
  param3: string,
  param4: string,
): string {
  const combined = `${param1}${param2}${param3}${param4}`;
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';

  let result = '';

  // Seed the random generator with the combined input parameters
  let seed = 0;
  for (let i = 0; i < combined.length; i++) {
    seed += combined.charCodeAt(i);
  }

  // Generate 2 upper case letters
  for (let i = 0; i < 2; i++) {
    const randomIndex = (seed + i) % upperCaseLetters.length;
    result += upperCaseLetters[randomIndex];
  }

  // Generate 3 lower case letters
  for (let i = 0; i < 3; i++) {
    const randomIndex = (seed + i + 2) % lowerCaseLetters.length;
    result += lowerCaseLetters[randomIndex];
  }

  // Shuffle the result to mix upper and lower case letters
  result = result
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  return result;
}
