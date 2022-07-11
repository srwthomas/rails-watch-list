class Rating < ApplicationRecord
  belongs_to :movie

  validates :presence, true :rating, range: (1,5)
end
