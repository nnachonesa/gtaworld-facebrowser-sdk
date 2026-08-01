import { FaceClient } from './src/index'

const face = new FaceClient("fb_hbWQEdJPW5bzV2pDQIp6oktUrrvDgDiUMpt37ddQbzuArbIX")
/* face.pages.mine().then((res) =>{
    console.log(res.pages)
}) */
/* face.dm.list({ page_id: 103 }).then((res) =>{
    // @ts-ignore
    console.log(res.conversations)
}); */
face.dm.getMessagesFromDM({ conversationId: 3947, page_id: 103 })
.then((res) =>{
    //@ts-ignore
    console.log(res.messages[1].sender)
})