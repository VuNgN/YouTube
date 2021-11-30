"use strict";
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
const guideEntryElement = document.querySelectorAll('.guide-entry__item');
const chipsElements = document.querySelectorAll('.body-chips__chip');
onClickElement(guideEntryElement, "guide-entry__item-active");
onClickElement(chipsElements, "body-chips__chip-active");
