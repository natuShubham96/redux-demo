export function reducer (initialState = {}, action) {
  if (action.type === 'dummy') {
    const dummy = action.text;
    return {...initialState, dummy};
  }
}
