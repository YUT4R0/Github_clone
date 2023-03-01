import styled from 'styled-components';
import { GitRepository } from '@styled-icons/remix-fill/GitRepository'

export const Container = styled.div`
  --horizontal-padding: 1rem;
  --vertical-padding: 1.5rem;

  padding:  var(--vertical-padding) var(--horizontal-padding);
  overflow: hidden;
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

export const RepoIcon = styled(GitRepository)`
    height: 1rem;
    width: 1rem;
`
export const Tab = styled.div`
    display: flex;
    flex-direction: column;

    background: var(--primary);

    .underline {
    }

    .content {
        display: flex;
        align-items: center;
        gap: .25rem;
        width: min-content;
        
        padding: .875rem 1rem; 
        cursor: pointer;

        border-bottom: 2px solid var(--orange);

        &:hover,
        &:focus {
            background: var(--border);

            .number {
                background: var(--primary);
            }
        }

        .label {
            font-size: .875rem;
            padding: 0 .5rem;
            font-weight: 600;
        }

        .number {
            border-radius: 25px;
            font-size: .75rem;
            flex-shrink: 0;
            padding: .125rem .5rem;
            background: var(--ticker);
        }
    }

    .underline {
        display: flex;
        width: 200vw;
        margin-left: -50vw;
        border-bottom: 1px solid var(--border);
    }

    &.mobile {
        margin-top: var(--vertical-padding);

        .content {
            margin: 0 auto;
        }

        @media (min-width: 48rem) {
            display: none;       
        }
    }

    &.desktop {
        display: none;

        @media (min-width: 48rem) {
            display: unset;

            .wrapper {
                display: flex;
                margin: 0 auto;
                max-width: 80rem;
            }

            .offset {
                width: 25%;
                margin-right: var(--horizontal-padding);
            }
        }
    }
`