class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :address
      t.string :city
      t.string :zip_code
      t.string :state
      t.string :country
      t.string :name
      t.string :phone_number
      t.string :hours
      t.string :image_path
      t.string :user_id

      t.timestamps
    end
  end
end
