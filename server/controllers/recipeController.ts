import Recipe from '../models/Recipe.js';

export const getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find().populate('author', 'name email');
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

export const createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create({ ...req.body, author: req.userId });
    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('author', 'name email');
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};

export const updateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};

export const deleteRecipe = async (req, res, next) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
