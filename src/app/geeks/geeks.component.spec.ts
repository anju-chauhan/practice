import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeeksComponent } from './geeks.component';

describe('GeeksComponent', () => {
  let component: GeeksComponent;
  let fixture: ComponentFixture<GeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeeksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
