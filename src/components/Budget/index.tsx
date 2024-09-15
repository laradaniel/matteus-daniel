import React, { FC, useState } from 'react'
import {
  BannerContainer,
  Title,
  WrapperText,
  Label,
  Input,
  Button,
  TextArea,
  FormWrapper,
} from './styles'
import { Box, CircularProgress } from '@mui/material'
const Budget: FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    console.log('e.target.name: ', e.target.name)
    console.log('e.target.value: ', e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)

    fetch('https://formsubmit.co/laradanielt@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .catch((error) => {
        console.error('Erro:', error)
        alert('Ocorreu um erro ao enviar o formulário. Tente novamente.')
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <BannerContainer>
      <WrapperText>
        <Box>
          <Title>Faça seu orçamento</Title>
        </Box>
      </WrapperText>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Label>Nome</Label>
          <Input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label>Telefone</Label>
          <Input
            type="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <TextArea
            name="mensagem"
            placeholder="Descreva o que está buscando e entraremos em contato :)"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></TextArea>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000" />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>
        </form>
      </FormWrapper>
    </BannerContainer>
  )
}

export default Budget
