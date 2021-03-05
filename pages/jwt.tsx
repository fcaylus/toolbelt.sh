import Page from '../src/components/Page';

export default function Jwt() {
  return (
    <Page
      name="JWT Validation"
      iframe={{
        src: 'https://jwt.io/#debugger-io',
        author: 'jwt.io',
        authorUrl: 'https://jwt.io/',
      }}
    />
  );
}
