import React from 'react'


const Footer = (props) => {
    
    const footerStyle = {

        right:'0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#e6ebe8',
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '13px',
        fontStyle: 'italic',
        paddingTop: '10px',
        paddingBottom: '10px',
        margin: '0px'

    }

    var refs = props.topicRefs
    

    return <div style= {footerStyle} >
    <div> 
        <div>References:</div>
        <div>{refs[0]} </div>
        <div>{refs[1]} </div>
        <div>{refs[2]} </div>
        <div>{refs[3]} </div>
        <div>{refs[4]} </div>
        <div>{refs[5]} </div>
        <div>{refs[6]} </div>
        <div>{refs[7]} </div>
        <div>{refs[8]} </div>
        <div>{refs[9]} </div>
        <div>{refs[10]} </div>

    </div>
    </div>

}


export default Footer