export class DetecteurPalindrome {

  static detecter(chaine :  string){
    const reverseChaine = chaine.split("").reverse().join("");
    
    if(chaine === reverseChaine)
      return `${reverseChaine}
              bien joué`;
    
    return chaine.split("").reverse().join("");
  }
}