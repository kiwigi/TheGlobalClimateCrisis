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
        padding: '5% 5%',
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
            <TopicContainer style={{fontSize: '10px'}}topicLink = {'./Topic1'} topicTitle = {'The Impact of Race & Socioeconomic Class in the U.S.A'} topicContent = {'How individuals experience the global climate crisis and other forms of environmental adversity is heavily influences by their race and socioeconomic class. The two cases will illustrate the relationship between race & socioeconomic class and noise pollution in Chelsea, Massachusetts, and the heat in Phoenix, Arizona. '}/> 
            <TopicContainer topicLink = {'./Topic2'} topicTitle = {'Capitalism & Climate Change'} topicContent = {'Minim ullamco tempor dolor aute commodo ad occaecat velit laboris reprehenderit aute reprehenderit non anim. Tempor labore ea ex irure dolore anim exercitation do ex ad. Deserunt aute magna veniam excepteur aliquip. Est ut quis proident minim et culpa ea. Tempor id deserunt occaecat Lorem esse elit anim minim laborum laboris est adipisicing incididunt.'}/>
            <TopicContainer topicLink = {'./Topic3'} topicTitle = {'Climate Crisis Based on Location'} topicContent = {'How people are impacted differently by climate crisis based on location '}/>
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