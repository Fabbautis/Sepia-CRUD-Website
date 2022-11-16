const isEmpty = (obj) => Object.keys(obj).length === 0;

const parametersObject = {};
let totalCards = 0;
let animationDelay = 0;
let addingAllCards = true;

function displayCards(){
    let fetchSettings = {
        method: 'GET'
    };

    fetch("http://localhost/assignments/" + (!isEmpty(parametersObject) ? '?' + new URLSearchParams(parametersObject) : ''), fetchSettings)
    .then((response) => {
        return new Promise((resolve) => response.json()
            .then((json) => resolve({
                status: response.status,
                json,
            })
        ));
    })
    .then(({status, json}) => {
        if (200 === status) {
            let submitJSON = {};
            let everyCard = document.getElementById('card-area');
            everyCard.innerHTML = ''
            totalCards = 0;
            for (assignment of json.data) {
                totalCards++;
                let singleCard = document.createElement('div');
                
                submitJSON.assignment = assignment.assignment_name;
                submitJSON.class_description = assignment.class_description;
                submitJSON.class_name = assignment.class_name;
                submitJSON.class_number = assignment.class_number;
                submitJSON.description = assignment.description;
                submitJSON.due_date = assignment.due_date;
                if (assignment.file_location === '')
                    submitJSON.file_location = '../Images/kittyIcon.png';
                else
                
                    submitJSON.file_location = '../uploads/' + assignment.file_location;
                submitJSON.hyperlink = assignment.hyperlink;    
                submitJSON.id = assignment.id;
                submitJSON.teacher = assignment.teacher;
                if (assignment.file_height > assignment.file_width){ //Tall instead of long
                    submitJSON.dimensions = 'width:' +(assignment.file_width / assignment.file_height)* 100 + '%; padding-top: 100%;';
                } else if (assignment.file_width > assignment.file_height){ //long instead of tall
                    submitJSON.dimensions = 'padding-top' + (assignment.file_height / assignment.file_width)*100 + '%; width: 100%';
                }
                submitJSON.timing = 'animation-delay: '+ ((3*totalCards) / json.data.length)+'s';

                let cardTemplate =  
                "<div class = 'row'>" + 
                    "<div class = 'assignment-bg' id ='card-template' style = '"+submitJSON.timing+"'>"+
                        "<div class = 'row'>"+
                            "<div class = 'col' id = 'file-display' class = 'card-border' style = "+submitJSON.dimensions+">"+
                                "<iframe class = 'actual-file' src='"+submitJSON.file_location+"'/></iframe>"+
                            "</div>"+
                            "<div class = 'col assignment-and-teacher-display'>"+
                                "<div class = 'row center align-items-end'>"+
                                    "<div class = 'justify-content-center' id = 'assignment-display'>"+
                                        "<a href ="+submitJSON.hyperlink+"><h1>"+submitJSON.assignment+"</h1></a>"+
                                    "</div>"+ 
                                    "<div class = 'justify-content-center' id = 'teacher-display'>"+
                                        "<h2>"+submitJSON.teacher+" - "+submitJSON.class_number+"</h2>"+
                                    "</div>"+
                                    "<div class = 'justify-content-center' id = 'duedate-display'>"+
                                        "<h4>"+submitJSON.due_date+"</h4>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                        
                        "<div class = 'row'>"+
                            "<div class = 'col-12 card-border'>"+
                                "<h4>"+submitJSON.description+"</h4>" +
                            "</div>"+
                            "<br>"+
                        "</div>"+ 
                            "<br>"+
                        "<div class = 'row justify-content-evenly'>"+
                            "<div class = 'col'>"+
                                "<a href = 'update.html?id="+submitJSON.id+"'>"+
                                    "<button class = 'btn btn-block btn-info enter'>Edit</button>"+
                                "</a>"+
                            "</div>"+
                            "<div class = 'col'>"+
                                "<a href = 'view.html?id="+submitJSON.id+"'>"+
                                    "<button class = 'btn btn-block btn-light exit'>Open Card</button>"+
                                "</a>"+ 
                            "</div>"+
                            "<div class = 'col'>"+
                                "<a href = 'delete.html?id="+submitJSON.id+"'>"+
                                    "<button class = 'btn btn-block btn-danger delete'>Delete</button>"+
                                "</a>"+
                            "</div>"+
                        "</div>"+
                        "<br>"+
                    "</div>"+
                "</div>"+
                "<br>"

                singleCard.innerHTML = cardTemplate;
                //replace button with cardView stuff
                everyCard.appendChild(singleCard);

                submitJSON.length = 0;
                cardTemplate = '';
            }
            document.getElementById('total-cards').innerHTML = ('Total assignments listed: '+ totalCards);
            if (totalCards == 0){
                everyCard.innerHTML = '<div class = "row justify-content-center"><h3 class = "text-center">lmao add some stuff here idiot</h3></div>'
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}

displayCards();
