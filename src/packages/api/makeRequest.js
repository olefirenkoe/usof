import axios from 'axios';

// const makeRequest = ({url, data}) => {
//    return axios.get(url)
//     .then(response => {
//         return response.data.items;
//         // return 2;
//     })
// // return 2;
// };
// export default makeRequest;

export default ({
    url = '/',
    method = 'get',
    params = {},
    data = {},
    headers = {}
}) => {
    return axios({
        url,
        method,
        headers,
        params,
        data
    });
};