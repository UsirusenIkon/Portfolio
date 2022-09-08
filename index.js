const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');
// menu button & links
hamburger.addEventListener('click', () => {
  nav.classList.toggle('slide');
  hamburger.classList.toggle('slide');
  body.classList.toggle('overflow');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('slide');
    hamburger.classList.remove('slide');
    body.classList.toggle('overflow');
  });
});

const workSection = [
  {
    id: 1,

    featuredImage: {
      url: 'asset/SnapshootPortfolio.jpg',
      alt: 'tonic',
    },

    title: 'Tonic',

    details: {
      customer: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
    },

    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

      more: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer scrambled it, he died.",
    },

    technologies: {
      html: 'html',
      css: 'css',
      js: 'javaScript',
    },

    link: {
      seeLive: 'https://usirusenikon.github.io/Portfolio/',
      sources: 'https://github.com/UsirusenIkon/Portfolio',
    },
  },

  {
    id: 2,

    featuredImage: {
      url: 'asset/SnapshootPortfolio1.png',
      alt: 'Multi Post Stories',
    },

    title: 'Multi-Post Stories',

    details: {
      customer: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
    },

    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

      more: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer scrambled it, he died.",
    },

    technologies: {
      html: 'html',
      css: 'css',
      js: 'javaScript',
      ruby: 'ruby on rails',
    },

    link: {
      seeLive: 'https://usirusenikon.github.io/Portfolio/',
      sources: 'https://github.com/UsirusenIkon/Portfolio',
    },
  },

  {
    id: 3,

    featuredImage: {
      url: 'asset/SnapshootPortfolio2.png',
      alt: 'tonic',
    },

    title: 'Tonic',

    details: {
      customer: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
    },

    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

      more: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer scrambled it, he died.",
    },

    technologies: {
      html: 'html',
      css: 'css',
      js: 'javaScript',
      ruby: 'ruby on rails',
    },

    link: {
      seeLive: 'https://usirusenikon.github.io/Portfolio/',
      sources: 'https://github.com/UsirusenIkon/Portfolio',
    },
  },

  {
    id: 4,

    featuredImage: {
      url: 'asset/SnapshootPortfolio3.png',
      alt: 'tonic',
    },

    title: 'Multi-Post stories',

    details: {
      customer: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
    },

    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

      more: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer scrambled it, he died. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer scrambled it, he died.",
    },

    technologies: {
      html: 'html',
      css: 'css',
      js: 'javaScript',
      ruby: 'ruby on rails',
    },

    link: {
      seeLive: 'https://usirusenikon.github.io/Portfolio/',
      sources: 'https://github.com/UsirusenIkon/Portfolio',
    },
  },
];

const works = document.querySelector('.work-section');

function loadCards() {
  workSection.forEach((card) => {
    works.innerHTML += `
    <div class="work-section-cards flex">
      <div class="cards-image flex">
        <img src=${card.featuredImage.url} class="img desk" alt=${card.featuredImage.alt}/>
      </div>
      <div class="work-section-content">
        <h3>${card.title}</h3>
        <p class="topic">
          ${card.details.customer}<span class="grey"><i class="bx bxs-circle grey"></i>${card.details.job}
          <i class="bx bxs-circle grey"></i>${card.details.year}</span>
        </p>    
        <p class="summary">
          ${card.description.summary}
        </p>
        <ul class="btn-grp flex">
          <li><button type="submit">${card.technologies.html}</button></li>
          <li><button type="submit">${card.technologies.css}</button></li>
          <li><button type="submit">${card.technologies.js}</button></li>
          <li class="ruby"><button type="submit">${card.technologies.ruby}</button></li>
        </ul>
        <button class="last-btn popup-btn" type="submit">See Project</button>
      </div>
    </div>`;
  });
}
loadCards();

const popUp = document.querySelector('.modal');

function loadModal(index) {
  popUp.innerHTML = `
    <div>
      <h3>${workSection[index].title}</h3>
      <p class="paratext">
        ${workSection[index].details.customer}
        <span class="grey"><i class="bx bxs-circle grey"></i>${workSection[index].details.job}
          <i class="bx bxs-circle grey"></i>${workSection[index].details.year}</span>
      </p>
      <div class="cards-image flex">
        <img src=${workSection[index].featuredImage.url} class="modal-img"
          alt=${workSection[index].featuredImage.alt}/>
      </div>
    </div>
    <div class="modal-info flex">
      <div class="para-length">
        <p>${workSection[index].description.more}</p>
      </div>
      <div class="btn-family flex">
        <div class="fst-btn-grp flex">
          <ul class="flex">
            <li><button type="submit">html</button></li>
            <li><button type="submit">css</button></li>
            <li><button type="submit">javascript</button></li>
          </ul>
          <ul class="flex">
            <li><button class="desktop" type="submit">github</button></li>
            <li><button class="desktop" type="submit">ruby</button></li>
            <li><button class="desktop" type="submit">bootstrap</button></li>
          </ul>
        </div>
        <div class="stroke"></div>
        <ul class="btn-link flex">
          <li>
            <button class="end-btn flex">
            <a href="${workSection[index].link.seeLive}" class="alink flex">See live</a><i class="bx bx-log-out-circle hub"></i>
            </button>
          </li>
          <li>
            <button class="end-btn flex">
            <a href="${workSection[index].link.sources}" class="alink flex">See live</a><i class="bx bxl-github hub"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <i class="bx bx-x"></i>`;
}

const modalContainer = document.querySelector('.modal-container');
const popUpBtn = document.querySelectorAll('.popup-btn');

popUpBtn.forEach((btn, index) => btn.addEventListener('click', () => {
  loadModal(index);
  modalContainer.classList.add('open');
  body.classList.toggle('overflow');
  const closePopUp = document.querySelector('.bx-x');
  closePopUp.addEventListener('click', () => {
    modalContainer.classList.remove('open');
    body.classList.remove('overflow');
  });
}));

const form = document.querySelector('.form');
const formEmail = document.querySelector('#user-email');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formEmail.value !== formEmail.value.toLowerCase()) {
    error.classList.add('msg');
    error.innerHTML = 'email should be in lower case';
  } else {
    error.classList.remove('msg');
    form.submit();
  }
});