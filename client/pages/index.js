import { useContext } from "react";
import { UserContext } from "../context";

const Home = () => {
    const[state,setState]=useContext(UserContext);
    return (
        <div>
       

           <img src='./images/parrot.jpg'></img>
           {JSON.stringify(state)}
        </div>
    )
}
export default Home;