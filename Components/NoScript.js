/**
 * If the user has JavaScript disabled, this content will display
 */
export default function NoScript() {
    return (
        <noscript>
            <style>
                {`
                    footer {
                        padding: 0;
                        margin: 0;
                        height: 100vh;
                    }
                    
                    h1, p {
                        font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    }

                    body {
                        margin: 30px;
                    }

                    main, header { 
                        display: none; 
                    }

                    footer {
                        font-size: 12px;
                        color: grey;
                        height: 35px;
                    }

                    p {
                        line-height: 25px;
                    }
                    
                    img {
                        border-radius: 50%;
                        padding: 5px 20px 20px 5px;
                        margin-top: 10px;
                        min-width: 50px;
                        transition: padding 0.3s, margin-right 0.3s, margin-bottom 0.3s, margin-top 0.3s;
                    }

                    img:hover {
                        padding: 15px 5px 5px 5px;
                        margin-top: 0;
                        margin-bottom: 15px;
                    }
                `}
            </style>
            <img className="logo-img" src='/logo.png' alt='Logo'/>
            <h1>JavaScript is required for this website to function.</h1>
            <p>It's awesome that you're staying secure on the web, however this web application does need JavaScript to function normally.</p> 
            <p>I promise I'm not up to no good! The entire code for this website is publicly available on my GitHub page here: <a href="https://github.com/SamuelMereau/battleship" target="_blank">https://github.com/SamuelMereau/battleship</a></p>
        </noscript>
    );
}