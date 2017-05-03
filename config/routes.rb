Rails.application.routes.draw do
	root 'static#about'
	get '/', to: 'static#about'
  get '/about', to: 'static#about'

  resources :crashes
  resources :users
end
