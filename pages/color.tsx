import Page from '../src/components/Page';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { contrastTextColor, randInt, rgbToHex } from '../src/utils';
import { colorsData } from '../src/data/colors';
import { Snackbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
    },
    color: {
      width: '100%',
      height: '25%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
  })
);

export default function Color() {
  const classes = useStyles();
  const [colors, setColors] = useState<number[][]>([]);
  const [copiedSnackbarOpen, setCopiedSnackbarOpen] = useState(false);
  const [copiedSnackbarName, setCopiedSnackbarName] = useState('');

  const generateColors = () => {
    const idx = randInt(0, colorsData.length);

    setColors(colorsData[idx]);
  };

  useEffect(() => {
    generateColors();
  }, []);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.code === 'Space') {
      generateColors();
    }
  };

  return (
    <Page name="Color generator">
      <div className={classes.root} onKeyPress={onKeyPress} tabIndex={-1}>
        {colors.map((color, idx) => {
          const hex = rgbToHex(color);
          return (
            <div
              key={idx}
              className={classes.color}
              style={{
                backgroundColor: hex,
              }}
              onClick={() => {
                navigator.clipboard.writeText(hex).then(() => {
                  setCopiedSnackbarName(hex);
                  setCopiedSnackbarOpen(true);
                });
              }}
            >
              <Typography
                variant="h4"
                component="span"
                style={{
                  color: contrastTextColor(hex),
                }}
              >
                {hex}
              </Typography>
            </div>
          );
        })}
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={copiedSnackbarOpen}
        onClose={() => setCopiedSnackbarOpen(false)}
        autoHideDuration={2000}
        message={`${copiedSnackbarName} copied to your clipboard :-)`}
        key={`uuid-snackbar=${copiedSnackbarName}`}
      />
    </Page>
  );
}
