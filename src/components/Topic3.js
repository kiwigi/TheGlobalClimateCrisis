import React from 'react'
import Section from './Section'
import SectionPhoto from './SectionPhoto'
import Footer from './Footer'
import t3i1 from '../topic3Photos/Picture1.png'


const Topic3 = () => {

    const colStyle = {
        display: 'flex',
        padding: '5%% 5%',
        flexDirection: 'column',
        

    }
    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '5%% 5%',
        flexDirection: 'row'

    }
    const pageStyle = {
        
        paddingTop: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '30px'
    }

    const contentStyle = {

        display: 'flex',
        fontSize: '14px',
        color: '#474747',
        fontFamily: 'Century Gothic, sans-serif',
        maxHeight : '500px',
        paddingTop: '5%',
        paddingBottom: '4%',
        paddingLeft: '15%',
        paddingRight: '15%',
        justifyContent: 'center',
        flexDirection: 'row',
        overflowY: 'scroll'
    }

    var refs = ['https://www.calgary.ca/water/flooding/history-calgary.html']

    return(

        <div style={pageStyle}>
            <a  href= '../' className="Button"> ← Back
            </a>
            <div className='h2'>
            Climate Crisis Based on Location
            </div>
            
                <div style={contentStyle}>
                    Climate crisis can form in different ways, and it can be as severe as Sultana explains with the cyclone that barrelled through her country wiping out and killing so many people or it can simply be heavy rainfall on the melting snowpack in the Rocky Mountains which caused a flood in Calgary.  The flood caused many houses to be destroyed and even took someone’s life. The one thing in common between these two situations is how people were impacted differently due to their locations. Some people lost everything including their homes or businesses while others were safe at home not impacted at all and it is due to their geographical location. The flood in Calgary is directly and indirectly influenced by anthropogenic activity and one of the main reasons is global warming as we are living in a warmer climate. Climate crisis is not something that can be subjective because it is deeply personal and Sultana herself states it is “heavy” as you are truly helpless in the moment. With Sultana’s situation with the cyclone, it is expected due to their location, and they are prepared if fortunate enough they had floodplains set up homes to protect themselves as best as possible while the remaining houses where still in danger, but they were aware of the consequences. With the flood in Calgary no one really imagined the flood could be so powerful and take out houses and destroy communities everyone was unprepared and uneducated. When homeowners in Calgary bought houses near the river, they had no idea that it could be possible to destroy their homes, so no one even brought up the fact if flooded what happens next what is covered by insurance what is not. Is it fair that only some parts of the city were traumatized and brutally effected while other communities in Calgary carried on like nothing happened and did not have to help the communities that were destroyed? After the floods the government had to get together and discuss geopolitical strategies what to do after and they concluded they would cover the damages to the houses through insurance but going forward you would not be covered if it happens again and just like Sultana said herself it felt as “Colonized but this time through climate change.” Climate crisis is something that is unpredictable, and it can change your life drastically without you having a say. 
                <img style={{flexDirection: 'row', width: '50%', height: '50%'}}src={t3i1}></img>
                </div>

                
           

            
            
            {/* <div style={colStyle}> */}
            {/* <Section sectionPic={t3i1} sectionTitle={'Climate Crisis Based on Location'} sectionContent={'Climate crisis can form in different ways, and it can be as severe as Sultana explains with the cyclone that barrelled through her country wiping out and killing so many people or it can simply be heavy rainfall on the melting snowpack in the Rocky Mountains which caused a flood in Calgary.  The flood caused many houses to be destroyed and even took someone’s life. The one thing in common between these two situations is how people were impacted differently due to their locations. Some people lost everything including their homes or businesses while others were safe at home not impacted at all and it is due to their geographical location. The flood in Calgary is directly and indirectly influenced by anthropogenic activity and one of the main reasons is global warming as we are living in a warmer climate. Climate crisis is not something that can be subjective because it is deeply personal and Sultana herself states it is “heavy” as you are truly helpless in the moment. With Sultana’s situation with the cyclone, it is expected due to their location, and they are prepared if fortunate enough they had floodplains set up homes to protect themselves as best as possible while the remaining houses where still in danger, but they were aware of the consequences. With the flood in Calgary no one really imagined the flood could be so powerful and take out houses and destroy communities everyone was unprepared and uneducated. When homeowners in Calgary bought houses near the river, they had no idea that it could be possible to destroy their homes, so no one even brought up the fact if flooded what happens next what is covered by insurance what is not. Is it fair that only some parts of the city were traumatized and brutally effected while other communities in Calgary carried on like nothing happened and did not have to help the communities that were destroyed? After the floods the government had to get together and discuss geopolitical strategies what to do after and they concluded they would cover the damages to the houses through insurance but going forward you would not be covered if it happens again and just like Sultana said herself it felt as “Colonized but this time through climate change.” Climate crisis is something that is unpredictable, and it can change your life drastically without you having a say. '}/> */}
  
            
          
  

            <Footer topicRefs={refs}/>
     
        </div>
    )
   
}

export default Topic3