import React from 'react';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import useSearch from '../../hooks/useSearch';
import { Autocomplete } from '@material-ui/lab';
import { InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    link: {
      color: 'unset',
      textDecoration: 'none',
    },
    searchContainer: {
      minWidth: '500px',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      width: '100%',
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  const { searchText, setSearchText, options } = useSearch();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link href="/">
          <a className={classes.link}>
            <Typography variant="h6" noWrap>
              toolbelt.sh
            </Typography>
          </a>
        </Link>
        <Autocomplete
          freeSolo
          disableClearable
          options={options}
          getOptionLabel={(option) => `${option.name} - ${option.category}`}
          onChange={(e, value, reason) => {
            if (typeof value !== 'string' && reason === 'select-option') {
              router.push(value.path);
            }
          }}
          className={classes.searchContainer}
          renderInput={(params) => (
            <div className={classes.search} ref={params.InputProps.ref}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{
                  'aria-label': 'search',
                  ...params.inputProps,
                }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          )}
        />
      </Toolbar>
    </AppBar>
  );
}
