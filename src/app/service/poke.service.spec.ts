import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

describe('PokeService', () => {
  let service: PokeService;
  let httpClient : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[PokeService]
    });

    httpClient = TestBed.inject(HttpTestingController)
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia hacer una peticion http',(done:DoneFn)=>{
    service.getList().subscribe((res)=>{
      console.log(res);

      done()
    })
  })
});
