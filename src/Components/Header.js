import React, {useState, Components} from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//import{ Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <HeaderLineOne>

                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>

                <HeaderLogo>
                    <MenuLink href="/">
                        <h1>The<span>SassyClub</span></h1>
                    </MenuLink>
                </HeaderLogo>
                
                <MenuLink href="/cart">
                    <HeaderOptionCart>
                        <ShoppingCartIcon />
                    </HeaderOptionCart>
                </MenuLink>
                
            </HeaderLineOne>

           <HeaderSearch>
                <HeaderSearchInput type="search" />

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <Menu isOpen={isOpen}>
                <HeaderOptionAddress>
                    <MenuLink href="">
                        <LocationOnIcon />
                    </MenuLink>

                    <MenuLink href="">
                        <HeaderOption>
                            <OptionLineOne>Hello,<br/></OptionLineOne>
                            <OptionLineTwo>Select your address</OptionLineTwo>
                        </HeaderOption>
                    </MenuLink>
                </HeaderOptionAddress>
            
                <HeaderNavItems>
                    <MenuLink href="">
                        <HeaderOption>
                            <OptionLineOne>Hello,<br/></OptionLineOne>
                            <OptionLineTwo>Account & Lists</OptionLineTwo>
                        </HeaderOption>
                    </MenuLink>

                    <MenuLink href="">
                        <HeaderOption>
                            <OptionLineOne>Returns<br/></OptionLineOne>
                            <OptionLineTwo>& Orders</OptionLineTwo>
                        </HeaderOption>
                    </MenuLink>
               </HeaderNavItems>
            </Menu>
        
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background: radial-gradient(rgb(207, 186, 186),#dd8c8c);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position:  sticky;
    z-index: 1;
    top: 0px;
    width: 100%;
    height: 56px;
    @media(max-width: 591px){
        padding: 10px 20px;
        flex-direction: column;
    }
`;

const HeaderLineOne = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HeaderLogo = styled.div`
    margin: 22px 9px 15px 9px;
    font-family: Mistral,Georgia, serif;
    color: White;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.7rem;

    span{
        font-weight: 700;
        font-size: 1.5rem;
        font-family: Mistral,Georgia, serif;
        color: brown;
    }
`;
const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    text-align: right;
    padding-top: 40px;

    span{
        height: 2px;
        width: 25px;
        background: brown;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media(max-width: 400px){
        display: flex;
    }
`;
const Menu = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    @media(max-width: 400px){
        display: flex;
        overflow: hidden;
        flex-direction: row;
        flex-wrap: wrap;

        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "200px": "0")};
        transition: max-height 0.3s ease-in;
    }
`;
const MenuLink = styled.a`
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: brown;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover{
        color: black;
    }
`;
const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`;
const OptionLineOne = styled.div`
`;
const OptionLineTwo = styled.div`
    font-weight: 700;
`;
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 5px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #e6e6e6;
    }

    @media(max-width: 108px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "300px": "0")};
        transition: max-height 0.3s ease-in;
    }
`;
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 3px solid brown;
    :focus{
        outline: none;
    }
`;
const HeaderSearchIconContainer = styled.div`
    cursor: pointer;
    line-height: 30px;
    text-align: center;
    color: white;
    background-color: brown;
    border: 3px solid brown;
    border-radius: 0 5px 2px 0;
`;
const HeaderNavItems = styled.div`
    display: flex;

    @media(max-width: 108px){
        align-content: center;
        flex-direction: column;
    }
`;
const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
`;
const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding: 34px;
`;
