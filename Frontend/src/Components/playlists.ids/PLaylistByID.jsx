import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PlayCircle, Clock, Heart } from "lucide-react";

const PlaylistByID = () => {
  const { id } = useParams();
  const [playlistData, setPlaylistData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/playlistData?id=${id}`
        );
        setPlaylistData(response.data.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching playlist data:", error);
        setLoading(false);
      }
    };

    fetchPlaylistData();
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (playlistData) {
   return (
     <div className="min-h-screen bg-transparent text-gray-200">
       <div className="container mx-auto px-6 py-12">
         <div className="flex flex-col md:flex-row items-center md:items-end space-y-6 md:space-y-0 md:space-x-8 mb-10">
           <img
             src={playlistData.image || playlistData.coverImage}
             alt={playlistData.listname}
             className="w-72 h-72 rounded-lg shadow-2xl"
           />
           <div>
             <h1 className="text-5xl font-extrabold mb-3">
               {playlistData.listname}
             </h1>
             <p className="text-gray-300 mb-6">
               {playlistData.subtitle_desc[0]}
             </p>
             <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-200 flex items-center">
               <PlayCircle className="mr-2" />
               Play
             </button>
           </div>
         </div>

         <div className="bg-gray-800 bg-opacity-25 backdrop-blur-x  rounded-lg shadow-xl p-4">
           <table className="w-full table-auto">
             <thead>
               <tr className="border-b border-indigo-700">
                 <th className="py-4 px-6 text-left text-lg font-medium">#</th>
                 <th className="py-4 px-6 text-left text-lg font-medium">
                   Title
                 </th>
                 <th className="py-4 px-6 text-left text-lg font-medium hidden md:table-cell">
                   Artist
                 </th>
                 <th className="py-4 px-6 text-right text-lg font-medium">
                   <Clock size={18} />
                 </th>
               </tr>
             </thead>
             <tbody>
               {playlistData.songs.map((song, index) => (
                 <tr
                   key={song.id}
                   className="hover:bg-indigo-700 transition duration-300"
                 >
                   <td className="py-4 px-6">{index + 1}</td>
                   <td className="py-4 px-6">{song.song}</td>
                   <td className="py-4 px-6 hidden md:table-cell">
                     {song.singers.slice(0, 25)+'...'}
                   </td>

                   <td className="py-4 px-6 text-right flex items-center justify-end">
                     <Heart
                       size={18}
                       className="mr-4 text-indigo-300 hover:text-white cursor-pointer transition duration-200"
                     />
                     {song.year}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );

  }

  return <div>Playlist not found.</div>;
};

export default PlaylistByID;
