// Add Guitar functionality (only for add.html)
if (document.getElementById('add-button')) {
    document.getElementById('add-button').addEventListener('click', () => {
        const guitar = {
            serialNumber: document.getElementById('serial-number').value,
            price: document.getElementById('price').value,
            builder: document.getElementById('builder').value,
            model: document.getElementById('model').value,
            type: document.getElementById('type').value,
            backWood: document.getElementById('back-wood').value,
            topWood: document.getElementById('top-wood').value,
        };

        alert(JSON.stringify(guitar, null, 2)); // Display JSON data
    });
}

// Search Guitar functionality (only for search.html)
if (document.getElementById('search-button')) {
    const guitars = [
        { serialNumber: '123', builder: 'Fender', model: 'Stratocaster', type: 'Electric', backWood: 'Alder', topWood: 'Maple', price: '$1500' },
        { serialNumber: '456', builder: 'Gibson', model: 'Les Paul', type: 'Electric', backWood: 'Mahogany', topWood: 'Maple', price: '$2500' },
        { serialNumber: '789', builder: 'Martin', model: 'D-28', type: 'Acoustic', backWood: 'Rosewood', topWood: 'Spruce', price: '$3000' },
        { serialNumber: '101', builder: 'Taylor', model: '314ce', type: 'Acoustic', backWood: 'Sapele', topWood: 'Spruce', price: '$2000' },
        { serialNumber: '112', builder: 'Ibanez', model: 'RG550', type: 'Electric', backWood: 'Basswood', topWood: 'Maple', price: '$1200' },
    ];

    // Handle "Search Guitar"
    document.getElementById('search-button').addEventListener('click', () => {
        const builder = document.getElementById('builder').value.trim().toLowerCase();
        const model = document.getElementById('model').value.trim().toLowerCase();
        const type = document.getElementById('type').value.trim().toLowerCase();
        const backWood = document.getElementById('back-wood').value.trim().toLowerCase();
        const topWood = document.getElementById('top-wood').value.trim().toLowerCase();

        const tbody = document.querySelector('#results-table tbody');

        // Clear previous results
        tbody.innerHTML = '';

        // Filter guitars based on search criteria
        const filteredGuitars = guitars.filter((guitar) => {
            return (
                (builder === '' || guitar.builder.toLowerCase().includes(builder)) &&
                (model === '' || guitar.model.toLowerCase().includes(model)) &&
                (type === '' || guitar.type.toLowerCase().includes(type)) &&
                (backWood === '' || guitar.backWood.toLowerCase().includes(backWood)) &&
                (topWood === '' || guitar.topWood.toLowerCase().includes(topWood))
            );
        });

        // Display results or show "Invalid" popup
        if (filteredGuitars.length > 0) {
            filteredGuitars.forEach((guitar) => {
                const row = `<tr>
                    <td>${guitar.serialNumber}</td>
                    <td>${guitar.builder}</td>
                    <td>${guitar.model}</td>
                    <td>${guitar.type}</td>
                    <td>${guitar.backWood}</td>
                    <td>${guitar.topWood}</td>
                    <td>${guitar.price}</td>
                </tr>`;
                tbody.innerHTML += row;
            });
        } else {
            alert('Invalid search criteria');
        }
    });
}
