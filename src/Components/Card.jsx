import React from 'react'


const Card = ({ input, handleClick, selected, styleSelected }) => {

    return (
        <>
            {input.map((item) => {
                   
                return (
                    <div id='container' style={selected === item.title ? styleSelected : null}>
                        <div id='bb'>
                            <div style={{ color: item.remaining === 0 ? "hsl(0, 0%, 48%)" : null }} className='bot-head'>{item.title}</div>
                            <div style={{ color: item.remaining === 0 ? "hsl(0, 0%, 48%)" : null }} id='pledge'>{`Pledge $${item.minAmount} or more`}</div>
                        </div>
                        <div id='pp'>
                            <div className='bot-par1'>{item.description}</div>
                            <div className='flex'>
                                <div id='num2'>
                                    {item.remaining}
                                    <div id='left'>left</div>
                                </div>
                                <br />

                                <div id='select' ><button type='click' disabled={item.remaining === 0 ? true : false} style={{ backgroundColor: item.remaining === 0 ? "hsl(0, 0%, 48%)" : null }} id='btn2' name={item.title} onClick={(e) => handleClick(e)}>Select Reward</button></div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    )



};

export default Card
