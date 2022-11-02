import styled from 'styled-components'

export const Container = styled.div`
  max-width: 256px;
  max-height: 310px;
  border-radius: 6px 36px;
  padding-bottom: 20px;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 120px;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  margin-top: 12px;
  margin-bottom: 16px;
`

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
`

export const Name = styled.div`
  max-width: 216px;
  margin: auto;

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};

  display: flex;
  justify-content: center;
  text-align: center;

  margin-bottom: 8px;
`

export const Description = styled.div`
  max-width: 216px;
  margin: auto;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};

  display: flex;
  justify-content: center;
  text-align: center;

  margin-bottom: 33px;
`

export const Buy = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;

  margin: auto;
`

export const Price = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme['base-text']};

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 130%;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    margin-right: 4px;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  align-items: center;
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

export const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  border: transparent;

  cursor: pointer;
`
