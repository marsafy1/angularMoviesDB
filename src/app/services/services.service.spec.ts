import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services.service';
import { waitForAsync } from '@angular/core/testing';

describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



describe('API Calls', ()=>{
  let usersService: ServicesService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ServicesService]
    });

    usersService = TestBed.get(ServicesService); // Add this
  });


  // it('Empty Search String Should Cause Error', waitForAsync (()=>{
   
    
  //     expect(usersService.getSearchedMovies("")).toThrowError();
    
  // })
  // ) 
  it('Popular Movies Should be at least 10', waitForAsync (()=>{
    usersService.getPopularMovies().subscribe((data)=>{
      expect(data.results.length).toBeGreaterThanOrEqual(10);
    });
  })
  )  
})
