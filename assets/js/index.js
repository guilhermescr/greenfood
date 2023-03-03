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
