import styled from 'styled-components'

function Titulo(props) {
    return (
        <>
        <Div className="banner">
            <div className="texto">
                <h1 className='principal'>{props.titulo1}</h1>
                <h1>{props.titulo2}</h1>
            </div>
        </Div>
        </>
    )
}

export default Titulo
const Div =styled.div`

        margin-top: 7em;
        max-width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-top: 7px solid #846851;
        margin-bottom: 5em;


    .texto {
        width: 50%;
        background-color: #E5DBD0;
        margin-top: -52px;
        text-align: center;
        color: #846851;
    }
    @media  screen and (max-width: 767px) {
        font-size: 14px;
        border-top: 7px solid #846851;
        margin-bottom: -2em;

        .texto{
            margin-top:-45px;
        }
    }
    @media  screen and (max-width: 600px) {
        font-size: 12px;
        border-top: 7px solid #846851;
        margin-bottom: -3em;

        .texto{
            margin-top:-37px;
        }
    }
    @media  screen and (min-width: 767px) and (max-width: 1043px) {
        .texto{
            margin-top:-45px;
        }
        font-size: 14px;
        border-top: 7px solid #846851;
        margin-bottom: 10px;

    }

`
