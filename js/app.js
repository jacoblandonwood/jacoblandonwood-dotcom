window.onload = () => {
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const jacobSunglasses = shuffle([
    { msg: 'Python', src: 'img/python_sunglasses.png' },
    { msg: 'C Sharp', src: 'img/csharp_sunglasses.png' },
    { msg: 'JavaScript', src: 'img/javascript_sunglasses.png' },
    { msg: 'HTML5', src: 'img/html_sunglasses.png' },
    { msg: 'Git', src: 'img/git_sunglasses.png' },
    { msg: 'CSS3', src: 'img/css_sunglasses.png' },
    { msg: 'MongoDB', src: 'img/mongodb_sunglasses.png' },
    { msg: 'Node.js', src: 'img/nodejs_sunglasses.png' },
    { msg: 'React', src: 'img/react_sunglasses.png' },
    { msg: 'MySQL', src: 'img/mysql_sunglasses.png' }
  ]);

  const skippySunglasses = shuffle([
    'img/chill_sunglasses.png',
    'img/eat_sunglasses.png',
    'img/smile_sunglasses.png',
    'img/dig_sunglasses.png',
    'img/run_sunglasses.png',
    'img/play_sunglasses.png',
    'img/sleep_sunglasses.png',
    'img/wag_sunglasses.png'
  ]);

  const el = document.getElementsByClassName('image')[0];
  for (let s of jacobSunglasses) {
    el.innerHTML += `<div class="image__jacob-sunglasses"><img class="image__jacob-sunglasses-img" src="${s.src}"><div class="image__jacob-sunglasses-msg">${s.msg}</div></div>`;
  }
  for (let src of skippySunglasses) {
    el.innerHTML += `<img class="image__skippy-sunglasses" src="${src}" style="transform: rotate(-50deg);">`;
  }
  
  interact('.image__jacob-sunglasses:not(.image__still)').draggable({
    inertia: true,
    onmove: evt => {
      const target = evt.target;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + evt.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + evt.dy;
    
      const transform = `translate(${x}px, ${y}px)`;
      target.style.webkitTransform = transform;
      target.style.transform = transform;
    
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
    onstart: evt => {
      evt.target.childNodes[1].style.opacity = '1';
    },
    onend: evt => {
      evt.target.style.opacity = 0;
      setTimeout(() => evt.target.remove(), 500);
    }
  });

  interact('.image__skippy-sunglasses').draggable({
    inertia: true,
    onmove: evt => {
      const target = evt.target;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + evt.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + evt.dy;
    
      const transform = `translate(${x}px, ${y}px) rotate(-50deg)`;
      target.style.webkitTransform = transform;
      target.style.transform = transform;
    
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
    onend: evt => {
      evt.target.style.opacity = 0;
      setTimeout(() => evt.target.remove(), 500);
    }
  });
};

