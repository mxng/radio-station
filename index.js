const radioDetails = document.querySelector('.radio-details');

const api_url = "https://teclead.de/recruiting/radios";

fetch(api_url)
  .then(response => response.json())
  .then((data) => {
    data.radios.forEach((radioData) => {

      radioDetails.insertAdjacentHTML('beforeend', `
        <div class="more-details d-none">
          <i class="fas fa-minus-circle"></i>
          <img src="${radioData.image}" alt="radio image">
          <i class="fas fa-plus-circle"></i>
        </div>
        <div class="radio" onClick="showDetails(event)">
          <p class="radio-name">${radioData.name}</p>
          <p class="radio-fm">${radioData.frequency}</p>
        </div>
        `)

    });
  });
