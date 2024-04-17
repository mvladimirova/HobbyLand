import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateScoreComponent } from './create-score.component';

describe('CreateScoreComponent', () => {
  let component: CreateScoreComponent;
  let fixture: ComponentFixture<CreateScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateScoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
