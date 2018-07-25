Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home2'
  get 'about', to: 'pages#about'
  get 'experience', to: 'pages#experience'
  resources :contacts, only: :create
  get 'contact-me', to: 'contacts#new', as: 'new_contact'
  get 'test', to: 'pages#haha'
end
