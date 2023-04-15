let prepositionList;
let adjectiveList;
let nounList;
let verbList;
let symbolList;
let numberLength = 6;

let randomWord = (wordArray) => wordArray[Math.floor(Math.random() * wordArray.length)];
let randomNumber = () => Math.floor(Math.random()*1_000_000);

fetch("./import/prepositions.json")
    .then(response => response.json())
    .then(data => {
        prepositionList = data;
    });

fetch("./import/adjectives.json")
    .then(response => response.json())
    .then(data => {
        adjectiveList = data;
    });

fetch("./import/nouns.json")
    .then(response => response.json())
    .then(data => {
        nounList = data;
    });

fetch("./import/verbs.json")
    .then(response => response.json())
    .then(data => {
        verbList = data;
    });

fetch("./import/symbols.json")
    .then(response => response.json())
    .then(data => {
        symbolList = data;
    });


function getPass(){
    switch(Math.floor(Math.random() * 6)){
        case 0:
            console.log("0");
            console.log(randomWord(adjectiveList) + randomWord(nounList) + randomWord(prepositionList) + randomWord(nounList) + randomWord(symbolList) + randomNumber());
            break;
        case 1:
            console.log("1");
            console.log(randomWord(verbList) + randomWord(nounList) + randomNumber());
            break;
        case 2:
            console.log("2");
            console.log();
            break;
        case 3:
            console.log("3");
            console.log();
            break;
        case 4:
            console.log("4");
            console.log();
            break;
        case 5:
            console.log("5");
            console.log();
            break;
    }
}