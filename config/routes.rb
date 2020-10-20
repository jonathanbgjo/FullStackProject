Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    # resources :benches, only: [:index, :show, :create]
    # resources :reviews, only: [:create]
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, onky: [:show, :create, :index, :destroy]
    # resource :favorites, only: [:create, :destroy]
  end
  root "static_pages#root"

end
