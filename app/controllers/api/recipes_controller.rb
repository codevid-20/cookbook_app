class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render 'index.json.jb'
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    render 'show.json.jb'
  end

  def create
    # make a new recipe in the db
    @recipe = Recipe.new(      
      chef: params[:chef],
      title: params[:title],
      ingredients: params[:ingredients],
      prep_time: params[:prep_time],
      directions: params[:directions],
      image_url: params[:image_url]
    )
    @recipe.save
    render 'show.json.jb'
  end

  def update
    # find the correct recipe
    @recipe = Recipe.find_by(id: params[:id])
    # upate that particular recipe
    @recipe.title = "chicken wings"
    @recipe.chef = "rachel ray"
    @recipe.ingredients = "chickens + wing"
    @recipe.directions = "chicken the wing"
    @recipe.prep_time = 30
    @recipe.image_url = ""
    @recipe.save
    render 'show.json.jb'
  end
end
