import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCollectionComponent } from './your-collection.component';

describe('YourCollectionComponent', () => {
  let component: YourCollectionComponent;
  let fixture: ComponentFixture<YourCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
