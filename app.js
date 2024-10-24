
const icon = document.getElementById('avatar');
const audio = new Audio('sad-hamster.mp3');

icon.addEventListener('mouseenter', () => {
    audio.volume = 0.3;
    audio.play();
    let volume = 0.3;
    const targetVolume = 1;
    const duration = 4000;
    const interval = 50;
    const increment = (targetVolume - volume) / (duration / interval);

    const volumeInterval = setInterval(() => {
        volume += increment;
        if (volume >= targetVolume) {
            volume = targetVolume;
            clearInterval(volumeInterval);
        }
        audio.volume = volume;
    }, interval);
});

icon.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 0;
});

const tabs = document.querySelectorAll('.toggle-header');
const contents = document.querySelectorAll('#group-content > div');

function switchTab(activeTab) {
    tabs.forEach((tab, index) => {
        if (tab === activeTab) {
            tab.classList.add('active');
            tab.classList.remove('previous');
            contents[index].style.display = 'block';
            localStorage.setItem('activeTab', tab.id);
        } else {
            tab.classList.remove('active');
            tab.classList.add('previous');
            contents[index].style.display = 'none';
        }
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab));
});

const activeTabId = localStorage.getItem('activeTab') || 'hards-toggle';
const activeTab = document.getElementById(activeTabId);
if (activeTab) {
    switchTab(activeTab);
}
function createFloatingPlusOne() {
const avatar = document.querySelector('#avatar img');

avatar.addEventListener('click', (e) => {
const plus = document.createElement('div');
plus.innerText = '+1';
plus.style.cssText = `
position: fixed;
left: ${e.clientX}px;
top: ${e.clientY}px;
color: #fff;
pointer-events: none;
font-size: 40px;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
transition: all 1s ease-out;
opacity: 1;
z-index: 1000;
`;

document.body.appendChild(plus);

requestAnimationFrame(() => {
plus.style.transform = 'translateY(-100px)';
plus.style.opacity = '0';
});

setTimeout(() => {
plus.remove();
}, 1000);
});
}

document.addEventListener('DOMContentLoaded', createFloatingPlusOne);

let isPhoneDevice = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
        isPhoneDevice = true;
}

if (isPhoneDevice) {
    console.log('Это телепхоун') 
} else {
    console.log('Это компьюутер')
}


const mainInfo = document.getElementById('main-info');
const content = document.getElementById('main-content');
const infoContent = document.querySelector('#main-info div');
let govno = false;
async function handleResize() {
    if(!isPhoneDevice) {
    if (!govno) {
        if (window.innerWidth < 809) {
            govno = true;
            mainInfo.style.animation = 'stretch 0.5s forwards';
            mainInfo.style.position = 'relative';
            mainInfo.style.minHeight = 'auto';
            mainInfo.style.height = 'auto';
            mainInfo.style.transition = 'height 0.3s ease';
            content.style.animation = 'slide-out-right 0.5s ease-in-out';
            infoContent.style.animation = 'slide-out-left 0.4s ease-in-out, slide-out 0.4s ease-in-out';
            
            await  new Promise(resolve => setTimeout(resolve, 400));
            infoContent.style.position = 'relative'
            infoContent.style.borderRadius = '12px'
            infoContent.style.top = '-225px'
            infoContent.style.left = '320px'
            infoContent.style.width = '300px'
            infoContent.style.animation = 'slide-in-top 0.5s ease-in-out, slide-in 0.4s ease-in-out';


            mainInfo.style.animation = 'heightmin 0.5s forwards';
            content.style.width = '100%';
            content.style.height = 'auto';
            content.style.top = 'auto';
            content.style.left = 'auto';
            content.style.position = 'relative';
            content.style.animation = 'slide-in-down 0.5s ease-in-out';
            console.log('Переключение на ВЕРТИКАЛЬНУЮ ориентацию')
        } else {
            console.log('Пизда')
        }
    }
    if (govno) {
        if (window.innerWidth >= 809) {
            govno = false;
            mainInfo.style.animation = 'heightmax 0.5s forwards';
            content.style.animation = 'slide-out-down 0.5s ease-in-out'
            infoContent.style.animation = 'slide-out-top 0.5s ease-in-out, slide-out 0.4s'
            await  new Promise(resolve => setTimeout(resolve, 400));

            infoContent.style.position = 'absolute'
            infoContent.style.borderRadius = '12px'
            infoContent.style.top = ''
            infoContent.style.left = ''
            infoContent.style.width = '350px'
            infoContent.style.borderRadius = '0'
            infoContent.style.animation = 'slide-in-left 0.5s ease-in-out, slide-in 0.4s'



            mainInfo.style.animation = 'compress 0.5s forwards';
            content.style.animation = 'slide-in-right 0.5s ease-in-out'
            console.log('Переключение на ГОРИЗОНТАЛЬНУЮ ориентацию')
        } else {
            console.log('Хуй')
        }
    }
} else {
    if (!govno) {
        const avatar = document.getElementById('avatar');
        const infoContent = document.querySelector('#main-info div');
            govno = true;
            mainInfo.style.position = 'relative';
            mainInfo.style.minHeight = 'auto';
            mainInfo.style.height = '480px';
            mainInfo.style.width = '100%';

            infoContent.style.position = 'relative'
            infoContent.style.borderRadius = '12px'
            infoContent.style.fontSize = '25px'
            infoContent.style.top = '-350px'
            infoContent.style.left = '510px'
            infoContent.style.width = '450px'

            avatar.style.height = '465px'
            avatar.style.width = '465px'


            content.style.width = '100%';
            content.style.animation = '0'
            content.style.transition = '0'
            content.style.height = 'auto';
            content.style.top = 'auto';
            content.style.left = 'auto';
            content.style.position = 'relative';
            console.log('Переключение на ВЕРТИКАЛЬНУЮ ориентацию')
    }
}
}


