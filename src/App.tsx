import React from 'react';
import Button from '@mui/material/Button';
import styles from './App.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme } from '@mui/material';
import { pink } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette['primary'];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}


function App() {

  const films = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
      },
    },
  });

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <div className={`${styles.appItems} App`}>
      <div className={styles.wrapItem}>
        <p>ボタン</p>
        <ThemeProvider theme={theme}>
          <Button variant="text" sx={{ m: 2 }}>Text</Button>
          <Button variant="contained" sx={{ m: 2 }} color='error'
            onClick={() => alert('クリックされました')}
          >Contained1</Button>
          <Button variant="contained" disabled sx={{ m: 2 }} size='small'>Contained2</Button>
          <Button variant="outlined" sx={{ m: 2 }} color='ochre'>アウトライン１</Button>
          <Button variant="outlined" disabled sx={{ m: 2 }}>アウトライン２</Button>
        </ThemeProvider>
      </div>
      <div className={styles.wrapItem}>
        <p>セレクトボックス</p>
        <Autocomplete
          // disablePortal
          options={films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <TextField label="Text" />
      </div>
      <div className={styles.wrapItem}>
        <p>チェックボックス</p>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} color='success' />
        <FormControlLabel control={<Checkbox />} label="必須" sx={{
          '& .MuiSvgIcon-root': { fontSize: 28 },
        }} />
        <Checkbox {...label} sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} />
        <Checkbox {...label} icon={<BookmarkBorderIcon sx={{ color: pink[500] }} />} checkedIcon={<BookmarkIcon sx={{ color: pink[500] }} />} />
      </div>
    </div>
  );
}

export default App;