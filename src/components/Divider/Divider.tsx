import './Divider.css'

import { FiTool } from 'react-icons/fi'

function Divider() {
  return (
    <div className='divider'>

      <span className='divider-line'></span>

      <div className='divider-icon'>
        <FiTool />
      </div>

      <span className='divider-line'></span>

    </div>
  )
}

export default Divider