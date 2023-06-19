// 'logger' middleware is defined and logs the state before and after the action is dispatched.
// modified middleware function to handle thunks.
export const logger = store => next => action => {
    if (typeof action === 'function') {
        action(store.dispatch, store.getState)
    } else { 
        console.log('dispatch', store.getState())
        next(action)
        console.log('after dispatch', store.getState())
    }
}
// previous middleware. commmented out, was checking debugging from the activity.
// export const logger = (store) => (next) => (action) => {
//     console.log('dispatch', store.getState());
//     next(action);
//     console.log('after dispatch', store.getState());
//   };