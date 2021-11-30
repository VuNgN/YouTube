function clearActiveElement<T extends {forEach: Function}>(
  elements: T,
  idElement: string
): void {
  elements.forEach((guide: HTMLLIElement) => {
    guide.classList.remove(idElement);
  });
}
function onClickElement<T extends {forEach: Function}>(
  elements: T,
  idElement: string
): void {
  elements.forEach((guide: HTMLElement) => {
    guide.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.localName === guide.localName) {
        clearActiveElement(elements, idElement);
        target.classList.add(idElement);
      } else {
        const parentElement = target.parentElement as HTMLElement;
        clearActiveElement(elements, idElement);
        parentElement.classList.add(idElement);
      }
    });
  });
}

const guideEntryElement = document.querySelectorAll<HTMLLIElement>(
  '.guide-entry__item'
);
const chipsElements = document.querySelectorAll<HTMLDivElement>(
  '.body-chips__chip'
);

onClickElement(guideEntryElement, "guide-entry__item-active");
onClickElement(chipsElements, "body-chips__chip-active");
