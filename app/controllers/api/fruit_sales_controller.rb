class Api::FruitSalesController < ApplicationController

  def create
    @fruit_sale = FruitSale.new(fruit_sale_params)

    if @fruit_sale.save
      render json: fruit_sale_params
    else
      render json: @fruit_sale.errors, status: :unprocessable_entity
    end
  end

  private

  def fruit_sale_params
    params.require(:fruit_sale).permit(:variety, :quantity)
  end
end
