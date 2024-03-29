import store from '../store/store';
import { likeItem, dislikeItem, removeLike } from '../store/LikeSlice';
 
export const likeItemById = (id) => {
  store.dispatch(likeItem({ id }));
  console.log("called",id)
}; 
export const dislikeItemById = (id) => {
  store.dispatch(dislikeItem({ id }));
}; 
export const removeLikeById = (id) => {
  store.dispatch(removeLike({ id }));
};
