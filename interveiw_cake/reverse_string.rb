def reverse_string(str)
  left = 0
  right = -1
  while left < right
    str[left], str[right] = str[right], str[left]
    left += 1
    right -= 1
  end
  str
end

# O(n**2)
def reverse_words(phrase)
  words = phrase.split(" ")
  first = 0
  last = -1
  while first < last
    phrase[first], phrase[last] = phrase[last], phrase[first]
    first += 1
    last -= 1
  end
  words.join(" ")
end


# O(n) time
def rev_words(phrase)
  reverse_characters(phrase, 0, phrase.length - 1)

  current_word_start_idx = 0

  for i in 0..phrase.length
    if (phrase[1] == " ") || (i == phrase.length)
      reverse_characters(message, current_word_start_idx, i - 1)
      current_word_start_idx = i + 1
    end
  end
end


def reverse_characters(message, left, right)
  while left < right
    message[left], message[right] = message[right], message[left]
    left += 1
    right -= 1
  end
end
