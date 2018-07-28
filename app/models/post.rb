class Post < ApplicationRecord
# validates :title, :description, :audio, presence: true

  has_one_attached :audio
  belongs_to :user
  has_many :comments
  acts_as_votable

  def score
    self.get_upvotes.size - self.get_downvotes.size
  end
  
end
