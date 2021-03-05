import Page from '../src/components/Page';

export default function KeyCode() {
  return (
    <Page
      name="JavaScript key event codes"
      iframe={{
        src: 'https://keycode.info/',
        author: 'Wes Bos',
        authorUrl: 'https://github.com/wesbos',
        github: 'https://github.com/wesbos/keycodes',
      }}
    />
  );
}
