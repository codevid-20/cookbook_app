class Api::RecipesController < ApplicationController
  def index
    if params[:search]
      @recipes = Recipe.where("chef LIKE ?", "%#{params[:search]}%")
      # @recipes = Recipe.where("chef LIKE ? OR ingredients LIKE ?", "%#{params[:search]}%", "%#{params[:search]}%")
    else 
      @recipes = Recipe.all
    end

    @recipes = @recipes.order(:id => :desc)

    
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
    @recipe.title = params[:title] || @recipe.title 
    @recipe.chef = params[:chef] || @recipe.chef    
    @recipe.ingredients = params[:ingredients] || @recipe.ingredients
    @recipe.directions = params[:directions] || @recipe.directions
    @recipe.prep_time = params[:prep_time] || @recipe.prep_time
    @recipe.image_url = params[:image_url] || @recipe.image_url
    @recipe.save
    render 'show.json.jb'
  end

  def destroy
    @recipe = Recipe.find_by(id: params[:id])
    @recipe.destroy
    render json: {message: "You have successfully deleted the recipe"}
  end
end
