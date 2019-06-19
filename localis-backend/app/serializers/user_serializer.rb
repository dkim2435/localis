class UserSerializer < ActiveModel::Serializer
  has_many :reviews
  attributes :id, :user_name
  def description
    self.object.review.description
  end
end
