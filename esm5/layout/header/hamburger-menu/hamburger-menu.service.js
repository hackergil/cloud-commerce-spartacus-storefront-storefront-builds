/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var HamburgerMenuService = /** @class */ (function () {
    function HamburgerMenuService(router) {
        var _this = this;
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter(function (event) { return event instanceof NavigationStart; }))
            .subscribe(function () {
            _this.toggle(true);
        });
    }
    /**
     * toggles the expand state of the hamburger menu
     */
    /**
     * toggles the expand state of the hamburger menu
     * @param {?=} forceCollapse
     * @return {?}
     */
    HamburgerMenuService.prototype.toggle = /**
     * toggles the expand state of the hamburger menu
     * @param {?=} forceCollapse
     * @return {?}
     */
    function (forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    };
    HamburgerMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    HamburgerMenuService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ HamburgerMenuService.ngInjectableDef = i0.defineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(i0.inject(i1.Router)); }, token: HamburgerMenuService, providedIn: "root" });
    return HamburgerMenuService;
}());
export { HamburgerMenuService };
if (false) {
    /** @type {?} */
    HamburgerMenuService.prototype.isExpanded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFeEM7SUFNRSw4QkFBWSxNQUFjO1FBQTFCLGlCQU1DO1FBUkQsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdoRSxNQUFNLENBQUMsTUFBTTthQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksZUFBZSxFQUFoQyxDQUFnQyxDQUFDLENBQUM7YUFDdkQsU0FBUyxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gscUNBQU07Ozs7O0lBQU4sVUFBTyxhQUF1QjtRQUM1QixJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Z0JBdkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTnlCLE1BQU07OzsrQkFEaEM7Q0E2QkMsQUF4QkQsSUF3QkM7U0FyQlksb0JBQW9COzs7SUFDL0IsMENBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBIYW1idXJnZXJNZW51U2VydmljZSB7XG4gIGlzRXhwYW5kZWQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XG4gICAgcm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZSh0cnVlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZXMgdGhlIGV4cGFuZCBzdGF0ZSBvZiB0aGUgaGFtYnVyZ2VyIG1lbnVcbiAgICovXG4gIHRvZ2dsZShmb3JjZUNvbGxhcHNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChmb3JjZUNvbGxhcHNlKSB7XG4gICAgICB0aGlzLmlzRXhwYW5kZWQubmV4dChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNFeHBhbmRlZC5uZXh0KCF0aGlzLmlzRXhwYW5kZWQudmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19