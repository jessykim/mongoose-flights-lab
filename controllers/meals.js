import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals
    })
  })
}

function create(req, res) {
  console.log('creating meals is working!');
}

export {
  newMeal as new,
  create,
}