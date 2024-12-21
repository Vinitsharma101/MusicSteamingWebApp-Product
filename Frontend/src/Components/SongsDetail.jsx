import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SongDetails = () => {
  const { id } = useParams(); // Get the song ID from URL
  const [song, setSong] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongDetails = async () => {
      try {
        const response = await axios.get(
          `https://soulify-backend.onrender.com/api/song/${id}`
        );
        setSong(response.data);
      } catch (error) {
        setError("Error fetching song details");
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchSongDetails();
  }, [id]);

  if (isLoading) return <p>Loading song details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {song && (
        <div>
          <h2>{song.title}</h2>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
          <p>Release Date: {song.releaseDate}</p>
          {/* Display more song details as necessary */}
        </div>
      )}
    </div>
  );
};

export default SongDetails;
