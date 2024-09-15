import styled from 'styled-components'
import { Box } from '@mui/material'
import { getColorTheme } from '../../theme/colors'

const primaryColor = getColorTheme('primary')
const secondaryColor = getColorTheme('secondary')
const lightColor = getColorTheme('light')

export const BannerContainer = styled(Box)`
  width: 100%;
  height: auto;
  background-color: ${lightColor};

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 0 30px 0;
  flex-direction: column;
`

export const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 40px 0 40px;
`

export const Title = styled.div`
  font-family: 'Cursive';
  color: ${secondaryColor};
  font-size: 130px;
  height: 180px;

  @media (max-width: 920px) {
    font-size: 100px;
    height: 130px;
  }

  @media (max-width: 450px) {
    font-size: 80px;
    height: 130px;
  }
`
export const Subtitle = styled.div`
  font-family: 'Regular';
  color: ${primaryColor};
  font-size: 20px;
  text-align: center;

  @media (max-width: 920px) {
    font-size: 15px;
  }

  @media (max-width: 450px) {
    font-size: 13px;
  }
`

export const SliderBoxDesktop = styled(Box)`
  display: flex;
  height: 330px;
  width: 80%;

  align-items: flex-end;

  @media (max-width: 1320px) {
    height: 250px;
  }

  @media (max-width: 920px) {
    display: none;
  }
`

export const SliderBoxMobile = styled(Box)`
  display: none;

  @media (max-width: 920px) {
    display: flex;
    height: 280px;
    width: 80%;
    align-items: flex-end;
  }
`

export const Image = styled.img`
  width: 340px;
  margin-right: 12px;

  @media (max-width: 1320px) {
    width: 240px;
  }

  @media (max-width: 920px) {
    width: 300px;
  }
`
