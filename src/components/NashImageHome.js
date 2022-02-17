import "./nashImageHome.css"
import {Link} from 'react-router-dom';

export default function NashImageHome({}) {

  return(
    <div>
      <Link to={'/'} style={{ textDecoration: 'none' }} >
        <div className="img">
          <img src={"../nashsmall.gif"} alt="Home" />
        </div>
      </Link>
    </div>
  )
}

//need to add some functionality to change size based on screen size
