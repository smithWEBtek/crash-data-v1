Rails.application.routes.draw do
  resources :crashes
	root 'users#index'
  resources :users
end
