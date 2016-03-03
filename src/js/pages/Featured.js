import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
    render() {
        const Articles = [
            "First Featured Article",
            "Second Featured Article",
            "Third Featured Article",
        ].map((title, i) => <Article key={i} title={title}/> );

        const adText = [
            "Ad spot #1",
            "Ad spot #2",
            "Ad spot #3",
            "Ad spot #4",
        ];
        
        const randomAd = adText[Math.round( Math.random() * (adText.length - 1))];
        console.log("featured");
        return (
            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="well text-center">
                            {randomAd}
                        </div>
                    </div>
                </div>
                <div class="row">{Articles}</div>
            </div>
        );
    }
}