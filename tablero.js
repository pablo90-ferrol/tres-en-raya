/**
 * Determina cúal es el ganador en un tablero de tres
 * en raya (si hay alguno). Los posibles resultados son:
 * 0 -> no hay ganador
 * 1 -> gana O
 * 2 -> gana X
 * @param {array} tablero Matriz de 3x3 números
 */
function hayGanador(tablero) {

    //Comprobar filas (horizontal)
    for (let i = 0; i < tablero.length; i++) {

        // Comprobar fila (horizontal)
        if(tablero[i][0]!=0 && tablero[i][0]==tablero[i][1] && tablero[i][0]==tablero[i][2])
            return tablero[i][0];

        // Comprobar columna (vertical)
        if(tablero[0][i]!=0 && tablero[0][i]==tablero[1][i] && tablero[0][i]==tablero[2][i])
            return tablero[0][i];
    }

    // Comprobar diagonal
    if(tablero[0][0]!=0 && tablero[0][0]==tablero[1][1] && tablero[0][0]==tablero[2][2])
        return tablero[0][0];

    // Comprobar diagonal cruzada
    if(tablero[0][2]!=0 && tablero[0][2]==tablero[1][1] && tablero[0][2]==tablero[2][0])
        return tablero[0][2];

    return 0;
}

/**
 * Esta función determina si en el tablero hay un hueco en la posición
 * indicada por la fila y columna. Si es así, devuelve true; si no, false.
 * 
 * @param {array} tablero Array de 3x3 números indicando el estado del tablero.
 * @param {*} fila Número de fila (de 0 a 2)
 * @param {*} columna Número de columna (de 0 a 2)
 */
function hayHueco(tablero, fila, columna) {
    return false; //TODO: falta implementar la lógica
}


module.exports = {
    hayGanador,
    hayHueco
}