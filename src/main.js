import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import './css/styles.css';
import { showToast } from './js/izi-toast';

const form = document.querySelector('.form-container');
const queryInput = form.querySelector('input[name="query"]');
const loader = document.querySelector('.downloader');
let currentPage = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = queryInput.value.trim();

  if (!query) {
    showToast('error', 'Please enter a search term!', 'Error');
    return;
  }

  clearGallery();
  loader.style.display = 'block';

  try {
    const data = await fetchImages(query, currentPage);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      showToast(
        'fail',
        'Sorry, there are no images matching your search query.',
        'No Results'
      );
    } else {
      renderGallery(data.hits);
      showToast('success', 'Images loaded successfully!', 'Success');
    }
  } catch (error) {
    loader.style.display = 'none';
    showToast('error', 'Failed to fetch images.', 'Error');
  }
});
