const randomNum = [0,0,0,0,0];
let roller=0;

const hold = [false, false, false, false, false];

document.getElementById("rollen").addEventListener("click",RolDobbelSteen);

for(let i = 0; i < 5; i++){
    document.getElementById("dobbelsteen-" + (i+1)).addEventListener("click",function(){
        HoldDobbelSteen(this.dataset.value); 
        console.log(this.dataset.value);
        if(hold[i] == false){
            document.getElementById("dobbelsteen-" + (i+1)).style.backgroundColor="white"
        } else{
            if(hold[i] == true){
                document.getElementById("dobbelsteen-" + (i+1)).style.backgroundColor="blue"
            }
        }
    })
}
for(let i = 1; i <= 6; i++){
    document.getElementById("punten-" + (i)).addEventListener("click",function(){
Checknumber(this.dataset.value);
console.log(this.dataset.value);
    })

}

    document.getElementById("punten-7").addEventListener("click",function(){
ThreeAKind(this.dataset.value);
console.log(this.dataset.value);
Score2();
    })



    document.getElementById("punten-8") .addEventListener("click",function(){
FourAKind(this.dataset.value);
console.log(this.dataset.value);
Score2();
    })

    
    document.getElementById("punten-12") .addEventListener("click",function(){
        YAHTZEE(this.dataset.value);
        console.log(this.dataset.value);
        Score2();
            })
        

            document.getElementById("punten-9") .addEventListener("click",function(){
                FullHuis(this.dataset.value);
                console.log(this.dataset.value);
                Score2();
                    })
                
        
                    document.getElementById("punten-11") .addEventListener("click",function(){
                        BigStraight(this.dataset.value);
                        console.log(this.dataset.value);
                        Score2();
                            })
                        

                            document.getElementById("punten-10") .addEventListener("click",function(){
                                SmallStraight(this.dataset.value);
                                console.log(this.dataset.value);
                                Score2();
                                    })
                                
        
                                    document.getElementById("punten-13") .addEventListener("click",function(){
                                        FreeDom(this.dataset.value);
                                        console.log(this.dataset.value);
                                        Score2();
                                            })
                                            
                                        
                



function RolDobbelSteen() {


    switch (roller){
        case 0:
          roller +=1;
          document.getElementById("left").innerHTML="Rolls left : 2"
            break;

        case 1:
            roller +=1;
            document.getElementById("left").innerHTML="Rolls left : 1"
        break;
           
        case 2:
            roller += 1;
            document.getElementById("left").innerHTML="Rolls left : 0"
        break;
        
        case 3:
            roller +=1;
            
            

            
         }
         if(roller == 4){
             document.removeEventListener("click", RolDobbelSteen)
         } else{
            for(let i = 0; i < 5; i++){
                if ( !hold[i] ){  
                    randomNum[i] = Math.round(Math.random() * 5 + 1)
                    document.getElementById("dobbelsteen-" + (i+1)).style.backgroundImage = "url('dice" + (randomNum[i] - 1)+ ".png')"
                }
                
                
            }
         }
        
        
    }
  
       
       
    

    function rolBack(){
     roller = 0;
    }


function HoldDobbelSteen(nummer){
hold[nummer]= !hold[nummer]; 
}

function Checknumber(checknumber){
    let totaal = 0;
    for(let i = 0; i < 5; i++){
        if(randomNum[i] == checknumber){
            totaal += parseInt(checknumber);
        }
    }
    document.getElementById("punten-"+checknumber).innerHTML = totaal;
    rolBack();
    Score();
    Score2();
    
}


function Score(){
    let totaal = 0;
   
    for(let i = 1; i <= 6; i++){
        totaal += parseInt(document.getElementById("punten-"+ i).innerHTML)
    }
    document.getElementById("totaal-1").innerHTML= totaal;
    extraBonus(totaal);
    FinalTotal();
    }



function Score2(){
        let totaal = 0;
        for(let i = 7; i <= 13; i++){
            totaal += parseInt(document.getElementById("punten-"+ i).innerHTML)
        }
        document.getElementById("totaal-4").innerHTML= totaal;
        FinalTotal();
        rolBack();
        }
        

        

