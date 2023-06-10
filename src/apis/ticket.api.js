import { httpClient } from '../https/https';

const URL = '/admin/ticket';
const ticketApi = {
  getMonthTicket() {
    const params = {
      method: 'get_month_ticket',
    };
    return httpClient.post(URL, params);
  },
  getTicketPerHour() {
    const params = {
      method: 'get_ticket_per_hour',
    };
    return httpClient.get(URL, params);
  },

  updateMonthTicket(value) {
    const params = {
      method: 'update_month_ticket',
      params: {
        data: {
          price: value,
        },
      },
    };
    return httpClient.put(URL, params);
  },

  updateTicketPerHour(startPrice, hour, bonusPrice) {
    const params = {
      method: 'update_ticket_per_hour',
      params: {
        data: {
          startPrice,
          hour,
          bonusPrice,
        },
      },
    };
    return httpClient.put(URL, params);
  },
};

export default ticketApi;
