import { useState } from "react"
function Accordion() {
    const [open,setOpen] =useState(false)
    return (
        <div className="accordion">
            <button onClick={() => setOpen(!open)}> 
                What is react?
            </button>
            {open && (
                <p>
       React is a Javascript library used to build user interfaces.
          </p>
  )}
        </div>
    )
}
export default Accordion