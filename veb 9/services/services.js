const movies = require('./movies')

const getAllMovies = () => {
    return movies.map(item => item.title);
}

function getById(id){
    return movies.find(item =>item.id === id);
}

function getByName(name){
    return movies.filter(item => item.title.toLowerCase().search(name.toLowerCase()));
}

function pagination(db, offset,limit){
    return db.slice(Number(offset),Number(offset)+Number(limit)).map(item => item.title);
}

function sort(db, key,type){
           if(key === 'id'){
               db.sort((a, b) => {
                   return a[key] - b[key];
               });
          } else if (key === 'title') {
              db.sort((a, b) => {
                  if(a[key] < b[key][0]) return -1;
                  else if (a[key] > b[key][0]) return 1;
                  else return 0;
              });
          }
        if(type === 'd') db.reverse();
    return db;
}

module.exports = {
    getAllMovies,
    getById,
    getByName,
    pagination,
    sort,
};
