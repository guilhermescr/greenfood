function reduceURL() {
  let pathname = location.pathname;

  if (pathname.includes('index')) {
    pathname = pathname
      .replace(pathname.slice(pathname.search('index')), '')
      .trim();
  }

  history.replaceState(
    {
      id: 'Green Food Restaurant',
      source: 'web'
    },
    'Green and Tasty Meals',
    `${location.origin}${pathname}`
  );
}

document.querySelectorAll('.clearUrlItemHandler').forEach(headerNavItem => {
  headerNavItem.addEventListener('click', () => {
    setTimeout(reduceURL, 10);
  });
});

document.body.onload = () => {
  reduceURL();
  switchHeaderPosition();
};

// Sticky Header
const header = document.getElementById('header');
const sticky = header.offsetTop;

function switchHeaderPosition() {
  if (window.scrollY > sticky) {
    header.classList.add('sticky');
    header.classList.add('bg-gradient-to-b');
    header.classList.add('from-lime-600');
    header.classList.add('to-green-600');
  } else {
    header.classList.remove('sticky');
    header.classList.remove('bg-gradient-to-b');
    header.classList.remove('from-lime-600');
    header.classList.remove('to-green-600');
  }
}

window.onscroll = switchHeaderPosition;

// Hamburger Icon Animation
const HAMBURGER_ICON = document.querySelector('.open-responsive-navbar-button');
const RESPONSIVE_MENU = document.querySelector('.responsive-menu');
const RESPONSIVE_MENU_ASIDE_BAR = document.querySelector(
  '.responsive-menu__aside-bar'
);
const RESPONSIVE_MENU_OPTIONS = document.querySelectorAll(
  '.responsive-menu__option'
);

function changeResponsiveMenuAsideBarGradient(windowScrollY) {
  if (!windowScrollY) {
    RESPONSIVE_MENU_ASIDE_BAR.classList = `responsive-menu__aside-bar absolute body-img-url bg-center bg-no-repeat bg-cover bg-fixed flex flex-col gap-6 h-full left-[20%] w-[80%] p-4`;
  } else {
    RESPONSIVE_MENU_ASIDE_BAR.classList = `responsive-menu__aside-bar absolute bg-gradient-to-b from-green-600 to-lime-500 flex flex-col gap-6 h-full left-[20%] w-[80%] p-4`;
  }
}

function toggleHamburgerIcon() {
  HAMBURGER_ICON.classList.toggle('open');

  changeResponsiveMenuAsideBarGradient(window.scrollY);
  if (!window.scrollY) {
    // no gradient
  } else {
    // has gradient
  }

  if (HAMBURGER_ICON.classList.contains('open')) {
    // open menu
    document.body.style.overflowY = 'hidden';
    RESPONSIVE_MENU.classList.remove('hidden');
  } else {
    // close menu
    document.body.style.overflowY = 'auto';
    RESPONSIVE_MENU.classList.add('hidden');
  }
}

HAMBURGER_ICON.addEventListener('click', toggleHamburgerIcon);
RESPONSIVE_MENU_OPTIONS.forEach(responsive_menu_option => {
  responsive_menu_option.addEventListener('click', () => {
    toggleHamburgerIcon();
  });
});
window.addEventListener('resize', () => {
  if (
    HAMBURGER_ICON.classList.contains('open') &&
    document.body.clientWidth >= 1024
  ) {
    toggleHamburgerIcon();
  }
});

// Food and Appetizers Carousel
const FOOD_AND_APPETIZERS_CONTAINER = document.getElementById(
  'food-and-appetizers'
);
const FOOD_AND_APPETIZER_WIDTH = document.querySelector(
  '.food-and-appetizer'
).clientWidth;
const BACK_ITEM_BUTTON = document.getElementById('backItemButton');
const NEXT_ITEM_BUTTON = document.getElementById('nextItemButton');

function nextItemOfCarousel(parentDiv, childWidth, parentDivGap) {
  if (
    !(parentDiv.offsetWidth + parentDiv.scrollLeft >= parentDiv.scrollWidth)
  ) {
    parentDiv.scrollTo(parentDiv.scrollLeft + childWidth + parentDivGap, 0);
  }
}

function backItemOfCarousel(parentDiv, childWidth, parentDivGap) {
  if (parentDiv.scrollLeft) {
    parentDiv.scrollTo(parentDiv.scrollLeft - (childWidth + parentDivGap), 0);
  }
}

NEXT_ITEM_BUTTON.addEventListener('click', () => {
  nextItemOfCarousel(
    FOOD_AND_APPETIZERS_CONTAINER,
    FOOD_AND_APPETIZER_WIDTH,
    32
  );
});

BACK_ITEM_BUTTON.addEventListener('click', () => {
  backItemOfCarousel(
    FOOD_AND_APPETIZERS_CONTAINER,
    FOOD_AND_APPETIZER_WIDTH,
    32
  );
});
