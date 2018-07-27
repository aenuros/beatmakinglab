class Post < ApplicationRecord
# validates :title, :description, :audio, presence: true

  has_one_attached :audio
  belongs_to :user

end
