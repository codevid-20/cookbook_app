require 'rails_helper'

RSpec.describe "Recipes", type: :request do
  describe "GET /recipes" do
    it "should return all the recipes in the database" do

      user = User.create!(email: "brian@brian.com", password: "password", name: "joshua")
      
      Recipe.create!(
        title: "quinoa",
        ingredients: "quinn + oa",
        directions: "put in instantpot",
        prep_time: 12,
        image_url: "instantpot.com/quinoa",
        user_id: user.id  
      )
      Recipe.create!(
        title: "quinoa",
        ingredients: "quinn + oa",
        directions: "put in instantpot",
        prep_time: 12,
        image_url: "instantpot.com/quinoa",
        user_id: user.id  
      )
      Recipe.create!(
        title: "quinoa",
        ingredients: "quinn + oa",
        directions: "put in instantpot",
        prep_time: 12,
        image_url: "instantpot.com/quinoa",
        user_id: user.id  
      )
      Recipe.create!(
        title: "quinoa",
        ingredients: "quinn + oa",
        directions: "put in instantpot",
        prep_time: 12,
        image_url: "instantpot.com/quinoa",
        user_id: user.id  
      )
      Recipe.create!(
        title: "quinoa",
        ingredients: "quinn + oa",
        directions: "put in instantpot",
        prep_time: 12,
        image_url: "instantpot.com/quinoa",
        user_id: user.id  
      )
      Recipe.create!(
        title: "quinoa",
        ingredients: "quinn + oa",
        directions: "put in instantpot",
        prep_time: 12,
        image_url: "instantpot.com/quinoa",
        user_id: user.id  
      )
      

      get "/api/recipes"
      recipes = JSON.parse(response.body)
      
      expect(response).to have_http_status(200)
      expect(recipes.length).to eq(6)
    end
  end
end
