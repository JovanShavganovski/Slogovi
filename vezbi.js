

// So funkcija da se ispechatat site slogovi od daden zbor.
// Slogot se definira kako sekvenca od karakteri koi zavrsuvaat so samoglaska.
// PRIMERI = ["A" "E" "RO" "DRO" "M"], ["PRI", "ME", "R"], ["SHTRK"], ["SLO", "N"]


function findSyllables (word) {
  word = word.toLowerCase();                                     
    word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   
    word = word.replace(/^y/, '');                                  
    const syl = word.match(/[aeiou]{1,2}/g);
    console.log(syl);
    if(syl)
    {
        return syl.length;
    }
}

console.log(findSyllables ("SLON"))
console.log(findSyllables ("AERODROM"))




function Slogovi(word){
  var response = [];
  var isSpecialCase = false;
  var nums = (word.match(/[aeiou]/gi) || []).length;
  if (isSpecialCase == false && (word.match(/[0123456789]/gi) || []).length == word.length ){
      response.push(word);
      isSpecialCase = true;
  }

  if (isSpecialCase == false && word.length < 4){
      response.push(word);
      isSpecialCase = true;
  } 

  if (isSpecialCase == false && word.charAt(word.length-1) == "e"){
      if (isVowel(word.charAt(word.length-2)) == false){
          var cnt = (word.match(/[aeiou]/gi) || []).length;
          if (cnt == 3){
              if (hasDoubleVowels(word)){
                  response.push(word);
                  isSpecialCase = true;
              }
          }
          if (cnt == 2){
              if (hasRecurringConsonant(word) == false) {
              response.push(word);
              isSpecialCase = true;
              }

          }                    
      }
  }

  if (isSpecialCase == false){
      const syllableRegex = /[^aeiou]*[aeiou]+(?:[^aeiou]*$|[^aeiou](?=[^aeiou]))?/gi;
      response = word.match(syllableRegex);
  }

  return response;
} 

console.log(Slogovi("AERODROM"))
console.log(Slogovi("PRIMER"))

