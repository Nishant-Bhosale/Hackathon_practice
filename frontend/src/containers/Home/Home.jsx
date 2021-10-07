import React from 'react';
import  './Home.module.css';

export default function Home() {
    return (
        <div>
            <div className="row" style={{backgroundColor: "#02072F", height: "100%"}}>
                                <div className="col-sm-12 col-md-3" style={{backgroundColor: "#02072F"}}>
                                    <img className="border image-fluid w-full thumbnailRecent" src="/media/thumbnail/SAVE_20210724_241212_42crMr3.jpg" style={{borderRadius: "26px", height:"100%"}} alt=""/>
                                </div>

                                <div className="col-lg-9 col-md-9 col-sm-10 px-md-20">
                                    <div className="card-title">
                                        <h3 className="recentTitle">The flight of Nightangle ~ Ft. Komal Kanwar Amrawat</h3>
                                    </div>

                                    <div className="latestDescription text-wrap d-inline-block w-full">Everything is not planned. Cherish uncertainty, the one's who try are the one's who achieve</div>

                                        <span className="continueReadingListenButton material-icons ml-8 align-middle mt-15">play_circle</span>

                                    <div className="progress mt-20 mb-20" style={{height: "15px"}}>

                                    <div className="progress-bar rounded-0" role="progressbar" style={{width: "70%", background: "linear-gradient(90deg, #FF1880 8.54%, #FF5D62 111.09%)"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">

                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}
