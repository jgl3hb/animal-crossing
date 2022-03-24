import { Link } from "react-router-dom";

const Fish = ({fish}) => {
  return (
    <>
    <div className="fish">
      <Link
        to='/fish'
        state={{fish}}
        className='card-link'
      >
          <img src={fish.icon_uri} alt="fish" />
          <p>{fish.name['name-USen']}</p>
      </Link>
      <button style={{'backgroundColor': 'orange'}} className="btn">Add to Collection</button>
    </div>
    </>
  );
}

export default Fish;