export const dummyAction = {
  type: 'dummy',
  text: 'Welcome to Redux',
};

export var dummyCreator = text => {
  return {
    type: 'dummy',
    text,
  };
};
