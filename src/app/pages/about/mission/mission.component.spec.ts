import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SymMissionComponent } from './mission.component'



describe('SymMissionComponent', () => {
  let component: SymMissionComponent
  let fixture: ComponentFixture<SymMissionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymMissionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SymMissionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
