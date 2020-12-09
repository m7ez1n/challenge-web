import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/sallve.png';

const Wrapper = styled.div`
  background-color: #fff;
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .projectName {
    display: block;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 4rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
