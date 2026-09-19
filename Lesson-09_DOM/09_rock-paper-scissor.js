

        // let scores = {
        //     win : 0,
        //     lose : 0,
        //     tie : 0,
        // };

        let scores = JSON.parse(localStorage.getItem('scoresLocal'));

        if(scores === null){
            scores = {
            win : 0,
            lose : 0,
            tie : 0,
            }
        };


        function scoreElemUpdate(){
            document.querySelector('.js-score')
              .innerHTML = `Wins: ${scores.win}  Loses: ${scores.lose}   Ties: ${scores.tie}`;
        }

        function compMovePicking(){
            const randNum = Math.random();
            let compPick = ' ';
            if(randNum >= 0 && randNum < 1/3){
                compPick = 'Rock';
            }
            else if(randNum >= 1/3 && randNum < 2/3){
                compPick = 'Paper'
            }
            else{
                compPick = 'Scissor';
            }

            return compPick;
        }

        function resultDecide(RPS){

            const compMove = compMovePicking();
            let result = ' ';

            if(RPS === 'Rock'){                   
                if(compMove === 'Rock' ){
                    result = 'Tie';
                }
                else if(compMove === 'Paper'){
                    result = 'You Lose';
                } else {
                    result = 'You Won';
                }
            }
            else if(RPS === 'Paper'){
                if(compMove === 'Rock' ){
                    result = 'You Won';
                }
                else if(compMove === 'Paper'){
                    result = 'Tie';
                } else {
                    result = 'You Lose';
                }
            }
            
            else if(RPS === 'Scissor'){
                if(compMove === 'Rock' ){
                    result = 'You Lose';
                }
                else if(compMove === 'Paper'){
                    result = 'You Won';
                } else {
                    result = 'Tie';
                }

            }

            // counting winnings, loses and ties

            if(result === 'You Won'){
                scores.win++;
            }
            else if(result === 'You Lose'){
                scores.lose++;
            }
            else{
                scores.tie++;
            }

            
            // alert(`You picked ${RPS}. Computer picked ${compMove}. ${result}.
            // \nWins: ${scores.win} Loses: ${scores.lose} Ties: ${scores.tie}`);
            
            localStorage.setItem('scoresLocal', JSON.stringify(scores));

            document.querySelector('.js-moves')
            .innerHTML = `You picked:-> ${RPS}. <-> Computer picked:->  ${compMove}.`;


            document.querySelector('.js-result')
              .innerHTML = `Result: ${result}`;

            scoreElemUpdate();
        }