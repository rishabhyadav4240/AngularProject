import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCasestudyComponent } from './post-casestudy.component';

describe('PostCasestudyComponent', () => {
  let component: PostCasestudyComponent;
  let fixture: ComponentFixture<PostCasestudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCasestudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCasestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
