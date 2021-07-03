import Logo from "./Logo";
import Tweets from "./Tweets";

const Home = () => {
    return (
        <div className="container">
            <div className="backgroundLayer"></div>
            <Logo></Logo>
            <Tweets></Tweets>
        </div>
    );
}
 
export default Home;