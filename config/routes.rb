Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :passages, only: [:index, :show, :create, :update, :destroy] do
      resources :annotations, only: [:index, :show, :create, :update, :destroy] do
        resources :likes, only: [:index, :create, :destroy]
      end
      resources :comments, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
