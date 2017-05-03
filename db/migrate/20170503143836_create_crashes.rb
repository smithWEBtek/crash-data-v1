class CreateCrashes < ActiveRecord::Migration[5.0]
  def change
    create_table :crashes do |t|
    	t.string :location_address
    	t.date :date_time
    	t.string :day_of_week
    	t.string :p1_sex
    	t.string :v1_driver_contribution

      t.timestamps
    end
  end
end
