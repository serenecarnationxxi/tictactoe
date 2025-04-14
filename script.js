
let currentPlayer = 'O';
let winner = '';

let  button_one_status = '';
let  button_two_status = '';
let  button_three_status = '';
let  button_four_status = '';
let  button_five_status = '';
let  button_six_status = '';
let  button_seven_status = '';
let  button_eight_status = '';
let  button_nine_status = '';

const buttonStatuses = [
    button_one_status,
    button_two_status,
    button_three_status,
    button_four_status,
    button_five_status,
    button_six_status,
    button_seven_status,
    button_eight_status,
    button_nine_status
  ];

let button_click_count = 0;




const winner_sound = new Audio('winner_sound.wav');
const no_winner_sound = new Audio('no_winner_sound.wav');
const click_sound = new Audio('click.wav');

const cells = document.querySelectorAll('.button');

const button_one = document.getElementById('one');
const button_two = document.getElementById('two');
const button_three = document.getElementById('three');
const button_four = document.getElementById('four');
const button_five = document.getElementById('five');
const button_six = document.getElementById('six');
const button_seven = document.getElementById('seven');
const button_eight = document.getElementById('eight');
const button_nine = document.getElementById('nine');

const button_reset = document.getElementById('button_reset')

const announcer = document.getElementById('announcer');




button_reset.addEventListener('click',() => {
    resetTable();

});

function resetTable (){
    announcer.textContent = 'Player X turn!'
    announcer.style.color = 'lightgreen';
    announcer.style.fontSize = '20px';

    button_one.textContent = '';
    button_two.textContent = '';
    button_three.textContent = '';
    button_four.textContent = '';
    button_five.textContent = '';
    button_six.textContent = '';
    button_seven.textContent = '';
    button_eight.textContent = '';
    button_nine.textContent = '';

    button_one.style.backgroundColor = 'white';
    button_two.style.backgroundColor = 'white';
    button_three.style.backgroundColor = 'white';
    button_four.style.backgroundColor = 'white';
    button_five.style.backgroundColor = 'white';
    button_six.style.backgroundColor = 'white';
    button_seven.style.backgroundColor = 'white';
    button_eight.style.backgroundColor = 'white';
    button_nine.style.backgroundColor = 'white';

    button_one.disabled = false;
    button_two.disabled = false;
    button_three.disabled = false;
    button_four.disabled = false;
    button_five.disabled = false;
    button_six.disabled = false;
    button_seven.disabled = false;
    button_eight.disabled = false;
    button_nine.disabled = false;

    button_one_status = '';
    button_two_status = '';
    button_three_status = '';
    button_four_status = '';
    button_five_status = '';
    button_six_status = '';
    button_seven_status = '';
    button_eight_status = '';
    button_nine_status = '';

    button_click_count = 0;

}




 



// Add event listeners to each cell
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // Check if cell is already filled
    click_sound.play();
    cell.disabled = true;
    if (cell.textContent === '') {
      // Mark the cell with the current player's symbol
      cell.textContent = currentPlayer;
      

    if (currentPlayer === 'X') {
      cell.style.backgroundColor = 'lightgreen'; // X is lightgreen
      cell.style.color = 'white'; // Optional: Ensure text color contrasts well
      announcer.textContent = 'Player X Turn!'
      announcer.style.color = 'red';
    } else if (currentPlayer === 'O'){
      cell.style.backgroundColor = 'red'; // O is red
      cell.style.color = 'white'; // Optional: Ensure text color contrasts well
      announcer.textContent = 'Player O Turn!'
      announcer.style.color = 'lightgreen';
    }
      
      // Alternate the player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle between 'X' and 'O'
        
      
    

    }

    
  });
});

button_one.addEventListener('click',() => {
    button_one.textContent = currentPlayer;
    button_one_status = currentPlayer;
    console.log('Button 1: ', button_one_status);
    button_click_count += 1;

    checkForWinner();

});

