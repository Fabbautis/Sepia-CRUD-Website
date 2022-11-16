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

        let deleteCardHTML = document.getElementById('card_area')
        let deleteCardArea = document.createElement('div');
        deleteCardArea.innerHTML = card;
        deleteCardHTML.appendChild(deleteCardArea);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    
}

document.getElementById('delete').addEventListener('click', (event) => {
    const formData = new FormData();
    let warning = document.getElementById('warning');
    let card = document.getElementById('card_area'); 
    let deleteButton = document.getElementById('delete-section');

    formData.append('death', id)

    let fetchSettings = {
        method: 'DELETE',
        body:formData
    }

    fetch("http://localhost/assignments/"+id+"", fetchSettings)
    .then((response) => {
        return new Promise((resolve) => response.json()
            .then((json) => resolve({
                status: response.status,
                json,
            })
        ));        
    })
    .then(({status, json}) => {
        if (status == 200) {
            warning.textContent = json.message;
            card.innerHTML = '';
            deleteButton.remove();
        }
    
    })

    .catch(error => {
        console.error('Error:', error);
    });

});
    
