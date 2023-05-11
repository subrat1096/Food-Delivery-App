import React from 'react'
import Visa from '../images/visa.png'
import Chip from '../images/chip.png'

function DebitCard() {
  return (
    <div className='cardGroup'>
        <img src={Visa} alt="" className="card_logo" />
        <img src={Chip} alt="" className="card_chip" />
        <div className="card_number">1234 5678 9000 1234</div>
        <div className="card_name">SUBRAT KUMAR BEHERA</div>
        <div className="card_from"><p><span>VALID FROM</span> <span><b>10/21</b></span></p></div>
        <div className="card_to"><p><span>VALID THRU</span> <span><b>10/25</b></span></p></div>
        <div className="card_ring"></div>
    </div>
  )
}

export default DebitCard