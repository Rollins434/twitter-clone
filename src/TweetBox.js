/* eslint-disable no-unused-vars */
import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'
import { VerifiedUser } from '@material-ui/icons';

 function Tweetbox() {
    const[tweet , setTweet] = useState("");
    const[tweetImage, settweetImage] = useState("");

    const sendTweet = (e) =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName : "Ethan Hunt",
            userName: "ethanH",
            verified : true,
            text : tweet,
            image: tweetImage,
            avatar:"https://www.flaticon.com/svg/static/icons/svg/924/924874.svg"
        });
        setTweet("");
        settweetImage("");
    }

    return (
        <div className="tweetBox">
           <form>
            <div className="tweetBox__input">
            <Avatar src=" https://www.flaticon.com/svg/static/icons/svg/924/924874.svg"/>
            <input type="text" value={tweet} onChange = {e =>setTweet(e.target.value) } placeholder="write something"/>
            
            </div>
            <input  className="tweetBox__image"  value={tweetImage}
            onChange ={ e =>settweetImage(e.target.value)}
            type="text" placeholder="enter image url" />   
            <Button  type="submit" onClick ={sendTweet} className="tweetBox__button" >Tweet</Button>
            </form>    
            
        </div>
    )
}
export default Tweetbox;