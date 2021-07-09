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

function createServicesModal(){
    let serviceBox = document.querySelectorAll('#serviceBox');

    for (let i = 0; i < serviceBox.length; i++) {
        serviceBox[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = '#15263E';
            this.childNodes[1].style.display = 'none';
            this.childNodes[3].style.display = 'none';
            this.childNodes[5].style.display = 'block';
        });
        serviceBox[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = '#FAFAFA';
            this.childNodes[1].style.display = 'flex';
            this.childNodes[3].style.display = 'flex';
            this.childNodes[5].style.display = 'none';
        });
    }
}
createServicesModal();

let usersRecommendations = [
    {
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.",
        image: 'images/portrait1.png',
        profession: 'Full-stack Developer',
        author: 'Nick'
    },
    {
        text: "I want you to know how much we enjoy serving your hardware needs and consider you a special customer. Of course we appreciate your orders, but we also appreciate the positive lift we get from your visits. As a token of our appreciation, I am enclosing a coupon worth 10% off your next purchase. Come visit us soon.",
        image: 'images/portrait2.jpg',
        profession: 'Front-end Developer',
        author: 'Ana'
    },
    {
        text: "I want you to know how much we enjoy serving your hardware needs and consider you a special customer. Of course we appreciate your orders, but we also appreciate the positive lift we get from your visits. As a token of our appreciation, I am enclosing a coupon worth 10% off your next purchase. Come visit us soon.",
        image: 'images/portrait3.jpg',
        profession: 'Back-end Developer',
        author: 'John'
    }
]

let currentUsersRecommendations = 0;

function recommendationsSlider(){
    let recommendationsSlider = document.getElementById('recommendationsSlider');

    createBullets();
    function createBullets(){
        let div = document.createElement('div');
        div.className = 'bullet-box';
        recommendationsSlider.appendChild(div);

        for (let i = 0; i < usersRecommendations.length; i++) {
            let bullet = document.createElement('button');
            bullet.className = 'bullet';
            div.appendChild(bullet);
        }
        setActiveBullet();
    }

    function setActiveBullet(){
        let bullets = document.querySelectorAll('.bullet');
    
        for(let i = 0; i < bullets.length; i++){
            bullets[i].classList.remove('active');
            bullets[i].addEventListener('click', function(){
                setActiveSlide(i);
            })
        }
    
        bullets[currentUsersRecommendations].classList.add('active');
    }

    setActiveSlide(currentUsersRecommendations);

    function setActiveSlide(newIndex){
        currentUsersRecommendations = newIndex;

        let recommendationsText = document.getElementById('recommendationsText');
        recommendationsText.innerText = usersRecommendations[newIndex].text;

        let recommendationsProfession = document.getElementById('recommendationsProfession');
        recommendationsProfession.innerText = usersRecommendations[newIndex].profession;

        let recommendationsName = document.getElementById('recommendationsName');
        recommendationsName.innerText = usersRecommendations[newIndex].author;

        let recommendationsImage = document.getElementById('recommendationsImage');
        recommendationsImage.src = usersRecommendations[newIndex].image;

        setActiveBullet();
    }
}
recommendationsSlider();


function createPartnerLogosModal(){
    let logosTextModal = document.querySelectorAll('#logosTextModal');

    for (let i = 0; i < logosTextModal.length; i++) {
        logosTextModal[i].addEventListener('mouseover', function(){
            this.childNodes[1].style.display = 'none';
            this.childNodes[3].style.display = 'block';
        });
        logosTextModal[i].addEventListener('mouseout', function(){
            this.childNodes[1].style.display = 'flex';
            this.childNodes[3].style.display = 'none';
        });
    }
}
createPartnerLogosModal();