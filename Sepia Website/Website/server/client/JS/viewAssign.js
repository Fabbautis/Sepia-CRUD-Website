const isEmpty = (obj) => Object.keys(obj).length === 0;

const queryString = window.location.search;
let params = new URLSearchParams(queryString);
const id = params.get('id')



let submitJSON = {};
window.onload = function () {

fetch("http://localhost/assignments/"+id +"", {method: 'GET'})
    .then((response) => {
        return new Promise((resolve) => response.json()
            .then((json) => resolve({
                status: response.status,
                json,
            })
        ));
    })
    .then(({status, json}) => {
        let card;
        if (200 === status) {
            card = createHTMLCard(json.data[0]);
        }
        let viewCardHTML = document.getElementById('card_area')
        let viewCardArea = document.createElement('div');

        viewCardArea.innerHTML = card;
        viewCardHTML.appendChild(viewCardArea);
       
    })
   .catch(error => {
        console.error('Error:', error);
    });
}