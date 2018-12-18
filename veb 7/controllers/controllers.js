var Joi = require('joi');
const services = require('../services/services');
const schemas = require('./schema');

const all=(req,res) =>{
    res.send(services.getAllMovies())
}

const id=(req,res) =>{
    Joi.validate(req.query,schemas.idSchema,(err,value)=>{
        if(err){
            res.status(400).json({
                status: 'Bad request',
                message: 'Invalid query parameters'
            })
        }else{
            res.send(services.getById(value.id));
        }

    })
}

const search=(req,res) =>{
    Joi.validate(req.query,schemas.nameSchema,(err,value)=>{
        if(err){
            res.status(400).json({
                status: 'Bad request',
                message: 'Missed query parameters'
            })
        }else{
            res.send(services.getByName(value.name)[0]);
        }

    })
}

const pagination=(req,res) =>{
    Joi.validate(req.query,schemas.paginationSchema,(err,value)=>{
        //console.log(err, value)
        if(err){
            res.status(400).json({
                status: 'Bad request',
                message: 'Invalid query parameters'
            })
        }else{
            res.send(services.pagination(value.offset,value.limit));
        }

    })
}

const sort=(req,res) =>{

    Joi.validate(req.query,schemas.sortSchema,(err,value)=>{
        if(err){
            res.status(400).json({
                status: 'Bad request',
                message: 'Invalid query parameters'
            })
        }else{
            res.send(services.sort(value.field,value.type));
        }

    })
}
module.exports={
    all,
    id,
    search,
    pagination,
    sort
}
