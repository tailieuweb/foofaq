const Joi = require('@hapi/joi');


//check create question
const createValidation = data => {
    const schema = {
        title: Joi.string().min(6).required(),
        content: Joi.string().required()
    };
    return Joi.validate(data,schema);
}

// check edit question
const editValidation = data => {
    const schema = {
        title: Joi.string().min(6).required(),
        content: Joi.string().required()
    };
    return Joi.validate(data,schema);
}
module.exports.createValidation = createValidation;
module.exports.editValidation = editValidation;