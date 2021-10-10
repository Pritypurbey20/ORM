// Objection.js is another Node.js ORM(just as Sequelize) that aims to make it as easy as
// possible for you to use the full power of SQL as well as the underlying database engine while
// still making the common stuff easy and enjoyable. Now, Objection uses KNEX SQL Query Builder in
// the background as its database access layer. It can work with PostgreSQL, MySQL, and SQLite3.

const environment = process.env.ENVIRONMENT || 'development'
const config = require('./knexfile')[environment];
const db = require('knex')(config)

const {Model} = require('objection')
Model.knex(db)

class Task extends Model {
    static get tableName(){
        return 'tasks'
    }
}

// INSERT QUERY: 

const tasks = Task.query()
    .insert({name:'Prity'},{is_done:'true'})
    .then(()=>{
        console.log('Data inserted successfully..')
    })
    .catch((err)=>{
        console.log(err)
    })


// SELECT QUERY:

const tasks = Task.query()
    .where({is_done:'true'})
    .orderBy('id')
    .then(()=>{
        console.log('Data selected successfully..')
    })
    .catch((err)=>{
        console.log(err)
    })

//UPDATE QUERY:

const tasks = Task.query()
    .patch({is_done:'true'})
    .where({id:1})
    .then(()=>{
        console.log('Data updated successfully..')
    })
    .catch((err)=>{
        console.log(err)
    })

// //DELETE QUERY:

const tasks = Task.query()
    .delete()
    .where({id:1})
    .then(()=>{
        console.log('Data deleted successfully..')
    })
    .catch((err)=>{
        console.log(err)
    })

