function createMainSlider(){
    let sliderImageArray = [
        'images/slider1.jpg',
        'images/slider2.jpg',
        'images/slider3.jpg'
    ]
    
    let currentSlideIndex = 1;
    
    let slider = document.getElementById('sectionSlider');
    
    createSlide();
    // setInterval(() => {
        currentSlideIndex++;
        if(currentSlideIndex > sliderImageArray.length - 1) currentSlideIndex = 0;
        createSlide();
    // }, 5000);
    
    function createSlide(){
        slider.style.backgroundImage = 'url(' + sliderImageArray[currentSlideIndex] + ')';
    }
}
createMainSlider();