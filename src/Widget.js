import { Search } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'
import {  TwitterShareButton, TwitterTweetEmbed,  TwitterTimelineEmbed } from 'react-twitter-embed';

 function Widget() {
    

    return (
        <div className="widgets">
            <div className="widgets__input">
            <Search className="widgets__search"/>
            
            <input type="text" placeholder="search twitter" />
            </div>
            <div className="widgets__container">
            <TwitterTweetEmbed tweetId={'1326192904608514049'}/>
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Naruto_Anime_EN"
            options={{height:400}}
            />
            <TwitterShareButton/>
            </div>


        </div>
    )
}
export default Widget