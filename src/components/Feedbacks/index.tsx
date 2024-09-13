import React, { FC } from 'react'
import {
  BannerContainer,
  TextBox,
  Title,
  Subtitle,
  SliderBox,
  Image,
} from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { Pagination, Navigation, Scrollbar } from 'swiper/modules'
import {
  Foto_1,
  Foto_2,
  Foto_3,
  Foto_4,
  Foto_5,
  Foto_6,
} from '../../assets/images'

const Feedbacks: FC = () => {
  return (
    <BannerContainer>
      <TextBox>
        <Title>nossos clientes</Title>
        <Subtitle>
          Transforme seu empreendimento em realidade com a expertise da nossa
          engenharia! <br />
          Construa com qualidade, segurança e inovação ao seu lado.
        </Subtitle>
      </TextBox>

      <SliderBox>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation, Scrollbar]}
        >
          <SwiperSlide style={{ textAlign: 'center' }}>
            <Image src={Foto_1} />
            <Image src={Foto_2} />
            <Image src={Foto_3} />
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: 'center' }}>
            <Image src={Foto_4} />
            <Image src={Foto_5} />
            <Image src={Foto_6} />
          </SwiperSlide>
        </Swiper>
      </SliderBox>
    </BannerContainer>
  )
}

export default Feedbacks
