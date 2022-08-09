import React from "react";
import Lottie from "lottie-react"
import TopicContainer from "./TopicContainer"
import "./StyleSheet.css"
import * as Animation from "../animations/data.json"
import Topic1 from "./Topic1"
import Topic2 from "./Topic2"
import Topic3 from "./Topic3"
import Footer from "./Footer"

const App = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '10% 10%',
        flexWrap: 'wrap'


    }


    let currScreen
    switch (window.location.pathname) {
        case '/':
            currScreen = 
            <div >
            <div className="h1">THE GLOBAL CLIMATE CRISIS</div>
            <div className='image'><Lottie animationData={Animation} loop={true} /></div>
            {/* <img src="/titlelogo.png" alt="image" className="image"/> */}
            <div style = {containerStyle}>
            <TopicContainer topicAuth={'Keishi Exell'}topicLink = {'./Topic1'} topicTitle = {'The Impact of Race & Socioeconomic Class in the U.S.A'} topicContent = {'How individuals experience the global climate crisis and other forms of environmental adversity is heavily influences by their race and socioeconomic class. The two cases will illustrate the relationship between race & socioeconomic class and noise pollution in Chelsea, Massachusetts, and the heat in Phoenix, Arizona. '}/> 
            <TopicContainer topicAuth={'Martha Ibarra'}topicLink = {'./Topic2'} topicTitle = {'The Commoditization of Climate Change'} topicContent = {'With the urgency of battling climate change becoming greater, our world leaders are coming up with new strategies to battle it. One of said strategies is carbon trading. Here, I will talk about how carbon emissions became commoditized through carbon trading. I will explain what carbon trading is  and how it may be a problematic solution to the climate crisis.'}/>
            <TopicContainer topicAuth={'Jasveer Singh Mangat'}topicLink = {'./Topic3'} topicTitle = {'Climate Crisis Based on Location'} topicContent = {'How people are impacted differently by climate crisis based on location '}/>
            </div>
            </div>

            break;
        case '/Topic1':
            currScreen = <Topic1/>
            break;
        case '/Topic2':
            currScreen = <Topic2/>
            break;
        case '/Topic3':
            currScreen = <Topic3/>
            break;
    }

    return (
        <div>
            {currScreen}
           
        </div>  
          

)}

export default App