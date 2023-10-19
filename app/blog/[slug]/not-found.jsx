import React from 'react'
import { Container } from '@/components/layout'

const NotFound = () => {
  return (
    <Container tag='section' variant='lg'>
        <div className="content-center">
        <h1>the requested page does not exist.</h1>
        </div>
    </Container>
  )
}

export default NotFound