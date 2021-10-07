/* eslint-disable react/jsx-no-duplicate-props */
import Calculation from "../utils/Calculation";

const Reaction = ({ date }) => {
    let calc = Calculation

    return (
        <div style={{margin: '5px 0'}}>
            <div className="flex-row space-between align-center white-text">
                <div className="flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="clickable" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"> 
                        <path opacity="0" d="M0 0h24v24H0z"></path> 
                        <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path> 
                    </svg>
                    <span style={{marginRight: '5px'}}></span>
                    <svg style={{marginTop: '2px'}} className="clickable" fill="currentColor" width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.97 122.88">
                        <path opacity="0" d="M0 0h24v24H0z"></path> 
                        <path d="M61.44,0a61.46,61.46,0,0,1,54.91,89l6.44,25.74a5.83,5.83,0,0,1-7.25,7L91.62,115A61.43,61.43,0,1,1,61.44,0ZM96.63,26.25a49.78,49.78,0,1,0-9,77.52A5.83,5.83,0,0,1,92.4,103L109,107.77l-4.5-18a5.86,5.86,0,0,1,.51-4.34,49.06,49.06,0,0,0,4.62-11.58,50,50,0,0,0-13-47.62Z"/>
                    </svg>
                </div>
                <svg style={{marginTop: '2px'}} className="clickable" fill="currentColor" width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 108.3">
                    <path opacity="0" d="M0 0h24v24H0z"></path> 
                    <path d="M96.14,12.47l-76.71-1.1,28.3,27.85L96.14,12.47ZM53.27,49l9.88,39.17L102.1,22,53.27,49ZM117,1.6a5.59,5.59,0,0,1,4.9,8.75L66.06,105.21a5.6,5.6,0,0,1-10.44-1.15L41.74,49,1.67,9.57A5.59,5.59,0,0,1,5.65,0L117,1.6Z"/>
                </svg>
            </div>
            <div className="flex-row space-between white-text unselectable" style={{fontWeight: 900, fontSize: '12px'}}>
                <p>999+ Likes</p>
                <p>{ calc.convertDate(date) } <span> ago</span></p>
            </div>
        </div>
    );
}
 
export default Reaction;