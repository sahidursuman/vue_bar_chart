class Api::FruitStatsController < ApplicationController

  def index
    render json: FruitSale.all_stats
  end
end
