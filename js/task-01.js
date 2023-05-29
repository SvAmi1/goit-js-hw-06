const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);

const itemsEl = listEl.querySelectorAll('.item');

itemsEl.forEach((item) => {
    const title = item.querySelector('h2');
    const total = item.querySelectorAll('li');

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${total.length}`);
});