import React from 'react'

const Url_output = (props) => {
    const handleCopy=()=>{
        navigator.clipboard.writeText(props.result);
        alert("Copied")
    }
  return (
    <div className='p-10'>
        <div className='rounded-lg flex text-center items-center justify-between bg-slate-900'>
            <p className='bg-cyan-950 p-5 font-medium rounded-s-lg'>Short Link:</p >
            <p className='text-center'>{props.result}</p>
            <button className='bg-cyan-950 p-5 font-medium rounded-e-lg' onClick={handleCopy}>Copy to Clipboard</button>
        </div>
        {/* <p className='m-5 right-0' >Copied.</p> */}
    </div>
  )
}

export default Url_output