Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

resources :tutorials

get '/' => 'pages#index'
get '/welcome' => 'pages#index'

# Learn and tutorials
get '/learn' => 'tutorials#learn'
get '/seeadmin' => 'tutorials#seeadmin'

# Compete
get '/compete' => 'pages#compete'

get '/sell' => 'pages#sell'

get '/social' => 'pages#social'

get '/sounds' => 'pages#sounds'

end
