import React from "react";
import { Link } from "react-router-dom";
import { Container, TopSide, RepoIcon, BottomSide, StarIcon, ForkIcon, } from "./styles";

export interface Props {
  username: string
  reponame: string
  description ? : string
  language ? : string
  stars: number 
  forks: number
  view: string
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars, 
  forks,
  view
}) => {

  const languageClass = language ? language.toLowerCase() : 'other'

  return (
    <Container>
      <TopSide>
        <header>
          <div>
            <RepoIcon />
            <Link to={`/${username}/${reponame}`}>
              {reponame}
            </Link>
          </div>
          <div>
            <span>{view}</span>
          </div>
        </header>
        
        <p>{description}</p>
      </TopSide>

      <BottomSide>
        <li>
          <div className={`language ${languageClass}`} />
          <span>{language}</span>
        </li>
        <li>
          <StarIcon />
          <span>{stars}</span>
        </li>
        <li>
          <ForkIcon />
          <span>{forks}</span>
        </li>
      </BottomSide>
    </Container>
  );
}

export default RepoCard;

