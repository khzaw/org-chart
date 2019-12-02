import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from 'theme-ui';

const Avatar = ({ name }) => {
  return (
    <a
      sx={{
        top: 0,
        display: 'block',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        bg: '#fff',
        borderRadius: '100%',
        border: '1px solid #e9e9ea',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        transition: 'all .8s cubic-bezier(.19, 1,.22,1)',
      }}
    >
      <div
        sx={{ width: 46, height: 46, display: 'block', borderRadius: '100%' }}
      >
        <img
          height="100%"
          width="100%"
          src={`https://cdn.theorg.com/05f6d71c-65ba-4103-99d7-1abe2a536182_thumb.png`}
        />
      </div>
    </a>
  );
};

const Card = ({ name, title, team }) => {
  return (
    <div
      sx={{
        position: 'relative',
        width: 219,
        height: 87,
        paddingTop: 0.7,
        border: '1px solid #e9e9e9',
        borderRadius: 6,
        outline: 0,
        boxShadow: '0 1px 5px 0 rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>{name}</div>
      <div>{title}</div>
      <Avatar name={'Anna+Gong'} />
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  team: PropTypes.string,
};

export default Card;
