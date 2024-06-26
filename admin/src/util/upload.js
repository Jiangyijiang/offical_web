import axios from 'axios'

function upload(path, userForm) {
    const params = new FormData();
    for (let i in userForm) {
        params.append(i, userForm[i]);
    }
    //console.log(params);
    return axios.post(path, params, {
        headers: {
            "content-Type": "multipart/from-data"
        }
    }).then(res=>res.data)
}

export default upload