export const DONE_ITEMS = "DONE_ITEMS";
export const ACTIVE_ITEMS = "ACTIVE_ITEMS";

export default {
  [DONE_ITEMS]: state => state.items.filter(todo => todo.isDone),
  [ACTIVE_ITEMS]: state => state.items.filter(todo => !todo.isDone)
};
