const particleParams = {
  backgroundMask: {
    cover: {
      color: {
        value: {
          r: 240,
          g: 240,
          b: 240,
        },
      },
    },
    enable: true,
  },
  interactivity: {
    events: {
      onClick: {
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        size: 200,
      },
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: {
        value: '#ffffff',
      },
      enable: false,
      distance: 150,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 120,
    },
    opacity: {
      animation: {
        minimumValue: 0.1,
        speed: 1,
      },
    },
    shape: {
      options: {
        polygon: {
          nb_sides: 5,
        },
        star: {
          nb_sides: 5,
        },
        image: {
          src: 'https://cdn.matteobruni.it/images/particles/github.svg',
          width: 100,
          height: 100,
        },
        images: {
          src: 'https://cdn.matteobruni.it/images/particles/github.svg',
          width: 100,
          height: 100,
        },
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: 30,
      animation: {
        minimumValue: 0.1,
        speed: 40,
      },
    },
    stroke: {
      color: {
        value: '#000000',
        animation: {
          enable: false,
          speed: 1,
          sync: true,
        },
      },
    },
  },
  pauseOnOutsideViewport: true,
};

export default particleParams;
