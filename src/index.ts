const guideEntryElement = document.querySelectorAll<HTMLUListElement>('.body-left__guide-entry');

const clearActiveElement = () => {
  guideEntryElement.forEach((guide: HTMLUListElement) => {
    const childOfGuide = guide.children as HTMLCollection;
    for (let child in childOfGuide) {
      if (childOfGuide[child].firstElementChild) {
        const liElement = childOfGuide[child].firstElementChild as HTMLLIElement;
        liElement.classList.remove('guide-entry__item-active');
      }
    }
  });
}

guideEntryElement.forEach((guide: HTMLUListElement) => {
  guide.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.localName === 'li') {
      clearActiveElement();
      target.classList.add('guide-entry__item-active');
    } else if (target.localName === 'span' || target.localName === 'p') {
      const parentElement = target.parentElement as HTMLElement;
      if (parentElement.localName === 'li') {
        clearActiveElement();
        parentElement.classList.add('guide-entry__item-active');

      }
    }
  });
});
