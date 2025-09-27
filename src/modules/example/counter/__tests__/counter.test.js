import Counter from 'example/counter';
import { createElement } from 'lwc';

describe('example/counter', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  test('Lightning class should be defined', () => {
    // Assert
    expect(Counter).toBeDefined();
  });

  test('Init (default config)', () => {
    // Arrange
    const sut = createElement('example-counter', {
      is: Counter,
    });

    // Act
    document.body.appendChild(sut);

    // Assert
    expect(sut.config.counter).toBe(0);
  });

  test('Init (counter to 5)', () => {
    // Arrange
    const sut = createElement('example-counter', {
      is: Counter,
    });
    sut.config = { counter: 5 };

    // Act
    document.body.appendChild(sut);

    // Assert
    expect(sut.config.counter).toBe(5);
  });
});
