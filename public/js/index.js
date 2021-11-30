"use strict";
const guideItemElement = document.querySelectorAll('.guide-entry__item');
const chipsElements = document.querySelectorAll('.body-chips__chip');
const menuIconSwapper = document.querySelector('#header__menuicon-swapper');
const bodyLeftElement = document.querySelector('#body-left');
const bodyRightElement = document.querySelector('#body-right');
onClickElement(guideItemElement, "guide-entry__item-active");
onClickElement(chipsElements, "body-chips__chip-active");
menuIconSwapper.addEventListener('click', () => {
    showMenu(!(bodyLeftElement.style.width === '0px'));
});
function showMenu(isShowMenu) {
    if (isShowMenu) {
        bodyLeftElement.style.width = '0';
        bodyRightElement.style.marginLeft = '0';
        bodyRightElement.style.width = '100%';
    }
    else {
        bodyLeftElement.style.width = '16.6%';
        bodyRightElement.style.marginLeft = '16.6%';
        bodyRightElement.style.width = '83.4%';
    }
}
function clearActiveElement(elements, idElement) {
    elements.forEach((guide) => {
        guide.classList.remove(idElement);
    });
}
function onClickElement(elements, idElement) {
    elements.forEach((guide) => {
        guide.addEventListener('click', (e) => {
            const target = e.target;
            if (target.localName === guide.localName) {
                clearActiveElement(elements, idElement);
                target.classList.add(idElement);
            }
            else {
                const parentElement = target.parentElement;
                clearActiveElement(elements, idElement);
                parentElement.classList.add(idElement);
            }
        });
    });
}
