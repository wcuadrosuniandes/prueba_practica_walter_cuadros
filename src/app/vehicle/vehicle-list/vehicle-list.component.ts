import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  allVehicles: Vehicle[] =[]
  countVehicles = {}
  constructor(
    private vehicleSercixce: VehiclesService
  ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void{
    let marcas: any = {}
    this.vehicleSercixce.getVehicles().subscribe((vehicles)=>{
      this.allVehicles = vehicles;
      vehicles.forEach(element => {
        if(marcas.hasOwnProperty(element.marca)){
          marcas[element.marca] = marcas[element.marca]+1;
        }else{
          marcas[element.marca] = 1;
        }
      });
      this.countVehicles = marcas;
    })





  }

}
