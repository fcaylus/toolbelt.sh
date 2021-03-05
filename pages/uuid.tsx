import Page from '../src/components/Page';

export default function Uuid() {
  return (
    <Page
      name="UUID generator"
      iframe={{
        src: 'https://uuidonline.com/?version=4',
        author: 'UUID online',
        authorUrl: 'https://uuidonline.com/',
      }}
    />
  );
}
