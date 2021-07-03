import { useState, useEffect } from 'react';
import Like from './Like';

const Tweets = () => {
    const WIKI = "https://azurlane.koumakan.jp";
    const ImagePath = "/assets/ships";
    const [tweets, setTweets] = useState([]);
    
    useEffect(() => {
        fetch('../assets/posts.json')
            .then(response => response.json())
            .then(data => setTweets(data))
    }, [])

    return (
        <div className="tweetContainer">
            { tweets.map(tweet => (<div className="tweets tweetCover" key={tweet.id}>
                <div className="tweetAvatar">
                    <img src={`${ImagePath}/${tweet.avatar_url}`} alt={tweet.author} />
                    <a className="tweetAuthor" href={`${WIKI}/${tweet.author}`}>{tweet.author}</a>
                </div>
                <div className="tweetImage">
                    <img src={`${ImagePath}/${tweet.post_image_url}`} alt="" />
                </div>
                <div className="tweetStatus">
                    <p>{tweet.status}</p>
                </div>
                <Like></Like>
            </div>))}
        </div>       
    );
}
 
export default Tweets
