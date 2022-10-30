document.getElementById('add-border').addEventListener('click', function() {
    const containerBorder = document.getElementById('container');
    containerBorder.style.border = '1px solid red'
    containerBorder.style.padding = '10px'
});
document.getElementById('add-bg-color').addEventListener('click', function() {
    const bgColors = document.getElementsByClassName('friend');
    for (const color of bgColors) {
        color.style.backgroundColor = 'lightgray'
    }
});

// add friend in a div 
document.getElementById('add-friend').addEventListener('click', function() {
    const containerDiv = document.getElementById('container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h2 class="friend-name">New Friend are added</h2>
            <p>Lorem ipsum dolor sit amet.</p>
    `;
    containerDiv.appendChild(friendDiv);
})