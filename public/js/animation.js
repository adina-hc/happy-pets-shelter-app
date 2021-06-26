anime({
    targets: '#titleanim path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 100 },
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.catlogo',
    translateX: 20,
    scale: 1,
    durattion:3000,
    rotate: '1turn'
    
  });