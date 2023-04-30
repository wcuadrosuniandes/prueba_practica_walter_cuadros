export class Vehicle {
  id: number;
  marca: string;
  linea: string;
  referencia: string;
  modelo: number;
  imagen: string
  constructor(
    id: number,
    marca: string,
    linea: string,
    referencia: string,
    modelo: number,
    imagen: string
  ){
    this.id= id,
    this.marca= marca,
    this.linea= linea,
    this.referencia= referencia,
    this.modelo= modelo,
    this.imagen= imagen
  }
}
