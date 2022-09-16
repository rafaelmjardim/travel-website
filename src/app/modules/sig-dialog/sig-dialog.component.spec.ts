import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigDialogComponent } from './sig-dialog.component';

describe('SigDialogComponent', () => {
  let component: SigDialogComponent;
  let fixture: ComponentFixture<SigDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
