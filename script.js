const grapPlek = document.getElementById('grapP');
const grapKnop = document.getElementById('nieuwe-grap');
const grapdiv = document.querySelector('.grap');
const apiUrl = 'https://v2.jokeapi.dev/joke/Any?type=single';



grapKnop.addEventListener('click', async e => {

    try {
        // fetchGrap() aanroepen, grap ophalen, doorgeven aan displayGrap()
        /*const grap = */await fetchGrap();

    } catch (error) {
        console.error(error);
    }
});

async function fetchGrap() {


    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Kon grap niet ophalen");
    }

    const data = await response.json();
    displayGrap(data.joke);
}

function displayGrap(grap) {
    grapPlek.innerText = grap;
}