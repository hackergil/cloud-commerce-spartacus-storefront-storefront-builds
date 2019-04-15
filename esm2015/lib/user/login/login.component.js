/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, UserService } from '@spartacus/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { LoginComponentService } from './login.component.service';
export class LoginComponent {
    /**
     * @param {?} auth
     * @param {?} userService
     * @param {?} loginService
     */
    constructor(auth, userService, loginService) {
        this.auth = auth;
        this.userService = userService;
        this.loginService = loginService;
    }
    /**
     * @return {?}
     */
    get user$() {
        return this.auth.getUserToken().pipe(map(token => {
            if (token && !!token.access_token && !this.loginService.isLogin) {
                this.loginService.isLogin = true;
                this.userService.load(token.userId);
                this.auth.login();
            }
            else if (token && !token.access_token && this.loginService.isLogin) {
                this.loginService.isLogin = false;
            }
            return token;
        }), filter(token => token && !!token.access_token), switchMap(() => this.userService.get()));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login',
                template: "<ng-container *ngIf=\"(user$ | async) as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'common.label.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\">{{\n    'common.action.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-login-greet{margin:var(--cx-margin,0);color:var(--cx-color,var(--cx-g-color-inverse));font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi));padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-login-greet{color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,.5rem 1rem 0);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService },
    { type: LoginComponentService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.loginService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQVEsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPbEUsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixZQUNVLElBQWlCLEVBQ2pCLFdBQXdCLEVBQ3hCLFlBQW1DO1FBRm5DLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXVCO0lBQzFDLENBQUM7Ozs7SUFFSixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNuQjtpQkFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNuQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQzlDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQ3hDLENBQUM7SUFDSixDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw2YkFBcUM7O2FBRXRDOzs7O1lBVFEsV0FBVztZQUFRLFdBQVc7WUFHOUIscUJBQXFCOzs7Ozs7O0lBUzFCLDhCQUF5Qjs7Ozs7SUFDekIscUNBQWdDOzs7OztJQUNoQyxzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpbkNvbXBvbmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCB1c2VyJCgpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBtYXAodG9rZW4gPT4ge1xuICAgICAgICBpZiAodG9rZW4gJiYgISF0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgIXRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW4pIHtcbiAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5pc0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWQodG9rZW4udXNlcklkKTtcbiAgICAgICAgICB0aGlzLmF1dGgubG9naW4oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b2tlbiAmJiAhdG9rZW4uYWNjZXNzX3Rva2VuICYmIHRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW4pIHtcbiAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5pc0xvZ2luID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIodG9rZW4gPT4gdG9rZW4gJiYgISF0b2tlbi5hY2Nlc3NfdG9rZW4pLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudXNlclNlcnZpY2UuZ2V0KCkpXG4gICAgKTtcbiAgfVxufVxuIl19