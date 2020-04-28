document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')

    let currentPlayer = 1

    for (var i = 0, len = squares.length; i < len; i++ ) 
        (function(index){
            //add an onclick event listner to all squares on the grid
            squares[i].onclick = function() {
                /*if square bellow your current square is taken
                , you can go ontop */
                if (squares[index + 7].classList.contains('taken')) {
                    if (currentPlayer === 1) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-one')
                        //change player
                        currentPlayer = 2
                        displayCurrentPlayer.innerHTML = currentPlayer
                    } else if (currentPlayer === 2) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-two')
                        //chage player
                        currentPlayer = 1
                        displayCurrentPlayer.innerHTML = currentPlayer
                    }
                } else alert('You can not go here') 
                /*if the square below your current is not taken
                , you can not go here */
            }
        }) (i)
})