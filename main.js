var imageUrls = [
  'https://i.chzbgr.com/full/9591928832/h8AC54339/laptop-writing-whole-project-as-student-gim-writing-10-lines-code-as-salaried-enough-today',
  'https://pbs.twimg.com/media/ETI02hIXYAAFBtG.jpg',
  'https://ih1.redbubble.net/image.2392853808.6464/st,small,507x507-pad,600x600,f8f8f8.jpg',
  'https://i.pinimg.com/originals/32/f3/48/32f348377e5dd88cceb120353a516287.jpg',
  'https://preview.redd.it/sj2b9ismrp371.jpg?auto=webp&s=8b2c640dd1f5e5f360d95db4dd5929d4cb3295fd'
];
var $gallery = document.querySelector('main');
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
