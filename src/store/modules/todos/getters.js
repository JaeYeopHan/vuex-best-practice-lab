import { convertToMapGettersTarget } from "../../utils";

const getters = {
  doneItems: state => state.items.filter(todo => todo.isDone),
  activeItems: state => state.items.filter(todo => !todo.isDone)
};

const todosMappedGetters = convertToMapGettersTarget(getters);

export { todosMappedGetters };
export default getters;
