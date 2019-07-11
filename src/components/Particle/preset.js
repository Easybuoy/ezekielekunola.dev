const nightSkyPreset = {
  particles: {
    number: {
      value: 1000,
      density: {
        enable: true,
        value_area: 2000,
      },
    },
    line_linked: {
      enable: true,
      opacity: 0.02,
    },
    move: {
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 1.2,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 5,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
}

export { nightSkyPreset }
