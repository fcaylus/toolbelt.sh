import Page from '../src/components/Page';

export default function Password() {
  return (
    <Page
      name="Password generator"
      iframe={{
        src: 'https://kamerk22.github.io/random-password-generator/',
        author: 'Kashyap Merai',
        authorUrl: 'https://github.com/kamerk22',
        github: 'https://github.com/kamerk22/random-password-generator',
      }}
    />
  );
}
