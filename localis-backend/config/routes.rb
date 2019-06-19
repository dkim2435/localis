Rails.application.routes.draw do
  # get '/events/', to: 'events#index'
  resources :events, only: [:index, :new, :create, :destroy]
  # get '/users/', to: 'users#index'
  resources :users, only:[:index,:new,:create]
  # get '/reviews/', to: 'reviews#index'
  resources :reviews, only:[:index, :new, :create, :destroy]
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
