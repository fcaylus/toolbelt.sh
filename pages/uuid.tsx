import Page from '../src/components/Page';
import { Container, IconButton, Snackbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { NIL, v1, v4 } from 'uuid';
import { Refresh } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    refresh: {
      marginLeft: theme.spacing(2),
    },
    title: {
      fontWeight: 'lighter',
    },
    uuid: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      whiteSpace: 'break-spaces',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      width: 'fit-content',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
);

export default function Uuid() {
  const classes = useStyles();
  const [uuidV1, setUuidV1] = useState(v1());
  const [uuidV4, setUuidV4] = useState(v4());
  const [copiedSnackbarOpen, setCopiedSnackbarOpen] = useState(false);
  const [copiedSnackbarName, setCopiedSnackbarName] = useState('');

  const renderUuidTitle = (name: string, refreshFunc?: any) => {
    return (
      <div className={classes.titleContainer}>
        <Typography variant="h4" className={classes.title}>
          {name}
        </Typography>
        {refreshFunc && (
          <IconButton className={classes.refresh} onClick={refreshFunc}>
            <Refresh fontSize="large" />
          </IconButton>
        )}
      </div>
    );
  };

  const renderUuid = (name: string, uuid: string) => {
    return (
      <Typography
        variant="body1"
        component="pre"
        className={classes.uuid}
        onClick={() => {
          navigator.clipboard.writeText(uuid).then(() => {
            setCopiedSnackbarName(name);
            setCopiedSnackbarOpen(true);
          });
        }}
      >
        {uuid}
      </Typography>
    );
  };

  return (
    <Page name="UUID generator">
      <Container maxWidth="md">
        {renderUuidTitle('UUID v4', () => setUuidV4(v4()))}
        {renderUuid('UUID v4', uuidV4)}

        {renderUuidTitle('UUID v1', () => setUuidV1(v1()))}
        {renderUuid('UUID v1', uuidV1)}

        {renderUuidTitle('UUID nil')}
        {renderUuid('UUID nil', NIL)}
      </Container>

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
