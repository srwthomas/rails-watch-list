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

  movie_results.each do |movie|
    new_movie = Movie.create(title: movie['title'], overview: movie['overview'], poster_url: movie_poster + movie['poster_path'], rating: movie['vote_average'])
    puts "#{new_movie.title} has been created!"
  end

  if page_number == 5
    break
  end
end

puts "#{Movie.count}"
