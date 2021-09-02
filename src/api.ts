import { API_ENDPOINT } from "./common"

export interface Creator {
  id: number;
  name: string;
  avatar: string;
}

export interface Clipping {
  id: number;
  bookID: string;
  title: string;
  content: string;
  createdAt: Date;
  pageAt: string;
  visible: boolean;
  reactions: any[];
  creator: Creator;
}


export interface FetchClippingResponse {
  data: {
    clipping: Clipping;
  }
}




const FETCH_CLIPPING_QUERY = `
query fetchClipping($id: Int!) {
  clipping(id: $id) {
    id
    bookID
    title
    content
    createdAt
    pageAt
    visible
    reactions {
      id
      symbol
      creator {
        id
        avatar
        name
      }
      createdAt
    }
    creator {
      id
      name
      avatar
    }
  }
}
`


export function fetchClipping(cid: number): Promise<Clipping> {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      operationName: 'fetchClipping',
      query: FETCH_CLIPPING_QUERY,
      variables: {
        id: cid
      }
    })
  }).then(res => res.json() as Promise<FetchClippingResponse>)
    .then(res => res.data.clipping)

}