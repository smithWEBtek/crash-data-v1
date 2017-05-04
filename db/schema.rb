# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170503143836) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "crashes", force: :cascade do |t|
    t.string   "ambient_light"
    t.string   "cross_street"
    t.datetime "date_time"
    t.string   "day_of_week"
    t.string   "first_harmful_event"
    t.string   "first_harmful_event_location"
    t.string   "intersection_name_1"
    t.string   "intersection_name_2"
    t.string   "location_address"
    t.string   "manner_of_collision"
    t.string   "object_1"
    t.string   "object_2"
    t.string   "p1_age"
    t.string   "p1_drivers_lic_class_1"
    t.string   "p1_drivers_lic_state"
    t.string   "p1_injury"
    t.string   "p1_role"
    t.string   "p1_safety_system"
    t.string   "p1_seat_position"
    t.string   "p1_sex"
    t.string   "p1_trapped"
    t.string   "p1_veh_owner"
    t.string   "p2_age"
    t.string   "p2_drivers_lic_class_1"
    t.string   "p2_drivers_lic_state"
    t.string   "p2_injury"
    t.string   "p2_role"
    t.string   "p2_safety_system"
    t.string   "p2_seat_position"
    t.string   "p2_sex"
    t.string   "p2_trapped"
    t.string   "road_contributing"
    t.string   "road_surface_condition"
    t.string   "roadway_junction_type"
    t.string   "school_bus_related"
    t.string   "speed_limit"
    t.string   "street_name"
    t.string   "street_or_intersection"
    t.string   "traffic_control_device_type"
    t.string   "trafficway_description"
    t.string   "v1_action_prior_to_crash"
    t.string   "v1_configuration"
    t.string   "v1_driver_contribution"
    t.string   "v1_driver_distracted"
    t.string   "v1_first_event"
    t.string   "v1_haz_release"
    t.string   "v1_is_hazmat"
    t.string   "v1_make"
    t.string   "v1_model"
    t.string   "v1_model_year"
    t.string   "v1_most_damaged_area"
    t.string   "v1_most_harmful_event"
    t.string   "v1_occupant_count"
    t.string   "v1_reg_year"
    t.string   "v1_registration_type"
    t.string   "v1_state_code"
    t.string   "v1_trailer_reg_year"
    t.string   "v1_underride_override"
    t.string   "v2_action_prior_to_crash"
    t.string   "v2_configuration"
    t.string   "v2_driver_contribution"
    t.string   "v2_driver_distracted"
    t.string   "v2_emergency_response"
    t.string   "v2_first_event"
    t.string   "v2_haz_placard"
    t.string   "v2_haz_release"
    t.string   "v2_is_hazmat"
    t.string   "v2_make"
    t.string   "v2_model"
    t.string   "v2_model_year"
    t.string   "v2_most_harmful_event"
    t.string   "v2_occupant_count"
    t.string   "v2_reg_year"
    t.string   "v2_registration_type"
    t.string   "v2_state_code"
    t.string   "v2_underride_override"
    t.string   "weather_condition_1"
    t.string   "work_zone"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
