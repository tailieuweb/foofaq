/**
 * Module dependencies
 */
const ft = require('./fileTools');

var allowedFieldsTypes = {
    'string'  : String,
    'number'  : Number,
    'date'    : Date,
    'boolean' : Boolean,
    'array'   : Array
};

/**
 * Generate a Mongoose model
 * @param {string} path directory model
 * @param {string} modelName name model
 * @param {function} cb function callback
 */
async function generateModel(path, modelName, modelFields, cb) {
    
    var schemaName = modelName[0].toUpperCase() + modelName.substring(1);
    var model = "";
    if(modelFields){
        var fields = getFieldsForModelTemplate(modelFields);
        model = ft.loadTemplateSync('model.js');
        model = model.replace(/{fields}/, fields);
    }else{
        model = ft.loadTemplateSync('modelDefault.js');
    }
    model = model.replace(/{modelName}/g, schemaName);
    model = model.replace(/{schemaName}/g, schemaName  + 'Schema');
    ft.createDirIfIsNotDefined(path, 'models', function () {
        ft.writeFile(path + '/models/' + modelName + '.js', model, null, cb);
        console.log(`Created file models/${modelName}.js`);
    });
}

/**
 * Generate Controller
 * @param {string} path directory controller
 * @param {string} modelName name controller
 * @param {function} cb function callback
 */
async function generateController(path, modelName, modelFields, cb) {

    var updateFields = '';
    var createFields = '\r';

    if(modelFields) {
        var controller = ft.loadTemplateSync('controller.js');
        modelFields.forEach(function (f, index, fields) {
            var field = f.name;
    
            updateFields += '\n\t\t\t' + modelName + '.' + field + ' = req.body.' + field + ' ? req.body.' + field + ' : ' +
                modelName + '.' + field + ',';
    
            createFields += '\t\t\t' + field + ' : req.body.' + field;
            createFields += ((fields.length - 1) > index) ? ',\r' : '\r';
            
        });
        controller = controller.replace(/{updateField}/g, updateFields);
        controller = controller.replace(/{createFields}/g, createFields);
    }else{
        var controller = ft.loadTemplateSync('controllerDefault.js');
    }

    controller = controller.replace(/{modelName}/g, modelName[0].toUpperCase() + modelName.substring(1));
    controller = controller.replace(/{modelPath}/g, '../models/' + modelName + '.js');

    ft.createDirIfIsNotDefined(path, 'controllers', function () {
        ft.writeFile(path + '/controllers/' + modelName + '.js', controller, null, cb);
        console.log(`Created file controllers/${modelName}.js`);
    });
}

/**
 * Generate a Express router
 * @param {string} path directory router
 * @param {string} modelName name router
 * @param {function} cb function callback
 */
async function generateRoute(path, modelName, cb) {

    var route = ft.loadTemplateSync('router.js');
    route = route.replace(/controllerName/g, modelName[0].toUpperCase() + modelName.substring(1));
    route = route.replace(/controllerPath/g, '../controllers/' + modelName + '.js');

    ft.createDirIfIsNotDefined(path, 'routes', function () {
        ft.writeFile(path + '/routes/' + modelName + '.js', route, null, cb);
        console.log(`Created file routes/${modelName}.js`);
    });
}

async function deleteModel(path, modelName, cb){
    ft.checkFileIfIsDefined(path, 'models', modelName, function(){
        ft.deleteFile(path + '/models/' + modelName + '.js');
    });
    ft.checkFileIfIsDefined(path, 'controllers', modelName, function(){
        ft.deleteFile(path + '/controllers/' + modelName + '.js');
    });
    ft.checkFileIfIsDefined(path, 'routes', modelName, function(){
        ft.deleteFile(path + '/routes/' + modelName + '.js');
    });
}

/**
 * Format the fields for the model template
 * @param {array} fields fields input
 * @returns {string} formatted fields
 */
function getFieldsForModelTemplate(fields) {
    var lg = fields.length - 1;

    var modelFields = '{\r';
    fields.forEach(function(field, index, array) {
        modelFields += '\t\'' + field.name + '\' : ' + (allowedFieldsTypes[field.type]).name;
        modelFields += (lg > index) ? ',\r' : '\r';
        if (field.reference) {
            modelFields = modelFields.replace(/{ref}/, field.reference);
        }
    });
    modelFields += '}';

    return modelFields;
}

module.exports = {
    generateModel,
    generateController,
    generateRoute,
    deleteModel
}