import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TwitchStreamers = () => {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const { data } = await axios.get('https://api.twitch.tv/helix/streams', {
          headers: {
            'Client-ID': '<your_client_id>',
            'Authorization': 'Bearer <your_access_token>',
          },
          params: {
            first: 100,
            language: 'en',
            viewer_count: 100,
            tag_id: 'morocco', // Replace with the ID of the tag you're interested in
          },
        });
        const filteredStreams = data.data.filter(stream => stream.viewer_count < 100);
        setStreams(filteredStreams);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Twitch streams:', error);
        setLoading(false);
      }
    };

    fetchStreams();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Support Small Streamers</h1>
      <ul>
        {streams.map(stream => (
          <li key={stream.id}>
            <a href={`https://www.twitch.tv/${stream.user_name}`} target="_blank" rel="noopener noreferrer">
              {stream.user_name} - {stream.viewer_count} viewers
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwitchStreamers;
