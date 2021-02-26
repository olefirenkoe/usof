import makeRequest from '../makeRequest';

export const questions = () => {
    return makeRequest({
        url: `https://api.stackexchange.com/2.2/questions?pagesize=50&key=qBt3pH)yY2*kx96ogUORkA((`,
        method: 'GET',
        data: {}
    });
};

