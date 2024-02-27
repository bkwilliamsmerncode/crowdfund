import React from 'react'
import Card2 from '../Components/Card2'
import close from '../Assets/close.svg'
import SubCard from './SubCard';


const Modal = ({ handleContinue, handleProgress, handleRadio, handleClose, input, selected, styleSelected, noReward, handleNoReward, handleCon, con, handleClose1 }) => {

  console.log('modal', handleCon)

  return (
    <>

      <div id="myModal" className="modal">
        <div className="modal-content">


          <div className='flex'>
            <div id="modal-title"><strong>Back this product</strong></div>

            <div id="modal-close"><button id="btn3" type='click' onClick={(e) => handleClose(e)}><img src={close} alt="closing tag" /></button></div>
          </div>
          <div className='bot-par2'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
          <div
            id='container'
            style={{ border: noReward ? "solid 1px   hsl(176, 50%, 47%)" : "" }}>
            <div id='bb'>

              <input type="radio" name="cards" className="radio" selected={noReward} onClick={(e) => handleNoReward(e)} />
              <div id="card-title">Pledge With no reward</div>
              <div id="card-pledge"></div>
            </div>
            <div id='pp'>
              <div className='bot-par1'>Chose to support us without a reward if you simply believe in our product. As a backer, you will be signed up to receive product updates via email. </div>

            </div>
            {noReward && <SubCard handleContinue={handleContinue} handleCon={handleCon} con={con} handleClose1={handleClose1} handleProgress={handleProgress} />}
          </div>
          <Card2 handleContinue={handleContinue} input={input} handleRadio={handleRadio} selected={selected} styleSelected={styleSelected} con={con} handleCon={handleCon} handleProgress={handleProgress} handleClose1={handleClose1} />

        </div>
      </div>

    </>

  )
};

export default Modal
