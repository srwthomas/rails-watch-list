class Rating < ApplicationRecord
  belongs_to :movie

  validates :rating, presence: true, range: 1,5
end
