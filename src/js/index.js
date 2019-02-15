import Glide from '@glidejs/glide';

const params = {
  type: 'slider',
  startAt: 0,
  focuseAt: 0,
  perView: 5,
  gap: 20,
  peek: {
    before: 0,
    after: '100px',
  },
  breakpoints: {
    1540: {
      perView: 4,
      peek: {
        before: 0,
        after: '50px',
      },
    },
    1280: {
      perView: 3,
      peek: {
        before: 0,
        after: '120px',
      },
    },
    900: {
      perView: 2,
      peek: {
        before: 0,
        after: '120px',
      },
    },
    800: {
      perView: 2,
      peek: {
        before: 0,
        after: '100px',
      },
    },
    720: {
      perView: 2,
      peek: {
        before: 0,
        after: '50px',
      },
    },
    640: {
      perView: 2,
      peek: {
        before: 0,
        after: '0px',
      },
    },
    580: {
      perView: 1,
      peek: {
        before: 0,
        after: '160px',
      },
    },
    480: {
      perView: 1,
      peek: {
        before: 0,
        after: '120px',
      },
    },
    420: {
      perView: 1,
      peek: {
        before: 0,
        after: '60px',
      },
    },
    374: {
      perView: 1,
      peek: {
        before: 0,
        after: '20px',
      },
    },
  },
};

new Glide('.slider-vlog', params).mount();

new Glide('.slider-blog', params).mount();