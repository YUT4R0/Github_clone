import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-calendar-heatmap/dist/styles.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return(
    <BrowserRouter>

      <Header />
      
      <Routes>
        <Route
          path="/"
          element={<Profile />}
        />
        <Route
          path="/:username"
          element={<Profile />}
        />
        <Route
          path="/:username/:reponame"
          element={
          <Repo
            username={'Mano brown'}
            forks={Math.round(Math.random() * 10)}
            reponame={'pseudo ciencia'}
            stars={Math.round(Math.random() * 10)}
            view={
              Math.round(Math.random() * 10) % 2 === 0
              ? 'Private'
              : 'Public'
            }
            description='eis que a 1/10 te pede em namoro mas ai voce tem que inventar uma desculpa pra invadir o Iraque prq tipo assim tlgd o pt vai destruir a lnossa liberdade de expressão mano a gente vive na ditadura da lacração bua bua vou chorar'
            language={
              Math.round(Math.random() * 10) % 2 === 0
              ? 'TypeScript'
              : 'JavaScript'
            }
          />
          }
        />
      </Routes>

      <Footer />

      <GlobalStyles />

    </BrowserRouter>
  )
}

export default App;
