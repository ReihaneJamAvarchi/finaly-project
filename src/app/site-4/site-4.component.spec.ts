import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site4Component } from './site-4.component';

describe('Site4Component', () => {
  let component: Site4Component;
  let fixture: ComponentFixture<Site4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Site4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
