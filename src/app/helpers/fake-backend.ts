import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '@core/models'
import { Observable, of, throwError } from 'rxjs'
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators'

type MyRequestBody = {
  // Define the structure of your request body
  username: string
  name: string
  password: string
  email: string
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDcmVhdGV4IiwiaWF0IjoxNTg3MzU2NjQ5LCJleHAiOjE5MDI4ODk0NDksImF1ZCI6Imh0dHBzOi8vY3JlYXRleC5zdHVkaW8vIiwic3ViIjoiY29udGFjdEBjcmVhdGV4LnN0dWRpbyIsImxhc3ROYW1lIjoiQ3JlYXRleCIsIkVtYWlsIjoiY29udGFjdEBjcmVhdGV4LnN0dWRpbyIsIlJvbGUiOiJBZG1pbiIsImZpcnN0TmFtZSI6IkFyb3VuZCJ9.Mp4_XrljdR47Dv94aOrsg6jCm38JMwxIb5gC59BLoVQ'

/**
 * @returns registered user list
 */
const fakeUsers: User[] = [
  {
    id: 1,
    username: 'user',
    email: 'user@domain.com',
    password: 'password',
    firstName: 'User',
    lastName: 'Theme',
    token: token,
  },
]

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<MyRequestBody>,
    next: HttpHandler
  ): Observable<HttpEvent<Event>> {
    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(
        mergeMap(() => {
          // authenticate - public
          if (request.url.endsWith('/api/login') && request.method === 'POST') {
            const user = fakeUsers.find(
              (x) =>
                x.email === request.body?.email &&
                x.password === request.body?.password
            )
            if (!user) {
              return error('Email or password is incorrect')
            }
            return ok({
              ...user,
            })
          }

          // pass through any requests not handled above
          return next.handle(request)
        })
      )
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize())

    // private helper functions
    function ok(body?: User) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function unauthorised() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } })
    }

    function error(message: string) {
      return throwError({ status: 400, error: { message } })
    }
  }
}

export let FakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
}
