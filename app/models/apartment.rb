class Apartment < ApplicationRecord
  validates :address, :city, :state, :zip_code, :country, :name, :phone_number, :hours, :image_path, presence: true
  
  belongs_to :user
end

