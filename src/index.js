import { render } from 'pele';

export default function(options = {
  langs: ['pele']
}) {
  return {
    renderer: {
      code({ text, lang }) {
        if (!options.langs.includes(lang)) return false;
        let output;
        try {
          output = render(text).svg;
        } catch (err) {
          output = `<code>Line ${err.line}, column ${err.column}\n\n${err.snippet}</code>`;
        }
        return output;
      }
    }
  };
}
