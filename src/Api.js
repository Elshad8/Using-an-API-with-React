import axios from 'axios';

const searchImages=async(term)=>{
    
    const response=await axios.get('https://api.unsplash.com/search/photos',
    {headers: {
        Authorization: 'Client-ID GbFwkace4X1sPsqy_Z4Eq-CBmj7btd48G_dajpzPAZo'
    },
    params:{
        query:term,
    }
});
return response.data.results;
};

export default searchImages;