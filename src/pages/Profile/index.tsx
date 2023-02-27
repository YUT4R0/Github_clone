import React from "react";
import { Container, Main, ProfileInfo, ProfileContent, } from "./styles";

import ProfileData from "../../data"

const Profile:React.FC = () => {
  return (
    <Container>
        <Main>
          <ProfileInfo>
            <ProfileData
              nickname={"Pedro"}
              name={"Pedro_yutaro"}
              avatar={"https://avatars.githubusercontent.com/u/91034495?v=4"}
              followers={1212}
              following={12}
              company={"cirmes"}
              location={"bostil"}
              email={"pedro"}
              blog={"sdsd"}
              status={"dssd"}
              time={new Date().toUTCString()}
            />
          </ProfileInfo>

          <ProfileContent>

          </ProfileContent>
        </Main>
    </Container>
  );
}

export default Profile
