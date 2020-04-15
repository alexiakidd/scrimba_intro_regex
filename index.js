
//1- Usando the test method
/*
let sentence = "The dog chased the cat."
let regex = /the/ 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
console.log(result);
*/


//2- Combinar strings literais
/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; //case sensitive
let result = waldoRegex.test(waldoIsHiding);
console.log(result);
*/


//3- Combinar uma string literal com diferentes possibilidades
/* 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result);
*/

//4- Ignorar o case sensitive enquanto combina
/*
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; //i é a flag pra ignorar
let result = fccRegex.test(myString);
console.log(result);
*/

//5- Extrair combinações

/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
console.log(result);
*/

//6- Encontrar mais combinações além da primeira
/*
let testStr = "Repeat, Repeat, Repeat";
let outRegex = /Repeat/g; // g é a flag para combinar mais combinações que houver
console.log(testStr.match(outRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; //é possivel usar duas flags ao mesmo tempo
let result = twinkleStar.match(starRegex);
console.log(result);
*/

//7- Combinar qualquer coisa com um valor coringa
/*let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; //qualquer palavra que comece com hu, como: hug, hub,hum...
console.log(humStr.match(huRegex));
console.log(hugStr.match(huRegex));

let exampStr = "Let's have fun with regular expressions";
let unRegex = /.un/; //qualquer palavra que tenha un no final como: fun, pun, sun...
console.log(unRegex.test(exampStr));
*/


//8- Combine um unico caracter com multiplas possibilidades
/*combinação de um grupo predefinido pra encontrar em toda a string por exemplo, usar as
vogais como grupo e encontrar todas as vogais na string*/
/*
let bgRegex = /b[aiu]g/g; //palavras que comecem com b e podem ter aiu em seguida e terminar com g
let quote = "Beware of bugs in the above codee; My bag of codes is full of them";
console.log(quote.match(bgRegex));


let quoteSample = "Beware of bugs in the above code. I have only proved it correct, not tried it";
let vowelRegex = /[aeiou]/ig; // todas as vogais da frase
console.log(quoteSample.match(vowelRegex));
*/

//9- Combinar letras do alfabeto
/*
let quoteSample = "The quick brown fox jumps over the lazy dog";
let alphabetRegex = /[a-z]/ig; //toda cadeia de caracteres do alfabeto
let result = quoteSample.match(alphabetRegex);
console.log(result);
*/

//10- Combinar numeros e letras do alfabeto. Uma cadeia de numeros e de letras
/*
let quoteSample = "Blueberry 3.141592653s are delicious."
let myRegex = /[2-6h-s]/ig; // range de numeros de 2 a 6, e range de letras de h até s.
let result = quoteSample.match(myRegex);
console.log(result);
*/

//11- Selecionar valores para nao combinar
/*
let quoteSample = "3 blind mice."
let myRegex = /[^0-9aeiou]/ig;//numeros de 0 a 9, e as vogais vao ser excluidas da combinação
let result = quoteSample.match(myRegex);
console.log(result);
*/

//12- Combinar caracteres que aparecem 1 ou mais vezes
/*
let difficultSpelling = "Mississippi and Alessandra sand";
let myRegex = /s+/g; //1 ocorrencia de 's' ou mais um seguido do outro
result = difficultSpelling.match(myRegex);
console.log(result);
*/

//13- Combinar caracteres que aparecem 0 ou mais vezes

//let soccerWord = "gooooooooal!";
//let gPhrase = "gut feeling";
//let oPhrase = "over the moon";
//let goRegex = /go*/; //combina 'g' e 'o' zero ou mais vezes
//console.log(soccerWord.match(goRegex));
//console.log(gPhrase.match(goRegex));
//console.log(oPhrase.match(goRegex));

//let chewieQuote = "Aaaaaaaaaaarrrgh";
//let chewieRegex = /Aa*/;
//console.log(chewieQuote.match(chewieRegex));


//14- Greedy e Lazy matching
/*
let string = "titanic";
let regex = /t[a-z]*i/; //* - zero ou mais ocorrencias
let regexLazy = /t[a-z]*?i/; //lazy - so combina o minimo de vezes possivel
//console.log(string.match(regex));
//console.log(string.match(regexLazy));


let text = "<h1>Winter is<h1> coming<h1>";
let myRegex = /<.*>/;//Greedy matching - combina o maximo de vezes possivel
let myLazyRegex = /<.*?>/;//lazy
console.log(text.match(myRegex));
console.log(text.match(myLazyRegex));
*/

