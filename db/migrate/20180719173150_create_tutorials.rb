class CreateTutorials < ActiveRecord::Migration[5.2]
  def change
    create_table :tutorials do |t|
      t.text :name, :description, :link
      t.timestamps
    end
  end
end
