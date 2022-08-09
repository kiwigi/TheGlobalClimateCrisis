import React from "react"

const Section = (props) => {

    const sectionStyle = {
        
        maxWidth : '500px',
        paddingLeft: '0.5%',
        paddingRight: '0.5%',
        paddingTop: '0.0%',
        
        
        
    }


    const sectionContentStyle= {
        fontSize: '14px',
        color: '#474747',
        fontFamily: 'Century Gothic, sans-serif',
        paddingTop: '10px',
        // maxHeight : '500px',
         maxWidth : '500px',
        overflowY: 'scroll'
        
        
        
    }

    const imgStyle={
        paddingTop: '20px',
        width: '100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'

    }
    
    return <div style= {sectionStyle} >
        <div className="Section"> {props.sectionTitle} 
        </div>
        <div style = {sectionContentStyle}>
            {props.sectionContent}
        </div>
        <img  style={imgStyle} src={props.sectionPic}/>
    </div>
}

export default Section