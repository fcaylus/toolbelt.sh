import Page from '../src/components/Page';

export default function Crontab() {
  return (
    <Page
      name="Crontab Help"
      iframe={{
        src: 'https://crontab.guru/',
        author: 'Cronitor',
        authorUrl: 'https://crontab.guru/',
      }}
    />
  );
}
