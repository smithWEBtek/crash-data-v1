class StaticController < ApplicationController
  def home
  	render :home
  end

  def users
  	redirect_to 'users/index'
  end

  def crashes
  	redirect_to_to crashes_path
  end

  def about
  	render :about
  end
end
