import Page from '../src/components/Page';
import { Container, IconButton, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Refresh } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { loremIpsumData, loremIpsumStart } from '../src/data/lorem-ipsum';
import { randInt } from '../src/utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    text: {
      whiteSpace: 'break-spaces',
    },
    refreshContainer: {
      display: 'flex',
    },
    refresh: {
      marginBottom: theme.spacing(3),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
);

export default function LoremIpsum() {
  const classes = useStyles();

  const [data, setData] = useState('');

  const generateLoremIpsum = () => {
    let str = loremIpsumStart + ' ';

    for (let i = 1; i < 100; i++) {
      str += loremIpsumData[randInt(0, loremIpsumData.length)];

      if (i % 8 === 0) {
        str += '\n\n';
      } else {
        str += ' ';
      }
    }

    setData(str);
  };

  useEffect(() => {
    generateLoremIpsum();
  }, []);

  return (
    <Page name="Lorem Ipsum Generator">
      <Container maxWidth="md">
        <div className={classes.refreshContainer}>
          <IconButton className={classes.refresh} onClick={generateLoremIpsum}>
            <Refresh fontSize="large" />
          </IconButton>
        </div>
        <Typography variant="body1" component="pre" className={classes.text}>
          {data}
        </Typography>
      </Container>
    </Page>
  );
}
