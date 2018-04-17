const assert = require('chai').assert
const Graph = require('../src/Graph')

describe('#Graph', function () {
  describe('#constructor', function () {
    it('构建图', function () {
      let g = new Graph(5)
      g.addEdge(0, 1)
      g.addEdge(0, 2)
      g.addEdge(1, 3)
      g.addEdge(2, 4)
      g.showGraph()
      g.dfs(0)
    })
  })
})