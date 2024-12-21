import axios from 'axios';
import { Router } from 'express';

const router = new Router();

router.get('/homedata', async (req, res) => {
    try {
        const response = await axios.get('https://soulify-backend.onrender.com/api/getHome');
        res.json({ message: 'Home page', data: response.data }); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
});


router.get('/playlistData', async (req, res) => {
    const { id } = req.query; 
    try {
        const response = await axios.get(`https://www.jiosaavn.com/api.php?__call=playlist.getDetails&listid=${id}&_format=json`);
        res.json({ message: 'Playlist page', data: response.data });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
});

export default router;
