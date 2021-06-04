import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardUComponent } from './leaderboard-u.component';

describe('LeaderboardUComponent', () => {
  let component: LeaderboardUComponent;
  let fixture: ComponentFixture<LeaderboardUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
