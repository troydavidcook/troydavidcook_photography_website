import React from 'react';

    function Links(props) {
        return (
            <div className="Splash-Welcome">
                <span>Check out my </span>
                 <a
                className="Social-Link"
                href="https://www.instagram.com/troydavidcook/"
                target="_blank"
                rel="noopener noreferrer"> Instagram </a><span> and </span>
                <a
                className="Social-Link"
                href="https://www.facebook.com/Troy-David-Cook-Photography-201821869892740/"
                target="_blank"
                rel="noopener noreferrer">
                 Facebook
                </a>
                <span> page!</span>
            </div>
        )
    }

export default Links;