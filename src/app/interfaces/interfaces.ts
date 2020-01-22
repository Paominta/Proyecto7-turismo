  export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: Post[];
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
    usuario?: Usuario;
    created?: string;
  }

  export interface Usuario {
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    password?: string;

  }

