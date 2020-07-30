const assert = require('assert')
const {hayGanador} = require('../tablero')

describe("Determina el ganador", function () {
    
    it ("Tablero vacío", function () {
        assert.equal(hayGanador([
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]), 0)
    })

    it ("Diagonal de O", function () {
        assert.equal(hayGanador([
            [1,0,0],
            [2,1,0],
            [2,0,1]
        ]), 1)
    })

    it ("Vertical de X", function () {
        assert.equal(hayGanador([
            [2,1,0],
            [2,0,1],
            [2,1,0]
        ]), 2)
    })

    it ("Horizontal de O", function () {
        assert.equal(hayGanador([
            [0,0,2],
            [1,1,1],
            [2,0,0]
        ]), 1)
    })
})