(function() {
  "use strict";

  var DEFAULT_ROUTE = 'one';

  var template = document.querySelector('#t');

  template.pages = [
    {name: 'Contract Explorer', icon:'apps', hash: 'one'},
    {name: 'My Account', icon:'account-circle', hash: 'two'},
    {name: 'My Contracts', icon:'description', hash: 'three'},
    {name: 'Settings', icon:'settings', hash: 'four'},
    {name: 'Help & Feedback', icon:'help', hash: 'five'},
  ];

  template.addEventListener('template-bound', function(e) {
    var keys = document.querySelector('#keys');

      // Allow selecting pages by num keypad. Dynamically add
      // [1, template.pages.length] to key mappings.
    var keysToAdd = Array.apply(null, template.pages).map(function(x, i) {
      return i + 1;
    }).reduce(function(x, y) {
      return x + ' ' + y;
    });
    keys.keys += ' ' + keysToAdd;

    this.route = this.route || DEFAULT_ROUTE; // Select initial route.
  });

  template.cyclePages = function(e, detail, sender) {
    // Click clicks should navigate and not cycle pages.
    if (e.path[0].localName == 'a') {
      return;
    }

    e.shiftKey ? sender.selectPrevious(true) : sender.selectNext(true);
  };

  template.menuItemSelected = function(e, detail, sender) {
    if (detail.isSelected) {
      document.querySelector('#scaffold').closeDrawer();
    }
  };

})()
