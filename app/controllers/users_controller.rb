class UsersController < ApplicationController
	before_action :set_user, only: [:show, :edit, :update, :destroy]

	def index
		@users = User.all
		render :index
	end

	def show
		render :show
	end

	def new
		@user = User.new
	end

	def create
		@user = User.create(user_params)
		if @user.save
			redirect_to user_path(@user)
		else
			render :new
		end
	end

	def edit
	end

	def update
		@user.update(user_params)
		if @user.save
			redirect_to user_path(@user)
		else
			render :edit
		end
	end

	def destroy
		@user.destroy
		redirect_to root_path
	end


	private
		def set_user
			@user = User.find_by_id(params[:id])
		end

		def user_params
			params.require(:user).permit(:username, :email, :password)
		end

end
