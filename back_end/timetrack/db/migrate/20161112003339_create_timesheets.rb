class CreateTimesheets < ActiveRecord::Migration[5.0]
  def change
    create_table :timesheets do |t|
      t.date :date
      t.time :start_time
      t.time :end_time
      t.integer :slack
      t.float :hours
      t.integer :liquid_planner
      t.belongs_to :project, index: true
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
