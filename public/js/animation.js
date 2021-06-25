anime({
    targets: '#titleanim path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function (el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.catlogo',
    translateX: 20,
    scale: 2,
    durattion:3000,
    rotate: '1turn'
    
  });