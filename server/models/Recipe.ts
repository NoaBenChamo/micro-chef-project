import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;
