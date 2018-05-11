require 'byebug'
# arabic_nums = [1000, 500, 100, 50, 10, 5, 1]

def to_roman(num)
  romans = {
    1 => "I",
    5 => "V",
    10 => "X",
    50 => "L",
    100 => "C",
    500 => "D",
    1000 => "M"
  }
  arabic_nums = romans.keys.sort.reverse
  result = ""
  while num > 0
      first_lower_idx = arabic_nums.find_index{|x| x < num}
      letters = ""
      less_than = arabic_nums[first_lower_idx]
      twice_less_than = arabic_nums[first_lower_idx - 2]
      greater_than = arabic_nums[first_lower_idx - 1]
      num2 = num - (num % less_than)
      debugger

    if !(is_power_of_ten?(greater_than))
      if greater_than - num2 == less_than
        letters.concat(romans[less_than])
        letters.concat(romans[greater_than])
        to_subtract = greater_than - less_than
        num = num - to_subtract
        debugger
      else
        times = (num / less_than)
        times.times do
          letters.concat(less_than)
          num -= less_than
        end
        letters.concat(num % less_than)
        num -= (num % less_than)
      end
      result.concat(letters)

    else
      if greater_than - num2 == twice_less_than
        letters.concat(romans[twice_less_than])
        letters.concat(romans[greater_than])
        to_subtract = greater_than - twice_less_than
      else
        times = (num / less_than)
        times.times do
          letters.concat(less_than)
          num -= (times * less_than)
        end
        times = num / twice_less_than
        times.times do |x|
          letters.concat(twice_less_than)
          num -= (times * twice_less_than)
        end
      end
      result.concat(letters)
    end
  end
  return result
end

def is_power_of_ten?(num)
  product = 1
  while num > product
    add_power = (product *= 10)
    if (add_power === num)
      return true
    end
  end
  return false
end






def to_roman_short(number)
  roman_mapping =
    {
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
   result = ""
   roman_mapping.keys.each do |divisor|
     quotient, modulus = number.divmod(divisor)
     result << roman_mapping[divisor] * quotient
     number = modulus
   end
   result
 end
