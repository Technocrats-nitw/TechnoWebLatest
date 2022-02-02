import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  min-height: 70vh;
  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  h2{
    text-align: center;
    font-size: 4rem;
    margin: 5rem 0;
    color:var(--gold);
  }
  .projects::-webkit-scrollbar {
    display: none;
  }
  
  .projects {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: scroll;

    .project{
      padding: 2rem 1.8rem;
      background-color: var(--purple);
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--gold);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--purple);
          transition: color 0.25s;
          &:hover{
            color: black;
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.2rem;
          font-weight: bold;
          //opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px){
    .projects{
      grid-template-columns: 1fr;
    }
    #projects{
      margin-top: 30rem;
    }
    .headings{
      font-size: 2.75rem;
    }
  }
`
