//error messages
let errorBanner;
let errorMessages;

let fileHeight;
let fileWidth;

const isEmpty = (obj) => Object.keys(obj).length === 0;

document.addEventListener('DOMContentLoaded', function() {
    errorMessages = document.getElementsByClassName('error-message');
    errorBanner = document.getElementById('submit-error');
    errorBanner.hidden = true;

});

function newTab(){
    const formData = new FormData();
   
    let fetchSettings = getHTMLValues(formData, 'POST');    
    
    fetch("http://localhost/assignments/", fetchSettings)
    .then((response) => {
        return new Promise((resolve) => response.json()
            .then((json) => resolve({
                status: response.status,
                json,
            })
        ));
    })
    .then(({status, json}) => {
        errorBanner.hidden = true;
        for (htmlElement of errorMessages) {
            htmlElement.innerHTML = '&nbsp;';
        }
        switch (status)
            {
                case 400:
                    errorBanner.innerText = 'Your assignment upload has some issues. Please fix them before uploading';
                    errorBanner.hidden = false;
                    for (error of json.errors) {
                        const errorId = error.param + '-error';
                        document.getElementById(errorId).innerHTML = error.msg;
                    }
                    break;
                case 200: 
                    let card;
                    card = createHTMLCard(json.sqlData[0]);
                    
                    document.getElementById('submitPageBG').innerHTML = "<h1> Success, your assignment has been uploaded.</h1><br/><a href = 'Sepia Home.html'><button class = 'btn btn-block exit'>Return home</button></a>";
                    const cardSpot = document.createElement("div");
                    cardSpot.innerHTML = card;
                    document.getElementById("submitPageBG").appendChild(cardSpot);
                    break;
            }            
        })
    .catch(error => {
        console.error('Error:', error);
    });
    return;
}
