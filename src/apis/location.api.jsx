import { httpClient } from '../https/https';

const URL = '/admin/parking';
const locationApi = {
  getLocation() {
    const params = {
      method: 'get_location',
      params: {
        id: 0,
      },
    };
    return httpClient.post(URL, params);
  },
  updateLocaion(data) {
    const params = {
      method: 'update_location',
      params: {
        id: 0,
        ...data,
      },
    };
    return httpClient.put(URL, params);
  },

  getVehicles(body) {
    let filterDate;
    if (!body || (!body.from && !body.to))
      filterDate = {
        from: '',
        to: '',
      };
    else if (!body.from) {
      filterDate = {
        from: '',
        to: body.to.toString(),
      };
    } else if (!body.to) {
      filterDate = {
        from: body.from.toString(),
        to: '',
      };
    } else {
      filterDate = {
        from: body.from.toString(),
        to: body.to.toString(),
      };
    }

    const params = {
      method: 'get_parking_vehicles',
      params: {
        id: 0,
        // from: 'Tue Apr 18 2023 03:00:00 GMT+0700 (Indochina Time)',
        // to: 'Tue Apr 19 2023 03:00:00 GMT+0700 (Indochina Time)',
        ...filterDate,
      },
    };
    return httpClient.post(URL, params);
  },

  getParkedVehicles(body) {
    let filterDate;
    if (!body || (!body.from && !body.to))
      filterDate = {
        from: '',
        to: '',
      };
    else if (!body.from) {
      filterDate = {
        from: '',
        to: body.to.toString(),
      };
    } else if (!body.to) {
      filterDate = {
        from: body.from.toString(),
        to: '',
      };
    } else {
      filterDate = {
        from: body.from.toString(),
        to: body.to.toString(),
      };
    }

    const params = {
      method: 'get_out_vehicles',
      params: {
        id: 0,
        // from: 'Tue Apr 18 2023 03:00:00 GMT+0700 (Indochina Time)',
        // to: 'Tue Apr 19 2023 03:00:00 GMT+0700 (Indochina Time)',
        ...filterDate,
      },
    };
    return httpClient.post(URL, params);
  },
};

export default locationApi;
