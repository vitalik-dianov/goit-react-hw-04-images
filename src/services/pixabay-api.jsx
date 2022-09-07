import axios from 'axios';

export async function fetchImage(searchQuery, page) {
  const searchParams = new URLSearchParams({
    key: '29600371-65e1dfd0392553157581d4ad4',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    page += 1;
    return response;
  } catch (error) {
    console.log(error);
  }
}
