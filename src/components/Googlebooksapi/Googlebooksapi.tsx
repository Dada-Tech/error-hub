import axios from 'axios';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

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