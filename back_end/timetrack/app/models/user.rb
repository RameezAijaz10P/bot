class User < ApplicationRecord
  has_many :timesheet
  has_many :project, through: :timesheet
end
