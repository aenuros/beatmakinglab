Rails.application.routes.draw do

  resources :posts
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

resources :tutorials

get '/' => 'pages#index'
get '/welcome' => 'pages#index'

# Learn and tutorials
get '/learn' => 'tutorials#learn'
# erase later
get '/admin' => 'tutorials#admin'

get '/seeadmin' => 'adminpages#seeadmin'
get '/posts_admin' => 'adminpages#posts_admin'

# Compete
get '/compete' => 'pages#compete'

get '/sell' => 'pages#sell'

get '/social' => 'pages#social'

get '/sounds' => 'pages#sounds'

get '/test' => 'pages#test'

get '/postlist' => 'posts#postlist'

get '/myposts' => 'posts#myposts'

end
