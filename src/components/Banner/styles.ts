import styled from 'styled-components'
import { Box } from '@mui/material'
import { getColorTheme } from '../../theme/colors'

const primaryColor = getColorTheme('primary')
const secondayColor = getColorTheme('secondary')
const lightColor = getColorTheme('light')

export const BannerContainer = styled(Box)`
  width: 100%;
  height: auto;
  background-color: ${primaryColor};

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 920px) {
    padding: 10px 0 0 0;
    flex-direction: column;
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

export const Title = styled.div`
  color: ${lightColor};
  font-family: 'Bold';
  font-size: 50px;

  @media (max-width: 920px) {
    text-align: center;
  }

  @media (max-width: 520px) {
    font-size: 40px;
  }
`

export const Subtitle = styled.div`
  color: ${secondayColor};
  font-family: 'Cursive';
  font-size: 58px;
  display: flex;
  height: 70px;
  align-items: end;

  @media (max-width: 920px) {
    justify-content: center;
    font-size: 52px;
  }

  @media (max-width: 520px) {
    font-size: 45px;
  }
`

export const Paragraph = styled.div`
  color: ${lightColor};
  font-family: 'Regular';
  line-height: 1.5;
  margin-top: 30px;
  width: 420px;

  @media (max-width: 920px) {
    text-align: center;
    width: 80%;
    font-size: 15px;
  }
`
export const BoxLogo = styled(Box)`
  display: flex;
  align-self: end;
  margin-right: 70px;

  @media (max-width: 920px) {
    margin-right: 0;
    justify-content: center;
    align-self: center;
  }
`

export const Image = styled.img`
  width: 400px;

  @media (max-width: 920px) {
    width: 200px;
  }
`
