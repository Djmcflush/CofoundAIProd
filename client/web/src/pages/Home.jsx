/**
 * src/pages/Home.jsx
 *
 * created by Lynchee on 7/28/23
 */
import { ClerkProvider, SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';

import React, { useState, useRef, useEffect } from 'react';
import { isIP } from 'is-ip';
import { useNavigate } from 'react-router-dom';
import lz from 'lz-string';

import Characters from '../components/Characters';
import Button from '@mui/material/Button';
import { getHostName } from '../utils/urlUtils';

const clerkFrontendApi = 'comic-lemur-89.clerk.accounts.dev';

const Home = ({
  isMobile,
  selectedCharacter,
  setSelectedCharacter,
  isPlaying,
  characterGroups,
  setCharacterGroups,
  setCharacterConfirmed,
  characterConfirmed,
  token,
  setToken,
  isLoggedIn,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Get characters
  useEffect(() => {
    setLoading(true);

    // Get host
    const scheme = window.location.protocol;
    const url = scheme + '//' + getHostName() + '/characters';
    let headers = {
      'Content-Type': 'application/json',
    };
    // If you're using Clerk, you don't need to manually handle tokens in your fetch requests.
    // Clerk will automatically include the necessary authorization headers.
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        setCharacterGroups(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
  }, [setCharacterGroups]);

  const handleNextClick = () => {
    setCharacterConfirmed(true);
    const compressedCharacter = lz.compressToEncodedURIComponent(
      JSON.stringify(selectedCharacter)
    );
    navigate('/settings?character=' + compressedCharacter);
  };

  const handleCreateCharacter = () => {
    navigate('/create');
  };

  return (
    <div className='home'>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <p className='header'>Choose Your CoFounder</p>

          <Characters
            isMobile={isMobile}
            characterGroups={characterGroups}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
            isPlaying={isPlaying}
            characterConfirmed={characterConfirmed}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={handleCreateCharacter}
            sx={{ marginBottom: '20px' }}
          >
            Build Your CoFounder
          </Button>

          <Button
            variant='contained'
            onClick={handleNextClick}
            fullWidth
            size='large'
            disabled={!selectedCharacter}
            sx={{
              '&.Mui-disabled': {
                backgroundColor: '#BEC5D9',
                color: '#636A84',
              },
              textTransform: 'none',
            }}
          >
            Next
          </Button>
        </>
      )}
    </div>
  );
};

export default Home;
