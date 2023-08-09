import axios from 'axios';

const apiKey = 'AIzaSyBCCc8FkvKZmz-Hzw0m3iJbkynPczXub1U';

const fetchBookSuggestions = async (searchTerm: string) => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchTerm
    )}&key=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data.items;
    } catch (error) {
        console.error('Error fetching book suggestions:', error);
        return [];
    }
};

export default fetchBookSuggestions;