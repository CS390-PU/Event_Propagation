const list=document.querySelector('.list');

list.addEventListener('click', e=> {
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.classList.toggle('completed');
})