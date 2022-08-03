export const GET_ALL_POSTS = '';
export const GET_ALL_USERS = '';
export const GET_ALL_USERS_POST = '';
export const GET_ALL_COMMENTS_POST = '';
/*
Una para hacer la request a la API y traer todos los usuarios getAllUsers
otra para traer los post de un usuario específico getAllUserPosts
otra para ver los comentarios de un post en particular getAllCommentsPost
una acción para ver todos los post del blog getAllPosts .

*/


export function getAllUsers() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => dispatch({ type: GET_ALL_USERS, payload: json }))
    };
  }
  
  export function getAllUserPosts(id) {
    return function(dispatch) {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => response.json())
    .then(json => dispatch({ type: GET_ALL_USERS_POST, payload: json }))
    };
  }
  
  export function getAllCommentsPost(postId) {
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((res)=>res.json())
        .then(json=> dispatch({type:GET_ALL_COMMENTS_POST, payload:json}))
    }
  }

  export function getAllPosts() {
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>res.json())
        .then(json=> dispatch({type:GET_ALL_POSTS, payload:json}))
    }
  }