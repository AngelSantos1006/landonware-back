import { message200, message404, message500 } from "./http-responses";

export interface ResponseStructure {
  headerResponse: {
    code: number;
    message: string;
  };
  payload: object;
}

export function responser(code: number, message?: string, payload: object = {}): ResponseStructure {
  let response: ResponseStructure = {
    headerResponse: {
      code,
      message,
    },
    payload: Array.isArray(payload) ? { items: payload } : payload,
  };

  if (!message) {
    if (code == 200) {
      response.headerResponse.message = message200;
    } else if (code == 404) {
      response.headerResponse.message = message404;
    } else if (code == 500) {
      response.headerResponse.message = message500;
    }
  }

  return response;
};
