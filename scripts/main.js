document.addEventListener('DOMContentLoaded', function(){
  // small accessibility helper: focus outline for keyboard users
  function handleFirstTab(e){
    if(e.key === 'Tab') document.body.classList.add('user-is-tabbing')
  }
  window.addEventListener('keydown', handleFirstTab, {once:true});

  // animate progress bars on view
  var fills = document.querySelectorAll('.progress-fill');
  if(fills.length){
    fills.forEach(function(fill){
      var w = fill.style.width || '0%';
      fill.style.width = '0%';
      setTimeout(function(){ fill.style.transition = 'width 1200ms ease'; fill.style.width = w }, 200)
    })
  }

  // trigger hero text animation (fade-in + slide)
  var hero = document.querySelector('.hero-overlay');
  if(hero){
    // Ensure the title + subtext remain hidden until we explicitly reveal them to avoid FOUC.
    var heroTitle = hero.querySelector('h1');
    var heroLead = hero.querySelector('.lead');
    // Make sure elements exist before manipulating
    if(heroTitle) heroTitle.style.visibility = 'hidden';
    if(heroLead) heroLead.style.visibility = 'hidden';

    // allow one frame then reveal + animate so transitions run smoothly
    requestAnimationFrame(function(){
      setTimeout(function(){
        if(heroTitle) heroTitle.style.visibility = '';
        if(heroLead) heroLead.style.visibility = '';
        hero.classList.add('anim');
      }, 120);
    })
  }
});
