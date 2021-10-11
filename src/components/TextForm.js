import React, { useState } from 'react';


export default function TextForm(props) {
    
    const [text, setText] = useState("Enter Text Here");

    // FUNCTIONS 

    const handleOnChange = (event) => {
        // console.log("Handle ON Function");
        setText(event.target.value);   // main part 
    }
    const HandleUpperCaseClick = () => {
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Updated in UpperCase", "success")
    }
    const handlelowwercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Updated in LowerCase", "success")
    }

    const handleCapitailize = () => {
        let newText = text.toLowerCase();
        let newTextt = newText.split(" ");
        for (let index = 0; index < newTextt.length; index++) {
            newTextt[index] = newTextt[index].charAt(0).toUpperCase() + newTextt[index].slice(1);
        }
        // const newText2 = newTextt.join(" ");
        // setText(newText2);
        setText(newTextt.join(" "))
        props.showAlert("Updated in Capitailize Form", "success")
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied On Clipboard", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }


    return (
        <>
            <h2 className="head my-2" style={{ color: props.mode === 'light' ? '#000' : 'white' }}>{props.heading}</h2>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label" style={{ color: props.mode==='light'?'#000':'white'}}>Any label if u want</label> */}
                <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#000', color: props.mode === 'light' ? '#000' : 'white' }} ></textarea>
            </div>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={HandleUpperCaseClick}>Convert To UpperCase</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handlelowwercase}>Convert To LowerCase</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleCapitailize}>Convert To Capitailize</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleClear}>Clear</button>


            {/* TEXT SUMMARY */}
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#000' : 'white' }}>
                <h1>Your Text Summary</h1>
                <p>
                    {text.split(" ").length} words and {text.length} characters <br />
                    Words can be read in {0.008 * text.split(" ").length} mintues.
                </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "You can Easily read here!"}</p>
            </div>


        </>
    )
}
