import React from "react"
import SettingsIcon from "@mui/icons-material/Settings"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"

const Head = ({ dark, setMode }) => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='left'>
            <div className='logo'>
             <p style={{fontWeight:'bold'}}>CONDITION <span style={{color:'#c45555 '}}>BASED</span>  MONITORING<span style={{color:'#c45555 '}}> - Smart Sensor Node</span></p>
            </div>
          </div>
          <div className='right flexCenter'>
          
          
         
            <button onClick={() => setMode(!dark)}>
              <SettingsIcon className='iconHead' />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
