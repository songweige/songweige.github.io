function hoverImage(element) {
  var defaultImage = element.querySelector('.default-image');
  var hoverImage = element.querySelector('.hover-image');
  defaultImage.style.display = 'none';
  hoverImage.style.display = 'block';
}

function resetImage(element) {
  var defaultImage = element.querySelector('.default-image');
  var hoverImage = element.querySelector('.hover-image');
  defaultImage.style.display = 'block';
  hoverImage.style.display = 'none';
}