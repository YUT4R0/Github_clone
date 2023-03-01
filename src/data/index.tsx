import React from 'react';

import {
    Container,
    UserView,
    Avatar,
    FollowInfo,
    PeopleIcon,
    UserBio,
    CompanyIcon,
    LocationIcon,
    EmailIcon,
    BlogIcon,
    TimeIcon,
} from './styles' 

interface Props {
    nickname: string,
    name: string,
    avatar: string,
    followers: number,
    following: number,
    company ? : string,
    location ? : string,
    email ? : string,
    blog ? : string,
    status ? : string,
    time ? : string
}

const data: React.FC<Props> = ({
    nickname,
    name,
    avatar,
    followers,
    following,
    company,
    location,
    email,
    blog,
    status,
    time
}) => {
  return (
    <Container>
        <UserView>
            <Avatar src={avatar} alt={status} />

            <div>
                <h1>{nickname}</h1>
                <h2>{name}</h2>
            </div>
        </UserView>

        <FollowInfo>
            <li>
                <PeopleIcon />
                <b>{followers}</b>
                <span>Followers</span>
            </li>

            <span className='point'>.</span>

            <li>
                <b>{following}</b>
                <span>Following</span>
            </li>
        </FollowInfo>        

        <UserBio>
            {company && (
                <li>
                    <CompanyIcon />
                    <span>{company}</span>
                </li>
            )} 
            {location && (
                <li>
                    <LocationIcon />
                    <span>{location}</span>
                </li>
            )} 
            {email && (
                <li>
                    <EmailIcon />
                    <a href={email} rel="noreferrer" target="_blank">
                        {email}
                    </a>
                </li>
            )} 
            {blog && (
                <li>
                    <BlogIcon />
                    <span>{blog}</span>
                </li>
            )} 
            {time && (
                <li>
                    <TimeIcon />
                    <span>{time}</span>
                </li>
            )} 
        </UserBio>

    </Container>
  );
}

export default data;