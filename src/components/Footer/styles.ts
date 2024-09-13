import styled, { css } from 'styled-components'
import { Box } from '@mui/material'
import { getColorTheme } from '../../theme/colors'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

type ParagraphProps = {
  $hasMargin?: boolean
}

const primaryColor = getColorTheme('primary')
const secondayColor = getColorTheme('secondary')
const lightColor = getColorTheme('light')

export const BannerContainer = styled(Box)`
  width: 100%;
  height: auto;
  background-color: ${primaryColor};

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0 30px 0;

  @media (max-width: 920px) {
    flex-direction: column;
    padding: 20px 0 20px 0;
  }
`

export const WrapperText = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media (max-width: 920px) {
    align-items: center;
    align-self: center;
    margin-left: 0;
    margin: 5% 5% 5% 5%;
  }
`

export const Subtitle = styled.div`
  color: ${secondayColor};
  font-family: 'Cursive';
  font-size: 90px;
  display: flex;
  height: 70px;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: 970px) {
    font-size: 80px;
  }
`

export const Paragraph = styled.div<ParagraphProps>`
  color: ${lightColor};
  font-family: 'Regular';
  font-size: 15px;

  ${({ $hasMargin = false }) =>
    $hasMargin &&
    css`
      margin-left: 27px;
    `}

  @media (max-width: 970px) {
    font-size: 12px;
    text-align: center;

    ${({ $hasMargin = false }) =>
      $hasMargin &&
      css`
        margin-left: 0;
      `}
  }
`

export const BoxContacts = styled(Box)`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const WhatsIcon = styled(WhatsAppIcon)`
  color: ${lightColor};
  margin-right: 5px;

  &.css-i4bv87-MuiSvgIcon-root {
    font-size: 18px;
  }
`

export const InstaIcon = styled(InstagramIcon)`
  color: ${lightColor};
  margin-right: 5px;
`

export const BoxIcons = styled(Box)`
  display: flex;
  align-items: end;

  svg {
    font-size: 18px;
  }

  @media (max-width: 970px) {
    justify-content: center;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 300px;

  @media (max-width: 970px) {
    width: 200px;
    margin-top: 30px;
  }
`
