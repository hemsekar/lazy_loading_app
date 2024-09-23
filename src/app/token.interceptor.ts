import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (request, next) => {
  console.log("tokenInterceptor called ")
  const token = localStorage.getItem('token');
  const clonedRequest = request.clone({
    headers: request.headers.set('Authorization', `Bearer ${token}`)
  });
  return next(clonedRequest);
};
