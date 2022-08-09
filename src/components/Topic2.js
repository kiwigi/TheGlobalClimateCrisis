import React from 'react'
import Section from './Section'
import SectionPhoto from './SectionPhoto'
import Footer from './Footer'
import t2i3 from '../topic2Photos/Picture3.png'
import t2i2 from '../topic2Photos/Picture2.png'


const Topic2 = () => {

    const colStyle = {
        display: 'flex',
        padding: '5% 5%',
        flexDirection: 'column',
        

    }
    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '5% 5%',
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
    const pageStyle = {
        paddingTop: '20px',
        marginBottom: '0px',
        paddingBottom: '30px'
    }

    var refs = ['https://www.nbcnews.com/business/business-news/are-carbon-credits-fighting-climate-change-became-billion-dollar-indus-rcna3228'
    ,'https://www.unep.org/news-and-stories/story/carbon-offsets-are-not-our-get-out-jail-free-card',
    'https://medium.com/carbonbase/what-is-carbon-trading-how-did-it-come-about-793d01d89f02',
    'https://www.frontiersin.org/articles/10.3389/fenvs.2020.593014/full',
    'https://www.lse.ac.uk/granthaminstitute/wp-content/uploads/2011/06/WP49_carbon-trading-caney-hepburn.pdf']

    return(
        <div style={pageStyle}>
            <a  href= '../' className="Button"> ↩ Back
            </a>
            <div className='h2'>
            The Commoditization of Climate Change: Carbon Trading
            </div>
            <div> 
                <div style={rowStyle}>
                <Section sectionTitle={'Introduction'} sectionContent={'Climate change is a pressing, yet difficult issue to solve, especially in the modern, capitalistic world that we currently live in. Where nature is exploited for the sake of generation of surplus. With the severe urgency for our leaders to make changes and the threat that climate change poses to our livelihoods, some regulations have been put in place to incentivize the cutting down of carbon emissions. One of those regulations comes in the form of carbon credits, a market-based mechanism aimed to reward those who cut emissions and punish those who don’t in monetary ways. Although the carbon credits idea may seem clever, it comes into question if it is actually doing what it’s supposed to, cut down emissions. The commoditization of carbon credit emissions seems like a strange thought, it almost reduces carbon emissions, that have such a huge impact on climate change and subsequently our lives, to a simple thing that can be cold and bought. This disconnect from the reality of carbon emissions later shows when we discover that this method is in fact not doing enough.'}/>
                <Section sectionPic={t2i2}sectionTitle={'What is The Carbon Trading System?'} sectionContent={'The carbon trading system was conceived to battle carbon emissions. Carbon credits are like a permit which allows a company to produce a specific amount of carbon emissions. This specific amount could be likened to a ‘carbon allowance’ per year. Each company is given a specific amount of ‘carbon allowance’ meaning that they can produce a specific amount of carbon emissions, this is given to them as carbon credits. If the company exceeds their carbon allowance by emitting more carbon emissions than what is allowed by the number of carbon credits that they have, then they must purchase additional carbon credits from the carbon credit market. If they produce less emissions, then they gain a carbon credit surplus that can then be sold to other companies that need these carbon credits. This seemingly clever idea is a way to incentivise carbon emissions reduction in our capitalist, money hungry world. '}/>
                <Section sectionPic={t2i3}sectionTitle={'Why Carbon Trading is Problematic'} sectionContent={'The ethical implications of carbon trading seem wrong. As mentioned before, carbon trading reduces carbon emissions, which have a huge impact on many people into something that can be bought and traded, when will we stop trying to put everything in terms of money and understand that there are more important things at stake? Climate change should not be solely thought about through an opportunistic lens, and it seems like the carbon credit system only sees it that way. Another thing worth mentioning is the sacrificial zones that accumulate pollution due to local companies continuously emitting greenhouse gases thanks to said local companies’ ability to buy carbon credits from overseas. This leads to the over-pollution of these sacrificial zones and the downturn in quality of life for the sacrificial zone’s inhabitants. Therefore, carbon trading only exacerbates the unequal effects of climate change in certain areas.'}/>
                {/* <Section sectionTitle={'Conclusion'}/> */}

                </div>
                
                <div style={colStyle}>
                
                
                </div>
                


                <Footer topicRefs={refs}/>
            </div>
        </div>
    )
   
}

export default Topic2