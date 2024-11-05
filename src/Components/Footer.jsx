import React from 'react'
import footIcon1 from '../assets/images/foot-icon1.svg';
import footIcon2 from '../assets/images/foot-icon2.svg';
import footIcon3 from '../assets/images/foot-icon3.svg';
import footIcon4 from '../assets/images/foot-icon4.svg';

function Footer() {
  return (
    <div className='foot'>
       <h2 className='foot-head'>
          Follow Me On
       </h2>
        <ul className="footer" style={{listStyleType:'none'}}>
        <li className='foot-list1'>
          <a className="foot-link" aria-current="page" href="https://www.linkedin.com/in/rakesh-kumar-j-aa472a284" title='LinkedIn' ><img src={footIcon1} alt="Broken Image"/></a>
        </li>
        <li className='foot-list2'>
          <a className="foot-link" aria-current="page" href="https://github.com/Rakesh-2601" title='GitHub' ><img src={footIcon2} alt="Broken Image"/></a>
        </li>
        <li className='foot-list3'>
          <a className="foot-link"  href="mailto:rakeshjagadeswaran@gmail.com" title='Email' ><img src={footIcon3} alt="Broken Image"/></a>
        </li>
        <li className='foot-list4'>
          <a className="foot-link" id="icon5"  href="https://wa.me/918270830258" title='Whatsapp' ><img src={footIcon4} alt="Broken Image"/></a>
        </li>
      </ul>
      <center className='foot-rights'>
            &copy; 2024. All Rights Reserved .
        </center>
    </div>
  )
}

export default Footer