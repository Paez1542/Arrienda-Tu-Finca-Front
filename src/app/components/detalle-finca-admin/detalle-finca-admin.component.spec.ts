import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFincaAdminComponent } from './detalle-finca-admin.component';

describe('DetalleFincaAdminComponent', () => {
  let component: DetalleFincaAdminComponent;
  let fixture: ComponentFixture<DetalleFincaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleFincaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleFincaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
