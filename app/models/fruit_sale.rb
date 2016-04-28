class FruitSale < ActiveRecord::Base

  def self.all_stats
    all.group(:variety).sum(:quantity)
  end
end
