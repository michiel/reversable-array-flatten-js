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

module.exports = {
  flatten
}

