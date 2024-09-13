import React, { FC } from 'react'
import {
  BannerContainer,
  Title,
  Paragraph,
  Subtitle,
  WrapperText,
  BoxLogo,
  Image,
} from './styles'
import { Box } from '@mui/material'
import { Logo_3 } from '../../assets/images'

const Banner: FC = () => {
  return (
    <BannerContainer>
      <WrapperText>
        <Box>
          <Title>MATTEUS ENGENHARIA</Title>
          <Subtitle>Engenharia de alto padrao.</Subtitle>
        </Box>

        <Paragraph>
          A elegância e o prestígio do seu empreendimento começam com uma
          engenharia de alto nível.
        </Paragraph>
      </WrapperText>
      <BoxLogo>
        <Image src={Logo_3} />
      </BoxLogo>
    </BannerContainer>
  )
}

export default Banner
