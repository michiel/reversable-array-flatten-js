function generateTake (fns) {
  return (arr) => fns.map(fn => fn(arr))
}

function generateTakeOne () {
  return (arr) => arr.shift()
}

function generateMaker (fns) {
  return (arr) => fns.map(fn => fn(arr))
}

function take (arr) {
  let flatlist = []
  let fns = arr.map(el => {
    if (!Array.isArray(el)) {
      flatlist.push(el)
      return generateTakeOne()
    } else {
      const res = take(el)
      flatlist = flatlist.concat(res.flatlist)
      return generateTake(res.fns)
    }
  })
  return { fns, flatlist }
}

function flatten (arr) {
  const { fns, flatlist } = take(arr)
  const restore = generateMaker(fns)
  return { restore, flatlist }
}

/*
function testList (input) {
  function jsonLog (o) {
    console.log(JSON.stringify(o))
  }

  const add = (x) => x + 1
  const subtract = (x) => x - 1

  console.log('Testing input ', input)
  jsonLog(input)
  let res = flatten(input)
  jsonLog(res.flatlist)
  let resMap = res.flatlist.map(add)
  jsonLog(resMap)
  let restore = res.maker(resMap)
  jsonLog(restore)

  console.log('Testing reversing input ')
  let res2 = flatten(restore)
  jsonLog(res2.flatlist)
  let resMap2 = res2.flatlist.map(subtract)
  jsonLog(resMap2)
  let restore2 = res2.maker(resMap2)
  jsonLog(restore2)

  console.log('')
  console.log('')
}
*/

module.exports = {
  flatten
}

// testList([1,2,3, [4, 5, [6, 7, [8, 9]]]]);
// testList([[[[[1, 2]], 3]], [[4]], 5]);
// testList([1, 2, 3, [4, 5, [6, 7, [8, 9]]]])
