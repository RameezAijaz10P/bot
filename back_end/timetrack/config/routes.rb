Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :rest, defaults: { format: :json } do
    namespace :v1 do
      post 'timesheet/:test' => 'timesheet#clock'
      get 'timesheet/history/' => 'timesheet#history'
    end
  end
end
