import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { MainSection, PageContainer } from '../../styles/globalStyles'

export default function Home() {
  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <h1>Hello World!</h1>
      </PageContainer>
    </MainSection>
  )
}