//15- Combinar padrão de strings no começo da string
/*
let rickyAndCal = "Cal and Ricky both like racing";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);
console.log(result);//true
*/

//16- Combinar um padrão de strings no final da string
/*
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
console.log(result);
*/

//17- Combinar todas as letras e numeros(sem os espacos)
/*
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);
*/

//18- Combinar tudo menos letras e numeros (combinar os espacos e pontos)
/*
let quoteSample = "The five boxing wizards jump quickly.";
let nonalphabetRegex = /\W/g;
let result = quoteSample.match(nonalphabetRegex).length;
console.log(result);
*/

//19- Combinar todos os numeros
/*
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;
console.log(numString.match(numRegex));
console.log(result);
*/

//20- Combinar todos nao-numeros
/*
let numString = "Your sandwich will be $5.00";
let numRegex = /\D/g;
let result = numString.match(numRegex).length;
console.log(numString.match(numRegex));
console.log(result);
*/

//21- Restringir possiveis usernames

/* Requisitos pra validação do username
1) Se há numeros, devem ficar no final. -- \d*$
2) Letras podem ser maiusculas ou minusculas -- ^[A-Za-z]
3) Username precisa ter no minimo 2 caracteres. Nomes assim não podem conter numeros. --{2,}
*/
/* 
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; 
//{2,} {numero de vezes que as letras anteriores podem repetir,quantidade de caracteres devem ter o usename}

let result = userCheck.test(username);
console.log(result);
*/


//22- Combinar espaços em branco
/*
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
console.log(result);
*/

//23- Combinar caracteres que nao são espaços em branco
/*
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\S/g;
let result = sample.match(countWhiteSpace);
console.log(result);
*/

//24- Especificar a menor e a maior combinação de um padrao com especificadores de quantidade
/*
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;//encontrar qualquer oh no com 3 até 6 'h'
let result = ohRegex.test(ohStr);
console.log(result);
*/


//25 - Especificar somente o menor numero de combinações
/*
let haStr = "Hazzzzzzzzah";
let haRegex = /z{4,}/g;// pelo menos 4 ou mais da letra 'z'
let result = haRegex.test(haStr);
console.log(result);
*/


//26- Especificar o numero exato de combinações
/*
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; //quiser saber se tem exatamente 4 combinações de 'm'
let result = timRegex.test(timStr);
console.log(result);
*/

//27- Checar para tudo ou nada
/*
let favWord = "favorite";
let favRegex = /favou?rite/; //na combinação pode ter um 'u' ou pode nao ter, mas todo resto tem que ser igual
let result = favRegex.test(favWord);
console.log(result);
*/

//28 - Pesquisa correspondência em 'x' apenas se 'x' é seguido por 'y'.(POSITIVE/NEGATIVE LOOKAHEAD)
/*
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;//positivo
let qtRegex = /q(?!u)/;//negativo
quit.match(quRegex);// retorna "q"
noquit.match(qtRegex); //retorna "q"


let sampleWord = "astronaut";
let pwRegex = /(?=\w{5}) (?=\D*\d{2})/; //palavras com pelo menos 5 caracteres e 2 digitos consecutivos
let result = pwRegex.test(sampleWord);
console.log(result);
*/

//29 - Reutilizar padroes usando Capture Groups
/*
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\2/; ///(\w+) - 1 group   //\s - space  // \1/ - repeat 1 time the group 1
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

//um grupo com so tres 42 in a row
let repeatNum = "42 42 42"; 
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);
*/


//30 - Usar Capture Groups para buscar e substituir
/*
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
let result = wrongText.replace(silverRegex,"blue"); //method replace
console.log(result);

let resultado = "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');//$2 - second capture group $1 - 1ºcapt. group e inverteu a ordem
console.log(resultado);


let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result1 = huhText.replace(fixRegex, replaceText);
console.log(result1);
*/


//31- Remove Whitespace from start and end
/*
let hello = "   Hello, World!   ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex,'');
console.log(result);
*/


