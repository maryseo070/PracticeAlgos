def reverse_string(str)
  left = str[0]
  right = str.length - 1
  while left < right
    str[left], str[right] = str[right], str[left]
    left += 1
    right -= 1
  end
end
