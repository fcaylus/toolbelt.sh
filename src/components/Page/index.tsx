import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import PageHeader from './components/PageHeader';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    noIframe: {
      position: 'relative',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      flexGrow: 1,
      flex: 1,
      overflow: 'auto',
    },
    iframeWrapper: {
      flexGrow: 1,
      flex: 1,
    },
    iframe: {
      width: '100%',
      height: '100%',
    },
  })
);

export default function Page(props: Page.Props) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Toolbar />
      {!props.homepage && <PageHeader page={props} />}
      {props.iframe && (
        <div className={classes.iframeWrapper}>
          <iframe className={classes.iframe} src={props.iframe.src} frameBorder={0} height="100%" width="100%" />
        </div>
      )}
      {!props.iframe && <div className={classes.noIframe}>{props.children}</div>}
    </main>
  );
}

export namespace Page {
  export interface Props extends React.PropsWithChildren<any> {
    name: string;
    homepage?: boolean;
    iframe?: {
      src: string;
      author: string;
      authorUrl: string;
      github?: string;
    };
  }
}
