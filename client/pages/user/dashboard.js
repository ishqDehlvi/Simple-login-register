import { useContext } from "react";
import { UserContext } from "../../context";

// this page user can render if user is logedin

const Home = () => {
    const[state,setState]=useContext(UserContext);
    return (
        <div>
           <h1>Dash board</h1>
                  </div>
    )
}
export default Home;