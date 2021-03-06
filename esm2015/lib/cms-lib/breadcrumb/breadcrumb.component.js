/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { PageMetaService } from '@spartacus/core';
import { map, filter } from 'rxjs/operators';
export class BreadcrumbComponent {
    /**
     * @param {?} component
     * @param {?} pageMetaService
     */
    constructor(component, pageMetaService) {
        this.component = component;
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    get title$() {
        return this.pageMetaService.getMeta().pipe(filter(Boolean), map((meta) => meta.heading || meta.title));
    }
    /**
     * @return {?}
     */
    get crumbs$() {
        // initial version for the breadcrumb
        // this must be done in such a way that
        // other pages can contribute to a stream of crumbs
        return of([{ label: 'Home', link: '/' }]);
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-breadcrumb',
                template: "<nav>\n  <a *ngFor=\"let crumb of (crumbs$ | async)\" [routerLink]=\"crumb.link\">\n    {{ crumb.label }}\n  </a>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;padding:20px 0;text-align:center;color:var(--cx-g-color-text,currentcolor);background-color:var(--cx-g-color-background)}nav{font-size:var(--cx-font-size-small,.85rem);padding:5px 0}nav a{color:var(--cx-g-color-secondary)}"]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: PageMetaService }
];
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbComponent.prototype.pageMetaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRN0MsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFDOUIsWUFDUyxTQUFvRCxFQUNqRCxlQUFnQztRQURuQyxjQUFTLEdBQVQsU0FBUyxDQUEyQztRQUNqRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDekMsQ0FBQzs7OztJQUVKLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULHFDQUFxQztRQUNyQyx1Q0FBdUM7UUFDdkMsbURBQW1EO1FBQ25ELE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsc0tBQTBDO2dCQUUxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFWUSxnQkFBZ0I7WUFFaEIsZUFBZTs7OztJQVdwQix3Q0FBMkQ7Ozs7O0lBQzNELDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNCcmVhZGNydW1ic0NvbXBvbmVudCwgUGFnZU1ldGEgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5pbXBvcnQgeyBQYWdlTWV0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0JyZWFkY3J1bWJzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCB0aXRsZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTWV0YVNlcnZpY2UuZ2V0TWV0YSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKG1ldGE6IFBhZ2VNZXRhKSA9PiBtZXRhLmhlYWRpbmcgfHwgbWV0YS50aXRsZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGNydW1icyQoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIC8vIGluaXRpYWwgdmVyc2lvbiBmb3IgdGhlIGJyZWFkY3J1bWJcbiAgICAvLyB0aGlzIG11c3QgYmUgZG9uZSBpbiBzdWNoIGEgd2F5IHRoYXRcbiAgICAvLyBvdGhlciBwYWdlcyBjYW4gY29udHJpYnV0ZSB0byBhIHN0cmVhbSBvZiBjcnVtYnNcbiAgICByZXR1cm4gb2YoW3sgbGFiZWw6ICdIb21lJywgbGluazogJy8nIH1dKTtcbiAgfVxufVxuIl19