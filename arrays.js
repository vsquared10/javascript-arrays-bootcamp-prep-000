var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...new_array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, id) {
  return array[id]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, new_array.length - 1)
}