window.addEventListener('resize', handleResize);

handleResize();

const hards1 = document.querySelector('#hards-content>.item:nth-of-type(1)');
const hards2 = document.querySelector('#hards-content>.item:nth-of-type(2)');
const hards3 = document.querySelector('#hards-content>.item:nth-of-type(3)');
const hards4 = document.querySelector('#hards-content>.item:nth-of-type(4)');
const hards5 = document.querySelector('#hards-content>.item:nth-of-type(5)');
const hards6 = document.querySelector('#hards-content>.item:nth-of-type(6)');
const hards7 = document.querySelector('#hards-content>.item:nth-of-type(7)');
const hards8 = document.querySelector('#hards-content>.item:nth-of-type(8)');
const hards9 = document.querySelector('#hards-content>.item:nth-of-type(9)');
const hards10 = document.querySelector('#hards-content>.item:nth-of-type(10)');
const hards11 = document.querySelector('#hards-content>.item:nth-of-type(11)');

const softs1 = document.querySelector('#softs-content>.item:nth-of-type(1)');
const softs2 = document.querySelector('#softs-content>.item:nth-of-type(2)');
const softs3 = document.querySelector('#softs-content>.item:nth-of-type(3)');
const softs4 = document.querySelector('#softs-content>.item:nth-of-type(4)');
const softs5 = document.querySelector('#softs-content>.item:nth-of-type(5)');
const softs6 = document.querySelector('#softs-content>.item:nth-of-type(6)');
const softs7 = document.querySelector('#softs-content>.item:nth-of-type(7)');
const softs8 = document.querySelector('#softs-content>.item:nth-of-type(8)');


let ishuicss = false;
function addhuicss() {
    if (!ishuicss) {
        const style = document.createElement('style');
        style.id = 'hui';
        style.textContent = '.item { width: 90%; }';

        document.head.appendChild(style);
        ishuicss = true;
        console.log('Добавлено');
    }
                console.log('Попытка...')
            }
            function removehuicss() {
    if (ishuicss) {
        const styleElement = document.getElementById('hui');
        if (styleElement) {
            styleElement.remove();
        }
        ishuicss = false;
    }
}

