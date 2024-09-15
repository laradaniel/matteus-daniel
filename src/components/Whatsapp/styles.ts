import styled from 'styled-components'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { getColorTheme } from '../../theme/colors'
import { Box as _Box } from '@mui/material'

const lightColor = getColorTheme('light')

export const Box = styled(_Box)`
  position: fixed;
  bottom: 2%;
  right: 1%;
  z-index: 1;

  background-color: #00bb2d;
  border-radius: 50%;
  color: ${lightColor};
  padding: 5px;

  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 65px;

    @media (max-width: 970px) {
      font-size: 50px;
    }
  }
`

export const WhatsIcon = styled(WhatsAppIcon)``
