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
// sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", (event) => {
    sliderValue.textContent = event.target.value;
});

let randomWord = (wordArray) => wordArray[Math.floor(Math.random() * wordArray.length)];
let randomNumber = () => Math.floor(Math.random()*100_000); //placeholder
let checkIt = (checkbox, list, getRandom) => checkbox.checked ? getRandom(list) : "";
//uhhh(symCheck, symbolList, randomWord);

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
            pswrd = randomWord(adjectiveList) + randomWord(nounList) + randomWord(prepositionList) + randomWord(nounList) + checkIt(symCheck, symbolList, randomWord) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
        case 1:
            //bounceyear54920
            pswrd = randomWord(verbList) + randomWord(nounList) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
        case 2:
            //irealizepassenger!perception92527
            pswrd = "i" + randomWord(verbList) + randomWord(nounList) + checkIt(symCheck, symbolList, randomWord) + randomWord(nounList) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
        case 3:
            //gaudystress57636
            pswrd = randomWord(adjectiveList) + randomWord(nounList) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
        case 4:
            //specifytheconceptas@post34345
            pswrd = randomWord(verbList) + "the" + randomWord(nounList) + randomWord(prepositionList) + checkIt(symCheck, symbolList, randomWord) + randomWord(nounList) + (inputSlider.value > 0 ? randomNumber() : "");
            displayPassword(pswrd);
            break;
    }
}