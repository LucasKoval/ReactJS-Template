import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { MainSection, PageContainer } from '../../styles/globalStyles'

export default function Page1() {
  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <h1>Page 1</h1>
      </PageContainer>
    </MainSection>
  )
}
