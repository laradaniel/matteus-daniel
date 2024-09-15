import styled from 'styled-components'
import { Box } from '@mui/material'
import { getColorTheme } from '../../theme/colors'

const secondaryColor = getColorTheme('secondary')
const primaryColor = getColorTheme('primary')
const lightColor = getColorTheme('light')

export const Container = styled(Box)`
  width: 100%;
  background-color: ${secondaryColor};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.div`
  font-family: 'Cursive';
  font-size: 120px;
  color: ${lightColor};
  text-rendering: optimizespeed;
  height: 134px;
  margin-top: 20px;

  @media (max-width: 1100px) {
    font-size: 90px;
    height: 100px;
  }
`

export const Subtitle = styled.div`
  font-family: 'Regular';
  font-size: 17px;
  color: ${primaryColor};
  margin-bottom: 40px;
  text-align: center;
`
