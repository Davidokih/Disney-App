import React from 'react'
import Slider from '../Slide/Slider'
import styled from 'styled-components'
import Viewers from '../overView/Viewers'

const Home = ()=>{
    return(
        <Container>
            <Slider />
            <Viewers />
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100%;
min-height: 100vh;
width: 100%;
position: relative;
/* overflow: hidden; */
:before{
    content:"";
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('/Assets/images/home-background.png');
}
`