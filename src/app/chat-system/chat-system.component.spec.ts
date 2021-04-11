import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSystemComponent } from './chat-system.component';

describe('ChatSystemComponent', () => {
  let component: ChatSystemComponent;
  let fixture: ComponentFixture<ChatSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
