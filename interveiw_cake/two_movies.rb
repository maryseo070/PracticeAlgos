def two_movies(flight_length, movie_lengths)
  movie_lengths_seen = Set.new
  movie_lengths.each do |first_movie|
    matching_second_movie = flight_length - first_movie
    if movie_lengths_seen.include?(matching_second_movie)
      return true
    end
    movie_lengths_seen.add(first_movie)
  end
  return false
end
