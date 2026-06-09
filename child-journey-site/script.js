const newStoryBtn = document.getElementById('newStoryBtn');
const storyModal = document.getElementById('storyModal');
const closeModal = document.getElementById('closeModal');
const saveStory = document.getElementById('saveStory');
const storyInput = document.getElementById('storyInput');
const storyList = document.querySelector('.story-list');

newStoryBtn.addEventListener('click', () => {
  storyModal.classList.remove('hidden');
  storyInput.value = '';
  storyInput.focus();
});

closeModal.addEventListener('click', () => {
  storyModal.classList.add('hidden');
});

saveStory.addEventListener('click', () => {
  const text = storyInput.value.trim();
  if (!text) {
    alert('请先输入一个小故事哦！');
    return;
  }

  const card = document.createElement('article');
  card.className = 'story-card';
  const title = document.createElement('h3');
  title.textContent = '新故事';
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  card.appendChild(title);
  card.appendChild(paragraph);
  storyList.appendChild(card);

  storyModal.classList.add('hidden');
});

window.addEventListener('click', (event) => {
  if (event.target === storyModal) {
    storyModal.classList.add('hidden');
  }
});
