const path = require('path');
const express = require('express');
const multer  = require('multer');
const serverInternal = require('./Models/serverInternal');
const cors = require('cors');

const { check, checkSchema, validationResult } = require('express-validator'); 
const { application } = require('express');//Do I need this?
const { type } = require('express/lib/response');
const { del } = require('express/lib/application');
const app = express();
app.use(express.static('client'));
app.use(cors());

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, 'client/uploads/')
    },
    filename: function (request, file, callback) {
      callback(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({ 
    storage: storage,
    fileFilter: (request, file, callback) => {
        const allowedFileMimeTypes = ["image/png", "image/jpeg", "image/gif", "application/pdf"];
        callback(null, allowedFileMimeTypes.includes(file.mimetype)); 
    }
});
const port = 80;


app.get(
    '/assignments/', 
    upload.none(), 
    async (request, response) => {
        let result = {};
        try {
            result = await serverInternal.getAllCards(request.query);
        } catch (error) {
            console.log(error);
            return response
                .status(500)
                .json({message: 'Something went wrong with the server.'});
        }
        response
            .status(200)
            .json({'data': result});
});

app.get(
    '/assignments/:id/',
    upload.none(),
    async (request,response) => {
    try {
        result = await serverInternal.getAnCard(request.params.id);
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({message: 'Something went wrong with the server.'});
    }
    response
        .status(200)
        .json({'data': result});
    }
);

app.post(
    '/assignments/', 
    upload.fields([{name: 'file', maxCount: 1}]),
    check('name', 'Please input the assignment name').isLength(2),
    check('course', 'Please choose a valid course from the list').isInt({min:1, max:5}),
    check('duedate', 'Please input a valid date').isDate(),
    check('description', 'Please input a valid description').isLength(1), 
    check('comments', 'Please stop trying to hack my website').isLength(1), 
    check('hyperlink', 'Please put in the appropiate link').isURL(),
    checkSchema({ 
        'file': {
            custom: {
                options: (value, {req, path}) => !!req.files[path],
                errorMessage: 'Please upload an image file.',
            },
        },
    }),
    async (request, response) => {
        const errors = validationResult(request);
        let add;
        let display;
        if (!errors.isEmpty()) { 
            return response
                .status(400) 
                .json({
                    message: 'Request fields or files are invalid.',
                    errors: errors.array(),
                });
        }
        
        try {
            add = await serverInternal.addNewCard(request.body, request.files.file[0]);
            display = await serverInternal.getAnCard(add);
        }
        catch (e) {
            console.log(e);
            return response
                .json({message: 'Something went wrong with the server.'});
        }
        response
            .json({sqlData: display});
});

app.put(
    '/assignments/:id/',
    upload.fields([{name: 'file', maxCount: 1}]),
    check('name', 'Please input the assignment name').isLength(2),
    check('course', 'Please choose a valid course from the list').isInt({min:1, max:5}),
    check('duedate', 'Please input a valid date').isDate(),
    check('description', 'Please input a valid description').isLength(1), 
    check('comments', 'Please stop trying to hack my website').isLength(1), 
    check('hyperlink', 'Please put in the appropiate link').isURL(),
    checkSchema({ 
        'file': {
            custom: {
                options: (value, {req, path}) => !!req.files[path],
                errorMessage: 'Please upload an image file.',
            },
        },
    }),

    async (request,response)=>{
        let update;
        let display;
        const errors = validationResult(request);
        if (!errors.isEmpty()) { 
            return response
                .status(400) 
                .json({
                    message: 'Request fields or files are invalid.',
                    errors: errors.array(),
                });
        }
        try {
            update = await serverInternal.updateAnCard(request.body, request.params.id, request.files.file[0]);
            display = await serverInternal.getAnCard(request.params.id);            
        }
        catch (e){
            console.log(e)
            return response
                .status(500)
                .json({message: 'Something went wrong with the server.'});
        }
        response
            .status(200) 
            .json({data: display});//replace this with data you updated   
});

app.delete(
    '/assignments/:id/', 
    upload.none(), 
    async (request,response)=>{
        let remove = {};
        try {
            remove = await serverInternal.deleteAnCard(request.body);
        }
        catch (error){
            console.log(error);
            return response
                .status(500)             
                .json({message: 'Delete statement isn\'t working'});
        }
        response
            .status(200)
            .json({message: 'Successfully deleted'});
    }
);  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
