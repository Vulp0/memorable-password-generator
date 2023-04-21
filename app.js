let pswrd;
let prepositionList;
let adjectiveList;
let nounList;
let verbList;
let symbolList;
let questionList;
let numberLength = 6;
let resultText = document.querySelector("#password");

let copyButton = document.querySelector("#copyButton");
copyButton.addEventListener("click", copyText);

let generateButton = document.querySelector("#generateButton");
generateButton.addEventListener("click", getPass);

let sliderValue = document.querySelector("#sliderValue");
let inputSlider = document.querySelector("#inputSlider");
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", (event) => {
    sliderValue.textContent = event.target.value;
});

let randomWord = (wordArray) => wordArray[Math.floor(Math.random() * wordArray.length)];
let randomNumber = () => Math.floor(Math.random()*100_000);

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
            // console.log("0");
            pswrd = randomWord(adjectiveList) + randomWord(nounList) + randomWord(prepositionList) + randomWord(nounList) + randomWord(symbolList) + randomNumber();
            displayPassword(pswrd);
            break;
        case 1:
            // console.log("1");
            pswrd = randomWord(verbList) + randomWord(nounList) + randomNumber();
            displayPassword(pswrd);
            break;
        case 2:
            // console.log("2");
            pswrd = "i" + randomWord(verbList) + randomWord(nounList) + randomWord(symbolList) + randomWord(nounList) + randomNumber();
            displayPassword(pswrd);
            break;
        case 3:
            // console.log("3");
            pswrd = randomWord(adjectiveList) + randomWord(nounList) + randomNumber();
            displayPassword(pswrd);
            break;
        case 4:
            // console.log("4");
            pswrd = randomWord(verbList) + "the" + randomWord(nounList) + randomWord(prepositionList) + randomWord(symbolList) + randomWord(nounList) + randomNumber();
            displayPassword(pswrd);
            break;
    }
}