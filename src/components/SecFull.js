import React from "react"
import t2i2 from '../topic2Photos/i2.jpeg'
import t1i1 from '../topic1Photos/Picture1.jpg'
import t1i2 from '../topic1Photos/Picture2.jpg'
import t1i3 from '../topic1Photos/Picture3.png'
import t1i4 from '../topic1Photos/Picture4.jpg'

const SecFull = (props) => {

    const sectionStyle = {
        // textAlign : 'center',
        maxWidth : '30%',
        // maxHeight : '20%',
        paddingLeft: '0.5%',
        paddingRight: '0.5%',
        paddingTop: '0.5%',
        
        
    }


    const sectionContentStyle= {
        fontSize: '',
        color: '#474747',
        backgroundColor: '#f2f7f4',
        maxHeight : '100%',
        fontFamily: 'Century Gothic, sans-serif',
        padding: '10px',
        overflowY: 'scroll'
        
    }

    const imgStyle={
        width: '100%'
    }
    
    return <div style= {sectionStyle} >
        <div className="Section"> {props.sectionTitle} 
        </div>
        <div style = {sectionContentStyle}>
        <img  style={imgStyle} src={props.sectionPic} alt="climate change"/>
            {props.sectionContent}
        </div>
    </div>
}

export default SecFull