import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      message: 'Please first ensure that the meal you are adding is not already included in the dropdown. Thank you!',
      meals
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/meals/new')
  })
}

function create(req, res) {
  Meal.find({})
  .then(meals => {
    let mealNames = []
    for (let i = 0; i < meals.length; i++) {
      mealNames.push(meals[i].name)
    }
    if (mealNames.includes(req.body.name)) {
      // alert('The dropdown already includes the meal you are trying to add!')
      console.log('error running!')
      res.render('meals/new', {
        title: 'Duplicate Error',
        message: 'The dropdown already includes the meal you are trying to add!',
        meals
      })
    } else {
      Meal.create(req.body)
      .then(meal => {
        res.redirect('/meals/new')
      })
      .catch(err => {
        console.log(err);
        res.redirect('/meals/new')
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create,
}