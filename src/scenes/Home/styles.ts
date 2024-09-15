import styled, { css } from 'styled-components'
import { Box, Button as _Button } from '@mui/material'
import { getColorTheme } from '../../theme/colors'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

type MenuProps = {
  open: boolean
}

const secondaryColor = getColorTheme('secondary')
const lightColor = getColorTheme('light')

export const BoxMenu = styled(Box)``

export const MenuContainerDesktop = styled(Box)`
  width: 100%;
  height: 50px;
  background-color: ${lightColor};
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: 970px) {
    display: none;
  }
`

export const MenuContainerMobile = styled(Box)`
  display: none;
  @media (max-width: 970px) {
    display: flex;
    background-color: ${secondaryColor};
    width: 100%;
    justify-content: space-between
    align-items: flex-end;
    position: fixed;
    z-index: 10;
    flex-direction: column;
  }
`

export const MenuMobileOptions = styled(Box)<MenuProps>`
  display: none;

  @media (max-width: 970px) {
    width: 100%;
    height: 200px;
    background-color: ${secondaryColor};
    align-items: flex-end;
    flex-direction: column;

    ${({ open }) =>
      open &&
      css`
        display: flex;
      `}
  }
`

export const ButtonsDesktopWrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: 970px) {
    display: none;
  }
`

export const IconMenuMobileClosed = styled(MenuIcon)`
  color: ${lightColor};
  justify-content: flex-end;
  margin-right: 10px;

  &.css-i4bv87-MuiSvgIcon-root {
    font-size: 30px;
  }
`

export const IconMenuMobileOpen = styled(CloseIcon)`
  color: ${lightColor};
  justify-content: flex-end;
  margin-right: 10px;
  &.css-i4bv87-MuiSvgIcon-root {
    font-size: 32px;
  }
`

export const IconMenu = styled(Box)<MenuProps>`
  display: flex;
  margin-left: 10px;

  ${({ open }) =>
    open &&
    css`
      display: none;
    `}
`

export const BoxBurgerMenu = styled(Box)<MenuProps>`
  display: flex;

  ${({ open }) =>
    open &&
    css`
      display: none;
    `}
`

export const BoxCloseMenu = styled(Box)<MenuProps>`
  display: none;

  ${({ open }) =>
    open &&
    css`
      display: flex;
    `}
`

export const BoxIcons = styled(Box)<MenuProps>`
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${({ open }) =>
    open &&
    css`
      justify-content: end;
    `}
`

export const ButtonsMobileWrapper = styled(Box)`
  width: 100%;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
`

export const Button = styled(_Button).attrs({
  variant: 'contained',
})`
  &.MuiButton-contained {
    margin-right: 30px;
    color: ${secondaryColor};
    background-color: ${lightColor};
    border: 1px solid ${lightColor};
    padding: 0 10px 0 10px;
    text-transform: none;
    border-radius: 32px;
    box-shadow: 0px 0px 0px 0px;
    font-weight: bold;
  }

  &.MuiButton-contained:hover {
    margin-right: 30px;
    color: ${secondaryColor};
    background-color: ${lightColor};
    border: 1px solid ${secondaryColor};
    padding: 0 10px 0 10px;
    text-transform: none;
    border-radius: 32px;
    box-shadow: 0px 0px 0px 0px;
    font-weight: bold;
  }
`

export const ButtonMobile = styled(_Button)`
  &.MuiButton-root {
    color: ${lightColor};
    text-transform: none;
    box-shadow: 0px 0px 0px 0px;
    line-height: 12px;
    font-size: 11px;
    justify-content: end;
    margin-right: 5px;
  }

  &.MuiButton-root:hover {
    text-decoration: underline;
  }
`
