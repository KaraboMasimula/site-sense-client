import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({ setHeaders: { 'X-Requested-With': 'SiteSenseClient' } });
  return next(cloned);
};
