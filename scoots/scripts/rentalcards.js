const rentalSpace = document.querySelector('#rentalSpace');

async function GetRentalData() {
    const response = await fetch("data/pricing.json");
    const data = await response.json();
    ConstructCards(data.rentals);
}

function ConstructCards(data) {
    data.forEach((rental) => {
        let card = document.createElement('section');
        let name = document.createElement('p');
        let image = document.createElement('img');
        let other = document.createElement('p');
        let seats = document.createElement('p');
        let info = document.createElement('div');
        let reservationHalf = document.createElement('p');
        let reservationFull = document.createElement('p');
        let walkinHalf = document.createElement('p');
        let walkinFull = document.createElement('p');

        name.innerText = rental.type;

        image.setAttribute('src', `images/${rental.img}`);
        image.setAttribute('width', '500');
        image.setAttribute('height', '360');
        image.setAttribute('alt', `Picture of ${rental.type}.`);

        other.innerHTML = rental.info;
        seats.innerHTML = `Max Persons: ${rental.seats}`;

        reservationHalf.innerHTML = `Reservation<br>Half Day (3h)<br>$${rental.pricing[0].reservation[0].half}`;
        reservationFull.innerHTML = `Reservation<br>Full Day<br>$${rental.pricing[0].reservation[0].full}`;
        walkinHalf.innerHTML = `Walk-In<br>Half Day (3h)<br>$${rental.pricing[1].walkin[0].half}`;
        walkinFull.innerHTML = `Walk-In<br>Half Day<br>$${rental.pricing[1].walkin[0].full}`;

        info.appendChild(seats);
        info.appendChild(other);
        info.appendChild(reservationHalf);
        info.appendChild(reservationFull);
        info.appendChild(walkinHalf);
        info.appendChild(walkinFull);

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(info);
        card.setAttribute('class', 'rentalcard hover')

        rentalSpace.appendChild(card);
    });
}

GetRentalData();