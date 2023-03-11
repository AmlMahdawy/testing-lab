import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponentComponent } from './test-component.component';
import { TestServiceService } from '../test-service.service';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let service: TestServiceService;
  let fixture: ComponentFixture<TestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TestServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('Test check function if number is positive number return positive number ', () => {
    expect(component.check(2)).toEqual("positive number");
  });

  it('Test check function if number is negative number return negative number', () => {
    expect(component.check(-2)).toEqual("negative number");
  });

  it('Test that component call testService.', () => {
    spyOn(service, "getdata");
    component.ngOnInit();
    expect(service.getdata).toHaveBeenCalled();
  });

});
