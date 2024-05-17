import React from 'react'

const GoogleMap = () => {
  return (
    <div className='map-area'>
        <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.298298721393!2d78.3913929!3d17.4932682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9186c9216501%3A0x5b92f2e1fd8fc012!2sJawaharlal%20Nehru%20Technological%20University%20Hyderabad!5e0!3m2!1sen!2sin!4v1715501661927!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* style={{border:'0',height:"450",width:"600"}} */}
        
        </div>
    </div>
  )
}

export default GoogleMap