import React from 'react'
import check from '../Assets/check.svg'


const Modal2 = ({ handleClose1 }) => {

  return (

    <>

      <div id="myModal" className="modal">
        <div className="modal-content1">
          <div className='flex4'>
            <div><img src={check} alt="checkmark" id="check" /></div>
            <div className='bot-head'>Thanks for your support!</div>
            <div className='bot-par'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaine is completed.</div>
            <button id='got' type="click" onClick={(e) => handleClose1(e)}>Got it</button>


          </div>
        </div>
      </div>

    </>
  )
};

export default Modal2
