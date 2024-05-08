import { ChangeEvent, useState } from 'react';
import './App.css';
import { useSquid } from '@squidcloud/react';
import { TextField, CircularProgress } from '@mui/material';

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [complete, setComplete] = useState(true);

  const squid = useSquid();

  async function generateImage() {
    setComplete(false);
    const newImageUrl = await squid.executeFunction('generateImage', prompt);
    setComplete(true);
    setImageUrl(newImageUrl);
    setPrompt('');
  }

  function promptChanged(e: ChangeEvent) {
    setPrompt((e.target as HTMLInputElement).value);
  }

  function checkKey(ele: React.KeyboardEvent<HTMLDivElement>) {
    if (ele.key === 'Enter') {
      generateImage();
    }
  }

  return (
    <>
      <div>{imageUrl.length > 0 && <img src={imageUrl}></img>}</div>
      <div className='question'>
        <TextField
          fullWidth
          id='outlined-basic'
          label='Enter your image prompt'
          variant='outlined'
          onChange={promptChanged}
          onKeyDown={(event) => checkKey(event)}
          value={prompt}
        />
        {!complete && <CircularProgress />}
        <button onClick={generateImage} disabled={!complete}>
          Generate Image
        </button>
      </div>
    </>
  );
}

export default App;
