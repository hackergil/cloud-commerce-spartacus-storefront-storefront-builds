/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, UserService } from '@spartacus/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { LoginComponentService } from './login.component.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, userService, loginService) {
        this.auth = auth;
        this.userService = userService;
        this.loginService = loginService;
    }
    Object.defineProperty(LoginComponent.prototype, "user$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.auth.getUserToken().pipe(map(function (token) {
                if (token && !!token.access_token && !_this.loginService.isLogin) {
                    _this.loginService.isLogin = true;
                    _this.userService.load(token.userId);
                    _this.auth.login();
                }
                else if (token && !token.access_token && _this.loginService.isLogin) {
                    _this.loginService.isLogin = false;
                }
                return token;
            }), filter(function (token) { return token && !!token.access_token; }), switchMap(function () { return _this.userService.get(); }));
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login',
                    template: "<ng-container *ngIf=\"(user$ | async) as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'common.label.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\">{{\n    'common.action.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-login-greet{margin:var(--cx-margin,0);color:var(--cx-color,var(--cx-g-color-inverse));font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi));padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-login-greet{color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,.5rem 1rem 0);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: UserService },
        { type: LoginComponentService }
    ]; };
    return LoginComponent;
}());
export { LoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQVEsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFNRSx3QkFDVSxJQUFpQixFQUNqQixXQUF3QixFQUN4QixZQUFtQztRQUZuQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtJQUMxQyxDQUFDO0lBRUosc0JBQUksaUNBQUs7Ozs7UUFBVDtZQUFBLGlCQWVDO1lBZEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDbEMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDUCxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUMvRCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUNwRSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7aUJBQ25DO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUE3QixDQUE2QixDQUFDLEVBQzlDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUN4QyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDZiQUFxQzs7aUJBRXRDOzs7O2dCQVRRLFdBQVc7Z0JBQVEsV0FBVztnQkFHOUIscUJBQXFCOztJQThCOUIscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXZCWSxjQUFjOzs7Ozs7SUFFdkIsOEJBQXlCOzs7OztJQUN6QixxQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luQ29tcG9uZW50U2VydmljZVxuICApIHt9XG5cbiAgZ2V0IHVzZXIkKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmF1dGguZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbiAmJiAhIXRva2VuLmFjY2Vzc190b2tlbiAmJiAhdGhpcy5sb2dpblNlcnZpY2UuaXNMb2dpbikge1xuICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZCh0b2tlbi51c2VySWQpO1xuICAgICAgICAgIHRoaXMuYXV0aC5sb2dpbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRva2VuICYmICF0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgdGhpcy5sb2dpblNlcnZpY2UuaXNMb2dpbikge1xuICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcih0b2tlbiA9PiB0b2tlbiAmJiAhIXRva2VuLmFjY2Vzc190b2tlbiksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy51c2VyU2VydmljZS5nZXQoKSlcbiAgICApO1xuICB9XG59XG4iXX0=