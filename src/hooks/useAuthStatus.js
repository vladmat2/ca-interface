// Alternate version of Passage backend middleware (not in use)

import Passage from '@passageidentity/passage-node';
import { useState, useEffect } from 'react';

const passage = new Passage({
    appID: process.env.REACT_APP_PASSAGE_APP_ID,
    apiKey: process.env.REACT_APP_PASSAGE_API_KEY,
  });


function useAuthStatus () {
  
  const [result, setResult] = useState({
    isLoading: true,
    isAuthorized: false,
    username: "",
  });

  useEffect( () => {
    
    const getAuthenticatedUser = async (req, res) {
      try {
        const userID = await passage.authenticateRequest(req)
        if (userID) {
          setResult({ isLoading: false, isAuthorized: true});
          const { email } = await passage.user.get(userID);
          const identifier = email;
        } else {
          setResult({ isLoading: false, isAuthorized: false, username: ""});
        }
      } catch (error) {
          setResult({ isLoading: false, isAuthorized: false, username: ""});
      }
    };

    getAuthenticatedUser();
    return result;

  }, []);

}
