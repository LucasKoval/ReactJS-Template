import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import Select from 'react-select'
import 'react-toastify/dist/ReactToastify.css'

export const lightTheme = {
  bgColor: {
    main: '#FFF',
    header: '#F2F6F7',
    sidebar: '#F2F6F7',
    footer: '#F2F6F7',
  },
  fontColor: {
    main: '#002E39',
    header: '#0F3942',
    sidebar: '#0F3942',
    footer: '#0F3942',
    menu: '#00b4db',
    author: '#00b4db',
  },
  color: {
    darkGrey: '#333333',
    grey: '#D8D9D3',
    lightGrey: '#E8ECEE',
    darkBlue: '#161B22',
    greyBlue: '#506276',
    blue: '#0083b0',
    lightBlue: '#00b4db',
    aqua: '#24CDCA',
    yellow: '#FFC677',
    orange: '#FF6962',
  },
  device: {
    tablet: '768px',
    mobile: '425px',
  },
}

export const darkTheme = {
  bgColor: {
    main: '#002E39',
    header: '#0F3942',
    sidebar: '#0F3942',
    footer: '#0F3942',
  },
  fontColor: {
    main: '#E8ECEE',
    header: '#D8D9D3',
    sidebar: '#D8D9D3',
    footer: '#D8D9D3',
    menu: '#FFC677',
    author: '#FFC677',
  },
  color: {
    darkGrey: '#333333',
    grey: '#D8D9D3',
    lightGrey: '#E8ECEE',
    darkBlue: '#161B22',
    greyBlue: '#506276',
    blue: '#0083b0',
    lightBlue: '#00b4db',
    aqua: '#24CDCA',
    yellow: '#FFC677',
    orange: '#FF6962',
  },
  device: {
    tablet: '768px',
    mobile: '425px',
  },
}

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
html,
body {
  background-color: ${(props) => props.theme.body};
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
h1, h2, h3, h4, p, span, strong, input, select, option, button, div, a {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
`

export const ToastStyledContainer = styled(ToastContainer)`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    font-size: 1rem;
    height: 4rem;
    -webkit-box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
  }
  .Toastify__close-button > svg {
    color: ${({ theme }) => theme.color.darkBlue};
  }
  .Toastify__toast--info {
    background: #f4f8fa; //Original
    /* background-image: url(/img/toast-bg-desktop.jpg); */
    color: ${({ theme }) => theme.color.darkGrey};
    border-top: 1px solid #3598db;
    border-bottom: 1px solid #3598db;

    .Toastify__progress-bar {
      background: #3598db;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
  }
  .Toastify__toast--success {
    background: #e4ebd6; //Original
    /* background-image: url(/img/toast-bg-desktop.jpg); */
    color: ${({ theme }) => theme.color.darkGrey};
    border-top: 1px solid #08bc0d;
    border-bottom: 1px solid #08bc0d;
    .Toastify__progress-bar {
      /* background: #bfd592; */ //Original
      background: #08bc0d;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--error {
    background: #f5b7b1; //Original
    /* background-image: url(/img/toast-bg-desktop.jpg); */
    color: ${({ theme }) => theme.color.darkGrey};
    border-top: 1px solid #e74d3d;
    border-bottom: 1px solid #e74d3d;
    .Toastify__progress-bar {
      background: #e74d3d;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
  }
`

export const BodyContainer = styled.div`
  min-height: 100vh;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontColor.main};
  background-color: ${(props) => props.theme.bgColor.main};
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    min-height: 100vh;
  }
`

export const MainSection = styled.main`
  width: 100%;
  height: auto;
  padding: 0 2rem;
  padding-top: 100px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 0 1rem;
    padding-top: 4.5rem;
  }
`

export const PageContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 90%;
    flex-flow: column;
    justify-content: center;
  }
`

export const Title = styled.h1`
  &.notFound {
    text-align: center;
    margin: 1rem 0;
  }
`

export const Paragraph = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.color.darkBlue};
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 1rem;
  }
