import styled from 'styled-components';
import { Wolframlanguage } from '@styled-icons/simple-icons/Wolframlanguage'
import { Search } from '@styled-icons/bootstrap/Search'

export const Container = styled.div`

  display: flex;
  align-items: center;

  padding: .75rem 1rem;

  gap: 2rem;

  background: var(--header);

  margin: 0 auto;

`;

export const Logo = styled(Wolframlanguage)`
  height: 2.25rem;
  width: 2.25rem;

  flex-shrink: 0;

  cursor: pointer;

  fill: var(--logo);

  transition: all .1s ease-in-out;

  &:hover {
    filter: brightness(.65);
  }

`

export const Searchform = styled.form`
  width: 100%;

  display: flex;
  align-items: center;

  input {
    background: var(--search);
    padding: .5rem .75rem .5rem 2.125rem;
    border-radius: 6px;
    width: 100%;

    cursor: pointer;

    font-size: .75rem;

    transition: width .2s cubic-bezier(.5, 0, 0, 1);


    @media (min-width: 32rem) {

      font-size: .875rem;

      &:focus {
        width: calc(100% / 4);
        outline: 2px solid var(--link);
        background: var(--black);
      }
      &:hover {
        background: var(--black);
      }
    }
  }

`

export const SearchIcon = styled(Search)`
  height: 1rem;

  z-index: 2;

  width: 1rem;
  fill: var(--primary);

  margin-right: -1.625rem;
`
