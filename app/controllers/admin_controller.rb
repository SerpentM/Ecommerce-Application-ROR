class AdminController < ApplicationController
  skip_before_action :authorize
  before_action :set_order, only: %i[ show edit update destroy ]
  def index
    @orders = Order.all
    @total_orders = Order.count
  end
end
