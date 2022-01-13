let slideIndex = 1;
showNews(slideIndex);

function prevnextNews(n) {
  showNews((slideIndex += n));
}

function showNews(n) {
  let i;
  const news = document.getElementsByClassName("trending-news");
  if (n > news.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = news.length;
  }
  for (i = 0; i < news.length; i++) {
    news[i].style.display = "none";
  }
  news[slideIndex - 1].style.display = "block";
}
