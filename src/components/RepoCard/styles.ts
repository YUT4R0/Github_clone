import styled, { css } from 'styled-components';
import { GitRepository } from '@styled-icons/remix-fill/GitRepository'
import { Star } from '@styled-icons/boxicons-regular/Star'
import { GitRepoForked } from '@styled-icons/boxicons-regular/GitRepoForked'

const IconCss = css`
    height: 1rem;
    width: 1rem;
    fill: var(--icon);
    flex-shrink: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    gap: 1rem;

    border-radius: .5rem;
    border: 1px solid var(--border);
`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;

    gap: .5rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div:first-child {
            display: flex;
            align-items: center;
            gap: .5rem;

            a {
                text-decoration: none;
                font-size: .875rem;
                font-weight: 600;
                margin-top: -.4rem;
                color: var(--link);

                &:focus,
                &:hover {
                    text-decoration: underline;
                }
            }
        }

        div:last-child {
            padding: .125rem .5rem;
            display: flex;
            align-items: center;
            background: var(--primary);
            border: 1px solid var(--gray);
            border-radius: 25px;
            span {
                font-size: .875rem;
                color: var(--gray);
            }
        }
    }

    p {
        color: var(--gray);
        letter-spacing: .05rem;
        font-size: .75rem;
    }
`

export const RepoIcon = styled(GitRepository)`
    ${IconCss}
`

export const BottomSide = styled.ul`
    display: flex;
    align-items: center;
    
    gap: 1rem;

    li {
        display: flex;
        align-items: center;
        gap: .25rem;

        span {
            font-size: .75rem;
            color: var(--gray);
        }
    }

    li:not(:first-child) {
        cursor: pointer;

        &:hover {
            * {
                color: var(--link);
                fill: var(--link);
            }
        }
    }

    .language {
        height: .75rem;
        width: .75rem;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .other {
        background: var(--other-language);
    }
    .javascript {
        background: var(--javascript);
    }
    .typescript {
        background: var(--typescript);
    }
`

export const StarIcon = styled(Star)`
    ${IconCss}
`

export const ForkIcon = styled(GitRepoForked)`
    ${IconCss}
`

