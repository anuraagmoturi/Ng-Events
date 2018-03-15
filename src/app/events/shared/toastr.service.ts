import { InjectionToken } from '@angular/core';
import {ToastsManager} from "ng2-toastr";

export let TOASTR_TOKEN = new InjectionToken('ToastsManager');

export interface Toastr {
  success (msg: string, title?:string): void;
  info (msg: string, title?:string): void;
  warning (msg: string, title?:string): void;
  error (msg: string, title?:string): void;
}


//----wrapper class ------

// @Injectable()
// export class ToastrService {
//
//   constructor(private _toaster:ToastsManager) {
//
//   }
//
//   success(message: string, title?:string){
//     this._toaster.success(message,title);
//   }
//   info(message: string, title?:string){
//     this._toaster.info(message,title);
//   }
//   warning(message: string, title?:string){
//     this._toaster.warning(message,title);
//   }
//   error(message: string, title?:string){
//     this._toaster.error(message,title);
//   }
//
// }
