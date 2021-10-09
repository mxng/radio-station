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
        <div class="radio">
          <p class="radio-name">${radioData.name}</p>
          <p class="radio-fm">${radioData.frequency}</p>
        </div>
        `)
      });

      // Hides all the images first, then display the selected one
      const showDetails = (event) => {
        const allPlayingDisp = document.querySelectorAll(".more-details");

        allPlayingDisp.forEach((detail) => {
          detail.classList.add("d-none");
        });

        const playingDisplay = event.currentTarget.previousElementSibling;
        playingDisplay.classList.remove('d-none');

        const currentlyPlayingDetails = document.querySelector('.currently-playing-details');
        currentlyPlayingDetails.classList.remove('d-none');

        const currentlyPlayingName = event.currentTarget.querySelector('.radio-name').innerText;
        const playingRadioName = currentlyPlayingDetails.querySelector('.playing-radio-name');
        playingRadioName.innerText = currentlyPlayingName;
      };

      // Makes all the elements with class 'radio' clickable
      const radios = document.querySelectorAll('.radio');
      radios.forEach((radio) => {
        radio.addEventListener('click', showDetails);
      });
    });
