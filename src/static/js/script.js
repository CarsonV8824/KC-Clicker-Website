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