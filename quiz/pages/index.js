import Link from 'next/link';
import styled from 'styled-components'

const Title = styled.h1 `
  font-size: 50px;
  color: ${({theme}) => theme.colors.primary};

`

// function Title(props) {
//   return <h1>{props.children}</h1>
// }


export default function Home () {
  return <Title>Minha Página</Title>
}
