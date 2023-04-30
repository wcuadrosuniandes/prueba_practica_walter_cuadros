/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { VehicleListComponent } from './vehicle-list.component';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import { Vehicle } from '../../models/vehicle';


describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleListComponent ],
      providers: [ VehiclesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 3; i++) {
      const vehicle = new Vehicle(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.image.imageUrl()
      );
        component.allVehicles.push(vehicle);
      }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Son 4 elementos tr incluyendo el encabezado de la tabla
  it('should have 4 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr.table-row'))).toHaveSize(4)
  });

});
