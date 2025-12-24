
/* 
  Name:         header-toggle.js
  Description:  Ein- und Ausblenden des Headers mit Animation.
  Date:         2024-06-10
  Author:       Matthias Hornacek
*/



// Minimal, unabhängig von main.js. Läuft nach DOMContentLoaded.
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var header = document.getElementById('header');
    if (!header) console.log('Header element not found'); return;

    function applyClass(cls){
      header.classList.remove('reveal','hide');
      // force reflow
      void header.offsetWidth;
      header.classList.add(cls);
    }

    window.showHeader = function(){
      header.style.visibility = 'visible';
      applyClass('reveal');
    };

    window.hideHeader = function(){
      applyClass('hide');
    };

    header.addEventListener('animationend', function(){
      if (header.classList.contains('hide')) header.style.visibility = 'hidden';
      else if (header.classList.contains('reveal')) header.style.visibility = 'visible';
    }, false);
  });
})();