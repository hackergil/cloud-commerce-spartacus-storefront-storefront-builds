/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BootstrapModule } from '../../bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsService } from '@spartacus/core';
import { NavigationModule } from '../navigation/navigation.module';
import { CategoryNavigationComponent } from './category-navigation.component';
import { NavigationComponentService } from '../navigation/navigation.component.service';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var CategoryNavigationModule = /** @class */ (function () {
    function CategoryNavigationModule() {
    }
    CategoryNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NavigationModule,
                        BootstrapModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CategoryNavigationComponent: {
                                    selector: 'cx-category-navigation',
                                    providers: [
                                        {
                                            provide: NavigationComponentService,
                                            useClass: NavigationComponentService,
                                            deps: [CmsService, CmsComponentData],
                                        },
                                    ],
                                },
                            },
                        }))),
                    ],
                    declarations: [CategoryNavigationComponent],
                    entryComponents: [CategoryNavigationComponent],
                    exports: [CategoryNavigationComponent],
                },] }
    ];
    return CategoryNavigationModule;
}());
export { CategoryNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9jYXRlZ29yeS1uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBYSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV4RjtJQUFBO0lBd0J1QyxDQUFDOztnQkF4QnZDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLDJCQUEyQixFQUFFO29DQUMzQixRQUFRLEVBQUUsd0JBQXdCO29DQUNsQyxTQUFTLEVBQUU7d0NBQ1Q7NENBQ0UsT0FBTyxFQUFFLDBCQUEwQjs0Q0FDbkMsUUFBUSxFQUFFLDBCQUEwQjs0Q0FDcEMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO3lDQUNyQztxQ0FDRjtpQ0FDRjs2QkFDRjt5QkFDRixFQUFBLENBQUM7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQzNDLGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUM5QyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDdkM7O0lBQ3NDLCtCQUFDO0NBQUEsQUF4QnhDLElBd0J3QztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb290c3RyYXBNb2R1bGUgfSBmcm9tICcuLi8uLi9ib290c3RyYXAubW9kdWxlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENtc0NvbmZpZywgQ21zU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3J5LW5hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJvb3RzdHJhcE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1jYXRlZ29yeS1uYXZpZ2F0aW9uJyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc1NlcnZpY2UsIENtc0NvbXBvbmVudERhdGFdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSB7fVxuIl19