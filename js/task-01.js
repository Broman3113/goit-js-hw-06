const categoriesEl = document.querySelector('#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
})