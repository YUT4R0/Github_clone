import styled, { css } from 'styled-components';
import { PeopleOutline } from '@styled-icons/evaicons-outline/PeopleOutline'
import { Business } from '@styled-icons/ionicons-sharp/Business'
import { Location } from '@styled-icons/fluentui-system-regular/Location'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { LinkAlt } from '@styled-icons/boxicons-regular/LinkAlt'
import { Clock } from '@styled-icons/fa-regular/Clock'

const IconCss = css`
    height: 1.125rem;
    width: 1.125rem;
    fill: var(--icon);
    flex-shrink: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserView = styled.div`
    display: flex;
    align-items: center;

    gap: .75rem;

    div {
        display: flex;
        flex-direction: column;
        h1 {
            font-size: 1.625rem;
            line-heght: 1.25;
            color: var(--gray-dark);
            font-weight: 600;
        }
        h2 {
            font-size: 1.25rem;
            color: var(--username);
            font-weight: 300;
        }
    }

    @media(min-width: 48rem) {
        flex-direction: column;
        align-items: flex-start;
    }

`

export const Avatar = styled.img`
    border-radius: 50%;
    width: calc(100vw / 5);
    cursor: pointer;

    border: calc(100vw/100) solid var(--gray);

    @media(min-width: 48rem) {
        border: calc(100vw/500) solid var(--gray);
    }

    transition: all .1s ease-in-out;

    &:hover {
        filter: brightness(.7);
    }

`

export const FollowInfo = styled.ul`
    display: flex;
    align-items: center;

    gap: .375rem;
    flex-wrap: wrap;
    
    .point {
        font-size: 2rem;
        padding-bottom: 1rem;
    }

    li {
        display: flex;
        align-items: center;

        gap: .25rem;

        span {
            font-size: .925rem;
            color: var(--gray);
        }

        cursor: pointer;

        &:hover {
            * {
                color: var(--link);
                fill: var(--link);
            }
        }
    }
`

export const PeopleIcon = styled(PeopleOutline)`
    ${IconCss}
`

export const UserBio = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    li {
        display: flex;
        align-items: center;
        font-size: .875rem;
        gap: .375rem;

        span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        a {
            text-decoration: none;

            &:hover {
                color: var(--link);
                text-decoration: underline;
            }
        }
    }
`

export const CompanyIcon = styled(Business)`
    ${IconCss}
`

export const LocationIcon = styled(Location)`
    ${IconCss}
`

export const EmailIcon = styled(EmailOutline)`
    ${IconCss}
`

export const BlogIcon = styled(LinkAlt)`
    ${IconCss}
`

export const TimeIcon = styled(Clock)`
    ${IconCss}
`
