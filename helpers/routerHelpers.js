const Joi = require('@hapi/joi')

const validateBody = (schema) => {
  return (req, res, next) => {
    const validatorResult = schema.validate(req.body)

    if (validatorResult.error) {
      return res.status(400).json(validatorResult.error)
    } else {
      if (!req.value) req.value = {}
      if (!req.value['params']) req.value.params = {}

      req.value.body = validatorResult.value
      next()
    }
  }
}

const validateParam = (schema, name) => {
  return (req, res, next) => {
    const validatorResult = schema.validate({ param: req.params[name] })

    if (validatorResult.error) {
      return res.status(400).json(validatorResult.error)
    } else {
      if (!req.value) req.value = {}
      if (!req.value['params']) req.value.params = {}

      req.value.params[name] = req.params[name]
      next()
    }
  }
}

const schemas = {
  authSignInSchema: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),

  authSignUpSchema: Joi.object().keys({
    username: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),

  idSchema: Joi.object().keys({
    param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
  }),

  userSchema: Joi.object().keys({
    username: Joi.string().min(2).required(),
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email().required()
  }),

  userOptionalSchema: Joi.object().keys({
    username: Joi.string().min(2).required(),
    firstName: Joi.string().min(2),
    lastName: Joi.string().min(2),
    email: Joi.string().email()
  })
}

module.exports = {
  validateBody,
  validateParam,
  schemas
}