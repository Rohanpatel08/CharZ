import React from 'react'

function About(props) {
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black', justifyItems:'center'}}>
            <h1>About Us</h1>
            <p>Greeting, Everyone Presenting <b>"CharZ"</b>. This Web Application can count words and characters of enterd text. This web application has more features like copy the text, convert text to lower case, convert text to upper case, Remove whole text, remove extra spaces between text. When you copy the text it copy to the clipboard and it will asure you with small alert that text is copied. Similarly you can convert text to lower case and upper case. Every time it will asure you about your activity with small alert. <b>"CharZ"</b> becomes more cool when user switch it to dark mode. In dark mode <b>"CharZ"</b> will looks better and cool. Purpose of this web application to help content writers to modify text and save time while writing large documents.</p>

            <p>So We started this project with basic concepts of HTML, CSS and JS. We used React JS framework to make this application very easy for user and hoster as well. Using React JS we can make one page web applications which won't need to load every time when we change pages. We also added some part of bootstrap as well to make it simple.</p>

            <p><b>"CharZ"</b> will display number of characters and word which user writes. It will also change text to lower case and upper case. CharZ will display preview of entered text by user so that user can see how will it look like. <b>"CharZ"</b> is a one page application so it will not take time to load every page and it will save internet data of user and server.</p>
            <p>This project is developed with very basic concepts of React JS and JavaScript. This project is developed by Rohan Bangroiya. So <b> bookmark this application </b>and Enjoy your writing.</p>
        </div>
    </>
  )
}

export default About
