//sending dice click to python
const main_dice_button = document.getElementById('main-click-dice-button');

main_dice_button.addEventListener('click', () => {
    fetch('/get_dice_click_from_js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ click: true })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dice click registered:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

//getting dice count from python

const diceCountSpan = document.getElementById('dice-count-span');

function updateDiceCount() {
  fetch('/get_dice_info_from_py')
    .then(res => res.json())
    .then(data => {
      diceCountSpan.textContent = `${data.count} (User: ${data.username})`;
    })
    .catch(err => console.error('Error fetching dice count:', err));
}

setInterval(updateDiceCount, 5000); // Update every 5 seconds
updateDiceCount(); // Initial call to set the count immediately