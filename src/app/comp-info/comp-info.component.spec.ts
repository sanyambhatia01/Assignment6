import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInfoComponent } from './comp-info.component';

describe('CompInfoComponent', () => {
  let component: CompInfoComponent;
  let fixture: ComponentFixture<CompInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
