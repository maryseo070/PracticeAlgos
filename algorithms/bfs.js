let adjacencyHash = {
  "a": ["b", "f"],
  "b": ["c"],
  "c": ["d", "e"]
};

function bfs(adjHash, start, target) {
  let visitQueue = [start];
  let found = false;
  while (visitQueue.length > 0){
    console.log(visitQueue.length);

    let current = visitQueue.shift();
    let children = adjHash[current];

    if (children) {
      children.forEach(child => {
        visitQueue.push(child);
        console.log(visitQueue.length)

        if (child === target) {
          found = true;
        }
      });
    }
    console.log(visitQueue.length)
  }
  return found;
}
