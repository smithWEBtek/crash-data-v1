class CrashesController < ApplicationController
	before_action :set_crash, only: [:show, :edit, :update, :destroy]

	def index
		@crashes = Crash.all
		render :index
	end

	def show
		render :show
	end

	def new
		@crash = Crash.new
	end

	def create
		@crash = Crash.create(crash_params)
		if @crash.save
			redirect_to crash_path(@crash)
		else
			render :new
		end
	end

	def edit
	end

	def update
		@crash.update(crash_params)
		if @crash.save
			redirect_to crash_path(@crash)
		else
			render :edit
		end
	end

	def destroy
		@crash.destroy
		redirect_to root_path
	end


	private
		def set_crash
			@crash = crash.find_by_id(params[:id])
		end

		def crash_params
			params.require(:crash).permit(:location_address, :date_time)
		end
end
