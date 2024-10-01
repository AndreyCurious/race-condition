import React, { useEffect, useState } from 'react';
import './App.css';
import getFriends, { IFriend } from './api';

function App() {
  const [friends, setFriends] = useState<IFriend[] | null>(null);
  const [active, setActive] = useState<'getAllFriends' | 'getOnlineFriends'>(
    'getAllFriends'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let ignore = false;
    if (active) {
      setIsLoading(true);
      getFriends[active]().then((res) => {
        if (!ignore) {
          setFriends(res);
        }
        setIsLoading(false);
      });
    }
    return () => {
      ignore = true;
    };
  }, [active]);

  return (
    <div className="App">
      <div className="Friends_btn">
        <button
          onClick={() => setActive('getAllFriends')}
          className={active === 'getAllFriends' ? 'active' : ''}
        >
          Друзья
        </button>
        <button
          onClick={() => setActive('getOnlineFriends')}
          className={active === 'getOnlineFriends' ? 'active' : ''}
        >
          Друзья онлайн
        </button>
      </div>
      {friends && !isLoading ? (
        friends.map((friend) => (
          <span
            key={friend.id}
            className="Friends-friend"
          >
            {friend.name}
          </span>
        ))
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
}

export default App;
