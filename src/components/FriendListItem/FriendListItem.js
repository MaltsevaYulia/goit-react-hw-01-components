import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { BsFillCircleFill } from 'react-icons/bs';

export const FriendListItem = ( { avatar, name, isOnline } ) => {
  return (
    <li className={css.friend_item} >
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
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
};
