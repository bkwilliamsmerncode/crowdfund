import React from 'react'
import Modal2 from '../Components/Modal2'

const SubCard = ({ con, handleCon, handleClose, handleClose1, data, selected, input, handleProgress, handleContinue }) => {
  console.log('sub', handleCon)
  console.log('selected', selected)
  return (


    <>
      {con ? <Modal2 handleContinue={handleContinue} handleClose={handleClose} data={data} selected={selected} input={input} handleClose1={handleClose1} /> : null}
      <hr />
      <div className='flex'>
        <div id="enter">Enter your Pledge</div>
        <div id='con1'>
          <input type="text" placeholder='$            ' name="" id="amount" onChange={(e) => handleProgress(e)} />
          <button type='click' id="con" onClick={(e) => handleContinue(e, selected)}>Continue</button>
        </div>
      </div>

    </>
  )
};

export default SubCard
