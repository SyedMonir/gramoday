import React from 'react';
import { useQuery } from 'react-query';

const Home = () => {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery('repoData', () =>
    fetch(
      'https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco'
    ).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) {
    console.log('An error has occurred: ' + error.message);
  }

  console.log(user);
  return (
    <section className="w-auto sm:w-1/2 mx-auto px-4">
      <div className="flex gap-6">
        <div>profile</div>
        <div>
          <h1>{user?.name}</h1>
          <h5>{user?.loclevel3Name + ', ' + user?.loclevel2Name}</h5>
          <h6>Speak, {user?.language === 'en' ? 'English' : user?.language}</h6>

          <div>
            <button>Connect</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
