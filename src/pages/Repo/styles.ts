import styled, { css } from 'styled-components';
import { GitRepository } from '@styled-icons/remix-fill/GitRepository'
import { Star } from '@styled-icons/boxicons-regular/Star'
import { GitRepoForked } from '@styled-icons/boxicons-regular/GitRepoForked'
import { Wolframlanguage } from '@styled-icons/simple-icons/Wolframlanguage'

const IconCss = css`
    height: 1rem;
    width: 1rem;
    fill: var(--icon);
    flex-shrink: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    padding: 1rem;

    p {
       font-size: 1rem; 
    }

    border-bottom: 1px solid var(--border);

`;

export const BreadCrumb = styled.div`
    display: flex;
    align-items: center;

    flex-wrap: nowrap;
    white-space: nowrap;

    font-size: 1.125rem;

    a {
        color: var(--link);
        text-decoration: none;

        &:hover,
        &:focus {
            text-decoration: underline;
        }
        
        &.username {
            margin-left: .5rem;
        }
        &.reponame {
            font-weight: 500;
        }
    }
    
    span {
        padding: 0 .375rem;
    }
`

export const RepoIcon = styled(GitRepository)`
    ${IconCss}

    margin-top: .25rem;
    margin-right: .25rem;
`

export const Stats = styled.ul`
    display: flex;
    align-items: center;

    gap: 1.25rem;

    li {
        display: flex;
        align-items: center;
        gap: .3125rem;

        cursor: pointer;
        
        * {
            color: var(--gray);
        }

        &:hover,
        &:focus {
            * {
                fill: var(--link);
                color: var(--link);
            }
        }
    }
`

export const StarIcon = styled(Star)`
    ${IconCss}
`

export const ForkIcon = styled(GitRepoForked)`
    ${IconCss}
`

export const LinkButton = styled.a`
    display: flex;
    align-items: center;

    gap: .75rem;

    margin-top: .5rem;

    background: var(--gray-dark);

    width: max-content;
    padding: .75rem 1.125rem;
    border-radius: 20px;

    text-decoration: none;

    * {
        color: var(--primary);
        fill: var(--primary);
    }

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    transition: all .2s ease-in-out;

    &:hover,
    &:focus {
        filter: invert(1);
    }
`

export const GithubIcon = styled(Wolframlanguage)`
    ${IconCss}
`

