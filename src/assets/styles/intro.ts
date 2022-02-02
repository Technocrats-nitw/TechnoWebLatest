import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;

  }

  .hero-text{
    min-height:70vh;
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
      color:var(--pink);
      margin-top: 0;
    }

    h2{
      color:cream ;
      margin: 1rem 0;
    }


    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }

    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 25%;
  }
  @media(max-width: 480px){
    margin-top: 35%;
  }

  .team-name{
    font-size: 120%;
    color: var(--cream);
  }

  #top-this{
    font-size: 150%;
    color: var(--cream);
    font-weight: bold;
    margin-bottom: 0;
    //opacity:0.85;
  }
  #TLabs{
    color: var(--yellow);
    font-weight: bold;
  }
`
