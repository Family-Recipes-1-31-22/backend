const db = require('../data/db-config')

function getAll() {
    return db('users')
}
function findBy(filter) {
    return db('users')
    .select('user_id','first_name', 'last_name', 'password', 'email')
    .where(filter)

}
function findById(id) {
    return db('users')
        .where('user_id', id)
        .first()
}

async function add(user){
    const [newUser] = await db('users')
    .insert(user, ['first_name','last_name','password','email'])
    return newUser
}
module.exports = {
    getAll,
    findBy,
    add,
    findById
}