import Page from '../src/components/Page';

export default function SvgUrlEncoder() {
  return (
    <Page
      name="SVG URL-encoder"
      iframe={{
        src: 'https://yoksel.github.io/url-encoder/',
        author: 'Yoksel',
        authorUrl: 'https://github.com/yoksel',
        github: 'https://github.com/yoksel/url-encoder/',
      }}
    />
  );
}
