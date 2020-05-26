import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwCharactersListPage } from './sw-characters-list.page';

describe('SwCharactersListPage', () => {
  let component: SwCharactersListPage;
  let fixture: ComponentFixture<SwCharactersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwCharactersListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwCharactersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
