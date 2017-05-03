require 'test_helper'

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_home_url
    assert_response :success
  end

  test "should get users" do
    get static_users_url
    assert_response :success
  end

  test "should get crashes" do
    get static_crashes_url
    assert_response :success
  end

  test "should get about" do
    get static_about_url
    assert_response :success
  end

end
