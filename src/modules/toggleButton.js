const buttonState = {
  readMore: false,
  showMore: false,
  showMoreRepair: false,
};

function toggleReadMore() {
  const arrowIcon = document.getElementById('readMoreIcon');
  const buttonText = document.getElementById('readMoreText');

  arrowIcon.classList.toggle('rotated');
  buttonState.readMore = arrowIcon.classList.contains('rotated');

  if (buttonState.readMore) {
    buttonText.textContent = 'Скрыть';
  } else {
    buttonText.textContent = 'Читать далее';
  }
}

function toggleShowMore() {
  const arrowIcon = document.getElementById('showMoreIcon');
  const buttonText = document.getElementById('showMoreText');
  const mediumScreenContents = document.querySelectorAll('.brands__content.show-medium');
  const bigScreenContents = document.querySelectorAll('.brands__content.show-big');

  arrowIcon.classList.toggle('rotated');
  buttonState.showMore = arrowIcon.classList.contains('rotated');

  if (buttonState.showMore) {
    buttonText.textContent = 'Скрыть';
    mediumScreenContents.forEach(content => content.classList.add('show-all'));
    bigScreenContents.forEach(content => content.classList.add('show-all'));
  } else {
    buttonText.textContent = 'Показать все';
    mediumScreenContents.forEach(content => content.classList.remove('show-all'));
    bigScreenContents.forEach(content => content.classList.remove('show-all'));
  }
}

function toggleShowMoreRepair() {
  const arrowIcon = document.getElementById('showMoreRepairIcon');
  const buttonText = document.getElementById('showMoreRepairText');
  // const repairContents = document.querySelectorAll('.repair__content');
  const mediumScreenContents = document.querySelectorAll('.repair__content.show-medium');

  arrowIcon.classList.toggle('rotated');
  buttonState.showMoreRepair = arrowIcon.classList.contains('rotated');

  if (buttonState.showMoreRepair) {
    buttonText.textContent = 'Скрыть';
    mediumScreenContents.forEach(content => content.classList.add('show-all'));
  } else {
    buttonText.textContent = 'Показать все';
    mediumScreenContents.forEach(content => content.classList.remove('show-all'));
  }
}

export { toggleReadMore, toggleShowMore, toggleShowMoreRepair };
