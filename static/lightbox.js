(function () {
  var triggers = null;
  var currentIndex = -1;
  var overlay = null;
  var img = null;

  function show(index) {
    currentIndex = index;
    img.src = triggers[currentIndex].href;
  }

  function navigate(dir) {
    show((currentIndex + dir + triggers.length) % triggers.length);
  }

  function close() {
    overlay.remove();
    document.removeEventListener('keydown', onKeydown);
    overlay = null;
    img = null;
    triggers = null;
    currentIndex = -1;
  }

  function onKeydown(ev) {
    if (ev.key === 'Escape') close();
    else if (ev.key === 'ArrowLeft') navigate(-1);
    else if (ev.key === 'ArrowRight') navigate(1);
  }

  function makeNavButton(className, label, dir) {
    var btn = document.createElement('button');
    btn.className = 'lightbox-nav ' + className;
    btn.setAttribute('aria-label', label);
    btn.textContent = className === 'lightbox-prev' ? '‹' : '›';
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      navigate(dir);
    });
    return btn;
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('.lightbox-trigger');
    if (!link) return;
    e.preventDefault();

    triggers = Array.prototype.slice.call(document.querySelectorAll('.lightbox-trigger'));

    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.addEventListener('click', close);

    img = document.createElement('img');
    img.addEventListener('click', function (ev) { ev.stopPropagation(); });
    overlay.appendChild(img);

    if (triggers.length > 1) {
      overlay.appendChild(makeNavButton('lightbox-prev', 'Previous image', -1));
      overlay.appendChild(makeNavButton('lightbox-next', 'Next image', 1));
    }

    document.addEventListener('keydown', onKeydown);
    document.body.appendChild(overlay);
    show(triggers.indexOf(link));
  });
})();
