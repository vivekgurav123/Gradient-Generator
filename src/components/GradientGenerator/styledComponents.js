// Style your elements here
import styled from 'styled-components'

export const Main = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gardientValue});
`

export const UlList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  //   align-items: center;
  gap: 1rem;
`

export const Direction = styled.div`
  text-align: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`
export const Colors = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
export const Heading = styled.h1`
  color: white;
`
export const SubHead = styled.p`
  color: white;
  font-size: 20px;
`

export const Para = styled.p`
  color: white;
`
