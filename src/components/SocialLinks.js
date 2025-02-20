import React from 'react'
import { FOOTER } from '../XR_CONSTANTS';

function SocialLinks(props) {
    
    return (

        <div id={props.id} className="social-icons horizontal-flex-container flex-even">
            <a href={FOOTER.INSTAGRAM_STR} target="_blank">
                <img src="svg/instagram.svg"/>
            </a>
            <a href={FOOTER.TWITTER_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/twitter.svg"/>
            </a>
            <a href={FOOTER.FACEBOOK_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/facebook.svg"/>
            </a>
            <a href={FOOTER.LINKEDIN_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/linkedin.svg"/>
            </a>
            <a href={FOOTER.EMAIL_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/email.svg"/>
            </a>
        </div>

    );

}

export default SocialLinks;