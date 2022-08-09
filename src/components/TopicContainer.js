import React from "react"
import styles from './button.css'

const TopicContainer = (props) => {

    const topicStyle = {
        textAlign: 'center',
        backgroundColor: '#d5f6da',
        border: '1px solid #26b634',
        height: '40px',
        width: '330px',
        color: '#00132C',
        fontFamily: "Avenir Next LT W01 Bold,sans-serif",
        fontSize: '13px',
        fontWeight: '700',
        lineHeight: '24px',
        padding: '16px 23px',
        textDecoration: 'none'
       
        
    }


    const topicContentStyle= {
        fontSize: '16px',
        color: '#474747',
        fontFamily: 'Century Gothic, sans-serif',
        padding: '20px',
        paddingTop: '25px',
        paddingBottom: '50px',
        width : '350px',

        
    }

    const btnStyle ={
        marginLeft: 'auto',
        
  
      
    }

    const topicAuthStyle= {
        fontSize: '13px',
        color: '#474747',
        fontFamily: 'Century Gothic, sans-serif',
        padding: '10px',
        paddingTop: '25px',
        paddingBottom: '10px',
        width : '350px',

        
    }
    
    return <div style={{paddingBottom: '20px'}}>
        <div style= {topicStyle}>{props.topicTitle}</div>
        <div style={topicAuthStyle}>By: {props.topicAuth}</div>
        <div style = {topicContentStyle}>
            {props.topicContent}
        </div>
        <a  style={btnStyle} href= {props.topicLink} className="Button"> Read
        </a>
    </div>
}

export default TopicContainer