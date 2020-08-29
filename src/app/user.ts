//representa os usuarios retornados pela API
//apos a requisicao, a resposta é mapeada para objetos desta interface
export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}