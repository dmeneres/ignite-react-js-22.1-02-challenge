import styled from 'styled-components'

export const Container = styled.form`
  padding-top: 40px;
  display: flex;
  gap: 32px;
`

export const CompleteYourOrder = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  margin-bottom: 15px;
`

export const SelectedCoffees = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  margin-bottom: 15px;

  div[id='detailedInfo'] {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 368px;

    div[id='totalItems'],
    div[id='delivery'] {
      display: flex;
      width: 100%;
      justify-content: space-between;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }

    div[id='total'] {
      display: flex;
      width: 100%;
      justify-content: space-between;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  button {
    margin-top: 24px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;

    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};

    color: ${(props) => props.theme.white};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
  }

  button:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition: 0.2s;
    cursor: pointer;
  }
`

export const SelectedCoffeesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  margin-top: 15px;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  width: 448px;
  height: fit-content;

  div[id='divider'] {
    width: 100%;
    height: 1px;
    border: hidden;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    margin-top: 24px;
    margin-bottom: 24px;
  }
`

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  margin-top: 15px;
  margin-bottom: 12px;

  width: 640px;
  height: 372px;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  div {
    display: flex;

    :first-child {
      color: ${(props) => props.theme['yellow-dark']};
      margin-right: 8px;
    }

    :last-child {
      display: block;
      h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;

        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  form {
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[name='zip'] {
      /* Input */

      box-sizing: border-box;

      /* Auto layout */

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px;
      gap: 4px;

      width: 200px;
      height: 42px;

      /* Base/Input */

      background: ${(props) => props.theme['base-input']};
      /* Base/Button */

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;

      margin-bottom: 16px;

      ::placeholder {
        /* Text/Regular S */

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        /* or 18px */

        /* Base/Label */

        color: ${(props) => props.theme['base-label']};
      }
    }

    input[name='street'],
    input[name='complement'] {
      /* Input */

      box-sizing: border-box;

      /* Auto layout */

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px;
      gap: 4px;

      width: 560px;
      height: 42px;

      /* Base/Input */

      background: ${(props) => props.theme['base-input']};
      /* Base/Button */

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;

      margin-bottom: 16px;
    }

    div[id='optional']:has(:not(input[name='complement']:focus))::after {
      content: attr(data-required);
      height: 42px;
      position: relative;
      right: 0px;
      top: 60%;
      font-size: 15px;
      /* transform: translateY(20%); */
      transform: translateX(-120%);
      display: flex;
      align-items: center;

      font-family: 'Roboto';
      font-style: italic;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 130%;
      /* identical to box height, or 16px */
      color: ${(props) => props.theme['base-label']};
    }

    input[name='number'],
    input[name='city'] {
      /* Input */

      box-sizing: border-box;

      /* Auto layout */

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px;
      gap: 4px;

      height: 42px;

      /* Base/Input */

      background: ${(props) => props.theme['base-input']};
      /* Base/Button */

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
    }

    input[name='number'] {
      width: 200px;
      margin-right: 12px;
    }

    input[name='city'] {
      width: 348px;
    }

    div:last-child {
      display: flex;
    }

    input {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 207px;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  div[id='sentence'] {
    display: flex;

    div:first-child {
      color: ${(props) => props.theme.purple};
      margin-right: 8px;
    }

    div:last-child {
      display: block;
      h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;

        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  div[id='options'] {
    display: flex;
    width: 100%;
    justify-content: space-around;

    button {
      display: flex;
      gap: 12px;
      align-items: center;
      padding: 17.5px 16px;

      height: 51px;
      width: 170px;

      justify-content: center;

      background-color: ${(props) => props.theme['base-button']};
      border: none;
      border-radius: 6px;

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;

        text-transform: uppercase;

        color: ${(props) => props.theme['base-text']};
      }
    }

    button:hover {
      background-color: ${(props) => props.theme['base-hover']};
      transition: 0.2s;
      cursor: pointer;
    }

    button:focus {
      background-color: ${(props) => props.theme['purple-light']};
      box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    }
  }
`

export const SelectedCoffeeCard = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  justify-content: space-between;

  div[id='container'] {
    width: 100%;
    height: auto;
    display: flex;
    padding: 8px 4px;

    img {
      height: 64px;
      margin-right: 20px;
    }

    div[id='main'] {
      p[id='title'] {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};
      }
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  div[id='price'] {
    padding: 8px 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;

    align-items: center;

    color: ${(props) => props.theme['base-text']};
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  align-items: center;
  height: 32px;

  button[id='remove'] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-top: 0;
    gap: 4px;

    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: transparent;

    cursor: pointer;
    color: ${(props) => props.theme.purple};

    p {
      color: ${(props) => props.theme['base-text']};
    }

    :hover {
      background: ${(props) => props.theme['base-hover']};
      transition: 0.2s;
    }
  }
`

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 6px;

  background-color: ${(props) => props.theme['base-button']};

  p {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  border-radius: 6px;
`

export const AddCounter = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  color: ${(props) => props.theme.purple};

  :hover {
    color: ${(props) => props.theme['purple-dark']};
    transition: 0.2s;
  }
`

export const SubtractCounter = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  color: ${(props) => props.theme.purple};

  :hover {
    color: ${(props) => props.theme['purple-dark']};
    transition: 0.2s;
  }
`
