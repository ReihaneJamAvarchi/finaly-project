import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site2Component } from './site-2.component';

describe('Site2Component', () => {
  let component: Site2Component;
  let fixture: ComponentFixture<Site2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Site2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
