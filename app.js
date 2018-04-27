const btn = document.querySelector('button');
const wrapper = document.querySelector('.container');
btn.addEventListener('click', e => {
  if (e.target.tagName == 'BUTTON') {
    let duplicateBtn = wrapper.cloneNode(true);
    document.body.prepend(duplicateBtn);
  }
});
