import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { NotFound, GlobalStyle, lightTheme, Loading, SoundBar } from 'components';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { lazy } from 'react/cjs/react.production.min';

const MainPage = lazy(() => import('components/features/MainPage'));
const AboutPage = lazy(() => import('components/features/AboutPage'));
const BlogPage = lazy(() => import('components/features/BlogPage'));
const WorkPage = lazy(() => import('components/features/WorkPage'));
const MySkillsPage = lazy(() => import('components/features/MySkillsPage'));

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <SoundBar />
      <Suspense fallback={<Loading />}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/work" component={WorkPage} />
            <Route path="/mySkills" component={MySkillsPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
