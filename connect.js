document.addEventListener('DOMContentLoaded', () => {
    
    let playerOneTurn = true
    
    

    //player 1 is red
    //player 2 is yellow


    //Getting elements and assigning them to a variable to be able to select the whole row or column if needed

    const columnSelect0 = document.getElementById('C0');
    const columnSelect1 = document.getElementById('C1');
    const columnSelect2 = document.getElementById('C2');
    const columnSelect3 = document.getElementById('C3');
    const columnSelect4 = document.getElementById('C4');
    const columnSelect5 = document.getElementById('C5');
    const columnSelect6 = document.getElementById('C6');
    const column0 = document.querySelectorAll('.column0');
    const column1 = document.getElementsByClassName('column1');
    const column2 = document.getElementsByClassName('column2');
    const column3 = document.getElementsByClassName('column3');
    const column4 = document.getElementsByClassName('column4');
    const column5 = document.getElementsByClassName('column5');
    const column6 = document.getElementsByClassName('column6');
    // const resetButton = document.getElementsByClassName('restart');

    // const displayPlayer1 = document.querySelector('#player-turn')
    // const displayPlayer2 = document.querySelector('#player-turn-two')
    // const image1 = document.createElement('img')
    // image1.src = '/Images/controller.png'


    const allDivs = document.querySelectorAll('#container-board div');

    // console.log(allDivs)


    //I want to display current player chip up top when hovering over its respective column ✔
    //If player1 turn display their color and vice versa ✔
    //Try a for loop to iterate through each one to avoid writing the same code for each column (come back when project finish.
    // see if I can implement and make code DRYer)

    for (let i = 0; i < column0.length; i++) {

        column0[i].addEventListener('mouseenter', function() {

            playerOneTurn ? columnSelect0.style.backgroundColor= 'red' : columnSelect0.style.backgroundColor= "yellow"
            columnSelect0.style.opacity = "1";
    
        })

        column0[i].addEventListener('mouseout', function () {
            // columnSelect0.style.backgroundColor= 'white'
            columnSelect0.style.opacity= "0"
        })
    }

    for (let i = 0; i < column1.length; i++) {

    column1[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect1.style.backgroundColor= 'red' : columnSelect1.style.backgroundColor= "yellow"
    columnSelect1.style.opacity= "1"
    
    })

    column1[i].addEventListener('mouseout', function () {
    columnSelect1.style.opacity = "0";
    })
    }

    for (let i = 0; i < column2.length; i++) {

    column2[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect2.style.backgroundColor= 'red' : columnSelect2.style.backgroundColor= "yellow"
    columnSelect2.style.opacity= "1"
    
    })

    column2[i].addEventListener('mouseout', function () {
    // columnSelect2.style.backgroundColor= 'white'
    columnSelect2.style.opacity= "0"
    })
    }

    for (let i = 0; i < column3.length; i++) {

    column3[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect3.style.backgroundColor= 'red' : columnSelect3.style.backgroundColor= "yellow"
    columnSelect3.style.opacity= "1"
    
    })

    column3[i].addEventListener('mouseout', function () {
    // columnSelect3.style.backgroundColor= 'white'
    columnSelect3.style.opacity= "0"
    })
    }

    for (let i = 0; i < column4.length; i++) {

    column4[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect4.style.backgroundColor= 'red' : columnSelect4.style.backgroundColor= "yellow"
    columnSelect4.style.opacity= "1"
    
    })

    column4[i].addEventListener('mouseout', function () {
    // columnSelect4.style.backgroundColor= 'white'
    columnSelect4.style.opacity= "0"
    })
    }

    for (let i = 0; i < column5.length; i++) {

    column5[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect5.style.backgroundColor= 'red' : columnSelect5.style.backgroundColor= "yellow"
    columnSelect5.style.opacity= "1"
    
    })

    column5[i].addEventListener('mouseout', function () {
    // columnSelect5.style.backgroundColor= 'white'
    columnSelect5.style.opacity= "0"

    })
    }

    for (let i = 0; i < column6.length; i++) {

    column6[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect6.style.backgroundColor= 'red' : columnSelect6.style.backgroundColor= "yellow"
    columnSelect6.style.opacity= "1"
    
    })

    column6[i].addEventListener('mouseout', function () {
    // columnSelect6.style.backgroundColor= 'blue'
    columnSelect6.style.opacity= "0"
    })
    }

    // resetButton.addEventListener("click", restart())

    // function restart() {
        
    //     for (let i = 0; i < allDivs.length; i++) {

    //         if (allDivs[i].classList.contains('empty')) {

    //             allDivs[i].classList.remove('occupied')
    //             allDivs[i].classList.remove("player-one")
    //             allDivs[i].classList.remove('player-two')
    //         }     
    //     }
    // }




    //Display logo for whos turn it is

    // playerOneTurn ? displayPlayer1.innerHTML= <img src="Images/controller.png"></img> : displayPlayer2.innerHTML= <img src="Images/controller.png"></img>
 
    // Depending on Player if click on column fill next available empty div. Add the class occupied.

    for (let i = 0; i < allDivs.length; i++) {
      
        allDivs[i].addEventListener('click', () => {

            if (allDivs[i + 7].classList.contains('occupied')){

                if (playerOneTurn === true) {

                    

                    if (allDivs[i].classList.contains('occupied')) {
                        
                        playerOneTurn = true
                        alert('Circle already selected! Select a different circle.')
                        

                    } else {
                        
                        allDivs[i].classList.add('occupied')
                        allDivs[i].classList.add('player-one')
                        checkForWinner()                        
                    
                        playerOneTurn = false
                    }
                    

                } else { 

                    if (allDivs[i].classList.contains('occupied')) {
                        
                        playerOneTurn = false
                        alert('Circle already selected! Select a different circle.')
                        

                        } else {
                    
                        allDivs[i].classList.add('occupied')
                        allDivs[i].classList.add('player-two')
                        checkForWinner()
                    
                        playerOneTurn = true
                    }
                }

            } else {

                alert('Can\'t go here! Select a different circle.')
            }
        })
        
    }
       
    //Game Logic to determine if there is a winner   
      
       
       
       
    // ARRAY OF WINNING Combos
    // console log allDivs and check array positions 

    const winningCombos = [

        //First Row
        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6],
        
        //Second Row
        [7, 8, 9, 10],
        [8, 9, 10, 11],
        [9, 10, 11, 12],
        [10, 11, 12, 13],

        //Third Row
        [14, 15, 16, 17],
        [15, 16, 17, 18],
        [17, 18, 19, 20],
        [18, 19, 20, 21],

        //Fourth Row
        [21, 22, 23, 24],
        [22, 23, 24, 25],
        [23, 24, 25, 26],
        [24, 25, 26, 27],

        //Sixth Row
        [35, 36, 37, 38],
        [36, 37, 38, 39],
        [37, 38, 39, 40],
        [38, 39, 40, 41],

        //First Column
        [0, 7, 14, 21],
        [7, 14, 21, 28],
        [14, 21, 28, 35],
        
        //Second Column
        [1, 8, 15, 22],
        [8, 15, 22, 29],
        [15, 22, 29, 36],

        //Third Column
        [2, 9, 16, 23],
        [9, 16, 23, 30],
        [16, 23, 30, 37],

        //Fourth Column
        [3, 10, 17, 24],
        [10, 17, 24, 31],
        [17,24, 31, 38],

        //Fifth Column
        [4, 11, 18, 25],
        [11, 18, 25, 32],
        [18, 25, 32, 39],

        //Sixth Column
        [5, 12, 19, 26],
        [12, 19, 26, 33],
        [19, 26, 33, 40],

        //Seventh column
        [6, 13, 20, 27],
        [13, 20, 27, 34],
        [20, 27, 34, 41],

        //Diagonal Top Left
        [0, 8, 16, 24],
        [8 ,16, 24, 32],
        [16, 24, 32, 40],
        
        [7, 15, 23, 31],
        [15, 23, 31, 39],
        [14, 22, 30, 38],

        [1, 9, 17, 25],
        [9, 17, 25, 33],
        [17, 25, 33, 41],
        
        [2, 10, 18, 26],
        [10, 18, 26, 34],
        [3, 11, 19, 27],

        //Diagonal Bottom Left
        [35, 29, 23, 17],
        [29, 23, 17, 11],
        [23, 17, 11, 5],

        [28, 22, 16, 10],
        [22, 16, 10, 4],
        [21, 15, 9, 3],

        [36, 30, 24, 18],
        [30, 24, 18, 12],
        [24, 18, 12, 6]
    ]

    // console.log(allDivs)
    
    
    function checkForWinner() {
        //Check allDivs against the winningCombos

        for (let i = 0; i < winningCombos.length; i++) {

            const circleOne = allDivs[winningCombos[i][0]]
            const circleTwo = allDivs[winningCombos[i][1]]
            const circleThree = allDivs[winningCombos[i][2]]
            const circleFour = allDivs[winningCombos[i][3]]

            if (
                circleOne.classList.contains('player-one') &&
                circleTwo.classList.contains('player-one') &&
                circleThree.classList.contains('player-one') &&
                circleFour.classList.contains('player-one')) {

                alert('Player One Wins')
            }

            if (
                circleOne.classList.contains('player-two') &&
                circleTwo.classList.contains('player-two') &&
                circleThree.classList.contains('player-two') &&
                circleFour.classList.contains('player-two')) {

                alert('Player Two Wins')
             
                
            }

        }
    }
       
      
       
   

                   
        
    

})