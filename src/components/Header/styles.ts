import styled from 'styled-components';
import { Wolframlanguage } from '@styled-icons/simple-icons/Wolframlanguage'

export const Container = styled.div`
  max-width: 80rem;  
  display: flex;
  align-items: center;

  gap: 1rem;

  background: var(--header);
  padding: .75rem 1rem;

`;

export const Logo = styled(Wolframlanguage)`
  height: 2rem;
  width: 2rem;

  flex-shrink: 0;

  cursor: pointer;

  fill: var(--logo);

`

export const Searchform = styled.form`
  width: 100%;

  input {
    background: var(--search);
    outline: 0;
    padding: .5rem .75rem;
    border-radius: 6px;
    width: 100%;
    
    transition: width .2s cubic-bezier(.5, 0, 0, 1);

    @media (min-width: 32rem) {
      &:focus {
        width: calc(100% / 5);
      }
    }
  }
`

