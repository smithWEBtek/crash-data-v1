namespace :db do
  desc 'heroku pg:reset, migrate, seed'
  task hdcms: :environment do
    exec('heroku pg:reset --app crash-data-v1 --confirm crash-data-v1
      heroku run rake db:migrate --app crash-data-v1
      heroku run rake db:seed --app crash-data-v1')
  end
end
