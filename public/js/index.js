"use strict";
const guideEntryElement = document.querySelectorAll('.body-left__guide-entry');
const clearActiveElement = () => {
    guideEntryElement.forEach((guide) => {
        const childOfGuide = guide.children;
        for (let child in childOfGuide) {
            if (childOfGuide[child].firstElementChild) {
                const liElement = childOfGuide[child].firstElementChild;
                liElement.classList.remove('guide-entry__item-active');
            }
        }
    });
};
guideEntryElement.forEach((guide) => {
    guide.addEventListener('click', (e) => {
        const target = e.target;
        if (target.localName === 'li') {
            clearActiveElement();
            target.classList.add('guide-entry__item-active');
        }
        else if (target.localName === 'span' || target.localName === 'p') {
            const parentElement = target.parentElement;
            if (parentElement.localName === 'li') {
                clearActiveElement();
                parentElement.classList.add('guide-entry__item-active');
            }
        }
    });
});
