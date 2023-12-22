import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveDefaultComponent } from './above-default.component';

describe('AboveDefaultComponent', () => {
  let component: AboveDefaultComponent;
  let fixture: ComponentFixture<AboveDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboveDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboveDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
