/* eslint-disable no-undef */
import { Avatar } from '@material-ui/core'
import { ChatBubble, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
import React ,{forwardRef} from 'react'
import './Post.css'

 const Post = forwardRef(({ displayName,
    userName,
    verified,
    text,
    image,
    avatar},ref) =>{
    

    return (
       <div className="post" ref= {ref}>
           <div className="post__avatar">
           <Avatar src= {avatar}/>
           </div>
           <div className="postbody">
               <div className="postheader">
                   <div className="postheader__text">
                    <h3>
                        {displayName} <span className="postheader__span">
                    {  verified && <VerifiedUser className="postbadge"/> } @{userName} 
                        </span>
                    </h3>
                   </div>
                   <div className="postheader__description">
                    <p>{text}</p>
                   </div>
                    <img className="image"  width="100%" src= {image}
                    alt="" />
                    <div className="postfooter">
                        <ChatBubble fontSize ="small"/>
                        <Repeat fontSize ="small"/>
                        <FavoriteBorder fontSize ="small"/>
                        <Publish fontSize ="small"/>

                    </div>
               </div>
           </div>
       </div>
    );
 
    });
export default Post;