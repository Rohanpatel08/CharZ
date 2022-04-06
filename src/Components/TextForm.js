import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        /*console.log("UpperCase is clicked.")*/
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick = () => {
        /*console.log("UpperCase is clicked.")*/
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick = () => {
        /*console.log("UpperCase is clicked.")*/
        let newtext = '';
        setText(newtext)
        props.showAlert("Text is Cleared","success");
    }

    const handleOnChange = (event) => {
        /*console.log("handleOnChange is clicked.")*/
        setText(event.target.value)
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied","success");
    }
    const handleExtraSpce = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("ExtraSpces are removed","success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#1a6985',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to LowerCase</button>
                <button className="btn btn-primary my-1" onClick={handleClearClick}> Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpce}> Remove Extra Space</button>
            </div>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}
