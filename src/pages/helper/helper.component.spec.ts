import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperComponent } from './helper.component';

describe('HelperComponent', () => {
  let component: HelperComponent;
  let fixture: ComponentFixture<HelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
