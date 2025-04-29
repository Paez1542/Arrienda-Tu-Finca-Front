import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFincaArrendadorComponent } from './detalle-finca-arrendador.component';

describe('DetalleFincaArrendadorComponent', () => {
  let component: DetalleFincaArrendadorComponent;
  let fixture: ComponentFixture<DetalleFincaArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleFincaArrendadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleFincaArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
