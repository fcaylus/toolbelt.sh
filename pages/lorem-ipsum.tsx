import Page from '../src/components/Page';

export default function LoremIpsum() {
  return (
    <Page
      name="Lorem Ipsum Generator"
      iframe={{
        src: 'https://www.lipsum.com/feed/html',
        author: 'Lipsum',
        authorUrl: 'https://www.lipsum.com/',
      }}
    />
  );
}
