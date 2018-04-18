// Conduit API

// window['defaultBasePath'] = 'https://conduit.productionready.io/api';

// import { getToken, setToken, toQueryString, serializeObject, get, post, del, put } from './fetch';
import { toQueryString, get } from './fetch';
// import { IArticle, IProfile, IComment } from './models';


// export interface IArticlesRequest {
//   email?: string;
// }
//
// export interface IVisitors {
//     visitors: Array<IArticle>;
// }
//
// export interface INewArticle {
//   title: string,
//   description: string,
//   body: string,
//   tagList: Array<string>;
// }
//
// export interface IArticlesResponse {
//   article: IArticle
// }
//
// export interface ICommentsResponse {
//   comments: Array<IComment>
// }
//
// export interface IProfileResponse {
//   profile: IProfile
// }

// export const tags = {
//   all: () => get<ITags>('/tags')
// }
//
// export const auth = {
//   current: () => getToken()
//     ? get<ISession>('/user')
//     : null,
//   signIn: (user: { email: string, password: string }) =>
//     post<ISession>('/users/login', { user }),
//   register: (user: { username: string, email: string, password: string }) =>
//     post<ISession>('/users', { user }),
//   save: user =>
//     put('/user', { user })
// }

// export const visitors = {
//     search: (request: IArticlesRequest) =>
//         get<IFeed>(`/visitors?${toQueryString(request)}`)
// }
  // feed: (request: {limit: number, offset: number}) =>
  //   get<IFeed>(`/articles/feed?${toQueryString(request)}`),
  // get: (slug: string) =>
  //   get<IArticlesResponse>(`/articles/${slug}`),
  // delete: (slug: string) =>
  //   del(`/articles/${slug}`),
  // favorite: (slug: string) =>
  //   post(`/articles/${slug}/favorite`),
  // unfavorite: (slug: string) =>
  //   del(`/articles/${slug}/favorite`),
  // update: (article: IArticle) =>
  //   put(`/articles/${article.slug}`, { article }),
  // create: (article: INewArticle) =>
  //   post<IArticlesResponse>('/articles', { article })
// }
//
// export const comments = {
//   create: (slug: string, comment: { body: string }) =>
//     post(`/articles/${slug}/comments`, { comment }),
//   delete: (slug: string, commentId: string) =>
//     del(`/articles/${slug}/comments/${commentId}`),
//   forArticle: (slug: string) =>
//     get<ICommentsResponse>(`/articles/${slug}/comments`)
// };
//
// export const profile = {
//   get: (username: string) =>
//     get<IProfileResponse>(`/profiles/${username}`),
//   follow: (username: string) =>
//     post<IProfileResponse>(`/profiles/${username}/follow`),
//   unfollow: (username: string) =>
//     del(`/profiles/${username}/follow`)
// };
