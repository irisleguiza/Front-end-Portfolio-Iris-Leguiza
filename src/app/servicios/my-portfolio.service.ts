import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyPortfolioService {

  constructor() { }
  obtenerDatos(){
    console.log("El servicio esta ejecutandose");
  }
}
