import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Logo from "./Logo";
import Reaction from "./Reaction";
import Comments from './Comments';
import Loading from "./Loading";
import Host from "../utils/Url";

const Tweet = () => {
    const { event, id } = useParams()
    const [ tweet, setTweet ] = useState({})
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        fetch(`../assets/events/${event.toLowerCase()}.json`)
        .then(response => response.json())
        .then(tweets => {
            // eslint-disable-next-line eqeqeq
            let newTweets = tweets.filter(tw => tw.id == id)
            setTweet(newTweets[0])
            setLoading(false)
            return
        })
    }, [event, id])

    if(loading) {
        return (<Loading></Loading>)
    }

    return (
        <div className="flex-row max-parent-height" style={{borderRadius: '5px'}}>
            <div className="image-section">
                <Logo></Logo>
                <div className="image-container unselectable">
                    <img src={ Host.ImageHost + tweet.post_image_url} alt="" />
                    <div className="reaction-container">
                        <Reaction date={tweet.date} ></Reaction>
                    </div>
                </div>
            </div>
            <div className="interact-section">
                {/* author info */}
                <div className="author unselectable">
                    <div className="author-info">
                        <div className="avatar" style={{marginRight: '10px'}}>
                            <img className="border" src={ Host.ImageHost + tweet.avatar_url } alt="" />
                        </div>
                        <p className="name">{ tweet.author }</p>
                    </div>
                </div>
                <div>
                    <p className="tweet-quote unselectable">{ tweet.content }</p>
                </div>
                {/* seperator */}
                <hr style={{width: '90%', margin: '5px auto'}} />    
                {/* Tweet comments*/}
                <div className="comment-section unselectable undraggable">
                    { tweet.comments.map(comment => 
                        <Comments comment={comment} key={Math.random()}></Comments>)
                    }
                </div>
                {/* User commment */}
                <div className="user-comment undraggable unselectable">
                    <div className="user-avatar avatar">
                        <img src="https://azurlane.netojuu.com/w/images/thumb/7/7c/CommanderIcon.png/46px-CommanderIcon.png" alt="" />
                    </div>
                    <div className="user-input">
                        <div className="input unselectable">
                            <p>Add a comment...</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" style={{"display": "block","fill": "#bebebe", "transform": "scale(-1, 1)"}}>
                            <path d="M 25 4.070313 C 12.367188 4.070313 2.070313 12.921875 2.070313 24 C 2.070313 30.429688 5.59375 36.027344 11.003906 39.6875 C 10.996094 39.902344 11.011719 40.25 10.730469 41.296875 C 10.378906 42.589844 9.671875 44.414063 8.238281 46.46875 L 7.21875 47.929688 L 9 47.929688 C 15.171875 47.929688 18.742188 43.90625 19.296875 43.261719 C 21.132813 43.691406 23.023438 43.929688 25 43.929688 C 37.632813 43.929688 47.929688 35.078125 47.929688 24 C 47.929688 12.921875 37.632813 4.070313 25 4.070313 Z M 25 5.929688 C 36.769531 5.929688 46.070313 14.078125 46.070313 24 C 46.070313 33.921875 36.769531 42.070313 25 42.070313 C 22.960938 42.070313 21.039063 41.875 19.234375 41.402344 L 18.65625 41.25 L 18.277344 41.714844 C 18.277344 41.714844 15.390625 44.972656 10.78125 45.757813 C 11.617188 44.25 12.234375 42.84375 12.519531 41.78125 C 12.921875 40.300781 12.929688 39.300781 12.929688 39.300781 L 12.929688 38.789063 L 12.5 38.515625 C 7.21875 35.15625 3.929688 29.957031 3.929688 24 C 3.929688 14.078125 13.230469 5.929688 25 5.929688 Z M 15 22 C 13.894531 22 13 22.894531 13 24 C 13 25.105469 13.894531 26 15 26 C 16.105469 26 17 25.105469 17 24 C 17 22.894531 16.105469 22 15 22 Z M 25 22 C 23.894531 22 23 22.894531 23 24 C 23 25.105469 23.894531 26 25 26 C 26.105469 26 27 25.105469 27 24 C 27 22.894531 26.105469 22 25 22 Z M 35 22 C 33.894531 22 33 22.894531 33 24 C 33 25.105469 33.894531 26 35 26 C 36.105469 26 37 25.105469 37 24 C 37 22.894531 36.105469 22 35 22 Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Tweet;