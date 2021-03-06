/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
var OrderDetailShippingComponent = /** @class */ (function () {
    function OrderDetailShippingComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    /**
     * @param {?} address
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getAddressCardContent = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        return {
            title: 'Ship to',
            textBold: address.firstName + " " + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ", " + address.country.isocode + ", " + address.postalCode,
                address.phone,
            ],
        };
    };
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getBillingAddressCardContent = /**
     * @param {?} billingAddress
     * @return {?}
     */
    function (billingAddress) {
        return {
            title: 'Bill To',
            textBold: billingAddress.firstName + " " + billingAddress.lastName,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                billingAddress.phone,
            ],
        };
    };
    /**
     * @param {?} payment
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getPaymentCardContent = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
        return {
            title: 'Payment',
            textBold: payment.accountHolderName,
            text: [
                payment.cardType.name,
                payment.cardNumber,
                "Expires: " + payment.expiryMonth + " / " + payment.expiryYear,
            ],
        };
    };
    /**
     * @param {?} shipping
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getShippingMethodCardContent = /**
     * @param {?} shipping
     * @return {?}
     */
    function (shipping) {
        return {
            title: 'Shipping Method',
            textBold: shipping.name,
            text: [shipping.description],
        };
    };
    OrderDetailShippingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-details-shipping',
                    template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress)\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress)\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card [content]=\"getPaymentCardContent(order.paymentInfo)\"></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode)\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-account-summary{background-color:var(--cx-background-color,var(--cx-g-color-background));margin-bottom:var(--cx-margin,3.125rem)}@media (max-width:767.98px){.cx-account-summary{margin-bottom:var(--cx-margin,0)}.cx-account-summary .cx-summary-card{padding-left:var(--cx-padding,0);padding-right:var(--cx-padding,0)}}"]
                }] }
    ];
    /** @nocollapse */
    OrderDetailShippingComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    return OrderDetailShippingComponent;
}());
export { OrderDetailShippingComponent };
if (false) {
    /** @type {?} */
    OrderDetailShippingComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailShippingComponent.prototype.orderDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLXNoaXBwaW5nL29yZGVyLWRldGFpbC1zaGlwcGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0Q7SUFNRSxzQ0FBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFBRyxDQUFDOzs7O0lBSWhFLCtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsNERBQXFCOzs7O0lBQXJCLFVBQXNCLE9BQWdCO1FBQ3BDLE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUssT0FBTyxDQUFDLFNBQVMsU0FBSSxPQUFPLENBQUMsUUFBVTtZQUNwRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLEtBQUs7Z0JBQ2IsT0FBTyxDQUFDLEtBQUs7Z0JBQ1YsT0FBTyxDQUFDLElBQUksVUFBSyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sVUFBSyxPQUFPLENBQUMsVUFBWTtnQkFDcEUsT0FBTyxDQUFDLEtBQUs7YUFDZDtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELG1FQUE0Qjs7OztJQUE1QixVQUE2QixjQUF1QjtRQUNsRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFLLGNBQWMsQ0FBQyxTQUFTLFNBQUksY0FBYyxDQUFDLFFBQVU7WUFDbEUsSUFBSSxFQUFFO2dCQUNKLGNBQWMsQ0FBQyxLQUFLO2dCQUNwQixjQUFjLENBQUMsS0FBSztnQkFDakIsY0FBYyxDQUFDLElBQUksVUFBSyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sVUFDdkQsY0FBYyxDQUFDLFVBQ2Y7Z0JBQ0YsY0FBYyxDQUFDLEtBQUs7YUFDckI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw0REFBcUI7Ozs7SUFBckIsVUFBc0IsT0FBdUI7UUFDM0MsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxPQUFPLENBQUMsaUJBQWlCO1lBQ25DLElBQUksRUFBRTtnQkFDSixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ3JCLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixjQUFZLE9BQU8sQ0FBQyxXQUFXLFdBQU0sT0FBTyxDQUFDLFVBQVk7YUFDMUQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtRUFBNEI7Ozs7SUFBNUIsVUFBNkIsUUFBc0I7UUFDakQsT0FBTztZQUNMLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ3ZCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMscS9CQUFxRDs7aUJBRXREOzs7O2dCQU5RLG1CQUFtQjs7SUErRDVCLG1DQUFDO0NBQUEsQUE3REQsSUE2REM7U0F4RFksNEJBQTRCOzs7SUFHdkMsOENBQTBCOzs7OztJQUZkLDJEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE9yZGVyLCBBZGRyZXNzLCBQYXltZW50RGV0YWlscywgRGVsaXZlcnlNb2RlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi91aS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtc2hpcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UpIHt9XG5cbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnU2hpcCB0bycsXG4gICAgICB0ZXh0Qm9sZDogYCR7YWRkcmVzcy5maXJzdE5hbWV9ICR7YWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgdGV4dDogW1xuICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICBgJHthZGRyZXNzLnRvd259LCAke2FkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHthZGRyZXNzLnBvc3RhbENvZGV9YCxcbiAgICAgICAgYWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGdldEJpbGxpbmdBZGRyZXNzQ2FyZENvbnRlbnQoYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3MpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdCaWxsIFRvJyxcbiAgICAgIHRleHRCb2xkOiBgJHtiaWxsaW5nQWRkcmVzcy5maXJzdE5hbWV9ICR7YmlsbGluZ0FkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYmlsbGluZ0FkZHJlc3MubGluZTEsXG4gICAgICAgIGJpbGxpbmdBZGRyZXNzLmxpbmUyLFxuICAgICAgICBgJHtiaWxsaW5nQWRkcmVzcy50b3dufSwgJHtiaWxsaW5nQWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGV9LCAke1xuICAgICAgICAgIGJpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGVcbiAgICAgICAgfWAsXG4gICAgICAgIGJpbGxpbmdBZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0UGF5bWVudENhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnUGF5bWVudCcsXG4gICAgICB0ZXh0Qm9sZDogcGF5bWVudC5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgcGF5bWVudC5jYXJkVHlwZS5uYW1lLFxuICAgICAgICBwYXltZW50LmNhcmROdW1iZXIsXG4gICAgICAgIGBFeHBpcmVzOiAke3BheW1lbnQuZXhwaXJ5TW9udGh9IC8gJHtwYXltZW50LmV4cGlyeVllYXJ9YCxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGdldFNoaXBwaW5nTWV0aG9kQ2FyZENvbnRlbnQoc2hpcHBpbmc6IERlbGl2ZXJ5TW9kZSk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1NoaXBwaW5nIE1ldGhvZCcsXG4gICAgICB0ZXh0Qm9sZDogc2hpcHBpbmcubmFtZSxcbiAgICAgIHRleHQ6IFtzaGlwcGluZy5kZXNjcmlwdGlvbl0sXG4gICAgfTtcbiAgfVxufVxuIl19