// Counted how many players already selected
const howManyPlayersSelected = document.getElementById('selected-player-list').childElementCount;
// checked if selected players valur = 5 if yes return true
function top5playerCheck(){
    if(howManyPlayersSelected===5){
        alert('Already 5 players selected');
        return true;
    }
}
// sets player name that has been chosen
function setChosenPlayer(playerName){
    const createList = document.createElement('li');
    createList.innerText = playerName;
    const orderedList = document.getElementById('selected-player-list');
    orderedList.append(createList);
}
// top5playerCheck();
document.getElementById('btn-messi').addEventListener('click',function(){
    if(top5playerCheck()){
        return;
    }
    setChosenPlayer("Lionel Messi");
    document.getElementById('btn-messi').style.backgroundColor = 'grey';
    document.getElementById('btn-messi').setAttribute('disabled','true');
})