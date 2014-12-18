var tabs = document.querySelector('paper-tabs');
tabs.addEventListener('core-select', function() {
  var p = document.querySelector('core-animated-pages');
  p.selected = tabs.selected;
})
