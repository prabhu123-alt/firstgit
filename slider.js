const images = document.querySelectorAll(".image");
let counter = 0;


images.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    slidImage();
};

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = images.length - 1; 
    }
    slidImage();
};

const slidImage = () => {
    images.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
document.getElementById('nextButton').addEventListener('click', goNext);
document.getElementById('prevButton').addEventListener('click', goPrev);
