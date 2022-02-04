exports.seed = async function (knex) {
  await knex("users").insert([
    {
      first_name: "Hermione",
      last_name: "Granger",
      password: "1234",
      email: "test@test.com"
    },
    {
      first_name: "Harry",
      last_name: "Potter",
      password: "1234",
      email: "new@test.com"
    },
  ]),
    await knex("recipe").insert({
      title: "Fruit Salad",
      source: "My Mom",
      ingredients: "can of fruit cocktail, whipped cream, lemon pudding mix",
      instructions: "drain fruit cocktail and empty into large bowl. Stir in lemon pudding mix thoroughly. Add whipped cream and chill in fridge until ready to serve",
      category: "side dish",
    });

};
