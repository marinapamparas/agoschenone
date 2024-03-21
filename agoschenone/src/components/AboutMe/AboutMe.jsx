import './AboutMe.css'
import imgAgos from '../../assets/AgosAboutMe.png';


const AboutMe = () => {

    return(
        <div className='containerAboutMe'>
        <div className='containerImgText'>
            <img src={imgAgos}  alt="Agostina Schenone" className='imgAgos'/>
            <p className='textImg'>My name is Agostina Schenone, I’m an argentinian photographer based in St. Moritz, Switzerland.</p>
        </div>
        <div className='containerText'>
            <p>I've always been fascinated by people, different cultures and human interactions. That's why I decided to study Psychology and then started travelling and capturing situations. I found in photography the perfect tool to show how I perceive the world and the human being, it’s where everything binds together.
            </p><p>
            For me the most important is to capture genuine feelings, being able to transmit with my intuition any situation, using the most natural sources of light and creating a comfortable environment for the people photographed.
            </p><p>
            I feel the most alive when I'm in the middle of a creative process, thinking how I can I play best with the light. I think everything relies on the eye of the person creating the situation, that's why I have this sentence as a motto 'everything in life is perspective'.
            </p> <p>
            If you have any questions, please contact me: agoschenone@hotmail.com
            </p>
        </div>
        </div>
    )

}


export default AboutMe