import Page from '../src/components/Page';

export default function Color() {
  return (
    <Page
      name="Color generator"
      iframe={{
        src: 'https://colorhunt.co/palettes/random',
        author: 'Color Hunt',
        authorUrl: 'https://colorhunt.co',
      }}
    />
  );
}
