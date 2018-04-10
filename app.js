const btn = document.querySelector('button');
const wrapper = document.querySelector('.container');
btn.addEventListener('click', () => {
  var duplicateBtn = wrapper.cloneNode(true);
  document.body.appendChild(duplicateBtn);
});
