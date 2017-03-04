function changeBindingsToSublime() {
  Editor.commands.addCommand({
    name: "findnext",
    bindKey: {win: "Ctrl-D", mac: "Command-Option-D"},
    exec: function(editor) {
      if (editor.selection.isEmpty())
            editor.selection.selectWord();
        else
            editor.selectMore();
      }
  });
  Editor.commands.addCommand({
    name: "removeline",
    bindKey: {win: "Ctrl-Shift-K", mac: "Command-Option-K"},
    exec: function(editor) {
        editor.removeLines();
      }
  });
  Editor.commands.addCommand({
    name: "movelinesup",
    bindKey: {win: "Ctrl-Shift-Up", mac: "Command-Alt-Up"},
    exec: function(editor) {
        editor.moveLinesUp();
      }
  });
  Editor.commands.addCommand({
    name: "movelinesdown",
    bindKey: {win: "Ctrl-Shift-Down", mac: "Command-Alt-Down"},
    exec: function(editor) {
        editor.moveLinesDown();
      }
  });
  Editor.commands.addCommand({
    name: "insertLineAfter",
    bindKey: {win: "Ctrl-Return", mac: "Command-Return"},
    exec: function(editor) {
        var position = Editor.getCursorPosition();
        editor.session.insert({row: position.row + 1, column: 0}, "\n");
        editor.gotoLine(position.row+2);
      }
  });
  Editor.commands.addCommand({
    name: "insertLineBefore",
    bindKey: {win: "Ctrl-Shift-Return", mac: "Command-Shift-Return"},
    exec: function(editor) {
        var position = Editor.getCursorPosition();
        editor.session.insert({row: position.row, column: 0}, "\n");
        editor.gotoLine(position.row+1);
      }
  });
}




function changeBindingsToAce() {
  Editor.commands.addCommand({
    name: "findnext",
    bindKey: {win: "Ctrl-K", mac: "Command-Option-K"},
    exec: function(editor) {
        editor.findNext();
      }
  });
  Editor.commands.addCommand({
    name: "removeline",
    bindKey: {win: "Ctrl-D", mac: "Command-Option-D"},
    exec: function(editor) {
        editor.removeLines();
      }
  });
  Editor.commands.addCommand({
    name: "movelinesup",
    bindKey: {win: "Alt-Up", mac: "Option-Up"},
    exec: function(editor) {
        editor.moveLinesUp();
      }
  });
  Editor.commands.addCommand({
    name: "movelinesdown",
    bindKey: {win: "Alt-Down", mac: "Option-Down"},
    exec: function(editor) {
        editor.moveLinesDown();
      }
  });
}