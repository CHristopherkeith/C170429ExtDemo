Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  match '/:controller(/:action(/:id.:format))',via: [:get,:post]
end
