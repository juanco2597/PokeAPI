import { ComponentFixture, TestBed } from '@angular/core/testing';
import { } from '@angular/common/http/testing'
import { CardComponent } from './card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeService } from '../../service/poke.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  let service: PokeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports:[HttpClientModule],
      providers:[PokeService]
    })
    .compileComponents();

    service = TestBed.inject(PokeService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
