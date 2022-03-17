import axios from 'axios';
export const baseUrl = 'https://travel-advisor.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'f5fd92e26dmsh34e5cc3915ed4b7p154d12jsnf9d3790ce8c1'
        }
    }

    );
    return data;

}
