const Loading = () => {
    return (
        <div className="loading-container unselectable">
            <div id="loading">
                <div className="loading-layer"></div>
                <div className="preloader">
                    <div className="preloader-dots">
                        <div className="dot-container">
                            <div className="dot-letter">
                                <img src="/assets/manjuu-loading.png" alt="" />
                            </div>
                        </div>
                        <div className="dot-container">
                            <div className="dot-letter">
                                <img src="/assets/manjuu-loading.png" alt="" />
                            </div>
                        </div>
                        <div className="dot-container">
                            <div className="dot-letter">
                                <img src="/assets/manjuu-loading.png" alt="" />
                            </div>
                        </div>
                        <div className="dot-container">
                            <div className="dot-letter">
                                <img src="/assets/manjuu-loading.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Loading;