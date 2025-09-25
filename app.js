// Main Application
class app {
constructor() {
this.init();
}
init() {
console.log('App Initialized')
this.loadContent();
}
loadContent() {
const main = document.queryselector('main');
main.innerHTML = '<h2>Welocome to Our Application</h2><p>This is my first Js Script for Devops Learning</p>';
}
}
