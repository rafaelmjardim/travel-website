import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDialogComponent } from './sign-dialog.component';

describe('SignDialogComponent', () => {
  let component: SignDialogComponent;
  let fixture: ComponentFixture<SignDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
