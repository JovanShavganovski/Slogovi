// Da napise funkcija koja presmetuva plostina na pravoagolnik

const rectangle = {
  width: 20,
  height: 30,
}

// definicija na f-ja
function calculateArea (shape) {
  return shape.width * shape.height
}

// povik na f-jata
const area = calculateArea(rectangle)

console.log(`Plostinata e: ${area}`)

// Da se napise funkcija koja ke presetuva kolku vkupno poeni
// osvoil nekoj sportski tim
// Sportskiot tim e objekt vo koj sto imate broj na porazi,
// broj na pobedeni i broj na neresheni natprevari
// Za sekoja pobedena timot dobiva 3 poeni, za nereshena 1, a za izgubena -1

const team = {
  wins: 3,
  losses: 4,
  draws: 2
}

// definicija na f-jata
function totalPoints (team) {
  const { wins, losses, draws } = team
  return wins*3 + losses*-1 + draws
}

// povik na f-jata
console.log(`Timot ima osvoeno: ${totalPoints(team)} poeni`)

// Imame torta. Tortata ima odreden broj na parcinja.
// Da se napise funkcija sto ke presmeta dali tortata moze podednakvo
// da se podeli na odreden broj na lugje, taka sto sekoj ke dobie ist
// broj na pracinja.
// Brojot na parcinja i brojot na lugje se parametri na funkcijata

function isItDivisible (nbSlices, nbPeople) {
  if (isNaN(nbSlices) || isNaN(nbPeople) || nbSlices < 1 || nbPeople < 1) {
    return 'Parameters must be valid numbers'
  }
  return (nbSlices % nbPeople === 0)
}

console.log(isItDivisible(10, 4))

// Se vozite vo taksi. Prviot kilometar ve kosta 50 denari,
// a sekoj nareden kosta 20.
// Znaete deka patuvanjeto od zurka do doma ve kostalo 300 denari. 
// Da se napise funkcija koja sto ke presmeta kolku kilometri ste izminale

function calculateKilometers (price) {
  const start = 50
  const next = 20
  let kilometers = 0

  if (price > 50) {
    kilometers = 1
  }

  const remainingPrice = price - start
  const remainingKilometers = remainingPrice / next

  kilometers += remainingKilometers

  return kilometers

}

console.log(calculateKilometers(300))

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

console.log(findSyllables ("otorinolaringolog"))




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