button_two.addEventListener('click', () => {
    button_two.textContent = currentPlayer;
    button_two_status = currentPlayer;
    console.log('Button 2: ', button_two_status);
    button_click_count += 1;

    checkForWinner();
});

button_three.addEventListener('click', () => {
    button_three.textContent = currentPlayer;
    button_three_status = currentPlayer;
    console.log('Button 3: ', button_three_status);
    button_click_count += 1;

    checkForWinner();
});

button_four.addEventListener('click', () => {
    button_four.textContent = currentPlayer;
    button_four_status = currentPlayer;
    console.log('Button 4: ', button_four_status);
    button_click_count += 1;

    checkForWinner();

});

button_five.addEventListener('click', () => {
    button_five.textContent = currentPlayer;
    button_five_status = currentPlayer;
    console.log('Button 5: ', button_five_status);
    button_click_count += 1;

    checkForWinner();

});

button_six.addEventListener('click', () => {
    button_six.textContent = currentPlayer;
    button_six_status = currentPlayer;
    console.log('Button 6: ', button_six_status);
    button_click_count += 1;

    checkForWinner();

});

button_seven.addEventListener('click', () => {
    button_seven.textContent = currentPlayer;
    button_seven_status = currentPlayer;
    console.log('Button 7: ', button_seven_status);
    button_click_count += 1;

    checkForWinner();

});

button_eight.addEventListener('click', () => {
    button_eight.textContent = currentPlayer;
    button_eight_status = currentPlayer;
    console.log('Button 8: ', button_eight_status);
    button_click_count += 1;

    checkForWinner();

});

button_nine.addEventListener('click', () => {
    button_nine.textContent = currentPlayer;
    button_nine_status = currentPlayer;
    console.log('Button 9: ', button_nine_status);
    button_click_count += 1;

    checkForWinner();

});

function checkForWinner (){
    if (button_one_status == button_two_status && button_one_status == button_three_status && button_one_status.length != 0){
    console.log('Winner:', button_one_status);
    

    displayWinner(button_one_status);

    }
    else if (button_four_status == button_five_status && button_four_status == button_six_status && button_four_status.length != 0){
        console.log('Winner:', button_four_status);
        displayWinner(button_four_status);
    }
    else if (button_seven_status == button_eight_status && button_seven_status == button_nine_status && button_seven_status.length != 0){
        console.log('Winner:', button_seven_status);
        displayWinner(button_seven_status);
    }


    else if (button_one_status == button_four_status && button_one_status == button_seven_status && button_one_status.length != 0){
        console.log('Winner:', button_one_status);
        displayWinner(button_one_status);
    }
    else if (button_two_status == button_five_status && button_two_status == button_eight_status && button_two_status.length != 0){
        console.log('Winner:', button_two_status);
        displayWinner(button_two_status);
    }
    else if (button_three_status == button_six_status && button_three_status == button_nine_status && button_three_status.length != 0){
        console.log('Winner:', button_three_status);
        displayWinner(button_three_status);
    }


    else if (button_one_status == button_five_status && button_one_status == button_nine_status && button_one_status.length != 0){
        console.log('Winner:', button_one_status);
        displayWinner(button_one_status);
    }
    else if (button_three_status == button_five_status && button_three_status == button_seven_status && button_three_status.length != 0){
        console.log('Winner:', button_three_status);
        displayWinner(button_three_status);
    }

    else if (button_click_count == 9){
        announcer.textContent = 'No WINNER :(';
        announcer.style.color = 'rgb(128, 128, 128)';
        no_winner_sound.play();
    }
    else {
        console.log('No Winner Yet');

    }
    
}

function displayWinner(winner){
    announcer.textContent = 'Winner: '+ winner;
    announcer.style.color = 'rgb(254, 148, 0)';
    announcer.style.fontSize = '40px';
    winner_sound.play();
}