import styled from "styled-components"

export const Container = styled.section`
.filter-button {
    background-color: var(--darkblue);
    font-size: 2.5rem;
    padding: 0.5% 1%;
    margin: 0 0.5%;
    border-radius: 1rem;
}
.filter-button:hover {
    background-color: var(--gold);
    filter: brightness(1.0);
}
.buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
}

@media screen and (max-width:960px) {
    .filter-button {
        background-color: rgb(2, 10, 37);
        font-size: 2.5rem;
        padding: 1% 2%;
        /*margin: 0 2%;*/
    }
    
}
`