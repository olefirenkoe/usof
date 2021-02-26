import makeRequest from "../makeRequest";

export const getQuestions = async () => {
  const response = await makeRequest({
    url: `https://api.stackexchange.com/2.2/questions?pagesize=50&key=qBt3pH)yY2*kx96ogUORkA((`,
    method: "GET",
    data: {}
  });

  return response.questions;
};

