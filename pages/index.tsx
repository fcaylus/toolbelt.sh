import { Box, Typography } from '@material-ui/core';
import Page from '../src/components/Page';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingBottom: theme.spacing(4),
    },
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <Page homepage name="">
      <Box m={4}>
        <Typography variant="h4" component="h1" className={classes.title}>
          toolbelt.sh
        </Typography>
        <Typography variant="body1">The only web development tool belt you'll ever need.</Typography>
      </Box>
    </Page>
  );
}
