import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Tweets from "./Tweets";
import Tweet from "./Tweet";
import Events from "./Events";

const Home = () => {

    return (
        <Router>
            <div className="container">
                <div className="backgroundLayer max-parent-height"></div>
                <Switch>
                    <Route exact path="/">
                        <Events></Events>
                    </Route>
                    <Route exact path="/:event">
                        <Tweets></Tweets>
                    </Route>
                    <Route path="/:event/:id">
                        <Tweet></Tweet>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
 
export default Home;