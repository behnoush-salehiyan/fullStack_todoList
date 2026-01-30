import axios from "axios";

export async function getData(url, token = null) {
  const response = await axios.get(
    url,
    token && {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
}

export async function postData(url, data, token = null) {
  const response = await axios.post(
    url,
    data,
    token && {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
}
export async function updateData(url, data, token = null) {
  const response = await axios.patch(
    url,
    data,
    token && {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
}

export async function deleteData(url, token = null) {
  const response = await axios.delete(
    url,
    token && {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
}
