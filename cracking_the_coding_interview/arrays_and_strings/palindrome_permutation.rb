def palin_perm (string)
  let counter =  {}
  str = string.delete(" ", ".", ",", ":", ";", "-", "!", "?")
  str.each_chars do |char|
    if (counter[char])
      counter[char]++
    else
      counter[char] = 1
    end
  end
  odds = counter.select {|key, value| value.odd? }
  if odds.count > 1
    return false
  else
    return true
  end
end
