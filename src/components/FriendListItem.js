import PropTypes from 'prop-types';

export const FriendListItem=({friend:{avatar, name, isOnline, id}})=>{
    return (
        <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li> 
    )
}

FriendListItem.proTotype={
    friend: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired)
}