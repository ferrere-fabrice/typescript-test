/*
QUAND on saisit une chaîne ALORS celle-ci est renvoyée en miroir
QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET « Bien dit » est envoyé ensuite
QUAND on saisit une chaîne ALORS « Bonjour » est envoyé avant toute réponse
QUAND on saisit une chaîne ALORS « Au revoir » est envoyé en dernier
*/

import { DetecteurPalindrome } from '../detecteurPalindrome';
import { beInFirstLine } from './matcher/beInFirstLine';

expect.extend({
  beInFirstLine,
});
describe(`OHCE indique s'il trouve un palindrome `, () => {
  it(`QUAND on saisit une chaîne qui n'est pas un palindrome
      ALORS celle-ci est renvoyée en miroir`, () => {
    // GIVEN - ARRANGE
    const chaine = 'Ynov Lyon';

    // WHEN - ACT
    const miroir = DetecteurPalindrome.detecter(chaine);
    const method = chaine.split('').reverse().join('');

    // THEN - ASSERT
    expect(miroir).toBe('noyL vonY');
    expect(miroir).toBe(method);
  });

  it(`QUAND on saisit un palindrome 
      ALORS celui-ci est renvoyé 
      ET « Bien dit » est envoyé ensuite`, () => {
    // GIVEN - ARRANGE
    const chaine = 'BOB';

    // WHEN - ACT
    const result = DetecteurPalindrome.detecter(chaine);

    // THEN - ASSERT
    expect(result).beInFirstLine('BOB');
    expect(result).beInEndLine('bien joué');
  });

});
