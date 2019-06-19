class AddColumnsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :url, :string
    add_column :events, :date, :string
    add_column :events, :time, :string
    add_column :events, :price, :integer
    add_column :events, :city, :string
    add_column :events, :venue, :string
  end
end
