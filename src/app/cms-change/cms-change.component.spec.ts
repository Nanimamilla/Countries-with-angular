import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsChangeComponent } from './cms-change.component';

describe('CmsChangeComponent', () => {
  let component: CmsChangeComponent;
  let fixture: ComponentFixture<CmsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
