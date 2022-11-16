let id;
const isEmpty = (obj) => Object.keys(obj).length === 0;

const queryString = window.location.search
let params = new URLSearchParams(queryString);
const searchId = params.get('id');

let fileHeight;
let fileWidth;

errorMessages = document.getElementsByClassName('error-message');
errorBanner = document.getElementById('update-error');
errorBanner.hidden = true;

document.getElementById('submit').addEventListener('click', (event) => {
   
    const formData = new FormData();
    
    let fetchSettings = getHTMLValues(formData, 'PUT');

    fetch("http://localhost/assignments/"+searchId+"", fetchSettings)
        .then((response) => {
            return new Promise((resolve) => response.json()
                .then((json) => resolve({
                    status: response.status,
                    json,
                })
            ));
        })
        .then(({status, json}) => {

            switch (status){
                case 200:
                    let card;
                    let cardLocation = document.createElement('div');
                    card = createHTMLCard(json.data[0]);

                    document.getElementById('submitPageBG').innerHTML ='<h1>Success, your card has been updated</h1><br/><a href = "Sepia Home.html"><button class = "btn btn-block exit">Return home</button></a>';
                    cardLocation.innerHTML = card;
                    document.getElementById('submitPageBG').appendChild(cardLocation);
                break;
                case 400:
                    formData.length = 0;
                    errorBanner.innerText = 'Your assignment upload has some issues. Please fix them before republishing';
                    errorBanner.hidden = false;
                    for (error of json.errors) {
                        const errorId = error.param + '-error';
                        document.getElementById(errorId).innerHTML = error.msg
                        
                    }
                break;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return;
}); 

fetch("http://localhost/assignments/"+searchId, {method: 'GET'})
    .then((response) => {
        return new Promise((resolve) => response.json()
            .then((json) => resolve({
                status: response.status,
                json,
            })
        ));
    })
    .then(({status, json}) => {
        let assignment=json.data[0];
        if (200 === status) {
            document.getElementById('name').value = assignment.assignment_name;
            document.getElementById('course').value = assignment.course_id;
            document.getElementById('duedate').value = assignment.due_date;
            document.getElementById('description').value = assignment.description;
            document.getElementById('comments').value = assignment.comments;
            document.getElementById('hyperlink').value = assignment.hyperlink;
            document.getElementById('file').value = '';       
            const fileWithDate = assignment.file_location;
            document.getElementById('iframe-display').src = '../uploads/' + fileWithDate;
            if (fileWithDate.includes('.jpg')){
                document.getElementById('current-file').innerText = 'Old file: ' + fileWithDate.split('.jpg')[0] + '.jpg';
            }
            else if (fileWithDate.includes('.png')){
                document.getElementById('current-file').innerText = 'Old file: ' + fileWithDate.split('.png')[0] + '.png';
            }
            else if (fileWithDate.includes('.pdf')){
                document.getElementById('current-file').innerText = 'Old file: ' + fileWithDate.split('.pdf')[0] + '.pdf';
            }
            else {
               document.getElementById('current-file').innerText = 'Old file: ' + fileWithDate;
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
