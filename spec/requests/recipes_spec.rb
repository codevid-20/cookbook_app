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
    end # end of test
  end # end of index action tests
  describe "get /recipes/:id" do
    it 'should return one specific recipe' do
      user = User.create!(email: "bob@bob.com", password: "password", name: "joshua")
      
      recipe = Recipe.create!(
        title: "chicken",
        ingredients: "chicken etc",
        directions: "put in instantpot",
        prep_time: 5,
        image_url: "instantpot.com/quinoa",
        user_id: user.id  
      )

      get "/api/recipes/#{recipe.id}"
      
      recipe = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(recipe['title']).to eq('chicken')
      expect(recipe['directions']).to eq('put in instantpot')
    end
  end
  describe "POST /recipes" do
    it 'should create a new recipe' do
      user = User.create!(email: "raab@raab.com", password: "password", name: "joshua")

      # generate a token
      jwt = JWT.encode(
        {
          user_id: user.id, # the data to encode
          exp: 24.hours.from_now.to_i # the expiration time
        },
        Rails.application.credentials.fetch(:secret_key_base), # the secret key
        "HS256" # the encryption algorithm
      )

      
      post "/api/recipes", params: {
        title: "oatmeal",
        ingredients: "oat + meal",
        directions: "put in instantpot",
        prep_time: 20,
        image_url: "oatmeal.com"
      }, headers: {
        "Authorization" => "Bearer #{jwt}"
      }
      recipe = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(recipe['title']).to eq('oatmeal')
    end
    
  end
end # end of recipes controller tests
