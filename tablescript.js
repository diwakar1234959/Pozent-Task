const tableaArr = [
    {
        id: 123,
        name: 'Mani',
        status: 'Available',
        shift: 'morning',
        statuscolor: 'green'
    },
    {
        id: 456,
        name: 'Sita',
        status: 'Occupied',
        shift: 'Afternoon',
        statuscolor: 'yellow'
    },
    {
        id: 345,
        name: 'Sam',
        status: 'Available',
        shift: 'Evening',
        statuscolor: 'green'
    },
    {
        id: 567, 
        name: 'Leo', 
        status: 'Unavailable',
        shift: 'Morning', 
        statuscolor: 'red'
    },
    {
        id: 789,
        name: 'Kumar',
        status: 'Occupied',
        shift: 'Night',
        statuscolor: 'yellow'
    },
    {
        id: 780, 
        name: 'Ceasar', 
        status: 'Occupied',
        shift: 'Afternoon',
        statuscolor: 'yellow' 
    },
    {
        id: 890,
        name: 'Abdul',
        status: 'Unavailable',
        shift: 'Morning',
        statuscolor: 'red'
    },
    {
        id: 566, 
        name: 'Das', 
        status: 'Available',
        shift: 'Evening',
        statuscolor: 'green' 
    },
]



document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('table-body')

    
    tableaArr.forEach(item => {
        const row = document.createElement('tr')
        row.innerHTML = `   
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>
            <div style="display: flex; align-items: center;">
              <div style="width: 10px; height: 10px; background-color: ${item.statuscolor}; margin-right: 5px;"></div>
              <span>${item.status}</span>
            </div>
          </td>
          <td>${item.shift}</td>
        `
        tableBody.appendChild(row)
    })
});

