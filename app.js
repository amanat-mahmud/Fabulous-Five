// Counted how many players already selected
let howManyPlayersSelected = 0;
// checked if selected players value = 5 if yes return true
function top5playerCheck(){
    if(howManyPlayersSelected>=6){
        alert('Already 5 players selected');
        return true;
    }
    else return false;
}
//alert('clicked');
// sets player name that has been chosen
function setChosenPlayer(playerName){
    const createList = document.createElement('li');
    createList.innerText = playerName;
    const orderedList = document.getElementById('selected-player-list');
    orderedList.append(createList);
}
// top5playerCheck();
function disableButton(btnId){
    const getBtn =  document.getElementById(btnId);
    getBtn.style.backgroundColor = 'grey';
    getBtn.setAttribute('disabled','true');
}
const buttonMessi = document.getElementById('btn-messi');
const buttonNeymar = document.getElementById('btn-neymar');
const buttonRamos = document.getElementById('btn-ramos');
const buttonMbappe = document.getElementById('btn-mbappe');
const buttonVitinha = document.getElementById('btn-vitinha');
const buttonNavas = document.getElementById('btn-navas');
const buttonIcardi = document.getElementById('btn-icardi');
const buttonAchraf = document.getElementById('btn-achraf');
const buttonIdrissa = document.getElementById('btn-idrissa');
buttonMessi.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    // console.log(howManyPlayersSelected);
    // if(howManyPlayersSelected>=6){
    //     alert('Already 5 players selected');
    //     return;
    // }
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer("Lionel Messi");
    // buttonMessi.style.backgroundColor = 'grey';
    // buttonMessi.setAttribute('disabled','true');
    disableButton('btn-messi')
})
buttonNeymar.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer('Neymar');
    disableButton('btn-neymar');
})
buttonRamos.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer('Sergio Ramos');
    disableButton('btn-ramos');
})
buttonMbappe.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer('Kylian Mbappé');
    disableButton('btn-mbappe');
})
buttonVitinha.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer('Vitinha');
    disableButton('btn-vitinha');
})
buttonNavas.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer('Keylor Navas');
    disableButton('btn-navas');
})
buttonIcardi.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer('Icardi');
    disableButton('btn-icardi');
})
buttonAchraf.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer('Achraf Hakimi');
    disableButton('btn-achraf');
})
buttonIdrissa.addEventListener('click',function(){
    howManyPlayersSelected+=1;
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer('Idrissa Gueye');
    disableButton('btn-idrissa');
})

