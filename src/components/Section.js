import React from "react"

const Section = (props) => {

    const sectionStyle = {
        
        maxWidth : '500px',
        paddingLeft: '0.5%',
        paddingRight: '0.5%',
        paddingTop: '0.0%',
        paddingBottom: '0.5%'
        
        
        
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
        width: '90%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'

    }
    function secTitleStyle() {
        var cNam= 'Section'
        if(props.sectionTitle===''){
        cNam=''
        }
        return cNam;
    }
    
    return <div style= {sectionStyle} >
        <div className={secTitleStyle()}> {props.sectionTitle} 
        </div>
        <div style = {sectionContentStyle}>
            {props.sectionContent}
        </div>
        <img  style={imgStyle} src={props.sectionPic}/>
        <a href= {props.sectionPicCr} className="PhotoCred">  {props.sectionPicCrName}</a>
    </div>
}

export default Section