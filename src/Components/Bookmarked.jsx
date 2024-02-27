import React from 'react'
import bookmark from '../Assets/bookmark.svg'
const Bookmarked = ({ handleBook }) => {
  return (
    <>

      <div id='top-right'><button id='text4' onClick={(e) => handleBook(e)}><img id='icon2' src={bookmark} alt="Bookmark"></img>bookmarked</button></div>

    </>
  )
};

export default Bookmarked
