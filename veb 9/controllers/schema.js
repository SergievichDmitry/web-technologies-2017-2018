var Joi = require('joi');
const movies = require('../services/movies')

const idSchema=Joi.object().keys({
    id: Joi.number().integer().positive().required()
})

const paginationSchema=Joi.object().keys({
    offset: Joi.number().integer().min(0).max(movies.length-1),
    limit: Joi.number().integer().min(0).max(movies.length)
})

const nameSchema=Joi.object().keys({
    name: Joi.string().required()
})

const sortSchema=Joi.object().keys({
    field: Joi.string().default('title'),
    type: Joi.string().default('u')
})

module.exports={
    sortSchema,
    nameSchema,
    paginationSchema,
    idSchema
}
