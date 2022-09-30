import React ,{useState} from 'react'

export default function TextForm() {
    
   
    const handelUpClick=()=>{
        console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const handlerOnChange=(event)=>{
        console.log("on Changed");
        setText(event.target.value); 
    }
    
    const [text,setText]=useState("Enter Text here");
    return (
        <div className='container '>
            <form>
                <div className="form-group">
                 <h3 className='my-2'>Enter text to Analyze below</h3>
                 <textarea className='form-control' value={text} onChange={handlerOnChange} id='myBox'  rows='8'></textarea>
                </div>
                <button type="submit" onClick={handelUpClick} className="btn btn-primary my-2" >Convert to Uppercase</button>
            </form>
        </div>
    )
}
