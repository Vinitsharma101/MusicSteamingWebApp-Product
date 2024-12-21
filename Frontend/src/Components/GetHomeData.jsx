import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Card from "./Cards";
import { useNavigate } from "react-router-dom";
import LoadingWave from "./Loadinganimation/LoadingWave";

const GetHomeData = ({ cardLimit = 21 }) => {
  const [homeData, setHomeData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleCardClick = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/playlistData?id=${id}`
      ); 
      console.log("Backend API Response:", response.data);
      navigate(`/playlists/${id}`);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/homedata");
        setHomeData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingWave />;
  }

  return (
    <div className="pt-20 p-10">
      {Object.entries(homeData).map(([heading, items]) => (
        <div key={heading} className="mb-8">
          <h2 className="text-xl text-white font-semibold capitalize mb-4">
            {heading.replace(/_/g, " ")}
          </h2>
          {Array.isArray(items) && items.length > 0 ? (
            <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
              {items.slice(0, cardLimit).map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No items to display</p>
          )}
        </div>
      ))}
    </div>
  );
};

GetHomeData.propTypes = {
  cardLimit: PropTypes.number,
};

export default GetHomeData;
