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
			@crash = Crash.find_by_id(params[:id])
		end

		def crash_params
			params.require(:crash).permit(:ambient_light, :cross_street, :date_time, :day_of_week, :first_harmful_event, :first_harmful_event_location, :intersection_name_1, :intersection_name_2, :location_address, :manner_of_collision, :object_1, :object_2, :p1_age, :p1_drivers_lic_class_1, :p1_drivers_lic_state, :p1_injury, :p1_role, :p1_safety_system, :p1_seat_position, :p1_sex, :p1_trapped, :p1_veh_owner, :p2_age, :p2_drivers_lic_class_1, :p2_drivers_lic_state, :p2_injury, :p2_role, :p2_safety_system, :p2_seat_position, :p2_sex, :p2_trapped, :road_contributing, :road_surface_condition, :roadway_junction_type, :school_bus_related, :speed_limit, :street_name, :street_or_intersection, :traffic_control_device_type, :trafficway_description, :v1_action_prior_to_crash, :v1_configuration, :v1_driver_contribution, :v1_driver_distracted, :v1_first_event, :v1_haz_release, :v1_is_hazmat, :v1_make, :v1_model, :v1_model_year, :v1_most_damaged_area, :v1_most_harmful_event, :v1_occupant_count, :v1_reg_year, :v1_registration_type, :v1_state_code, :v1_trailer_reg_year, :v1_underride_override, :v2_action_prior_to_crash, :v2_configuration, :v2_driver_contribution, :v2_driver_distracted, :v2_emergency_response, :v2_first_event, :v2_haz_placard, :v2_haz_release, :v2_is_hazmat, :v2_make, :v2_model, :v2_model_year, :v2_most_harmful_event, :v2_occupant_count, :v2_reg_year, :v2_registration_type, :v2_state_code, :v2_underride_override, :weather_condition_1, :work_zone)
		end
end
