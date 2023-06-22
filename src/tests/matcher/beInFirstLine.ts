declare global {
  namespace jest {
      interface Matchers<R> {
        beInFirstLine(expectedFirstLine: string): R;
        beInEndLine(expectedEndLine:  string) : R;
      }
  }
}

export function beInFirstLine(received: string, expectedFirstLine: string) :jest.CustomMatcherResult {
  const lines = received.split('\n');
  const firstLine = lines[0].trim();

  const pass = firstLine === expectedFirstLine;

  if (pass) {
    return {
      message: () =>
        `La première ligne est égale à ${expectedFirstLine}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `La première ligne est différente de ${expectedFirstLine}`,
      pass: false,
    };
  }
}

export function beInEndLine(received: string, expectedEndLine: string) :jest.CustomMatcherResult {
  const lines = received.split('\n');
  const endLine = lines[lines.length -1 ].trim();
  const pass = endLine === expectedEndLine;

  if (pass) {
    return {
      message: () =>
        `La dernière ligne est égale à ${expectedEndLine}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `La dernière ligne ${endLine} est différente de ${expectedEndLine}`,
      pass: false,
    };
  }
}

expect.extend({
  beInFirstLine,
  beInEndLine
});