import { Profile } from './Profile';
import user from '../user.json'
import data from '../data.json'
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <>
    <Profile user={user}/>
    <Statistics data={data}/>
    </>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
