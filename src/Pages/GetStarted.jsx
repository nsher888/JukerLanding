import React, { useState, useEffect } from "react";
import { Header } from "@components";
import { useForm } from "react-hook-form";
import ReactPlayer from "react-player"; 

const GetStarted = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [queue, setQueue] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const onSubmit = async (data) => {
    try {
      const apiKey = "YOUR_YOUTUBE_API_KEY"; // Replaced
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data.songName}&type=video&key=${apiKey}`
      );
      const results = await response.json();
      setSearchResults(results.items || []); // Assuming the API response has an 'items' array for results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSongSelection = (videoId) => {
    setSelectedSong(videoId);
  };

  const addToQueue = () => {
    if (selectedSong) {
      setQueue([...queue, selectedSong]);
      setSelectedSong(null); // Clear selected song after adding
    } else {
      console.warn("No song selected");
    }
  };

  // Play the next song in the queue when the current song finishes
  useEffect(() => {
    if (queue.length > 0 && !currentSong) {
      setCurrentSong(queue[0]);
      setQueue(queue.slice(1)); // Remove the played song from the queue
    }
  }, [queue, currentSong]);

  return (
    <div>
      <Header />
      <h1>Get Started</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="songName">Enter Song Name:</label>
        <input type="text" id="songName" {...register("songName", { required: true })} />
        {errors.songName && <span>Please enter a song name</span>}
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((item) => (
            <li key={item.id.videoId}>
              <input
                type="radio"
                id={`song-${item.id.videoId}`}
                name="selectedSong"
                value={item.id.videoId}
                checked={selectedSong === item.id.videoId}
                onChange={() => handleSongSelection(item.id.videoId)}
              />
              <label htmlFor={`song-${item.id.videoId}`}>
                {item.snippet.title} - {item.snippet.channelTitle}
              </label>
            </li>
          ))}
        </ul>
      )}
      <button onClick={addToQueue} disabled={!selectedSong}>
        Add to Queue
      </button>
      <h2>Queue</h2>
      <ul>
        {queue.map((songId) => (
          <li key={songId}>
            {/* Display song information based on songId (e.g., title, artist) */}
            {/* You can fetch additional details from the YouTube Data API or store relevant data when adding the song to the queue */}
            {searchResults.find((item) => item.id.videoId === songId)?.snippet.title}
          </li>
        ))}
      </ul>
      {currentSong && <ReactPlayer url={`https://www.youtube.com/watch?v=${currentSong}`} />}
    </div>
  );
};

export default GetStarted;
