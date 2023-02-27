import styled, { css } from 'styled-components';
import { PeopleOutline } from '@styled-icons/evaicons-outline/PeopleOutline'
import { Business } from '@styled-icons/ionicons-sharp/Business'
import { Location } from '@styled-icons/fluentui-system-regular/Location'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { LinkAlt } from '@styled-icons/boxicons-regular/LinkAlt'
import { Clock } from '@styled-icons/fa-regular/Clock'

const IconCss = css`
    height: 1rem;
    width: 1rem;
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

    gap: 1.5rem;

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

`

export const Avatar = styled.img`
    border-radius: 50%;
    width: calc(100vw / 5);
    cursor: pointer;
    border: .25rem solid var(--gray);
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
    }
`

export const PeopleIcon = styled(PeopleOutline)`
    ${IconCss}
`

export const UserBio = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .625rem;

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
