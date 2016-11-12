class Project < ApplicationRecord
  has_many :timesheet
  has_many :user, through: :timesheet
end
