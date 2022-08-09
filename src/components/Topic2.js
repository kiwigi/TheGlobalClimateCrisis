import React from 'react'
import Section from './Section'
import SectionPhoto from './SectionPhoto'
import Footer from './Footer'

const Topic2 = () => {

    const colStyle = {
        display: 'flex',
        padding: '5%% 5%',
        flexDirection: 'column',
        

    }
    const rowStyle = {
        display: 'flex',
        padding: '5%% 5%',
        flexDirection: 'row'

    }
    const pageStyle = {
        paddingTop: '20px',
        alignItems: 'center',
        justifyContent: 'center',
    }

    var refs = ['https://www.nbcnews.com/business/business-news/are-carbon-credits-fighting-climate-change-became-billion-dollar-indus-rcna3228'
    ,'ref2']

    return(
        <div style={pageStyle}>
            <a  href= '../' className="Button"> ↩ Back
            </a>
            <div className='h2'>
                Capitalism & Climate Change
            </div>
            <div> 
                <div style={rowStyle}>
                <Section sectionTitle={'Introduction'} sectionContent={''}
                <Section sectionTitle={'sec3'}/>
                <Section sectionTitle={'Conclusion'}/>

                </div>
                
                <div style={colStyle}>
                <SectionPhoto sectionDirection={'row'}sectionTitle={'sec1'} sectionContent={'Magna magna sit amet nisi anim amet fugiat cupidatat minim nostrud esse nulla id. Cillum ut in eiusmod mollit labore pariatur Lorem velit officia veniam sunt veniam commodo. Amet aute in officia labore in nostrud Lorem nostrud qui id labore do culpa incididunt. Cupidatat incididunt exercitation sit commodo do elit ea excepteur anim est veniam dolore. Sint nulla culpa elit sint magna nisi ex. Et in in mollit cupidatat dolore aute ullamco sunt non dolor sit ipsum. Cupidatat anim aliqua aute pariatur officia. Dolore minim laboris quis proident sint anim. Minim nostrud aliqua irure est est consequat reprehenderit aliqua elit ullamco laborum nostrud voluptate amet. Aliqua laborum magna magna quis proident.Cupidatat officia cillum deserunt duis dolor ex exercitation nisi aliqua mollit ad. Enim id et esse nisi. Do et est do Lorem labore esse officia fugiat et laborum sint.Qui incididunt dolor ipsum cillum consequat aliqua enim labore et voluptate veniam quis. Fugiat est Lorem incididunt irure ullamco quis. Est magna enim est aute sit quis incididunt ullamco excepteur et ut labore. Ad ex esse amet consectetur. Commodo id consectetur sint incididunt consectetur aliqua nulla adipisicing pariatur ullamco. Deserunt anim eiusmod mollit sint commodo id qui irure elit dolore aute veniam nulla est.'}/>
                
                </div>
                


                <Footer topicRefs={refs}/>
            </div>
        </div>
    )
   
}

export default Topic2