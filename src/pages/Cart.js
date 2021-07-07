import styled from 'styled-components';

const Cart = ({display}) => {

return <CartContainer 
    display={display}>
    <p>Cart : {display}</p>
</CartContainer>

}

const CartContainer = styled.div`
    position: fixed;
    display: ${props => props.display};
    z-index: 1;
    height: 80%;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    left: 0;
    right: 0;
    background-color: #fff;
    transition: 1.0s ease-in-out;
`

export default Cart;