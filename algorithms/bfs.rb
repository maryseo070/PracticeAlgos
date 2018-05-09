# finding the shortest path from "a" to "e"

adjacency_hash = {
  "a": [b, f],
  "b": [c],
  "c": [d, e]
}

def bfs(adj_hash, start_node, end_node)
  visited_queue = [start_node]

  while visited_queue.length > 0
    current_node = visited_queue.pop

    children = adj_hash[current_node]
    children.each do |child|
      visited_queue.push(child)
    end
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
