class RemoveReviewIdFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :review_id, :reference
  end
end
