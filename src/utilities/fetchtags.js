import axios from 'axios';

const API_URL = 'https://api.stackexchange.com/2.3/tags';

export const fetchTags = async (page, pageSize, order, sort) => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      site: 'stackoverflow',
      page,
      pageSize,
      order,
      sort,
    },
  });

  return response.data;
};
