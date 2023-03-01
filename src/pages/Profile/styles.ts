import styled from 'styled-components';

export const Container = styled.div`
  --horizontal-padding: 1rem;
  --vertical-padding: 1.5rem;

  padding:  var(--vertical-padding) var(--horizontal-padding);
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    max-width: 80rem;

    @media (min-width: 48rem) {
        flex-direction: row;   
    }
`

export const ProfileInfo = styled.div`
    @media(min-width: 48rem) {
        padding: 0 var(--horizontal-padding);
        width: 25%;
    }
`

export const ProfileContent = styled.div`
    @media(min-width: 48rem) {
        padding: 0 var(--horizontal-padding);
        width: 75%;
    }
`

export const Repository = styled.div`
    margin: var(--vertical-padding) auto;

    display: flex;
    flex-direction: column;

    gap: .5rem;

    .repo-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-size: 1rem;
            font-weight: normal;
        }

        span {
            font-size: .75rem;
            cursor: pointer;
            transition: all .1s ease-in-out;

            &:hover {
                color: var(--link);
            }
        }
    }

    .repo-body {
        display: grid;
        grid-gap: 1rem;

        grid-template-columns: 1fr;

        @media(min-width: 48rem) {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: minmax(min-content, ,max-content);
        }   
    }
`

export const CalendarHeading = styled.span`
    font-size: 1rem;
    margin: 2.25rem 0 .6rem;
    display: inline-flex;
`