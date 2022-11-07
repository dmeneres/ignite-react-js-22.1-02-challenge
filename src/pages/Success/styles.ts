import styled from 'styled-components'
import { PerkIcon } from '../Home/Description/styles'

export const Container = styled.div`
  padding: 80px 0px;
`

export const Text = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  margin-bottom: 40px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 492px;
    height: 293px;
  }

  div[id='locationCardContainer'] {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;

    width: 526px;
    height: 270px;

    background: ${(props) => props.theme.background};
    background-clip: padding-box; /* !importanté */
    border: solid $border transparent; /* !importanté */
    border-radius: 6px 36px;

    &:before {
      content: '';
      position: absolute;
      top: 291px;
      right: 961px;
      bottom: 402px;
      left: 431px;
      z-index: -1;
      margin: -$border; /* !importanté */
      border-radius: inherit; /* !importanté */
      background: linear-gradient(to right, #dbac2c, #8047f8);
    }
  }

  div[id='location'],
  div[id='waiting'],
  div[id='payment'] {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  div[id='address'],
  div[id='waitingText'],
  div[id='paymentText'] {
    p {
      color: ${(props) => props.theme['base-text']};

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
    }
  }

  div[id='address'] {
    span {
      font-weight: 700;
    }
  }

  div[id='waitingText'],
  div[id='paymentText'] {
    p:first-child {
      font-weight: 700;
    }
  }
`

export const LocationIcon = styled(PerkIcon)`
  background-color: ${(props) => props.theme.purple};
`

export const WaitingIcon = styled(PerkIcon)`
  background-color: ${(props) => props.theme.yellow};
`

export const PaymentIcon = styled(PerkIcon)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
