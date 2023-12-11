const table = document.querySelector('tbody');

async function GetRentalData() {
    const response = await fetch("data/pricing.json");
    const data = await response.json();
    console.log(data.rentals);
    RentalTable(data.rentals);
}

function RentalTable(data) {
    data.forEach((rental) => {
        let row = document.createElement('tr');
        let name = document.createElement('td');
        let seats = document.createElement('td');
        let reservationHalf = document.createElement('td');
        let reservationFull = document.createElement('td');
        let walkinHalf = document.createElement('td');
        let walkinFull = document.createElement('td');

        name.innerText = rental.type;
        seats.innerText = rental.seats;
        reservationHalf.innerText = `$${rental.pricing[0].reservation[0].half}`;
        reservationFull.innerText = `$${rental.pricing[0].reservation[0].full}`;
        walkinHalf.innerText = `$${rental.pricing[1].walkin[0].half}`;
        walkinFull.innerText = `$${rental.pricing[1].walkin[0].full}`;

        row.appendChild(name);
        row.appendChild(seats);
        row.appendChild(reservationHalf);
        row.appendChild(reservationFull);
        row.appendChild(walkinHalf);
        row.appendChild(walkinFull);

        table.appendChild(row);
    })
}

GetRentalData();