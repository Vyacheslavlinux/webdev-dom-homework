const host = ' https://wedev-api.sky.pro/api/v1/vyacheslav-petrov'

export const fetchComments = () => {
    return fetch(host + '/comments')
    .then((res) => {
        return res.json()
    })
    .then((responseData) => {
        const appComments = responseData.comments.map(comment =>{
            return {
                name: comment.author.name,
                date: comment.date,
                comment: comment.text,
                likenumber: comment.likes,
                like: false,
            }
        })
        return appComments;
    })
}

export const postComment = (text, name) => {
    return fetch(host +"/comments", {
    method: 'POST',
    body: JSON.stringify({
        text: text,
        name: name,
    }),
    }).then((response) => {
        
        if (response.status === 500)
        {throw new Error ("сервер недоступен")}
        if (response.status === 400)
        {throw new Error ('неверный запрос')}
        if (response.status === 201) {
        return response.json()
        }
    })
    .then(() => {
        return fetchComments()
    })
}