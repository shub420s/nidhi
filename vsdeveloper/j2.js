// script.js
document.getElementById('load-bus-info').addEventListener('click', function() {
    const busList = document.getElementById('bus-list');
    busList.innerHTML = ''; // Clear previous entries

    // Sample bus data
    const buses = [
        { number: 'HR-01', route: 'Ambala to Chandigarh' },
        { number: 'HR-02', route: 'Hisar to Delhi' },
        { number: 'HR-03', route: 'Rohtak to Gurgaon' }
    ];

    buses.forEach(bus => {
        const listItem = document.createElement('li');
        listItem.textContent = `${bus.number}: ${bus.route}`; // Corrected line
        busList.appendChild(listItem);
    });
});