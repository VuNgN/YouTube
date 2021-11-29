"use strict";
const guideEntryElement = document.querySelectorAll('.guide-entry__item');
const clearGuideActiveElement = () => {
    guideEntryElement.forEach((guide) => {
        guide.classList.remove('guide-entry__item-active');
    });
};
guideEntryElement.forEach((guide) => {
    guide.addEventListener('click', (e) => {
        const target = e.target;
        if (target.localName === 'li') {
            clearGuideActiveElement();
            target.classList.add('guide-entry__item-active');
        }
        else if (target.localName === 'span' || target.localName === 'p') {
            const parentElement = target.parentElement;
            clearGuideActiveElement();
            parentElement.classList.add('guide-entry__item-active');
        }
    });
});
const chipsElements = document.querySelectorAll('.body-chips__chip');
const clearChipActiveElement = () => {
    chipsElements.forEach((chipElement) => {
        chipElement.classList.remove('body-chips__chip-active');
    });
};
chipsElements.forEach((chipElement) => {
    chipElement.addEventListener('click', (e) => {
        const target = e.target;
        if (target.localName === 'div') {
            clearChipActiveElement();
            target.classList.add('body-chips__chip-active');
        }
        else {
            const parentElement = target.parentElement;
            clearChipActiveElement();
            parentElement.classList.add('body-chips__chip-active');
        }
    });
});
