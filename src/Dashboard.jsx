import React, { useState, useEffect } from 'react'
import bookmark from './Assets/bookmark.svg'
import mastercraft from './Assets/mastercraft.svg'
import axios from 'axios'
import './App.css';
import Card from './Components/Card'
import Modal from './Components/Modal'
import Bookmarked from './Components/Bookmarked';




function Dashboard() {

// Hooks

  const [input, setInput] = useState(null)
  const [data, setData] = useState(false)
  const [selected, setSelected] = useState("")
  const [noReward, setNoReward] = useState(false)
  const [con, setCon] = useState(false)
  const [bookmarker, setBookmarker] = useState(false)

// Handlers, custom functions and axios calls

  const [progress, setProgress] = useState({
    backed: 0,
    addMoney: 0,
    totalBackers: 0,
    goal: 0
  })

  const styleSelected = {
    border: "solid 1px   hsl(176, 50%, 47%)"
  }

  useEffect(() => {

    axios({
      method: "GET",
      url: "http://localhost:3000/Data/product.json"
    })
      .then(res => {
        setInput(res.data)

        setProgress(prev => ({
          ...prev,
          backed: res.data.funding.backedCurrent,
          totalBackers: res.data.funding.backerCount,
          goal: res.data.funding.backedGoal
        }))

      })
      .catch(err => console.log('get error', err))

  }, [])


  const handleBook = (e) => {
    setBookmarker(prev => !prev)
  }

  const handleClick = (e) => {
    if (e.target.id !== "text3") {
      setSelected(prev => e.target.name)
    } else {
      setSelected("")
    }
    setData(prev => true)
  }

  const handleClose = (e) => {
    setData(!data)
  }

  const handleRadio = (e) => {
    console.log('click', e)
    if (e.target.id === selected) {
      setSelected(prev => e.target.id)
    }
    else if (e.target.id === "btn2") {
      setSelected("")
    } else {
      setSelected(prev => e.target.id)
      setNoReward(false)
    }
    console.log(selected)
  }

  const handleNoReward = (e) => {
    console.log(e)
    setNoReward(prev => !prev)
    setSelected(false)
  }
  const handleCon = (e) => {
    setCon(prev => !prev)
  }






  const myFunction = (num) => {
    let convert = num.toLocaleString("en-US")
    return convert


  }



  const updateProgressBar = () => {
    let percent = (progress.backed / progress.goal) * 100

    return `${percent}%`
  }

  const handleProgress = (e) => {
    setProgress(prev => ({
      ...prev,
      addMoney: + e.target.value
    }))
  }

  const handleContinue = (e, selected) => {

    setProgress(prev => ({
      ...prev,
      backed: prev.backed + prev.addMoney,
      totalBackers: prev.totalBackers + 1,
      left: prev.left - 1,
      addMoney: 0
    }))

    setCon(prev => !prev)

    setInput(prev => ({
      ...prev,
      rewards: [...prev.rewards].map((item) => item.title === selected ?
        { ...item, remaining: item.remaining - 1 } : item)
    }))

  }

  const handleClose1 = (e) => {
    setData(prev => !prev)

    setSelected(prev => !prev)
    setCon(prev => !prev)


  }

  return (

    <>


      {data ? <Modal
        handleContinue={handleContinue}
        data={data}
        setCon={setCon}
        handleProgress={handleProgress}
        progress={progress}
        input={input.rewards}
        handleClose={handleClose}
        handleClose1={handleClose1}
        handleRadio={handleRadio}
        selected={selected}
        styleSelected={styleSelected}
        noReward={noReward}
        handleNoReward={handleNoReward}
        handleCon={handleCon}
        con={con}
      /> : null}
      {console.log('input', input)}
      {input ? (
        <>
          <nav id='nav'>
            <div ><p id='company'>crowdfund</p></div>
            <div id='nav-right'>
              <div className='text'>About</div>
              <div className='text'>Discover</div>
              <div className='text'>Get Started</div>
            </div>
          </nav>
          <div id='middle'>
            <div id='mid-top'>
              <div><img id='icon1' src={mastercraft} alt="company logo" ></img></div>
              <div className='text2'><h2>{input.main.title}</h2></div>
              <div className='text2'><p>{input.main.description}</p></div>
              <div id='top-bottom'>
                <button type='click' id='text3' onClick={(e) => handleClick(e)}>Back this product</button>
                <div id='top-right'>
                  {bookmarker ? <Bookmarked handleBook={handleBook} /> : <button id='text4' onClick={(e) => handleBook(e)}><img id='icon2' src={bookmark} alt="Bookmark"></img>bookmark</button>}
                </div>
              </div>
            </div>
            <div id='mid-mid'>
              <div id='mmt'>
                <div className='num'><h3>{myFunction(progress.backed)}</h3>
                  <div><p className='sub'>{`of ${myFunction(input.funding.backedGoal)} backed`}</p></div>
                </div>
                <div className='num'><h3>{myFunction(progress.totalBackers)}</h3>
                  <div><p className='sub'>total backers</p></div>
                </div>
                <div className='num'><h3>{input.funding.daysRemain}</h3>
                  <div><p className='sub'>days left</p></div>
                </div>
              </div>
              <div id='pro'>
                <div id="myProgress">
                  <div id="myBar" style={{ width: updateProgressBar() }}></div>
                </div>
              </div>
            </div>
            <div id='mid-bottom'>
              <div className='bot-head'>About this project</div>
              <div className='bot-par'>{input.main.productInfo.aboutMain}</div>
              <div className='bot-par'>{input.main.productInfo.aboutSub}</div>
              <Card input={input.rewards} handleClick={handleClick} con={con} handleCon={handleCon} handleContinue={handleContinue} progress={progress} handleClose1={handleClose1} />
            </div>
          </div>
        </>

      ) : (null)}

    </>

  );
}
export default Dashboard;
