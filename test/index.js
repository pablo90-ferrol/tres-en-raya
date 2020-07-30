const assert = require('assert')
const {hayGanador, hayHueco} = require('../tablero')

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

    it ("Horizontal de X con fila vacía", function () {
        assert.equal(hayGanador([
            [0,0,0],
            [2,2,2],
            [1,1,0]
        ]), 2)
    })
})


describe("Hay hueco", function () {
   
    it ("Ficha en 0,0 con tablero vacío", function () {
        assert.equal(hayHueco([
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ], 0, 0), true) 
    })

    it ("Ficha en 0,2 con tablero vacío", function () {
        assert.equal(hayHueco([
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ], 0, 2), true) 
    })

    it ("Ficha en 1,1 con tablero lleno", function () {
        assert.equal(hayHueco([
            [1,2,1],
            [1,2,1],
            [2,1,2]
        ], 1, 1), false) 
    })

    it ("Ficha en 1,1 en tablero con hueco", function () {
        assert.equal(hayHueco([
            [1,2,1],
            [1,0,2],
            [2,1,2]
        ], 1, 1), true) 
    })

    it ("Ficha en 1,0 en tablero con hueco", function () {
        assert.equal(hayHueco([
            [1,2,0],
            [0,0,2],
            [0,1,2]
        ], 1, 0), true) 
    })

    it ("Ficha en 1,0 en tablero sin hueco", function () {
        assert.equal(hayHueco([
            [1,0,0],
            [1,0,2],
            [0,1,2]
        ], 1, 0), false) 
    })
})