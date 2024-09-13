import React, { FC } from 'react'
import {
  BannerContainer,
  Paragraph,
  Subtitle,
  WrapperText,
  BoxContacts,
  WhatsIcon,
  BoxIcons,
  InstaIcon,
  Image,
} from './styles'
import { Logo_4 } from '../../assets/images'

const Footer: FC = () => {
  return (
    <BannerContainer>
      <WrapperText>
        <Subtitle>contato</Subtitle>

        <Paragraph>Tem alguma dúvida? </Paragraph>
        <Paragraph>
          Estamos disponíveis pra você em nossas redes sociais!
        </Paragraph>

        <BoxContacts>
          <BoxIcons>
            <WhatsIcon /> <Paragraph>+55 (11) 91111-1111</Paragraph>
          </BoxIcons>
          <BoxIcons>
            <InstaIcon /> <Paragraph>@matteus.engenharia</Paragraph>
          </BoxIcons>

          <Paragraph $hasMargin>matteus.daniel@enganheria.com</Paragraph>
        </BoxContacts>
      </WrapperText>
      <Image src={Logo_4} />
    </BannerContainer>
  )
}

export default Footer
