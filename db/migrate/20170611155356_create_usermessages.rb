class CreateUsermessages < ActiveRecord::Migration[5.0]
  def change
    create_table :usermessages do |t|
      t.string :name
      t.string :telnumber
      t.text :text

      t.timestamps
    end
  end
end
