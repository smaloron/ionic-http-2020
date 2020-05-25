import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomUserPage } from './random-user.page';

describe('RandomUserPage', () => {
  let component: RandomUserPage;
  let fixture: ComponentFixture<RandomUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
