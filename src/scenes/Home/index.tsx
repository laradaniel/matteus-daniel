import React, { FC, useEffect, useState } from 'react'
import {
  Banner,
  Investment,
  Footer,
  Whatsapp,
  Feedbacks,
  Budget,
} from '../../components'
import {
  MenuContainerDesktop,
  MenuContainerMobile,
  Button,
  ButtonsDesktopWrapper,
  IconMenuMobileClosed,
  BoxBurgerMenu,
  MenuMobileOptions,
  IconMenuMobileOpen,
  ButtonMobile,
  BoxCloseMenu,
  BoxIcons,
  IconMenu,
} from './styles'
import { useParams } from 'react-router-dom'
import { Icone, Icone_2 } from '../../assets/images'
import { Box } from '@mui/material'

const Home: FC = () => {
  const { module } = useParams()

  const [openMenu, setOpenMenu] = useState(false)

  const handleToggle = () => {
    setOpenMenu(!openMenu)
  }

  const navigateTo = (module: string) => {
    const container = document.getElementById(module)
    container?.scrollIntoView({ behavior: 'smooth' })
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    if (module) {
      const container = document.getElementById(module)
      container?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [module])

  return (
    <>
      <MenuContainerDesktop>
        <Box marginLeft="10px" alignItems="center">
          <img src={Icone} width="17%" />
        </Box>
        <ButtonsDesktopWrapper>
          <Button onClick={() => navigateTo('banner')}>Início</Button>
          <Button onClick={() => navigateTo('about')}>Sobre nós</Button>
          <Button onClick={() => navigateTo('projects')}>Projetos</Button>
          <Button onClick={() => navigateTo('partners')}>Parceiros</Button>
          <Button onClick={() => navigateTo('budget')}>
            Peça seu orçamento
          </Button>
          <Button onClick={() => navigateTo('contacts')}>Contato</Button>
        </ButtonsDesktopWrapper>
      </MenuContainerDesktop>

      <MenuContainerMobile>
        <BoxIcons open={openMenu}>
          <IconMenu open={openMenu}>
            <img src={Icone_2} width="9%" />
          </IconMenu>
          <BoxBurgerMenu open={openMenu} onClick={handleToggle}>
            <IconMenuMobileClosed />
          </BoxBurgerMenu>
          <BoxCloseMenu open={openMenu} onClick={handleToggle}>
            <IconMenuMobileOpen />
          </BoxCloseMenu>
        </BoxIcons>
        <MenuMobileOptions open={openMenu}>
          <ButtonMobile onClick={() => navigateTo('banner')}>
            Início
          </ButtonMobile>
          <ButtonMobile onClick={() => navigateTo('about')}>
            Sobre nós
          </ButtonMobile>
          <ButtonMobile onClick={() => navigateTo('projects')}>
            Projetos
          </ButtonMobile>
          <ButtonMobile onClick={() => navigateTo('partners')}>
            Parceiros
          </ButtonMobile>
          <ButtonMobile onClick={() => navigateTo('budget')}>
            Peça seu orçamento
          </ButtonMobile>
          <ButtonMobile onClick={() => navigateTo('contacts')}>
            Contato
          </ButtonMobile>
        </MenuMobileOptions>
      </MenuContainerMobile>

      <div id="banner">
        <Banner />
      </div>
      <div id="projects">
        <Feedbacks />
      </div>
      <div id="investments">
        <Investment />
      </div>
      <div id="budget">
        <Budget />
      </div>
      <div id="contacts">
        <Footer />
      </div>

      <Whatsapp />
    </>
  )
}

export default Home
