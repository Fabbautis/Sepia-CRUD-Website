const { param } = require('express/lib/request');
const { type } = require('express/lib/response');
const connection = require('./connection');

async function getAnCard(card){
    let selectSql = `SELECT 
        M.assignment_name, M.due_date, M.description, M.comments, M.file_location, M.hyperlink, M.file_height, M.file_width, M.id, M.course_id, c.teacher_id,
        c.class_number, c.class_name, 
        t.teacher, t.email, t.class_description, t.class_comments
        FROM sepia_uploaded_cards M
        INNER JOIN sepia_classes c ON M.course_id = c.id
        INNER JOIN sepia_teachers t ON c.teacher_id = t.id`

        whereStatements = [],
        queryParameters = [];

    if (typeof card !== 'undefined'){
        whereStatements.push("M.id = ?");
        queryParameters.push(card);
    }

    if (whereStatements.length > 0) {
        selectSql = selectSql + ' WHERE ' + whereStatements.join(' AND ');
    }

    return await connection.sqlConnection(selectSql, queryParameters);
}

async function getAllCards(parameters = {}) {
    let selectSql = `SELECT 
        M.assignment_name, M.due_date, M.description, M.comments, M.file_location, M.hyperlink, M.file_height, M.file_width, M.id, M.course_id, c.teacher_id,
        c.class_number, c.class_name, 
        t.teacher, t.email, t.class_description, t.class_comments
        FROM sepia_uploaded_cards M
        INNER JOIN sepia_classes c ON M.course_id = c.id
        INNER JOIN sepia_teachers t ON c.teacher_id = t.id`

    whereStatements = [],
    orderByStatements = [],
    limitStatements = [],
    queryParameters = [];
    
    if (typeof parameters.course !== 'undefined' && parameters.course.length > 0) {
        const course = parameters.course;
        whereStatements.push("c.id = ?");
        queryParameters.push(course);
    }

    if (typeof parameters.name !== 'undefined' && parameters.name.length > 0) {
        const assignmentName = parameters.name;
        whereStatements.push('M.assignment_name LIKE ?'); 
        queryParameters.push('%' + assignmentName + '%')
    }

    if (typeof parameters.description !== 'undefined' && parameters.description.length > 0) {
        const description = parameters.description;
        whereStatements.push('M.description LIKE ?'); 
        queryParameters.push('%' + description + '%')
    }

    if (typeof parameters.duedate !== 'undefined') {
        const sort = parameters.duedate;
        if (sort === "ASC") {
            orderByStatements.push('M.due_date ASC');
        } else if (sort === "DESC") {
            orderByStatements.push('M.due_date DESC')
        }
    }

    if (typeof parameters.limit !== 'undefined' && parameters.limit === 'true') { //if this is checked off, do code
        limitStatements.push(' LIMIT 1 '); 
    }

    //Dynamically add WHERE expressions to SELECT statements if needed
    if (whereStatements.length > 0) {
        selectSql = selectSql + ' WHERE ' + whereStatements.join(' AND ');
    }

    //Dynamically add ORDER BY expressions to SELECT statements if needed
    if (orderByStatements.length > 0) {
        selectSql = selectSql + ' ORDER BY ' + orderByStatements.join(', ');
    }

    if (limitStatements.length > 0){
        selectSql = selectSql + limitStatements
    }
    return await connection.sqlConnection(selectSql, queryParameters);
}

async function addNewCard(params = {}, file) {
    console.log(params);
    let fileNameVar;
    if (file == undefined)
        fileNameVar = '';
    else 
        fileNameVar = file.filename;

    const createNewCard =   `INSERT INTO sepia_uploaded_cards
        (assignment_name, course_id, due_date, description, comments, file_location, hyperlink, file_height, file_width)
        VALUES (?,?,?,?,?,?,?,?,?);`

    let queryParameters = [
        params.name,
        params.course,
        params.duedate,
        params.description,
        params.comments,
        fileNameVar,
        params.hyperlink,
        params.fileheight,
        params.filewidth,
    ];

    let result =  await connection.sqlConnection(createNewCard, queryParameters);
    return result.insertId;
}

async function updateAnCard (parameters = {}, id, file){
    let fileNameVar;

    if (file == undefined)
        fileNameVar = '';
    else 
        fileNameVar = file.filename;

    let updateStatement = 'UPDATE sepia_uploaded_cards SET assignment_name = ?, course_id = ?, due_date = ?, description = ?, comments = ?, file_location = ?, hyperlink = ? WHERE id =' + id;

    let queryParameters =   
                        [
                            parameters.name,
                            parameters.course,
                            parameters.duedate,
                            parameters.description,
                            parameters.comments,
                            fileNameVar,
                            parameters.hyperlink
                        ];

    return await connection.sqlConnection(updateStatement, queryParameters);
}

async function deleteAnCard (params = {}){
    let deleteStatement = 'DELETE FROM sepia_uploaded_cards WHERE id = ?';
    let query = [
        params.death
    ];
    return await connection.sqlConnection(deleteStatement, query);
}

module.exports = {
    getAllCards,
    getAnCard,
    addNewCard,
    updateAnCard,
    deleteAnCard,
}