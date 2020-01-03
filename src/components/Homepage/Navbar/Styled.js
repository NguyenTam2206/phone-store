import styled from 'styled-components';

export const SC_BUTTON = styled.button`
    background-color : ${props => props.inputColor || "orange"};
    border: ${props => props.inputBorder || "solid 1pt orange"};
    border-radius: 5px;
    padding: 2px 10px;
    color: #38024a;
    transition: all .5 ease;
&:hover{
    background-color: #db8c02;
    transition: all .5 ease;
}
`
export const SC_NAVBAR = styled.nav`
    background: #38024a;
    .nav-link {
        color: white;
        font-size: 15px;
        transition: all .5 ease;
    }
    .nav-link:hover{
        color: orange;
        transition: all .5 ease;
    }
`