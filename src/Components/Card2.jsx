import React from 'react'
import SubCard from '../Components/SubCard'

const Card2 = ({ handleRadio, input, selected, styleSelected, con, handleCon, data, handleProgress, handleContinue, handleClose1 }) => {


    return (
        <>
            {input.map((item) => {

                return (

                    <div id='container' style={selected === item.title ? styleSelected : null}>
                        <div className='flex2'>
                            <input onClick={(e) => handleRadio(e)} type="radio" name="cards" id={item.title} className="radio" disabled={item.remaining === 0 ? true : false} />
                            <div id="card-title" style={{ color: item.remaining === 0 ? "hsl(0, 0%, 48%)" : null }} >{item.title}</div>
                            <div id="card-pledge" style={{ color: item.remaining === 0 ? "hsl(0, 0%, 48%)" : null }} >{`Pledge $${item.minAmount} or more`}

                            </div>
                            <div className='flex3' style={{ color: item.remaining === 0 ? "hsl(0, 0%, 48%)" : null }}>
                                {item.remaining}
                                <div id='left'>left</div>
                            </div>
                            <div >

                                <div className='flex'>

                                </div>
                                <br />

                            </div>
                        </div><div className='bot-par2'>{item.description}</div>

                        {selected === item.title && <SubCard con={con} handleCon={handleCon} data={data} input={input} selected={selected} handleProgress={handleProgress} handleContinue={handleContinue} handleClose1={handleClose1} />}

                    </div>

                )
            })}

        </>
    )



};

export default Card2