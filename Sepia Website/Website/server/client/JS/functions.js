function createHTMLCard (json){
    let submitJSON = {}
    assignment=json

    submitJSON.assignment = assignment.assignment_name;
    submitJSON.class_description = assignment.class_description;
    submitJSON.class_name = assignment.class_name;
    submitJSON.class_number = assignment.class_number;
    submitJSON.comments = assignment.comments;
    submitJSON.description = assignment.description;
    submitJSON.due_date = assignment.due_date;
    if (assignment.file_location === '')
        submitJSON.file_location = '../Images/kittyIcon.png';
    else
    submitJSON.file_location = '../uploads/' + assignment.file_location;
    submitJSON.hyperlink = assignment.hyperlink;    
    submitJSON.id = assignment.id;
    submitJSON.teacher = assignment.teacher;   
    submitJSON.email = assignment.email; 
    if (assignment.file_height > assignment.file_width){ //Tall instead of long
        submitJSON.dimensions = 'width:' +(assignment.file_width / assignment.file_height)* 100 + '%; padding-top: 100%;';
    } else if (assignment.file_width > assignment.file_height){ //long instead of tall
        submitJSON.dimensions = 'padding-top' + (assignment.file_height / assignment.file_width)*100 + '%; width: 100%';
    }

    let cardTemplate =  
        "<div class = 'row col-md-8 offset-md-2'>" + 
            "<div class = 'assignment-bg' id ='card-template' style = 'animation-delay: 0.33s'>"+
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
                                "<a href = 'mailto:"+submitJSON.email+"'<h2 title = '"+submitJSON.class_description+"'>"+submitJSON.teacher+" - "+submitJSON.class_number+"</h2>"+
                            "</div>"+
                            "<div class = 'justify-content-center' id = 'duedate-display'>"+
                                "<h4>"+submitJSON.due_date+"</h4>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                
                "<div class = 'row'>"+
                    "<div class = 'col-12 card-border'>"+
                        "<h4 title = '"+submitJSON.comments+"'>"+submitJSON.description+"</h4>" +
                    "</div>"+
                    "<br>"+
                "</div>"+
                "<br>"+
            "</div>"+
        "</div>"+
        "<br>"
    return cardTemplate;
}

function getHTMLValues(formData, APImethod){
    if (document.querySelector("input[name='name']").value.length >=2)
        formData.append('name', document.querySelector("input[name='name']").value);
    if (document.getElementById('course').value.length !== 0)
        formData.append('course', document.getElementById('course').value);
    if(document.querySelector("input[name='duedate']").value.length !==0)
        formData.append('duedate', document.querySelector("input[name='duedate']").value);
    if (document.getElementById('description').value.length >=2)
        formData.append('description', document.getElementById('description').value)
    if (document.getElementById('comments').value.length >=1)
        formData.append('comments', document.getElementById('comments').value);
    formData.append('file', document.querySelector("input[name='file']").files[0])
    formData.append('filewidth', fileWidth);
    formData.append('fileheight', fileHeight);
    formData.append('hyperlink', document.querySelector("input[name='hyperlink']").value);

    let fetchSettings = {
        method: APImethod,
        body: formData
    };
    return fetchSettings;
}

function getFilterValues(category){
    if (document.getElementById(category).value !== null) 
        parametersObject[category] = document.getElementById(category).value;
    if (category = 'limit')
        parametersObject["limit"] = document.getElementById('limit').checked
    displayCards();
}
//Submit
function confirm() { 
    let buttonArea = document.getElementById('buttons');
    let newButton = document.createElement('div');

    newButton.classList.add('col', 'delete')
    newButton.id = 'confirmation';
    newButton.innerHTML = "<button id = 'confirm' name = 'confirm' onclick='newTab()' class = 'btn btn-block enter'>Confirm</button>"

    buttonArea.appendChild(newButton);
    document.getElementById('submittion-reset').innerHTML = "<button id ='reset' type= 'reset' onclick = 'statusQuo()' class = 'btn btn-block delete'>Reset</button>";
}

function statusQuo(){
    document.getElementById('name').value ='';
    document.getElementById('course').value ='';
    document.getElementById('duedate').value ='';
    document.getElementById('description').value ='';
    document.getElementById('comments').value = '';
    document.getElementById('hyperlink').value ='';
    document.getElementById('submittion-reset').innerHTML = "<button id='submit' name = 'submit' onclick='confirm()' class = 'btn btn-block enter' >Add Assignment</button>";
    document.getElementById('confirmation').remove();

    errorBanner.hidden = true;
    for (htmlElement of errorMessages) {
        htmlElement.innerHTML = '&nbsp;';
    }
}

function getFileDimensions(target){
    let fileUploaded = target.files[0];
    let fileTypes = [
        "image/png",
        "image/jpeg",
        "image/gif",
    ];
    
    if (!fileTypes.includes(fileUploaded.type)){
        return;
    }
    let reader = new FileReader();

    //Read the contents of Image File.
    reader.readAsDataURL(target.files[0]);
    reader.onload = function (e) {
        
        document.getElementById('iframe-display').setAttribute('src', e.target.result);
        //Initiate the JavaScript Image object.
        let image = new Image();

        //Set the Base64 string return from FileReader as source.
        image.src = e.target.result;

        //Validate the File Height and Width.
        image.onload = function (e) {
            fileHeight = this.height;
            fileWidth = this.width;
            
        };
    };
    
}