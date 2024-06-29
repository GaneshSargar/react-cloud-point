import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    const INIT_URl = "https://plus.unsplash.com/premium_photo-1719476096371-d595d60e3b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1c3R5JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
    
    const HOT_URL = "https://media.istockphoto.com/id/1130636356/photo/sunset-over-mountain-with-cosmos-blooming.webp?b=1&s=170667a&w=0&k=20&c=XtLTIJBInoB31j0wsEnq0xBlfkP7fTZc-sbSxo3dXXk=";
    const COLD_URL = "https://images.unsplash.com/photo-1692302963538-3d93f2dd88bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            {/* <h2>Weather Info - {info.city}</h2> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }} className='Card-border'>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>  
                </Card>
            </div>
        </div>
    );
}