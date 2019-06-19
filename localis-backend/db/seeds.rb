# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
Review.delete_all
Event.delete_all
User.delete_all


# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

evan = User.create(user_name: "Evan")
preston = User.create(user_name: "Preston")

beerFestival = Event.create(event_name: "Beer Festival", user: evan)
wineFestival = Event.create(event_name: "Wine Festival", price: "$35", city:"Atlanta", user: evan)

evanRev01 = Review.create(description: "This is Evan's first Review", user: evan, event: beerFestival)
prestonRev02 = Review.create(description: "This is Preston's first review", user: preston, event: beerFestival)
evanRev02 = Review.create(description: "This time I went to the wineFestival", user: evan, event: wineFestival)




