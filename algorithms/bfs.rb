# is there a path from a to e?

adjacency_hash = {
  "a": ["b", "f"],
  "b": ["c"],
  "c": ["d", "e"]
}

def bfs(adj_hash, start_node, target_node)
  visited_queue = [start_node]

  loop do

    current = visited_queue.shift
    children = adj_hash[current.to_sym]

    if children.nil?
      current = visited_queue.shift
      # puts visited_queue
    else
      children.each do |child|
        if child == target_node
          return true
        else
          visited_queue.push(child)

        end
      end
      current = visited_queue.shift

    end
    return false
  end
end



# def breadth_first_search(adj_matrix, source_index, end_index)
#   node_queue = [source_index]
#
#   loop do
#     curr_node = node_queue.pop
#
#     return false if curr_node == nil
#     return true if curr_node == end_index
#
#     children = (0..adj_matrix.length-1).to_a.select do |i|
#       adj_matrix[curr_node][i] == 1
#     end
#
#     node_queue = children + node_queue
#   end
# end
