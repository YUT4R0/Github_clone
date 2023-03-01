import React from "react";
import { Container, Main, ProfileInfo, ProfileContent, Repository, CalendarHeading, RepoIcon, Tab, } from "./styles";
import RepoCard from "../../components/RepoCard";

import ProfileData from "../../data"
import RandomCalendar from "../../components/RandomCalendar";

const Profile:React.FC = () => {

  const ArrayOfRepo = [1, 2, 3, 4, 5, 6]

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{ArrayOfRepo.length}</span>
    </div>
  )

  return (
    <Container>

        <Tab className="desktop"> 
          <div className="wrapper">
            <span className="offset" />
            <TabContent />
          </div>
          <span className="underline" />
        </Tab>

        <Main>
          <ProfileInfo>
            <ProfileData
              nickname={"Pedro Yutaro"}
              name={"Pedro_yutaro"}
              avatar={"https://avatars.githubusercontent.com/u/91034495?v=4"}
              followers={Math.round(Math.random() * 100)}
              following={Math.round(Math.random() * 100)}
              company={"cirmes"}
              location={'Brasil'}
              email={"pedroyutaronakamura@gmail.com"}
              blog={"sdsd"}
              status={"como que ve essa porra"}
              time={
                `${new Date().toLocaleTimeString()} (UTC - ${new Date().toLocaleTimeString().replace('PM','').trim()})`
              }
            />
          </ProfileInfo>

          <ProfileContent>

            <Tab className="mobile">
              <TabContent />
              <span className="underline" />
            </Tab>

            <Repository>  
              <div className="repo-heading">
                <h2>Main Porjects</h2>
                <span>Customize your pins</span>
              </div>

              <div className="repo-body">
                {
                  ArrayOfRepo
                  .map(rep => (
                    <RepoCard
                      key={rep}
                      username={'Mano_Brown'}
                      reponame={'pseudo-ciencia'}
                      description={'eis que a 1/10 te pede em namoro mas ai voce tem que inventar uma desculpa pra invadir o Iraque prq tipo assim tlgd o pt vai destruir a lnossa liberdade de expressão mano a gente vive na ditadura da lacração bua bua vou chorar'}
                      language={rep % 3 === 0 ? 'TypeScript' : 'JavaScript'}
                      stars={Math.round(Math.random() * 10)}
                      forks={Math.round(Math.random() * 10)}
                      view={rep % 2 === 0 ? 'Private' : 'Public'}
                    />
                  ))
                }
              </div>
            </Repository>

            <CalendarHeading>
              {28} contributions in {2023}
            </CalendarHeading>

            <RandomCalendar />

          </ProfileContent>
        </Main>
    </Container>
  );
}

export default Profile
