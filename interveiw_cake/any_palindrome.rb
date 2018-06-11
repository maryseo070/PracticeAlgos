# hash

def any_palindrome?(string)
  even_odd = Hash.new
  string.each_chars do |letter|
    if even_odd[letter] == "odd"
      even_odd[letter] = "even"
    elsif even_odd[letter] == "even"
      even_odd[letter] = "odd"
    else
      movie_lengths_seeneven_odd[letter] = "odd"
    end
  end
  even_odd.values.count("odd") <= 1
end

# set

def has_palindrome_permutation(string)
  unpaired_characters = Set.new
  (0...string.length).each do |i|
    char = string[i]
    if unpaired_characters.include?(char)
      unpaired_characters.delete(char)
    else
      unpaired_characters.add(char)
    end
  end
  return unpaired_characters.length <= 1
end
