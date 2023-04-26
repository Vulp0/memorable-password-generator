//Beware, this file contains severe amounts of brain damage. But it works tho.


let pswrd, prepositionList, adjectiveList, nounList, verbList, symbolList, questionList;
let numberLength = 6;


let resultText = document.querySelector("#password");
let generateButton = document.querySelector("#generateButton");
generateButton.addEventListener("click", getPass);

let copyButton = document.querySelector("#copyButton");
copyButton.addEventListener("click", copyText);


let capsCheck = document.querySelector("#capsCheck");
let randomCapsCheck = document.querySelector("#randomCapsCheck");
let symCheck = document.querySelector("#symCheck");


let sliderValue = document.querySelector("#sliderValue");
let inputSlider = document.querySelector("#inputSlider");

inputSlider.addEventListener("input", (event) => {
    sliderValue.textContent = event.target.value;
});

let randomWord = (wordArray) => wordArray[Math.floor(Math.random() * wordArray.length)];
let randomNumber = () => Math.floor(Math.random()*100_000); //placeholder

let checkSymb = (checkbox, symbList, getRandom) => checkbox.checked ? getRandom(symbList) : "";

let flip = () => parseInt(Math.random()*10) % 2 == 0 ? true : false;
let capitalize = (text) => text[0].toUpperCase()+text.slice(1);

function handleCaps(wordList){
    let word = randomWord(wordList);
    let newWord = "";

    if(randomCapsCheck.checked){
        for(let i = 0; i < word.length; i++){
            flip() ? newWord += word[i].toUpperCase() : newWord += word[i];
        }
    } else {
        newWord = word;
    }

    if(capsCheck.checked){
        newWord = capitalize(newWord);
    }

    return newWord;
}

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

function copyText(){
    navigator.clipboard.writeText(resultText.innerHTML);
}

function displayPassword(password){
    resultText.innerHTML = password;
    resultText.style.color = "white";
}


function getPass(){
    switch(Math.floor(Math.random() * 6)){
        case 0:
            //frothylistbelowfuneral*65820
            pswrd = handleCaps(adjectiveList) + handleCaps(nounList) + handleCaps(prepositionList) + handleCaps(nounList) + checkSymb(symCheck, symbolList, randomWord) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
        case 1:
            //bounceyear54920
            pswrd = handleCaps(verbList) + handleCaps(nounList) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
        case 2:
            //irealizepassenger!perception92527
            pswrd = "i" + handleCaps(verbList) + handleCaps(nounList) + checkSymb(symCheck, symbolList, randomWord) + handleCaps(nounList) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
        case 3:
            //gaudystress57636
            pswrd = handleCaps(adjectiveList) + handleCaps(nounList) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
        case 4:
            //specifytheconceptas@post34345
            pswrd = handleCaps(verbList) + "the" + handleCaps(nounList) + handleCaps(prepositionList) + checkSymb(symCheck, symbolList, randomWord) + handleCaps(nounList) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
    }
}