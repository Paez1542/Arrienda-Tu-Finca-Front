import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFincaComponent } from './edit-finca.component';

describe('EditFincaComponent', () => {
  let component: EditFincaComponent;
  let fixture: ComponentFixture<EditFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFincaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
