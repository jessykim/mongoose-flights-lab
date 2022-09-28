import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/meals')
  })
}

function create(req, res) {
  Meal.find({})
  .then(meals => {
    console.log(meals);
    let mealNames = []
    for (let i = 0; i < meals.length; i++) {
      console.log(meals[i].name);
      mealNames.push(meals[i].name)
    }
    if (mealNames.includes(req.body.name)) {
      console.log('no can do')
    } else {
      console.log('yes')
      Meal.create(req.body)
      .then(meal => {
        res.redirect('/meals/new')
      })
      .catch(err => {
        console.log(err);
        res.redirect('/meals')
      })
    }
  })
}

export {
  newMeal as new,
  create,
}