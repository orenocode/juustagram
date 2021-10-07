import { Link } from 'react-router-dom'
import Logo from './Logo';

const Events = () => {
    const events = [
        "Passionate_Polaris",
        "Spring_Festival",
        "Summer_2020",
        "Aurora_Noctis",
        "3rd_Anniversary",
        "Universe_in_Unison",
        "Vacation_Lane",
        "Christmas_2020",
        "Inverted_Orthant",
        "Happy_Lunar_New_Year_2021",
        "Khorovod_of_Dawn%27s_Rime",
        "Daedalian_Hymn",
        "Mirror_Involution",
        "4th_Anniversary",
        // "Early-Summer_Celebration",
        // "Azur_Anthem ",
        // "Upon_the_Shimmering_Blue",
        // "Manjuu_Theme_Park",
    ];
    function formatName(name) {
        if(name.indexOf("%") > 1) {
            name = name.replace("%27", "'")
        }
        return name.replace(/_/g, " ")
    }

    return (
        <div className="tweetContainer">
            <Logo></Logo>
            <ul>
                { events.map(event => <Link key={event} to={`/${event}`} className="tweets tweetCover mar-top-bot"><li>{formatName(event)}</li></Link>) }
            </ul>
        </div>
    );
}
 
export default Events;