import React, { useRef, useEffect } from 'react';
import PhotoGallery from '../photos/gallery';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const CatPage = ({ location }) => {
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
  }, []);

  return (
    <Layout location={location}>
      <Helmet>
        <title>My Cat | Judy Zhang</title>
        <link rel="canonical" href="https://judyzhang.codes/cat" />
      </Helmet>
      <StyledMainContainer>
        <header ref={revealTitle}>
          <h1 className="big-title">Snuggles</h1>
          <p className="subtitle">Literally just my cat</p>
        </header>
        <PhotoGallery />
      </StyledMainContainer>
    </Layout>
  );
};

CatPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default CatPage;
