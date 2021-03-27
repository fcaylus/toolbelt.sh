import { Box, Typography } from '@material-ui/core';
import Page from '../src/components/Page';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { texts } from '../src/texts';

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
          {texts.website.name}
        </Typography>
        <Typography variant="body1">{texts.website.description}</Typography>
      </Box>
    </Page>
  );
}