function resizeItems() {
    let is1 = false;
    let is2 = false;
    let is3 = false;
    let is4 = false;
    let is5 = false;
    let is6 = false;
    const innerWidth = window.innerWidth;
        if(isPhoneDevice) {

        } else {
            if (innerWidth > 2660) { // Пять колонок?
                if(is1 || is2 || is3 || is4 || is5 && !is6) {
                console.log('Пиздец он широкий');
                }
            }
            if (innerWidth > 2205 && innerWidth < 2660) { // Четыре колонки
                if(!is5) {
                    console.log('Ресайз на 4 колонки');
                    removehuicss();

                    hards1.style.height = '125px';
                    hards2.style.height = '125px';
                    hards3.style.height = '125px';
                    hards4.style.height = '125px';

                    hards5.style.height = '160px';
                    hards6.style.height = '160px';
                    hards7.style.height = '160px';
                    hards8.style.height = '160px';

                    hards9.style.height = '160px';
                    hards10.style.height = '160px';
                    hards11.style.height = '160px';


                    softs1.style.height = '105px';
                    softs2.style.height = '105px';
                    softs3.style.height = '105px';
                    softs4.style.height = '105px';

                    softs5.style.height = '200px';
                    softs6.style.height = '200px';
                    softs7.style.height = '200px';
                    softs8.style.height = '200px';

                    is1 = false;
                    is2 = false;
                    is3 = false;
                    is4 = false;
                    is5 = true;
                    is6 = false;
                }
            }
            if (innerWidth > 1750 && innerWidth < 2205 ) { // Три колонки
                if(!is4) {
                    console.log('Ресайз на 3 колонки')
                    removehuicss();

                    hards1.style.height = '125px';
                    hards2.style.height = '125px';
                    hards3.style.height = '125px';

                    hards4.style.height = '125px';
                    hards5.style.height = '125px';
                    hards6.style.height = '125px';

                    hards7.style.height = '160px';
                    hards8.style.height = '160px';
                    hards9.style.height = '160px';

                    hards10.style.height = '160px';
                    hards11.style.height = '160px';


                    softs1.style.height = '105px';
                    softs2.style.height = '105px';
                    softs3.style.height = '105px';

                    softs4.style.height = '105px';
                    softs5.style.height = '105px';
                    softs6.style.height = '105px';

                    softs7.style.height = '200px';
                    softs8.style.height = '200px';
                    is1 = false;
                    is2 = false;
                    is3 = false;
                    is4 = true;
                    is5 = false;
                    is6 = false;
                }
            }
            if (innerWidth > 1295 && innerWidth < 1750) { // Две колонки
                if(!is3) {
                    console.log('Ресайз на 2 колонки')
                    removehuicss()

                    hards1.style.height = '125px';
                    hards2.style.height = '125px';

                    hards3.style.height = '105px';
                    hards4.style.height = '105px';

                    hards5.style.height = '125px';
                    hards6.style.height = '125px';

                    hards7.style.height = '160px';
                    hards8.style.height = '160px';

                    hards9.style.height = '160px';
                    hards10.style.height = '160px';

                    hards11.style.height = '125px';


                    softs1.style.height = '90px';
                    softs2.style.height = '90px';

                    softs3.style.height = '105px';
                    softs4.style.height = '105px';

                    softs5.style.height = '105px';
                    softs6.style.height = '105px';

                    softs7.style.height = '200px';
                    softs8.style.height = '200px';

                    is1 = false;
                    is2 = false;
                    is3 = true;
                    is4 = false;
                    is5 = false;
                    is6 = false;
                }
            }

            if (innerWidth > 840 && innerWidth < 1295) { // Одна колонка
                if (!is2) {
                    console.log('Ресайз на 1 колонку');
                    removehuicss()
                    hards1.style.height = '125px';
                    hards2.style.height = '125px';
                    hards3.style.height = '105px';
                    hards4.style.height = '105px';
                    hards5.style.height = '125px';
                    hards6.style.height = '125px';
                    hards7.style.height = '160px';
                    hards8.style.height = '160px';
                    hards9.style.height = '160px';
                    hards10.style.height = '160px';
                    hards11.style.height = '125px';


                    softs1.style.height = '90px';
                    softs2.style.height = '90px';
                    softs3.style.height = '105px';
                    softs4.style.height = '105px';
                    softs5.style.height = '105px';
                    softs6.style.height = '105px';
                    softs7.style.height = '200px';
                    softs8.style.height = '200px';

                    is1 = false;
                    is2 = true;
                    is3 = false;
                    is4 = false;
                    is5 = false;
                    is6 = false;
                }
            }
            if (innerWidth <= 840) { // Меньше одной колонки
                if(!is1) {
                    console.log('Ресайз на меньше чем 1 колонку')
                    if(isPhoneDevice) {
                        addhuicss();
                    }
                    hards1.style.height = '125px';
                    hards2.style.height = '125px';
                    hards3.style.height = '105px';
                    hards4.style.height = '105px';
                    hards5.style.height = '125px';
                    hards6.style.height = '125px';
                    hards7.style.height = '160px';
                    hards8.style.height = '160px';
                    hards9.style.height = '160px';
                    hards10.style.height = '160px';
                    hards11.style.height = '125px';


                    softs1.style.height = '90px';
                    softs2.style.height = '90px';
                    softs3.style.height = '105px';
                    softs4.style.height = '105px';
                    softs5.style.height = '105px';
                    softs6.style.height = '105px';
                    softs7.style.height = '200px';
                    softs8.style.height = '200px'; 
                    is1 = true;
                    is2 = false;
                    is3 = false;
                    is4 = false;
                    is5 = false;
                    is6 = false;
                }
            }
        }
}
window.addEventListener('resize', resizeItems);
resizeItems();


