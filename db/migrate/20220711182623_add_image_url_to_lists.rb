class AddImageUrlToLists < ActiveRecord::Migration[6.1]
  def change
    add_column :lists, :imageUrl, :string
  end
end
