class List < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :movies, through: :bookmarks
  # has_one :imageUrl

  validates :name, uniqueness: true, presence: true
  # validates :imageUrl, presence: :true
end
