import React, {useState, useEffect} from 'react';
import uuid from    'uuid/dist/v1'

const SongList = () => {
    //songs value lerin tutuldugu degisken, set songs value icerigini degistiren fonksiyon. , use state icerisindekiler ise initial value lerdir.
    const [songs, setSongs] = useState([
        { title: 'Almost Home', id: uuid()},
        { title: 'Memory Gospel', id: uuid()},
        { title: 'This will darkness', id: uuid()}
    ]);
    const addSong = () => {
        setSongs([...songs, {title: 'New Song', id:uuid()}]);
    }
    const [age, setAge] = useState(20);
    useEffect(() => {
        console.log('useEffect hook runs',songs)
    }, [songs])
    useEffect(() => {
        console.log('useEffect hook runs',age)
    }, [age])
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key= {song.id}> {song.title} </li>
                    );
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>

            <br /><br /><br /><br /><br />
            <button onClick={()=> setAge(age + 1)}>Add 1 to age:{age}</button>
        </div>
    );
}

export default SongList;


