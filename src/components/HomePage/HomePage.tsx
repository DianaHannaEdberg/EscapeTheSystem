import "./HomePage.css"
import { Button} from "@mui/material";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Escape the system</h1>

     
      <CardContent>
      <p>Du befinner dig i en övergiven anläggning. Dörrarna är låsta och systemet svarar inte. </p>
      <p>För att komma ut måste du hitta en väg som leder till en säker utgång. </p>
      <p>Hitta den dolda utgången innan det är försent!</p>
      </CardContent>

      

      <Button 
      component={Link}
      to="/room/server-room"
      variant="contained"

      sx={{ 
        backgroundColor: "crimson" , 
        fontSize: "15px",
        padding: "7px 20px"

      }}

      >
        Start the game
      </Button>


    </div>
  )
}

export default HomePage  