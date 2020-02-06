  export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: Post[];
  }
  export interface RespuestaPost {
    ok: boolean;
    id: string;
    post?: Post;
  }


  export interface Post {
    imgs?: string[];
    _id?: string;
    nombre?: string;
    mensaje?: string;
    categoria?: string;
    direccion?: string;
    horario?: string;
    costo?: string;
    contactos?: string;
    coords?: string;
    estado?: string;
    recorrido?: string;
    usuario?: Admin;
    created?: string;
  }

  export interface Usuario {
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    edad?: string;
    genero?: string;
    pais?: string;
    ciudad?: string;
    intereses?: string;
    password?: string;

  }

  export interface Admin {
    _id?: string;
    nombre?: string;
    email?: string;
    password?: string;

  }

