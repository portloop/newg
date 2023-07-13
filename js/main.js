document.addEventListener('DOMContentLoaded', () => {

    function timer() {
        var minutes = document.getElementById('minutes');
        var sec = document.getElementById('seconds');

        minutes.innerHTML = '10';
        sec.innerHTML = '00';

        var intervalId = setInterval(() => {
            if (parseInt(sec.innerHTML) <= 0) {
                if (parseInt(minutes.innerHTML) <= 0) {
                    clearInterval(intervalId);
                    return;
                }

                sec.innerHTML = '59';
                minutes.innerHTML--;
                if (minutes.innerHTML < 10) {
                    minutes.innerHTML = '0' + minutes.innerHTML;
                }
            } else {
                sec.innerHTML = parseInt(sec.innerHTML) - 1;
                if (parseInt(sec.innerHTML) < 10) {
                    sec.innerHTML = '0' + sec.innerHTML;
                }
            }
        }, 1000);
    }

    timer();


    function mobileTimer() {
        var minutes = document.getElementById('m-minutes');
        var sec = document.getElementById('m-secundes');

        minutes.innerHTML = '10';
        sec.innerHTML = '00';

        var intervalId = setInterval(() => {
            if (parseInt(sec.innerHTML) <= 0) {
                if (parseInt(minutes.innerHTML) <= 0) {
                    clearInterval(intervalId);
                    return;
                }

                sec.innerHTML = '59';
                minutes.innerHTML--;
                if (minutes.innerHTML < 10) {
                    minutes.innerHTML = '0' + minutes.innerHTML;
                }
            } else {
                sec.innerHTML = parseInt(sec.innerHTML) - 1;
                if (parseInt(sec.innerHTML) < 10) {
                    sec.innerHTML = '0' + sec.innerHTML;
                }
            }
        }, 1000);
    }

    if (window.innerWidth < 1024) {
        mobileTimer();

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 140) {
                document.querySelector('.header').style.display = 'block';
            } else {
                document.querySelector('.header').style.display = 'none';
            }
          });
    }


    // Card Select

    let cards = document.querySelectorAll('.choose-plan-card-template-module_planCard__APwdO');

    function removeCard() {
        cards.forEach(item => {
            item.classList.remove('choose-plan-card-template-module_isSelected__KCa3c')
        })
    }

    cards.forEach(item => {
        item.addEventListener('click', (e) => {
            removeCard();
            item.classList.add('choose-plan-card-template-module_isSelected__KCa3c')
        })
    })


    // Open Accordeon

    let question = document.querySelectorAll('.faq-accordion_faqItem__8PP8i');
    function removeQuest() {
        question.forEach(item => {
            item.classList.remove('faq-accordion_faqItemOpened__UZn8C')
        })
    }

    question.forEach(item => {
        item.addEventListener('click', (e) => {
            removeQuest();
            item.classList.add('faq-accordion_faqItemOpened__UZn8C')
        })
    })



    // Close Popup

    let closeBtn = document.querySelector('.modal-box-module_closeButton__R9rkD');
    let popup = document.querySelector('.modal-container-module_wrapper__xSHnY'),
        openBtn = document.querySelectorAll('.button-module_container__ssMyd ');

    openBtn.forEach(item => {
        item.addEventListener('click', () => {
            popup.classList.add('open-popup');
        })
    })

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('open-popup');
    })



    // Slider
    let carouselArr = [
        {
            name: 'Eun',
            weigth : '-5 kg',
            text: 'It helps you track everything you need when you want to help yourself lowering weight or keeping it, from water to food and calories and many other, adding to that the 1 to 1 conversations are supper helpful the trainings help so much it’s extremely good.',
            index: '0',
            src: './img/1.png'
        },
        {
            name: 'Nguyet', 
            weigth: '-6 kg',
            text: 'Growing up I never battled with my weight. Eating whatever I wanted without seeing any negative consequences, those bad habits led to developing bad habits. However, Those bad habits quickly caught up with me after my hysterectomy. I tried one diet after another with little to no success. BETTER ME not only has helped me form good eating habits, but they have educated me along the way. I feel empowered now! I have the tools I need to continue to reach my health and weight goals! The app is easy to use and the constant coaching is tremendously motivating. I love the challenges! The 21 day no sugar challenge combined with intermittent fasting helped me to lose 13lbs! I feel great and can’t wait to see where my weight loss journey takes me! I have lost 13lbs! I have more energy and my inflammation is definitely less. I’m really able to control what I eat, and I plan my cheat meals.',
            index: '1',
            src: './img/2.png'
        },
        {
            name: 'Nina',
            weigth: '-3 kg',
            text: 'I am 4 months postpartum and I was stuck at the last bit of my pregnancy weight. Well I decided to try this app out and after 2 weeks of doing the workouts I started seeing results. My waist was trimmer, mom belly was starting to go away, and my legs began to be more toned. I love doing the daily workout on my schedule in the app and then I’ve been incorporating yoga as well that is also on the app. It has helped so much and I’m going to keep using it! I’m currently 1 pound over what I was before I got pregnant!!! I would highly recommend this app for everyone especially the moms out there!',
            index: '2',
            src: './img/3.png'
        }
    ]

    let dotsContainer = document.querySelector('.user-stories-carousel-module_dots__DW-g9');