`

export const Input = styled.input`
  width: 95%;
  height: 40px;
  margin: 13px 0;
  padding: 0 6px 0 13px;
  border: 1px solid #d9dadb;
  border-radius: 6px;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140.4%;
  color: ${({ theme }) => theme.color.darkGrey};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  :focus {
    border: 1px solid #24cdc9;
  }
  &.half {
    width: 45%;
  }
  &.all {
    width: 95%;
  }
  &.full {
    width: 100%;
  }
`

export const Textarea = styled.textarea`
  width: 95%;
  height: auto;
  max-height: 150px;
  background: transparent;
  border: 1px solid #d9dadb;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  line-height: 140.4%;
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 12px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  :focus {
    outline: none;
    border: 1px solid #24cdc9;
  }
  &.half {
    width: 45%;
  }
  &.all {
    width: 95%;
  }
  &.full {
    width: 100%;
  }
`

export const CustomSelect = styled(Select)`
  width: 95%;
  height: 40px;
  margin: 13px 0;
  border: 1px solid #d9dadb;
  border-radius: 6px;
  outline: none;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140.4%;
  color: ${({ theme }) => theme.colors.primary};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:disabled {
    background-color: #f2f2f2;
    color: #999999;
    cursor: default;
  }
  &.all {
    width: 95%;
  }
  &.half {
    width: 45%;
  }
  &.full {
    width: 100%;
  }
`

export const selectStyles = {
  control: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    backgroundColor: isDisabled ? '#f2f2f2' : 'white',
    border: 'none',
    boxShadow: isFocused ? '0 0 0 1px #24cdc9' : null,
  }),
  dropdownIndicator: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      color: isFocused ? '#24cdc9' : isSelected ? '#24cdc9' : '#CCCCCC',
      '&:hover': {
        color: '#24cdc9',
      },
    }
  },
  menu: (styles) => ({
    ...styles,
    boxShadow: '0 0 0 1px #24cdc9',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '0',
    border: 'none',
  }),
  placeholder: (styles, { isDisabled }) => ({
    ...styles,
    color: isDisabled ? '#999999' : '#4F6276',
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      borderRadius: 'inherit',
      backgroundColor: isDisabled
        ? '#f2f2f2'
        : isSelected
        ? '#ff6962'
        : isFocused
        ? 'rgba(36, 205, 201, 0.15)'
        : null,
      color: isDisabled ? '#999999' : isSelected ? '#fff' : '#4F6276',
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? '#ff6962' : null),
      },
    }
  },
}

export const Button = styled.button`
  height: 48px;
  width: 198px;
  border-radius: 32px;
  color: #ffffff;
  background: #ff6962;
  border: none;
  align-self: flex-end;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
  &:hover {
    border: 1px solid rgba(255, 105, 98, 1);
    color: #ff6962;
    background: rgba(255, 105, 98, 0.15);
    transition: all 0.5s;
  }
  &:focus,
  &:focus-visible {
    outline: none;
    background: #ff6962;
    border: none;
  }
  &:disabled {
    outline: none;
    border: 1px solid #a6a6a6;
    background: #f3f5f6;
    color: #a6a6a6;
    cursor: default;
  }
  &.white {
    color: #4f6276;
    border: 2px solid #4f6276;
    background: #ffffff;
    margin-right: 18px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 18px;
    &.normalSize {
      width: 198px;
      margin-bottom: 0;
    }
    &.white {
      margin-bottom: 0.5rem;
      margin-right: 0;
    }
  }
`

export const ErrorContainer = styled.div`
  padding: 7rem 0 2rem 0;
  img {
    width: 480px;
    height: 270px;
    border-radius: 75px;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 0;
    img {
      width: 300px;
      height: 169px;
    }
  }
`

export const ErrorMessage = styled.span`
  display: flex;
  justify-content: left;
  font-size: 14px;
  color: rgba(245, 16, 0, 0.8);
  &.half {
    width: 45%;
  }
  &.all {
    width: 95%;
  }
  &.full {
    width: 100%;
  }
`
