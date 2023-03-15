import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({friends}) => {
return (<ul className="friend-list">
{
   friends.map(friend=>{
    return (
        <FriendListItem key={friend.id} friend={friend}/>
    )
   }) 
}
</ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };