function go() {
  var string = document.getElementById("input").value;
  var encodedString = btoa(string);
  document.getElementById("output").value = "data:text/html;base64," + encodedString;
}
function copy() {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}
function clearinputs() {
  document.getElementById("output").value = "";
  document.getElementById("input").value = "";
}
document.getElementById("input").addEventListener("keyup", go);