import React from 'react'

export default function Home() {
  return (
    <div>
         <form>
                <div className="form-group">
                 <h1>Enter text to Analyze below</h1>
                 <textarea className='form-control' id='myBox' rows='8'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Convert to Uppercase</button>
            </form>
    </div>
  )
}
