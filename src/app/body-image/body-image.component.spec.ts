import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyImageComponent } from './body-image.component';

describe('BodyImageComponent', () => {
  let component: BodyImageComponent;
  let fixture: ComponentFixture<BodyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
