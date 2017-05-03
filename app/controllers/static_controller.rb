class StaticController < ApplicationController

  def about
  	render :about
  end

  def users
  	redirect_to 'users/index'
  end

  def crashes
  	redirect_to crashes_path
  end
end
