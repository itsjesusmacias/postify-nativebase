// private
interface BasePost {
  id: number;
  body: string;
  reactions: number;
  tags: Array<string>;
  title: string;
}

// public
export interface PostWithLike extends BasePost {
  like: boolean;
}

export interface PostFromResponse extends BasePost {
  userId: number;
}

export interface ResponsePost {
  limit: number;
  posts: Array<PostFromResponse>;
  skipe: number;
  total: number;
}

export type Posts = Array<Post>;
