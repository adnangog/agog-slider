let carousel = (() => {
    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("carousel-container");
    
    const carouselSlide = document.querySelector("[data-slider]");
    const parentItem = carouselSlide.parentNode;
    carouselSlide.classList.add("carousel-slide");
    const carouselImages = document.querySelectorAll("[data-slider] img");
    var itemHeight = 800;

    

    //buttons
    const prevBtn = document.createElement("div");
    prevBtn.classList.add("arrows");
    prevBtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>';
    prevBtn.setAttribute("id","prevBtn");

    const nextBtn = document.createElement("div");
    nextBtn.classList.add("arrows");
    nextBtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>';
    nextBtn.setAttribute("id","nextBtn");
    

    carouselContainer.appendChild(carouselSlide);

    carouselContainer.appendChild(prevBtn);
    carouselContainer.appendChild(nextBtn);

    parentItem.appendChild(carouselContainer);

    //counter
    let counter = 1;

    let size = parentItem.clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    let pager = document.createElement("div");
    pager.className = "pager";

    var parentHeight = itemHeight || parseInt((carouselImages[carouselImages.length - 1].clientHeight / carouselImages[carouselImages.length - 1].clientWidth) * parentItem.clientWidth);
    carouselContainer.style.height = parentHeight+"px";

    let slideHtml = carouselImages[carouselImages.length - 1].dataset.title ?  '<div class="slide-item" id="lastClone" style="height: '+parentHeight+'px; background-image: url(' + carouselImages[carouselImages.length - 1].src + ')"><span class="slide-title">'+ carouselImages[carouselImages.length - 1].dataset.title +'</span><span class="slide-description">'+ carouselImages[carouselImages.length - 1].dataset.content +'</span></div>' : '<div class="slide-item" id="lastClone" style="height: '+parentHeight+'px; background-image: url(' + carouselImages[carouselImages.length - 1].src + ')"></div>';

    for (let index = 0; index < carouselImages.length; index++) {
        const image = carouselImages[index];

        pager.innerHTML = pager.innerHTML + '<div class="item"></div>';
        slideHtml += image.dataset.title ? '<div class="slide-item" style="height: '+parentHeight+'px; background-image: url(' + image.src + ')"><span class="slide-title">'+ image.dataset.title +'</span><span class="slide-description">'+ image.dataset.content +'</span></div>' : '<div class="slide-item" style="height: '+parentHeight+'px; background-image: url(' + image.src + ')"></div>';
        
    }


    slideHtml += carouselImages[0].dataset.title ? '<div class="slide-item" id="firstClone" style="height: '+parentHeight+'px; background-image: url(' + carouselImages[0].src + ')"><span class="slide-title">'+ carouselImages[0].dataset.title +'</span><span class="slide-description">'+ carouselImages[0].dataset.content +'</span></div>' : '<div class="slide-item" id="firstClone" style="height: '+parentHeight+'px; background-image: url(' + carouselImages[0].src + ')"></div>';

    carouselSlide.innerHTML = slideHtml;
    const slideItems = document.querySelectorAll(".slide-item");
    carouselContainer.appendChild(pager);
    const pagerItems = document.querySelectorAll(".pager div");

    slideItems[1].classList.add('active');
    pagerItems[0].classList.add('active');

    let autoChange = setInterval(function () {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        changeSlide();

    }, 3000)


    //event listeners
    window.addEventListener('resize', e => {
        size = document.body.clientWidth;
        carouselSlide.style.transition = 'none';
        changeSlide()
    });
    carouselContainer.addEventListener('mouseenter', e => {
        if (autoChange != 0) {
            clearInterval(autoChange);
            autoChange = 0;
        }
    });
    carouselContainer.addEventListener('mouseleave', e => {
        if (autoChange == 0) {
            autoChange = setInterval(function () {
                carouselSlide.style.transition = 'transform 0.4s ease-in-out';
                counter++;
                changeSlide();

            }, 3000)
        }
    });
    pagerItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const timePerSlide = .4;
            const timer = ((counter - (index + 1)) < 0 ? (index + 1) - counter : (counter - (index + 1)) * timePerSlide) * .4; // her bir slide eşit sürede kaysın ,stersen bunu kullan

            carouselSlide.style.transition = 'transform ' + timePerSlide + 's ease-in-out';
            counter = index + 1;
            changeSlide();
        })
    })

    nextBtn.addEventListener('click', () => {
        if (counter >= slideItems.length - 1) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        changeSlide();
    })

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        changeSlide();
    })

    carouselSlide.addEventListener('transitionend', () => {

        if(counter>=slideItems.length){
            counter=0;
        }

        if (slideItems[counter].id === 'lastClone') {
            carouselSlide.style.transition = 'none';
            counter = slideItems.length - 2;
        }

        if (slideItems[counter].id === 'firstClone') {
            carouselSlide.style.transition = 'none';
            counter = slideItems.length - counter;
        }
        changeSlide();
    })

    const changeSlide = () => {
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        slideItems.forEach(slide => {
            slide.classList.remove('active');
        })
        pagerItems.forEach(pagerItem => {
            pagerItem.classList.remove('active');
        })
        slideItems[counter] && slideItems[counter].classList.add('active');
        pagerItems[counter - 1] && pagerItems[counter - 1].classList.add('active');
    }
})();

