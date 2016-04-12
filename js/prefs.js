var DEFAULT_PREFS = {
  theme: 'tomorrow_night_eighties',
  fontsize: '12px',
  keybind: 'ace',
  soft_wrap: 'on',
  print_margin: 0,
  tabsize: 2,
  hactive: true,
  hword: true,
  invisibles: false,
  gutter: true,
  pmargin: true,
  softab: true,
  behave: true,
  show_login: false,
  spellcheck: false,
  autocomplete: false
};

var PREFS = {};
for (var key in DEFAULT_PREFS) {
  PREFS[key] = DEFAULT_PREFS[key];
}

var THEMES = [
  {key: "tomorrow_night_eighties", name: "Tomorrow Night - 80's"},
];

var KEY_MODES = [
  {key: "ace", name: "Ace"},
  {key: "emacs", name: "Emacs"},
  {key: "vim", name: "Vim"}
];

var FONT_MODES = [];
for (var i=12; i <= 60; i++) {
  FONT_MODES.push({key: i + "px", name: i + "px"});
}

var WRAP_MODES = [
  {key: "off", name: "Off"},
  {key: "on", name: "On"},
  {key: "free", name: "Free"}
];
