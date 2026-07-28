import { FaceClient } from './src'

const algo = new FaceClient('fb_hbWQEdJPW5bzV2pDQIp6oktUrrvDgDiUMpt37ddQbzuArbIX');

/* algo.posts.list({ pageId: 1 }).then((res) => {
    console.log(res)
}) */
/* algo.pages.mine().then((res) =>{
    console.log(res.pages[0])
}) */
/* algo.posts.create({content:"hola esto es otra prueba pero ahora mejorada", page_id:88}).then((res) =>{
    console.log(res.post.comments_disabled)
}) */
/* algo.posts.list({pageId:88}).then((res) =>{ 
    console.log(res.data[0].profile)
}) */
/**
 * 6007 6006 6005 6004 6003 6002 5994 5993
 */
/* algo.posts.delete({ page_id: 88, postId: 5992 }).then((res) => {
    console.log(res)
}) */
algo.posts.get({ pageId: 88, postId: 5993 }).then((res) =>{
    console.log(res.post.profile.user)
})
/* algo.posts.edit({ content: "remake de esto es otra prueba", page_id: 88, postId: 5993 }).then((res) =>{
    console.log(res)
}) */
/* algo.comments.post({content:"este comentario es una prueba", page_id:88, postId:5993}).then((res) =>{
    console.log(res)
}) */
/* algo.comments.get({ page_id: 88, postId: 5993 }).then((res) => {
    console.log(res.comments[0].reactions_count)
}) */
