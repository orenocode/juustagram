import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import Logo from "./Logo";
import Like from './Like';

const Tweets = () => {
    const ImageHost = "https://azurlane.netojuu.com";
    const [tweets, setTweets] = useState([]);
    const { event } = useParams();

    useEffect(() => {
        fetch(`../assets/events/${event.toLowerCase()}.json`)
            .then(response => response.json())
            .then(data => setTweets(data))
    }, [event])

    return (
        <div className="tweetContainer">
            <Logo></Logo>
            { tweets.map(tweet => (<Link className="tweets tweetCover" key={tweet.id} to={`/${event}/${tweet.id}`}>
                <div className="tweetAvatar">
                    <img src={`${ImageHost}/${tweet.avatar_url}`} alt={tweet.author} />
                    <p className="tweetAuthor">{tweet.author}</p>
                </div>
                <div className="tweetImage">
                    <img src={`${ImageHost}/${tweet.post_image_url}`} alt="" />
                </div>
                <div className="tweetStatus">
                    <p>{tweet.content}</p>
                </div>
                <Like></Like>
            </Link>))}
        </div>       
    );
}
 
export default Tweets
