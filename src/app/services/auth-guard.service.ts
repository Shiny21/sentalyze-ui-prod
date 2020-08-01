import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router 
} from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,
    private storageService: StorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      //return true;
      console.log('Inside canActivate with URL : ',url)
      console.log('Route & state : ',route, '\n', state);
      return this.checkAuthUser(url);
    }
  
    checkAuthUser(url: string): boolean {
      console.log('Check Auth User : ', this.storageService.getSessionData())
      if(this.storageService.getSessionData() != null){
        console.log('Returning true');
       return true;
      }
      console.log('Routing to error and returning false');
      this.router.navigate(['error']);
      return false;
    }
}
