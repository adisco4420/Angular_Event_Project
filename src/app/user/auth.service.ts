import { Injectable } from '@angular/core'
import {IUser} from './user.model'
@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(userName: string, passord: string){
        this.currentUser = {
            id:1,
            userName: userName,
            firstName: 'Sodiq',
            lastName: 'Alabi'

        }

       
    }
    isAuthenticated(){
        return !!this.currentUser
    }
}