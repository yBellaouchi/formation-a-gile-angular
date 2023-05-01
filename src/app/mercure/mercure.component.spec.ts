import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercureComponent } from './mercure.component';

describe('MercureComponent', () => {
  let component: MercureComponent;
  let fixture: ComponentFixture<MercureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
