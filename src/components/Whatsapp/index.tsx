import React, { FC } from 'react'
import { WhatsIcon, Box } from './styles'

const Whatsapp: FC = () => {
  const whatsappNavigate = () => {
    window.open(
      'https://wa.me/5511981623541?text=Olá! Gostaria de mais informações sobre Matteus Engenharia!',
    )
  }

  return (
    <Box>
      <WhatsIcon onClick={whatsappNavigate} />
    </Box>
  )
}

export default Whatsapp
