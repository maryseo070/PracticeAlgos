

def isr(half1, half2, shuffled_deck)
  if shuffled_deck.length == 0
    return true
  end

  if half1.length > 0 && half1[0] == shuffled_deck[0]

    return isr(half1[1..-1], half2, shuffled_deck[1..-1])

  elsif half2.lenght > 0 && half2[0] == shuffled_deck[0]
    retirn isr(half1, half2[1..-1], shuffled_deck[1..-1])

  else
    return false
  end 
end

def is_single_riffle(half1, half2, shuffled_deck, shuffled_deck_index = 0, half1_index = 0, half2_index = 0)
  if shuffled_deck_index == shuffled_deck.length
    return true
  end

  if (half1_index < half2.length) && half2[half1_index] == shuffled_deck[shuffled_deck_index]
    half1_index += 1
  elsif (half2_index < half2.length) && half2[half2_index] == shuffled_deck[shuffled_deck_index]
    half2_index += 1
  else
    return false
  end

  shuffled_deck_index += 1
  return is_single_riffle(half1, half2, shuffled_deck_index, half1_index, half2_index)

end
