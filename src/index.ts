const guideItemElement = document.querySelectorAll<HTMLLIElement>(
  '.guide-entry__item'
);
const chipsElements = document.querySelectorAll<HTMLDivElement>(
  '.body-chips__chip'
);
const menuIconSwapper = document.querySelector('#header__menuicon-swapper') as HTMLDivElement;
const bodyLeftElement = document.querySelector('#body-left') as HTMLDivElement;
const bodyRightElement = document.querySelector('#body-right') as HTMLDivElement;

onClickElement(guideItemElement, "guide-entry__item-active");
onClickElement(chipsElements, "body-chips__chip-active");

menuIconSwapper.addEventListener('click', () => {
  showMenu(!(bodyLeftElement.style.width === '0px'));
})

function showMenu(isShowMenu: boolean): void {
  if (isShowMenu) {
    bodyLeftElement.style.width = '0';
    bodyRightElement.style.marginLeft = '0';
    bodyRightElement.style.width = '100%';
  } else {
    bodyLeftElement.style.width = '16.6%';
    bodyRightElement.style.marginLeft = '16.6%';
    bodyRightElement.style.width = '83.4%';
  }
}
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

