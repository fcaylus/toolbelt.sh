import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IconButton, Link, Toolbar, Typography } from '@material-ui/core';
import { Page } from '../../index';
import { GitHub, Launch } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginRight: 'auto',
      '& > h1': {
        paddingRight: theme.spacing(1),
      },
    },
  })
);

export default function PageHeader(props: PageHeader.Props) {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.root, props.className)} variant="dense">
      <div className={classes.titleContainer}>
        <Typography variant="h6" component="h1" noWrap>
          {props.page.name}
        </Typography>
        {props.page.iframe && (
          <Typography variant="body1">
            &nbsp;by&nbsp;
            <Link href={props.page.iframe.authorUrl} target="_blank" rel="noopener">
              {props.page.iframe.author}
            </Link>
          </Typography>
        )}
      </div>
      {props.page.iframe && (
        <React.Fragment>
          <IconButton href={props.page.iframe.src} target="_blank" rel="noopener">
            <Launch />
          </IconButton>
          {props.page.iframe.github && (
            <IconButton href={props.page.iframe.github} target="_blank" rel="noopener">
              <GitHub />
            </IconButton>
          )}
        </React.Fragment>
      )}
    </Toolbar>
  );
}

export namespace PageHeader {
  export interface Props extends React.ComponentPropsWithoutRef<any> {
    page: Page.Props;
    className?: string;
  }
}
