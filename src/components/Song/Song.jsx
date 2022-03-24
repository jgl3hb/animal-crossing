import { Link } from "react-router-dom";

const Song = ({song}) => {
  return (
    <div>
    <Link
      to='/song'
      state={{song}}
      className='card-link'
    >
      <div className="song">
        <img src={song.image_uri} alt="album" />
        <h3>{song.name['name-USen']}</h3>
      </div>
    </Link>
        <button>Test button</button>
    </div>
  );
}

export default Song;