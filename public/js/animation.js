anime({
    targets: '#titleanim path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function (el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });