import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { BsFillCircleFill } from 'react-icons/bs';

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <li className={css.friend_item} key={id}>
      <span>
        <BsFillCircleFill
          className={isOnline ? css.online : css.ofline}
        ></BsFillCircleFill>
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.proTotype = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ),
};
