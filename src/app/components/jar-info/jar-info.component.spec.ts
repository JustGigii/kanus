import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarInfoComponent } from './jar-info.component';

describe('JarInfoComponent', () => {
  let component: JarInfoComponent;
  let fixture: ComponentFixture<JarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
