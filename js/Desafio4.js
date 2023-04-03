const searchInput = document.getElementById('search');
const categoryLinks = document.querySelectorAll('.category-link');
const articleList = document.getElementById('article-list');

function filterArticles() {
  const searchQuery = searchInput.value.trim().toLowerCase();
  const selectedCategory = Array.from(categoryLinks).find(link => link.classList.contains('active'));

  Array.from(articleList.children).forEach(article => {
    const title = article.querySelector('a').textContent.trim().toLowerCase();
    const category = article.textContent.trim().toLowerCase().match(/\((.*)\)/)[1];

    if (searchQuery && !title.includes(searchQuery)) {
      article.classList.add('hidden');
    } else if (selectedCategory && category !== selectedCategory.textContent.trim().toLowerCase()) {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  });
}

searchInput.addEventListener('input', filterArticles);

categoryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    categoryLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    filterArticles();
  });
});