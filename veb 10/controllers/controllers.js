var Joi = require('joi');
const services = require('../services/services');
const schemas = require('./schema');
const Film = require('../db/models/Film');

const all=(req,res) =>{
    Film.find()
        .then(films => {
            res.send(films);
        })
        .catch(error => {
            res.send(error);
        });
};

const id=(req,res) =>{
    Joi.validate(req.query,schemas.idSchema,(err,value)=>{
        if(err){
            res.status(400).json({
                status: 'Bad request',
                message: 'Invalid query parameters'
            })
        }else{
            Film.findOne({ id: value.id })
                .then(film => {
                    res.send(film);
                })
                .catch(error => {
                    res.send(error);
                });
        }

    })
};

const search=(req,res) =>{
    Joi.validate(req.query,schemas.nameSchema,(err,value)=>{
        if(err){
            res.status(400).json({
                status: 'Bad request',
                message: 'Missed query parameters'
            })
        }else{
            Film.findOne({ title: value.name })
                .then(film => {
                    res.send(film);
                })
                .catch(error => {
                    res.send(error);
                });
        }

    })
};

const pagination=(req,res) =>{
    Joi.validate(req.query,schemas.paginationSchema,(err,value)=>{
        //console.log(err, value)
        if(err){
            res.status(400).json({
                status: 'Bad request',
                message: 'Invalid query parameters'
            })
        }else   {
            Film.find()
                .then(films => {
                    let db = films;
                    res.send(services.pagination(db, value.offset,value.limit));
                })
                .catch(error => {
                    res.send(error);
                });
        }
    })
};

const sort=(req,res) =>{

    Joi.validate(req.query,schemas.sortSchema,(err,value)=>{
        if(err){
            res.status(400).json({
                status: 'Bad request',
                message: 'Invalid query parameters'
            })
        }else{
            Film.find()
                .then(films => {
                    let db = films;
                    res.send(services.sort(db, value.offset,value.limit));
                })
                .catch(error => {
                    res.send(error);
                });
        }

    })
}
module.exports={
    all,
    id,
    search,
    pagination,
    sort
};