function FinalTotal(){
    let totaal = 0;
    for(let i = 3; i <= 4; i++){
        totaal += parseInt(document.getElementById("totaal-"+ i).innerHTML)
    }
    document.getElementById("totaal-5").innerHTML= totaal;
    }
    




function extraBonus(totaal){
        if(totaal >= 4){
            totaal += 35;
            document.getElementById("bonus").innerHTML = 35;
        }
        document.getElementById("totaal-2").innerHTML = totaal;
        document.getElementById("totaal-3").innerHTML = totaal;
        }




  //Het kan beter. Maar voor nu wil ik er klaar van zijn.
  // three of a kind
function ThreeAKind(){

for(let j = 1; j <= 6; j++ ){
let sameThree= 0;
for( let i= 0; i < 5; i++){
if(randomNum[i] == j){
sameThree++;

}
}

if(sameThree == 3){
    console.log("Three of a kind" + j);
    document.getElementById("punten-7").innerHTML = JSON.stringify(j*3);
}
}
}

// Four a kind
function FourAKind(){

    for(let j = 1; j <= 6; j++ ){
    let sameFour= 0;
    for( let i= 0; i < 5; i++){
    if(randomNum[i] == j){
    sameFour++;
    
    }
    }
    if(sameFour == 4){
        console.log("Four of a kind" + j);
        document.getElementById("punten-8").innerHTML = JSON.stringify(j*4);
    }
    }
    }

    //YAHTZEE

    
function YAHTZEE(){

    for(let j = 1; j <= 6; j++ ){
    let sameFive= 0;
    for( let i= 0; i < 5; i++){
    if(randomNum[i] == j){
    sameFive++;
    
    }
    }
    if(sameFive == 5){
        console.log("YAHTZEE" + j);
        document.getElementById("punten-12").innerHTML = JSON.stringify(50);
    }
    }
}


//full house
    	function FullHuis(){
            let SameThree = false;
            let SameTwos = false;
            
            for( let i = 1 ; i <= 6; i++){
                let AmountSame = 0;
                for( let g = 0; g < 5; g++){
            if(randomNum[g] == i){
                AmountSame++;
            
            }
                }
                if(AmountSame == 3){
                    SameThree = true;
                }
            }
            
            let SameTwo = 0;
            for (let i = 1; i <= 6 ; i++){
                SameTwo= 0;
            for( j = 0; j < 5; j++){
                if(randomNum[j] == i){
                    SameTwo++;
                }
            }
            if(SameTwo == 2){
            SameTwos = true;
            }
            }
            if(SameThree && SameTwos){
                console.log("fullhouse")
                document.getElementById("punten-9").innerHTML = JSON.stringify( 25)
            }
}

// Long Straight
function BigStraight(){
    let Grotestraight= [6];

    for(let i = 1; i <= 6; i++){
        for( let j = 0; j < 5; j++){
            if(randomNum[j] == i){
                Grotestraight[i - 1] = 1;
            } 
        }
    }
    let backTwoBack = 0;
    for(let i = 1; i <= 6; i++){
        if(Grotestraight[i] == 1){
            backTwoBack++;
        }else{
            backTwoBack = 0;
        }
        if(backTwoBack == 5){
            console.log("Long Straight");
            document.getElementById("punten-11").innerHTML = JSON.stringify( 40)
        }
}
}


// small Straight
function SmallStraight(){
    let Kleinestraight= [6];

    for(let i = 1; i <= 6; i++){
        for( let j = 0; j < 5; j++){
            if(randomNum[j] == i){
                Kleinestraight[i - 1] = 1;
            } 
        }
    }
    let backTwoBack = 0;
    for(let i = 1; i <= 6; i++){
        if(Kleinestraight[i] == 1){
            backTwoBack++;
        }else{
            backTwoBack = 0;
        }
        if(backTwoBack == 4){
            console.log("Small Straight");
            document.getElementById("punten-10").innerHTML = JSON.stringify( 30)
        }
}
}


// vrije keuzen
function FreeDom(){
    var sum = randomNum.reduce(function(a,b){
        return a+b;
    },0);
    console.log("free");
    document.getElementById("punten-13").innerHTML = JSON.stringify(sum)
}