class CreateFruitSales < ActiveRecord::Migration
  def change
    create_table :fruit_sales do |t|
      t.string :variety
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
