import styled from 'styled-components'
import { Box, Button as _Button } from '@mui/material'
import { getColorTheme } from '../../theme/colors'

const primaryColor = getColorTheme('primary')
const secondayColor = getColorTheme('secondary')
const lightColor = getColorTheme('light')

export const BannerContainer = styled(Box)`
  width: 100%;
  height: auto;
  background-color: ${lightColor};

  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 920px) {
  }
`

export const WrapperText = styled(Box)`
  display: flex;
  flex-direction: column;

  @media (max-width: 920px) {
    align-items: center;
    align-self: center;
  }
`

export const Title = styled.div`
  color: ${primaryColor};
  font-family: 'Bold';
  font-size: 40px;

  @media (max-width: 920px) {
    text-align: center;
  }

  @media (max-width: 520px) {
    font-size: 30px;
  }
`

export const FormWrapper = styled(Box)`
  width: 50%;
  form {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 920px) {
    width: 80%;
  }
`

export const Label = styled.label`
  width: 100%;
  font-family: 'Regular';
  font-size: 14px;
  margin-top: 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 18px;
  margin-top: 3px;
`

export const Button = styled(_Button)`
  &.MuiButton-contained {
    width: 100%;
    margin-bottom: 50px;
    font-family: 'Regular';
    box-shadow: 0px 0px 0px 0px;

    background-color: ${lightColor};
    border: 1px solid ${secondayColor};
    height: 25px;
    color: ${secondayColor};
  }

  &.MuiButton-contained:hover {
    background-color: ${primaryColor};
    border: 1px solid ${primaryColor};
    color: ${lightColor};
    box-shadow: 0px 0px 0px 0px;
  }
`

export const TextArea = styled.textarea`
  height: 200px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Regular';
`
