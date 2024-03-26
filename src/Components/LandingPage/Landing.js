import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import logo from './preeminentlogo.png'
import { FallingLines } from  'react-loader-spinner'
// import { SpinnerCircular } from 'spinners-react';
import LandingPage from './Land1/LandingPage'
import Land2 from './Land2/Land2'
import Land3 from './Land3/Land3'
import Land4 from './Land4/Land4'
import Land5 from './Land5/Land5'
import Land6 from './Land6/Land6'
import Land7 from './Land7/Land7'
import Land8 from './Land8/Land8'
import Land10 from './Land10/Land10'
import News from './News/News'
import Discover from './Discover/Discover'
import Assetcryp from './AssetCryp/Assetcryp'
import Land9 from './Land9/Land9'
import EthScroll from './EthScroll'
import BitPage from './BitPage/BitPage';


const Landing = () => {

  const [loading, setLoading] = React.useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [numberChange, setNumberChange] = useState(0)


 

  const ShowName = [
    {
      name: 'Alount Ridet',
      Pay: "Made a deposit of $5000"
    },
    {
      name: 'Amanda Wills',
      Pay: " Successfully withdrew $10000"
    },
    {
      name: 'Charles Bob',
      Pay: "Successfully withdrew $40000"
    },
    {
      name: 'Hannah Daines',
      Pay: "Made a deposit of $10000"
    },
    {
      name: 'Chrissie Toralba',
      Pay: "Successfully withdrew $20000"
    },
    {
      name: 'Janis Calloway',
      Pay: "Made a deposit of $3000"
    },
    {
      name: 'Maria R Tomei',
      Pay: "Made a deposit of $30000"
    },
    {
      name: 'Richard Sykes',
      Pay: "Made a deposit of $100000"
    },
    {
      name: 'Kc Knutson',
      Pay: "Successfully withdrew $10000"
    },
    {
      name: 'Kevin Corliss ',
      Pay: "Successfully withdrew $100000"
    },
    {
      name: 'Cathy Housley Vesely',
      Pay: "Made a deposit of $100000"
    },
    {
      name: 'Brandie Spadoni',
      Pay: "Made a deposit of $5000"
    },
    {
      name: 'Alex Runge',
      Pay: "Made a deposit of $3000"
    },
    {
      name: 'Cat Raye Monroe',
      Pay: "Made a deposit of $7000"
    },
    {
      name: 'Destinee Ann Spangler',
      Pay: "Successfully withdrew $500000"
    },
    {
      name: 'Stacy Weinstein Petruzzi',
      Pay: "Made a deposit of $20000"
    },
    {
      name: 'Emily Lutz Leighty',
      Pay: "Made a deposit of $5000"
    },
  ]

  useEffect(() => {
    // Function to toggle the component's visibility
    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };
    const toggleVisibilitynew = () => {
      const number = Math.floor(Math.random() * ShowName.length)
      setNumberChange(number)
      console.log(number)
    };

    // Set up an interval to toggle visibility every 60 seconds (1 minute)
    const intervalId = setInterval(toggleVisibility, 5000); // 60000 milliseconds = 60 seconds
    const intervalIdnew = setInterval(toggleVisibilitynew, 5000); // 60000 milliseconds = 60 seconds
    // Clear the interval when the component unmounts
 
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalIdnew); 
    };
    
  }, []);


  // useEffect(()=>{

  //   /* eslint-disable-next-line no-unused-expressions */
  //   return changeDisplay
  //   /* eslint-disable-next-line react-hooks/exhaustive-deps */
  // },[])

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, [5000])
  });

  return (
    <div>
      {
        loading? <Div>
          <Logo src={logo} alt="logo"/>  
          <FallingLines
      color="#fff"
    width="100"
    visible={true}
  ariaLabel='falling-lines-loading'
/>
        {/* <SpinnerCircular size={45} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />  */}
       </Div> :
        <Container>

       <EthScroll/>
      <LandingPage/>
      <Land2/>
      <Land3/>
      <Land4/>
      <Land5/>
      <Land7/>
      <Land8/>
      <BitPage/>
      <Discover/>
      <Assetcryp/>
      <Land6/>
      <Land10/>
      <News/>
      <Land9/>

      {
          isVisible && (
            <DisplayShow>
            <h5>{ShowName[numberChange].name} </h5>
            <span>{ShowName[numberChange].Pay}</span>
          </DisplayShow>
          )
        }
       </Container>
      }
    </div>
  )
}

export default Landing;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
/* font-family: poppins; */
position: relative;
`;

const DisplayShow = styled.div`
    width: 20%;
    height: 40px;
    background: #fff;
    position: fixed;
    bottom: 10px;
    border-radius: 5px;
    left: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation: bounceInUp; 
    animation-duration: 2s;
    z-index: 999;
    padding: 10px;

    h5 {
      /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
      margin: 0px;
    }

    span {
      /* font-family: 'Times New Roman', Times, serif; */
      padding: 0px;
      margin : 0px;
    }

  @media Screen and (max-width: 768px){
    width: 90%;
}
@media Screen and (max-width: 425px){
    width: 70%;
    /* justify-content: center; */
}
`

const Div = styled.div`
width: 100%;
height: 100vh;
position: fixed;
z-index: 100000;
background-color: #101C30;
background:linear-gradient(45deg, #015ec9,  #f14455);
top: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Logo = styled.img`
width: 30%;
height: 50%;
margin-top: 20px;

@media Screen and (max-width: 768px){
width: 70%;
height: 40%;
/* margin-left: 50px; */
margin-top: 0px;

}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
`;


