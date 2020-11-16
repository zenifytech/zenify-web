import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeFooterComponent } from './lounge-footer.component';

describe('LoungeFooterComponent', () => {
  let component: LoungeFooterComponent;
  let fixture: ComponentFixture<LoungeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
