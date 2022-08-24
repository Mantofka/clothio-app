import { Outlet, useNavigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

// Styles
import {
  Container,
  SearchContainer,
  SearchInput,
  LinksContainer,
  HeaderLink,
  IconContainer,
  LogoContainer,
} from "./navigation.styles";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { changeTheme } from "../../redux/interface/interface.actions";
import { selectThemeMode } from "../../redux/interface/interface.selector";

import { ReactComponent as Logo } from "../../public/logo.svg";

import LightBulbIcon from "../../public/light-bulb";
import MoonIcon from "../../public/moon-icon";
import ProfileIcon from "../../public/profile-icon";
import SearchIcon from "../../public/search-icon";
import ShoppingBag from "../../public/shopping-bag";

import IconWrapper from "../../public/icon-wrapper";

function NavigatioPage() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectThemeMode);
  const navigate = useNavigate();

  return (
    <>
      <Container isNavigation>
        <LogoContainer onClick={() => navigate("/")}>
          <Logo />
        </LogoContainer>
        <LinksContainer>
          <SearchContainer>
            <SearchInput type='text' placeholder='Browse shop' />
            <IconWrapper Component={SearchIcon} />
          </SearchContainer>
          <HeaderLink to='/collections'>Collections</HeaderLink>
          <HeaderLink to='/shop'>Shop</HeaderLink>
          <IconContainer onClick={() => dispatch(changeTheme())}>
            <AnimatePresence initial={false} exitBeforeEnter>
              {themeMode === "light" ? (
                <LightBulbIcon key='light' />
              ) : (
                <MoonIcon key='dark' />
              )}
            </AnimatePresence>
          </IconContainer>
          <IconContainer>
            <IconWrapper Component={ShoppingBag} />
          </IconContainer>
          <IconContainer>
            <IconWrapper Component={ProfileIcon} />
          </IconContainer>
        </LinksContainer>
      </Container>
      <Outlet />
    </>
  );
}

export default NavigatioPage;
