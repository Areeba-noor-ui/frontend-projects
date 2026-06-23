        const score=JSON.parse(localStorage.getItem('score'))||{
            wins:0,
            losses: 0,
            ties : 0,
        };

        updateScoreElement();
        
        function computerMove(){
            let ComputerSelect='';
            let RandomNum=Math.random() ; 
            if (RandomNum>=0 && RandomNum<1/3)
            ComputerSelect='rock';
            else if (RandomNum>=1/3 && RandomNum<2/3)
            ComputerSelect='paper';
            else if(RandomNum>=2/3 && RandomNum<1)
            ComputerSelect='scissor';
            return ComputerSelect;
        }

        function playGame(picked){
            let ComputerSelect= computerMove();
            let result='';
            if(picked=='rock'){
            if (ComputerSelect==='rock')
            result='Tie';
            else if (ComputerSelect==='paper')
            result='You loss';
            else 
            result='You win';
        }
        
        else if(picked=='paper'){
            if (ComputerSelect==='rock')
            result='You win';
            else if (ComputerSelect==='paper')
            result='Tie';
            else 
            result='You loss';
        }
        
        else{
            if (ComputerSelect==='rock')
            result='You loss';
            else if (ComputerSelect==='paper')
            result='You win';
            else 
            result='Tie';
        }
    
        if (result==='You win'){
            score.wins+=1;
        }
        else if (result==='You loss'){
            score.losses+=1;
        }
        else if (result==='Tie'){
            score.ties+=1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
    
        document.querySelector('.js_result').innerHTML=result;
      
        document.querySelector('.js_moves').innerHTML=`You picked ${picked} , Computer picked ${ComputerSelect}`;}
       
        function updateScoreElement() {
        document.querySelector('.js_score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function resetScore(){
        score.wins=0 , score.losses=0 , score.ties=0 ;
        alert('Score =0') ;
        localStorage.removeItem('score') ; 
        updateScoreElement()
      }
        