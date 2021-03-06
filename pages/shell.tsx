import Page from '../src/components/Page';

export default function Shell() {
  return (
    <Page
      name="Shell Help"
      iframe={{
        src: 'https://explainshell.com/',
        author: 'Idan Kamara',
        authorUrl: 'https://github.com/idank',
        github: 'https://github.com/idank/explainshell',
      }}
    />
  );
}
