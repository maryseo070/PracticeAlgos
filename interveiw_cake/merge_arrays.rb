def merge_arrays(array1, array2)
  merged_array_length = array1.length + array2.length
  merged_array = Array.new(merged_array_length)

  current_index1 = 0
  current_index2 = 0
  current_index_merged = 0

  while current_index_merged < merged_array_length
    array1_exhausted = (current_index1 >= array1.length)
    array2_exhausted = (current_index2 >= array2.length)

    if !array1_exhausted && (array2_exhausted || (array1[current_index1] < array2[current_index2]))
      merged_array[current_index_merged] = array1[current_index1]
      current_index1 += 1
    else
      merged_array[current_index_merged] = array2[current_index2]
      current_index2 += 1
    end
    current_index_merged += 1
  end

  return merged_array
end
