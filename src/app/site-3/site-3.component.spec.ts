import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site3Component } from './site-3.component';

describe('Site3Component', () => {
  let component: Site3Component;
  let fixture: ComponentFixture<Site3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Site3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
