import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 92px 0px;
  justify-content: space-between;
  align-items: center;
  gap: 56px;

  /* background-image: url('../src/assets/find-your-coffee-background.svg');
  background-size: cover; */
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;

  justify-content: space-between;
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 192px;
`

export const Title = styled.p`
  color: ${(props) => props.theme['base-title']};

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
`
export const Subtitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`

export const Perks = styled.div`
  height: 84px;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`
export const Perk = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: ${(props) => props.theme['base-text']};
`

export const PerkIcon = styled.div`
  border-radius: 9999px;
  padding: 8px;
  display: flex;
  align-items: center;
`

export const ShoppingPerkIcon: any = styled(PerkIcon)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const DeliveryPerkIcon = styled(PerkIcon)`
  background-color: ${(props) => props.theme.yellow};
`

export const PackagePerkIcon = styled(PerkIcon)`
  background-color: ${(props) => props.theme['base-text']};
`

export const CoffeePerkIcon = styled(PerkIcon)`
  background-color: ${(props) => props.theme.purple};
`
