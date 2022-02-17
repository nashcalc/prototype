import Header2 from "../components/Header2.js";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header2 />
      <br></br>
      <div
      style={{
        display: "inline-flex"
      }}
    >
        <div>
          <Link to={'/twoplayers'} style={{ textDecoration: 'none' }} >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="two players"
                height="190"
                image="./twoplayers.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Two Player Games
                  <br></br>
                  (Try Now!)
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="three players"
              height="190"
              image="./threeplayers.png"
            />
            <CardContent>

              <Typography gutterBottom variant="h5" component="div">
                Three Player Games
                <br></br>
                (Coming Soon)
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="three players"
              height="190"
              image="./nplayers.jpg"
            />
            <CardContent>

              <Typography gutterBottom variant="h5" component="div">
                N Player Games
                <br></br>
                (Coming Soon)
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home
