function createMainSlider(){
    let sliderImageArray = [
        'images/slider1.jpg',
        'images/slider2.jpg',
        'images/slider3.jpg'
    ]
    
    let currentSlideIndex = 1;
    
    let slider = document.getElementById('sectionSlider');
    
    createSlide();
    setInterval(() => {
        currentSlideIndex++;
        if(currentSlideIndex > sliderImageArray.length - 1) currentSlideIndex = 0;
        createSlide();
    }, 5000);
    
    function createSlide(){
        slider.style.backgroundImage = 'url(' + sliderImageArray[currentSlideIndex] + ')';
    }
}
createMainSlider();

function createMySkillsAnimation(){

    window.addEventListener('scroll', function(){
        let scrollTop = document.querySelector('html').scrollTop;
        let elem = document.querySelectorAll('.skill-div-line');
        let elem1 = document.querySelectorAll('.skill-div-line-modal');

        if(scrollTop < 1770 && scrollTop > 900){
            for (let i = 0; i < elem.length; i++) {
                elem[i].classList.add('active')                
            }

            for (let i = 0; i < elem1.length; i++) {
                elem1[i].classList.add('active');        
            }

            mySkillsHtml.innerText = '( 80% )';
            mySkillsHtml.style.color = '#E93656';

            mySkillsCss.innerText = '( 90% )';
            mySkillsCss.style.color = '#E93656';

            mySkillsSass.innerText = '( 70% )';
            mySkillsSass.style.color = '#E93656';

            mySkillsJavascript.innerText = '( 50% )';
            mySkillsJavascript.style.color = '#E93656';
        }else{
            for (let i = 0; i < elem.length; i++) {
                elem[i].classList.remove('active')                
            }

            for (let i = 0; i < elem1.length; i++) {
                elem1[i].classList.remove('active');        
            }

            mySkillsHtml.innerText = '';
            mySkillsCss.innerText = '';
            mySkillsSass.innerText = '';
            mySkillsJavascript.innerText = '';
        }
    })
}
createMySkillsAnimation();

function createServicesModal(){
    let serviceBox = document.querySelectorAll('.service-box');

    for (let i = 0; i < serviceBox.length; i++) {
        serviceBox[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = '#15263E';
            this.children[0].style.display = 'none';
            this.children[1].style.display = 'none';
            this.children[2].style.display = 'block';
        });
        serviceBox[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = '#FAFAFA';
            this.children[0].style.display = 'flex';
            this.children[1].style.display = 'flex';
            this.children[2].style.display = 'none';
        });
    }
}
createServicesModal();

function createRecommendationsSlider(){
    let usersRecommendations = [
        {
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.",
            image: 'images/portrait1.png',
            profession: 'Full-stack Developer',
            author: 'Nick'
        },
        {
            text: "I want you to know how much we enjoy serving your hardware needs and consider you a special customer. Of course we appreciate your orders, but we also appreciate the positive lift we get from your visits. As a token of our appreciation, I am enclosing a coupon worth 10% off your next purchase. Come visit us soon.",
            image: 'images/portrait2.png',
            profession: 'Front-end Developer',
            author: 'Ana'
        },
        {
            text: "Thank you notes are appropriate after many different occasions. Anyone who throws a party, gives a gift, or takes time to do something for you deserves to be appreciated. ",
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
}
createRecommendationsSlider();

function createProjectsFilter(){
    const projectsList = document.querySelectorAll('.projects-li');
    const projects = document.querySelectorAll('.project');

    for (let i = 0; i < projectsList.length; i++) {

        projectsList[i].addEventListener('click', (e)=>{
            e.preventDefault();

            for (let x = 0; x < projectsList.length; x++) {
                projectsList[x].classList.remove('active');
            }
            e.target.classList.add('active');

            const filter = e.target.dataset.filter;
            
            projects.forEach((project)=>{
                if(filter == "all"){
                    project.style.display = "block";
                }else{
                    if(project.classList.contains(filter)){
                        project.style.display = "block";
                    }else{
                        project.style.display = "none";
                    }
                }
            })
        })

    }

    for (let p = 0; p < projects.length; p++) {
        projects[p].addEventListener('mouseover', function(){
            this.children[0].style.display = 'none';
            this.children[1].style.display = 'flex';
        });
        projects[p].addEventListener('mouseout', function(){
            this.children[0].style.display = 'flex';
            this.children[1].style.display = 'none';
        });
    }
}
createProjectsFilter();

function createPartnerLogosModal(){
    let logosTextModal = document.querySelectorAll('.partners-logo-box');

    for (let i = 0; i < logosTextModal.length; i++) {
        logosTextModal[i].addEventListener('mouseover', function(){
            this.children[0].style.display = 'none';
            this.children[1].style.display = 'block';
        });
        logosTextModal[i].addEventListener('mouseout', function(){
            this.children[0].style.display = 'flex';
            this.children[1].style.display = 'none';
        });
    }
}
createPartnerLogosModal();

function sendContactInfo(){
    document.querySelector('form').addEventListener('submit', (e)=>{
        let userName = document.getElementById('userName').value;
        let userEmail = document.getElementById('userEmail').value;
        let userUrl = document.getElementById('userUrl').value;
        let userText = document.getElementById('userText').value;
    
        sendInfo(userName, userEmail, userUrl, userText);
    
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        document.getElementById('userUrl').value = '';
        document.getElementById('userText').value = '';
    
        e.preventDefault();
    })
    
    function sendInfo(userName, userEmail, userUrl, userText){
        return fetch('https://ucha.ge/contact-form/submit.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: '&name=' + encodeURIComponent(userName) + '&email=' + encodeURIComponent(userEmail) + '&website=' + encodeURIComponent(userUrl) + '&message=' + encodeURIComponent(userText)
            })
            .then(function(r) {
                return r.json();
            })
    }
}
sendContactInfo();