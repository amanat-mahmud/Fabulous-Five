// Counts how many players already selected
let howManyPlayersSelected = 0;

// checked if selected players value = 5 if yes return true
function top5playerCheck(){
    if(howManyPlayersSelected>=6){
        alert('Already 5 players selected');
        return true;
    }
    else return false;
}

// sets player name that has been chosen
function setChosenPlayer(playerName){
    const createList = document.createElement('li');
    createList.innerText = playerName;
    const orderedList = document.getElementById('selected-player-list');
    orderedList.append(createList);
}

// disables and changes color 0f buttons after they are clicked
function disableButton(btnId){
    const getBtn =  document.getElementById(btnId);
    getBtn.style.backgroundColor = 'grey';
    getBtn.setAttribute('disabled','true');
}

// gets value from text field
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    inputField.value= '';
    return inputFieldValue;
}

// sets text value 
function setTextValueById(textFieldId,expenseValue,isPlayerExpense){
    const textField = document.getElementById(textFieldId);
    if(isPlayerExpense===true){
        const cost = expenseValue*5;
        textField.innerText = cost;
    }
    else{
        const cost = expenseValue;
        textField.innerText = cost;
    }
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

// Select button code start
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
// Select button code end

// calculate button code
document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerCost = getInputValueById('per-player-field');
    if(isNaN(perPlayerCost)){
        alert('Please input a number');
        return;
    }
    else    {
        setTextValueById('player-expense',perPlayerCost,true);
    }
})

// calculate total button code
document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');
    if(isNaN(managerCost) || isNaN(coachCost)){
        alert('Please input a number');
        return;
    }
    else    {
        const perPlayerExpenseField = document.getElementById('player-expense');
        const playerCostString = perPlayerExpenseField.innerText;
        const playerCost = parseInt(playerCostString);
        const totalCost = playerCost+managerCost+coachCost;
        setTextValueById('total-cost',totalCost,false);
    }
})