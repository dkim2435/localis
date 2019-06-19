class User < ApplicationRecord
  has_many :reviews
  has_many :events

  # def profile_json
  #   {
  #       user_name: self.event_name
  #       events: self.events
  #   }.to_json
  # end
end
