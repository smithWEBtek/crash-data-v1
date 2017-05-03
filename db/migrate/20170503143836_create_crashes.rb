class CreateCrashes < ActiveRecord::Migration[5.0]
  def change
    create_table :crashes do |t|
    	t.string :location_address
    	t.date :date_time

      t.timestamps
    end
  end
end
