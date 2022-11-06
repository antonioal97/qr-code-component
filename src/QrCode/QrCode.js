import './index.css';

import qrImage from '../img/image-qr-code.png' 

export function QrCode(){
  return(
    <div className='card'>
      <img src={qrImage} />

      <h1 className='font'>
        Improve your front-end skills by building projects
      </h1>

      <p className='font'>
      Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  )
}