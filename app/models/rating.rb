class Rating < ApplicationRecord
  belongs_to :movie
  # validates :presence, true :rating, range: collection:{1,5}
end
