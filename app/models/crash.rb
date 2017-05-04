require 'csv'

class Crash < ApplicationRecord

	def build_migration_from_csv
		body = []
		csv_text = File.read('app/assets/csv/file.csv')
		csv = CSV.parse(csv_text, :headers => false)
		csv.each_with_index do |row, i|
		  puts row[i]
		end
	end
end
