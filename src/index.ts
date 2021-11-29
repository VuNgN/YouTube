const guideEntryElement = document.querySelectorAll<HTMLLIElement>('.guide-entry__item');
const clearGuideActiveElement = () => {
  guideEntryElement.forEach((guide: HTMLLIElement) => {
    guide.classList.remove('guide-entry__item-active')
  });
}
guideEntryElement.forEach((guide: HTMLLIElement) => {
  guide.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.localName === 'li') {
      clearGuideActiveElement();
      target.classList.add('guide-entry__item-active');
    } else if (target.localName === 'span' || target.localName === 'p') {
      const parentElement = target.parentElement as HTMLElement;
      clearGuideActiveElement();
      parentElement.classList.add('guide-entry__item-active');
    }
  });
});

const chipsElements = document.querySelectorAll<HTMLDivElement>('.body-chips__chip');
const clearChipActiveElement = () => {
  chipsElements.forEach((chipElement: HTMLDivElement) => {
    chipElement.classList.remove('body-chips__chip-active');
  })
}
chipsElements.forEach((chipElement: HTMLDivElement) => {
  chipElement.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.localName === 'div') {
      clearChipActiveElement();
      target.classList.add('body-chips__chip-active');
    } else {
      const parentElement = target.parentElement as HTMLElement;
      clearChipActiveElement();
      parentElement.classList.add('body-chips__chip-active');
    }
  });
})

