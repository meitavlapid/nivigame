const characters = [
    { name: 'cat', top: 'img/catup.png', bottom: 'img/catdown.png', full: 'img/cat1.png' },
    { name: 'dog', top: 'img/dogup.png', bottom: 'img/dogdown.png', full: 'img/dog1.png' },
    { name: 'Elsa', top: 'img/Elsaup.png', bottom: 'img/Elsadown.png', full: 'img/Elsa1.png' },
    { name: 'Olaf', top: 'img/Olafup.png', bottom: 'img/Olafdwn.png', full: 'img/Olaf1.png' },
    { name: 'princess', top: 'img/princessup.png', bottom: 'img/princessdown.png', full: 'img/princess1.png' },
    { name: 'rabbit', top: 'img/rabbitup.png', bottom: 'img/rabbitdown.png', full: 'img/rabbit1.png' },
    { name: 'dino', top: 'img/dinoup.png', bottom: 'img/dinodown.png', full: 'img/dino1.png' }
];

let currentCharacter;

function startGame() {
    currentCharacter = characters[Math.floor(Math.random() * characters.length)];
    document.getElementById("current-part").src = currentCharacter.top;

    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = "";

    const shuffledOptions = [...characters].sort(() => 0.5 - Math.random());
    shuffledOptions.slice(0, 2).forEach(character => {
        const optionImg = document.createElement("img");
        optionImg.classList.add("character-part", "option");
        optionImg.src = character.bottom;
        optionImg.alt = character.name;
        optionImg.onclick = () => checkAnswer(character.name);
        optionsContainer.appendChild(optionImg);
    });

    const correctOption = document.createElement("img");
    correctOption.classList.add("character-part", "option");
    correctOption.src = currentCharacter.bottom;
    correctOption.alt = currentCharacter.name;
    correctOption.onclick = () => checkAnswer(currentCharacter.name);
    optionsContainer.appendChild(correctOption);

    Array.from(optionsContainer.children)
        .sort(() => Math.random() - 0.5)
        .forEach(option => optionsContainer.appendChild(option));

    document.getElementById("message").textContent = "";
    document.getElementById("full-character-container").style.display = "none";
    console.log("משחק התחיל עם דמות:", currentCharacter.name);
}

function checkAnswer(selectedCharacter) {
    const messageElement = document.getElementById("message");
    if (selectedCharacter === currentCharacter.name) {
        messageElement.textContent = "כל הכבוד! השלמת את הדמות.";

        const fullCharacterContainer = document.getElementById("full-character-container");
        const fullCharacterImg = document.getElementById("full-character");
        fullCharacterImg.src = currentCharacter.full;
        fullCharacterContainer.style.display = "flex";

        setTimeout(() => {
            fullCharacterContainer.style.display = "none";
            startGame();
        }, 3000);
    } else {
        messageElement.textContent = "נסה שוב!";
    }
}

startGame();
