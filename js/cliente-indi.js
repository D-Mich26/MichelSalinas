const apiUrl = "https://reqres.in/api/users/2"

function maekCard(character){
    const { avatar, first_name, last_name, email} = character;
    const listContainer = document.querySelector(".list-container");

    const title = document.createElement("h2");
    title.textContent = first_name + " " + last_name;

    const characterStatus = document.createElement("p");
    characterStatus.textContent = email;

    const characterImage = document.createElement("img");
    characterImage.src = avatar;

    const Card = document.createElement("div");
    Card.appendChild(title);
    Card.appendChild(characterImage);
    Card.appendChild(characterStatus);
    Card.style.backgroundColor = "red";

    cardsContainer.appendChild(Card);
}

async function getCharacters() {
    try{
        const response = await fetch(apiUrl);
        const {data} = await response.json();
        maekCard(data);
    }   catch(error){
        console.log(error);
    }
}

getCharacters();