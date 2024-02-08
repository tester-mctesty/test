import tester from '@tester-mctesty/tester';

/**
 * Create a test
 *
 * @param type
 */
export const create = (type: tester.TestType) => {
  const t = tester();

  return tester
    .create(type)
    .run();
};

/**
 * Factory for creating test creation funcs.
 *
 * @param type
 */
export const createFactory = (type: tester.TestType) => {
  return () => create(type);
};
