import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const hasAccess = isRouterHasAccess();
  if (hasAccess) {
    return true;
  }
  else {
    router.navigate(['unauthorized']);
    return false;
  }
};

function isRouterHasAccess() {
  return localStorage.getItem('auth') === 'loggedin';
}

