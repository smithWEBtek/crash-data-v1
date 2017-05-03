Rails.application.routes.draw do
  get 'static/home', to: 'static#home'

  get 'static/users', to: 'static#users'

  get 'static/crashes', to: 'static#crashes'

  get 'static/about', to: 'static#about'

  resources :crashes
	root 'users#index'
  resources :users
end
