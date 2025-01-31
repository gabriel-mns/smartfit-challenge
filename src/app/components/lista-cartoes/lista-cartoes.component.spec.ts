import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartoesComponent } from './lista-cartoes.component';

describe('ListaCartoesComponent', () => {
  let component: ListaCartoesComponent;
  let fixture: ComponentFixture<ListaCartoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCartoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
