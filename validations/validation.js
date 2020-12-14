const { check } = require('express-validator');

const validateCreteQuestion = () => {
    return [
        check('title','Title does not empty').not().isEmpty(),
        check('title','Title more than 6 characters').isLength({min: 6}),
        check('content','Content does not empty').not().isEmpty(),
        check('content','Content more than 6 characters').isLength({min: 6}),
        check('tag','Tag does not empty').not().isEmpty(),
    ]
}
const validateEditQuestion = () => {
    return [
        check('title','Title does not empty').not().isEmpty(),
        check('title','Title more than 6 characters').isLength({min: 6}),
        check('content','Content does not empty').not().isEmpty(),
        check('content','Content more than 6 characters').isLength({min: 6}),
        check('tag','Tag does not empty').not().isEmpty(),
    ]
}
const validate = {
    validateCreteQuestion: validateCreteQuestion,
    validateEditQuestion: validateEditQuestion
}
module.exports = { validate }
