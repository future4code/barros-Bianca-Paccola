import styled from "styled-components";

export const HeaderWaves = styled.header`
   height: 90px;
   width: 100vw;

   section {
    display: flex;
    justify-content: space-around;
    max-width: 1600px;
   }
   
   div{
           position: absolute;
           bottom: -1px;
           left: -1px;
           right: -1px;
           top: -1px;
           pointer-events: none;
           background-repeat: no-repeat; 
           background-size: 100% 90px;
           background-position: 50% 0%;    
           background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23702d8f"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%2346268C"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%237641BF"/></svg>');
   }

   h1{
    text-align: center;
    display: inline-block;
    color: antiquewhite;
    font-size: 35px;

        @media only screen and (min-width: 480px) and (max-width: 767px) {
                font-size: 35px;
                }

        @media only screen and (max-width: 479px) {
                font-size: 20px;
                }
   }

    svg {
            height: 38px;
            margin-top: 0.5rem;
            fill: antiquewhite;
            cursor: pointer;
            z-index: 2;

            @media only screen and (min-width: 480px) and (max-width: 767px) {
                height: 28px;
                }

        @media only screen and (max-width: 479px) {
                height: 25px;
                }
    }
`
     