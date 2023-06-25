import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPreciosExistenciaComponent } from './lista-precios-existencia.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ListaPreciosExistenciaComponent', () => {
  let component: ListaPreciosExistenciaComponent;
  let fixture: ComponentFixture<ListaPreciosExistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule, MatFormFieldModule, MatListModule, MatSelectModule, MatInputModule, NoopAnimationsModule],
      declarations: [ ListaPreciosExistenciaComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPreciosExistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
