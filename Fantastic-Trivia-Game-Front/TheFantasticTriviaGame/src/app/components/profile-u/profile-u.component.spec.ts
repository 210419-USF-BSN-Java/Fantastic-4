import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUComponent } from './profile-u.component';

describe('ProfileUComponent', () => {
  let component: ProfileUComponent;
  let fixture: ComponentFixture<ProfileUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
