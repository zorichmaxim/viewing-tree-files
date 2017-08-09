import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionTemplateComponent } from './projection-template.component';

describe('ProjectionTemplateComponent', () => {
  let component: ProjectionTemplateComponent;
  let fixture: ComponentFixture<ProjectionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
