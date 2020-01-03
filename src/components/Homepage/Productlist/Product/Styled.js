import styled from 'styled-components';

export const SC_PRODUCT = styled.div`
    .card {
        transition : all .5s linear;
        border: transparent;
    }
    .card-footer {
        transition : all .5s linear;
        border-top : transparent;
        background : transparent;
    }
&:hover {
    cursor: pointer;
    .card {
        border: solid 1px rgba(0,0,0,0.2);
        box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background : rgb(247,247,247);
    }   
}
.img-container {
    position : relative;
    overflow : hidden;
}
.card-img-top {
    transition : all .5s linear;
}
.img-container:hover .card-img-top{
    transform : scale(1.1);
}
.card-btn {
    position: absolute;
    right : 0px;
    bottom : 0px;
    border-radius : .5rem 0 0 0;
    transform : translate(100%,100%);
    transition : all .5s linear;
}
.img-container:hover .card-btn {
    transform : translate(0,0);
}
`