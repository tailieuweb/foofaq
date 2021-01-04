/**
 * Module dependencies
 */
const fs = require('fs');
const path = require('path');

/**
 * Create a directory if not defined
 * @param {string} dirPath directory path parent
 * @param {string} dirName directory name to find
 * @param {function} cb function callback
 */
function createDirIfIsNotDefined(dirPath, dirName, cb) {
    if (!fs.existsSync(dirPath + '/' + dirName)) {
        fs.mkdirSync(dirPath + '/' + dirName);
    }

    cb();
}

/**
 * Write a file
 * @param {string} path file path to write
 * @param {string} contents file contents to write
 * @param {int} mode write mode
 * @param {function} cb callback
 */
function writeFile(path, contents, mode, cb) {
    fs.writeFile(path, contents, { mode: mode || 0666, encoding: 'utf8' }, function (err) {
        if (err) { throw err; }
        cb();
    });
}

/**
 * Load a template
 * @param {string} name template name
 * @returns {string} template contents
 */
function loadTemplateSync(name) {
    return fs.readFileSync(path.join(__dirname, '..', 'templates', name), 'utf8');
}

/**
 * delete a directory if defined
 * @param {string} dirPath directory path parent
 * @param {string} dirName directory name to find
 * @param {function} cb function callback
 */
function checkFileIfIsDefined(dirPath, dirName, modelName, cb) {
    if (fs.existsSync(dirPath + '/' + dirName) && fs.existsSync(dirPath + '/' + dirName + '/' + modelName + ".js")) {
        cb();
    }else{
        console.log("File " + dirPath + dirName + "/" + modelName + ".js" +" not found");
    }
}

function deleteFile(path){
    try{
        fs.unlink(path, function(){
            console.log(`File ${path} is deleted`);
        });
        
    }catch(e){
        console.log(e);
    }
}
module.exports = {
    createDirIfIsNotDefined: createDirIfIsNotDefined,
    writeFile: writeFile,
    loadTemplateSync: loadTemplateSync,
    checkFileIfIsDefined: checkFileIfIsDefined,
    deleteFile: deleteFile
};
