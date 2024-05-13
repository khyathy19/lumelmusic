import React, { useState, useEffect } from 'react';

const LumelMusicApp = () => {
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
	const [listen, setListen] = useState([]);

    useEffect(() => {
        //  albums from API
        const Albums = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                const data = await response.json();
                setAlbums(data);
                localStorage.setItem('albums', JSON.stringify(data)); // local storage
            } catch (error) {
                console.error('Error:', error);
            }
        };

        //  songs from API
        const Songs = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await response.json();
                setSongs(data);
                localStorage.setItem('songs', JSON.stringify(data));
            } catch (error) {
                console.error('Error:', error);
            }
        };
        const cachedAlbums = localStorage.getItem('albums');
        const cachedSongs = localStorage.getItem('songs')
		if (cachedAlbums && cachedSongs) {
			setAlbums(JSON.parse(cachedAlbums))
			setSongs(JSON.parse(cachedSongs))
		} else {
			Albums()
			Songs()
		}
    }, []);

    return (
		<div className="lumel-music-app">
			<h1>Lumel Music App</h1>
			<div>
				<button onClick={() => setListen('albums')}>
					Albums
				</button>
				<button onClick={() => setListen('songs')}>
					Songs
				</button>
			</div>
		</div>
	)
};

export default LumelMusicApp;
