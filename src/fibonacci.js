/**
 * Created by josefsosa on 4/1/16.
 */
function* fibonacci(limit = Infinity) {
  let [prev, current] = [0, 1];
  while (current < limit) {
    [prev, current] = [current, prev + current];
    yield current;
  }
}

//for (let i of fibonacci(200))
console.log([...fibonacci(2000)])

//for (let i of fibonacci(30)) console.log(i)
//1 2 3 5 8 13 21 34
//[...fibonacci(30)]
///[1, 2, 3, 5, 8, 13, 21, 34]