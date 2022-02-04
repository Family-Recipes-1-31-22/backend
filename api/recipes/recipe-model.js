const db = require('../data/db-config')

function getAll() {
    return db('recipe')
}
function getById(id) {
    return db('recipe')
    .where('recipe_id', id)
    .first()
}

async function add(recipes){
    const [newRecipe] = await db('recipe')
    .insert(recipes, ['title', 'source','ingredients', 'instructions', 'category'])
        return newRecipe
}
// async function update(id, changes){
//     const classes = await db('class')
//     .update(changes, 'class_name', 'type','date', 'time', 'duration', 
//     'intensity_level', 'location', 'attendees', 'max_size')
//     .where('class_id', id)
//     return classes
// }
const update = async (id, recipes) => {
    await db('recipes').where('recipe_id', id)
                     .update(recipes)
            return getById
}

module.exports = {
    getAll,
    getById,
    add,
    update
}