# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

require 'json'
require 'open-uri'

page_number = 0

loop do
  page_number += 1
  url = "http://tmdb.lewagon.com/movie/top_rated?&page=#{page_number.to_s}"
  movies = URI.open(url).read
  movie = JSON.parse(movies)
  movie_results = movie['results']
  movie_poster = 'https://image.tmdb.org/t/p/w500'

  movie_results.each do | movie |
    new_movie = Movie.create(title: movie['title'], overview: movie['overview'], poster_url: movie_poster + movie['poster_path'])
    puts "#{new_movie.title} has been created!"
  end

  if page_number == 5
    break
  end
end
puts "#{Movie.count}"


List.create(name: "Crime", imageUrl: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")
List.create(name: "Action", imageUrl: "https://images.unsplash.com/photo-1622107450677-91557715f016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGFjdGlvbiUyMGFybXl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")

puts "Lists created"
