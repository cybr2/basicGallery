const scrollContainer = document.querySelector('.container');
const backBtn = document.querySelector('#bckBtn');
const nextBtn = document.querySelector('#nxtBtn');

scrollContainer.onwheel = (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
}

nextBtn.onclick = () => {
    scrollContainer.scrollLeft += 900;
}

backBtn.onclick = () => {
    scrollContainer.scrollLeft -= 900;
}