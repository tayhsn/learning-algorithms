const graph = {}
graph.you = ['alice', 'bob', 'claire']
graph.bob = ['anuj', 'peggy']
graph.alice = ['peggy']
graph.claire = ['thom', 'jonny']
graph.anuj = []
graph.peggy = []
graph.thom = []

/**
 * Determine whether a person is a seller
 * @param {string} name Friend's name
 * @returns {boolean} Result of checking
 */
const isSeller = (name) => name[name.length - 1] === 'm'

/**
 * Find a mango seller
 * @param {string} name Friend's name
 * @returns {boolean} Search results
 */
const search = (name) => {
  let searchQueue = [...graph[name]]
  // This array is how you keep track of which people you've searched before.
  const searched = []

  while (searchQueue.length) {
    const person = searchQueue.shift()

    // Only search this person if you haven't already searched them
    if (searched.indexOf(person) === -1) {
      if (isSeller(person)) {
        console.log(`${person} is a mango seller!`)
        return true
      }

      searchQueue = searchQueue.concat(graph[person])
      // Marks this person as searched
      searched.push(person)
    }
  }
  return false
}

search('you') // thom is a mango seller!

/**
 * Breadth-first Search by Rytikov Dmitrii
 */

/**
 * Find a mango seller
 * @param {string} name Friend's name
 * @param {Object} graph Hash table
 * @returns {boolean} Search results
 */
const alternativeSearch = (name, graph = {}) => {
  /**
   * Recursive function to test people
   * @param {Array} waited List of people you need to check
   * @param {Set} visited List of checked people
   */
  const iter = (waited = [], visited) => {
    if (waited.length === 0) return false

    const [current, ...rest] = waited

    if (visited.has(current)) return iter(rest, visited)

    if (isSeller(current)) {
      console.log(`${current} is a mango seller!`)
      return true
    }

    visited.add(current)

    const personFriends = graph[current]
    return iter([...rest, ...personFriends], visited)
  }

  return iter(graph[name], new Set())
}

search('you', graph) // thom is a mango seller!
