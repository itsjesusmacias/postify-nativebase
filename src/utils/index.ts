import { ResponsePost, PostWithLike, PostFromResponse } from "../types";

// private
export const orderPostsByReactions = (
  posts: Array<PostFromResponse> | Array<PostWithLike>
): Array<PostFromResponse> | Array<PostWithLike> =>
  posts.sort((postA, postB) => postB.reactions - postA.reactions);

// public
export const deserializerPosts = (data: ResponsePost): Array<PostWithLike> => {
  const posts: Array<PostFromResponse> = orderPostsByReactions(data.posts);
  // TODO inicialmente like a false, desde un estado de react jugamos con el
  return posts.map(({ userId, ...args }) => ({ ...args, like: false }));
};

export const orderPostByFav = (posts: Array<PostWithLike>) => {
  const favPosts = orderPostsByReactions(posts.filter(({ like }) => like));
  const noFavPosts = orderPostsByReactions(posts.filter(({ like }) => !like));

  return [...favPosts, ...noFavPosts];
};
