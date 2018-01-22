import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplContainerComponent } from './spl-container.component';

describe('SplContainerComponent', () => {
  let component: SplContainerComponent;
  let fixture: ComponentFixture<SplContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
