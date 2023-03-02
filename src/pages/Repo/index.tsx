import React from "react";
import { Container, BreadCrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon, } from "./styles";

import { Link } from 'react-router-dom'

import { Props } from '../../components/RepoCard'

type Gitpage = {link: string}

const Repo:React.FC<Props> = ({
  reponame,
  forks,
  stars,
  username,
  view,
  description,
  language
}) => {

  const githubPage: Gitpage = {link: "https://github.com/YUT4R0"}

  return (
    <Container>
        <BreadCrumb>
          <RepoIcon />
          <Link
            className={'username'}          
            to={(`/${username}`).toLowerCase()}
          >
            {
              username
              .toLowerCase()
              .replace(' ', '-')
            }
          </Link>
          <span>/</span>
          <Link
            className={'reponame'}
            to={(`/${username}/${reponame}`).toLowerCase()}
          >
            {
              reponame
              .toLowerCase()
              .replace(' ', '-')
            }
          </Link>
        </BreadCrumb>

        <p>
          {description}
        </p>

        <Stats>
          <li>
            <StarIcon />
            <b>{stars}</b>
            <span>stars</span>
          </li>
          <li>
            <ForkIcon />
            <b>{forks}</b>
            <span>forks</span>
          </li>
        </Stats>

        <LinkButton
          target="_blank"
          title="will redirect to Github page"
          href={githubPage.link}
        >
          <GithubIcon />
          <span>View on GitHub</span>
        </LinkButton>

    </Container>
  );
}

export default Repo