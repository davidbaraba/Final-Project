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

function createModal(){
    let test = document.querySelectorAll('#test');

    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = '#15263E';
            this.childNodes[1].style.display = 'none';
            this.childNodes[3].style.display = 'none';
            this.childNodes[5].style.display = 'block';
        });
        test[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = '#FAFAFA';
            this.childNodes[1].style.display = 'flex';
            this.childNodes[3].style.display = 'flex';
            this.childNodes[5].style.display = 'none';
        });
    }
}
createModal();