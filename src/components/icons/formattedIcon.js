import React from 'react';
import PropTypes from 'prop-types';
import {
  IconCodepen,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconLinkedin,
  IconLocation,
  IconLogo,
  IconEmail,
  IconResume,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Codepen':
      return <IconCodepen />;
    case 'Email':
      return <IconEmail />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Location':
      return <IconLocation />;
    case 'Logo':
      return <IconLogo />;
    case 'Resume':
      return <IconResume />;
    default:
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
