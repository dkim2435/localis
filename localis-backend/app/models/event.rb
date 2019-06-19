class Event < ApplicationRecord
  has_many :reviews, through: :users
  belongs_to :user
end
