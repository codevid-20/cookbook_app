class Api::RecipesController < ApplicationController
  def single_recipe
    @recipe = Recipe.first
    render 'recipe.json.jb'
  end
end
