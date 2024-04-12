export interface user {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  password: string;
  rol: "administrador" | "usuario" | "cajero";
  direccion: {
    ciudad: string;
    numeroCasa: string;
    municipio: string;
    colonia: string;
  };
  telefono: {
    numTel: string;
    lada: string;
  };
}
