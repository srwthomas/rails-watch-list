class AddRatingToBookmark < ActiveRecord::Migration[6.1]
  def change
    add_column :bookmarks, :rating, :integer
  end
end