let dots = dotsContainer.querySelectorAll('.carousel__dot');

// Функция для обновления активного точечного индикатора
function updateActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.remove('carousel__dot--selected');
    if (index === currentTab) {
      dot.classList.add('carousel__dot--selected');
      dot.disabled = true;
    } else {
      dot.disabled = false;
    }
  });
}

    // let carouselContainer = document.querySelector('.user-story-card-module_card__PKvpR.active-tab'),
    //     carPhoto = carouselContainer.querySelector('.user-story-card-module_image__soeQw'),
    //     carName = carouselContainer.querySelector('#carName'),
    //     carWeight = carouselContainer.querySelector('#carWeight'),
    //     prev = carouselContainer.querySelector('#prev'),
    //     next = carouselContainer.querySelector('#next'),
    //     cartext = carouselContainer.querySelector('.user-story-card-text-module_lineClampText__FV567')

    // function carouselInit () {
    //     carPhoto.src = carouselArr[0].src
    //     carName.innerHTML = carouselArr[0].name
    //     carWeight.innerHTML = carouselArr[0].weigth
    //     cartext.innerHTML = carouselArr[0].text
    // }

    // carouselInit()

    // let currentTab = 0;
    // next.addEventListener('click', (e) => {

    // })

    let carouselContainer = document.querySelector('.user-story-card-module_card__PKvpR.active-tab'),
    carPhoto = carouselContainer.querySelector('.user-story-card-module_image__soeQw'),
    carName = carouselContainer.querySelector('#carName'),
    carWeight = carouselContainer.querySelector('#carWeight'),
    prev = carouselContainer.querySelector('#prev'),
    next = carouselContainer.querySelector('#next'),
    cartext = carouselContainer.querySelector('.user-story-card-text-module_lineClampText__FV567');

let currentTab = 0;

function carouselInit() {
  carPhoto.src = carouselArr[currentTab].src;
  carName.innerHTML = carouselArr[currentTab].name;
  carWeight.innerHTML = carouselArr[currentTab].weigth;
  cartext.innerHTML = carouselArr[currentTab].text;
}

carouselInit();

next.addEventListener('click', (e) => {
  currentTab = (currentTab + 1) % carouselArr.length;

  carPhoto.style.animation = 'slide-out 0.3s forwards';

  setTimeout(() => {
    carPhoto.style.animation = '';
    carouselInit();
    updateActiveDot();
  }, 300); // Задержка для анимации
});

prev.addEventListener('click', (e) => {
  if (currentTab === 0) {
    currentTab = carouselArr.length - 1;
  } else {
    currentTab--;
  }

  carPhoto.style.animation = 'slide-out-reverse 0.3s forwards';

  setTimeout(() => {
    carPhoto.style.animation = '';
    carouselInit();
    updateActiveDot();
  }, 300); // Задержка для анимации
});
    

})