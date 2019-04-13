import { ServiceWorkerModule, ɵangular_packages_service_worker_service_worker_b } from '@angular/service-worker';
import { __awaiter } from 'tslib';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbTabsetModule, NgbAccordionModule, NgbTabsetConfig, NgbAccordionConfig, NgbRatingModule, NgbRatingConfig, NgbDropdownModule, NgbTypeaheadModule, NgbCollapseModule, NgbModalModule, NgbPaginationModule, NgbPaginationConfig, NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { combineLatest, BehaviorSubject, concat, from, isObservable, of, fromEvent, ReplaySubject, Subscription, merge, Subject } from 'rxjs';
import { NG_VALUE_ACCESSOR, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule, HttpUrlEncodingCodec, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { debounceTime, tap, filter, map, takeWhile, endWith, first, skipWhile, startWith, distinctUntilChanged, switchMap, withLatestFrom, multicast, refCount, take, delay } from 'rxjs/operators';
import { CommonModule, isPlatformServer, DOCUMENT } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Component, Input, EventEmitter, Output, ElementRef, ChangeDetectorRef, Renderer2, NgModule, ChangeDetectionStrategy, forwardRef, ViewChild, Directive, HostListener, ViewEncapsulation, Injectable, APP_INITIALIZER, Inject, PLATFORM_ID, Optional, Injector, HostBinding, TemplateRef, ViewContainerRef, defineInjectable, inject, INJECTOR } from '@angular/core';
import { I18nModule, CartService, UrlTranslationModule, ConfigModule, CartModule, CheckoutService, GlobalMessageService, GlobalMessageType, UserService, RoutingService, CartDataService, CheckoutModule, ServerConfig, WindowRef, Config, CmsConfig, provideConfigFactory, serverConfigFromMetaTagFactory, TranslationService, TranslationNamespaceService, AuthService, RoutingModule, AuthGuard, ProductService, UserModule, CmsService, StoreDataService, StoreFinderService, GoogleMapRendererService, provideConfig, StateModule, AuthModule, CxApiModule, SmartEditModule, defaultCmsModuleConfig, CmsModule, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, ContextServiceMap, ProductReviewService, SiteContextModule, StripHtmlModule, PageMetaService, ProductModule, ProductSearchService, CmsPageTitleModule, StoreFinderCoreModule, PageType, GlobalMessageModule, OccUserService, OccMiscsService, OccOrderService, OccConfig, DynamicAttributeService, CxApiService, ComponentMapperService, PageRobotsMeta, NotAuthGuard } from '@spartacus/core';
import { Title, Meta } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderSummaryComponent {
}
OrderSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-summary',
                template: "<h4>{{ 'orderCost.label.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-savings\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.discount' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalDiscounts?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n</div>\n\n<cx-promotions [promotions]=\"cart.appliedOrderPromotions\"></cx-promotions>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:block;padding:var(--cx-padding,1rem);margin:var(--cx-margin,0 0 1.5rem 0)}.cx-summary-label{text-align:var(--cx-text-align,start);padding:var(--cx-padding,0)}.cx-summary-amount{text-align:var(--cx-text-align,end);padding:var(--cx-padding,0)}.cx-summary-row{padding:var(--cx-padding,.5rem 0);display:var(--cx-display,flex);flex-wrap:var(--cx-flex-wrap,wrap)}.cx-summary-savings{color:var(--cx-color,var(--cx-g-color-success))}.cx-summary-total{font-weight:var(--cx-font-weight,var(--cx-g-font-weight-bold,700))}"]
            }] }
];
OrderSummaryComponent.propDecorators = {
    cart: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartItemComponent {
    constructor() {
        this.compact = false;
        this.isReadOnly = false;
        this.cartIsLoading = false;
        this.remove = new EventEmitter();
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} product
     * @return {?}
     */
    isProductOutOfStock(product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    }
    /**
     * @param {?} updatedQuantity
     * @return {?}
     */
    updateItem(updatedQuantity) {
        this.update.emit({ item: this.item, updatedQuantity });
    }
    /**
     * @return {?}
     */
    removeItem() {
        this.remove.emit(this.item);
    }
}
CartItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item',
                template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"\n        { route: [{ name: 'product', params: item.product }] } | cxTranslateUrl\n      \"\n    >\n      <cx-picture\n        [imageContainer]=\"item.product.images?.PRIMARY\"\n        imageFormat=\"thumbnail\"\n      ></cx-picture>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { route: [{ name: 'product', params: item.product }] }\n                | cxTranslateUrl\n            \"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.label.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.label.item' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          ngbTooltip=\"The quantity represents the total number of this item in your cart.\"\n        >\n          {{ 'cartItems.label.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            isValueChangeable=\"true\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.label.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ item.product.stock?.stockLevelStatus }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.action.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-name{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);overflow-wrap:var(--cx-overflow-wrap,break-word);padding:var(--cx-padding,0)}.cx-name .cx-link{color:var(--cx-color,var(--cx-g-color-text));-webkit-text-decoration:var(--cx-text-decoration,none);text-decoration:var(--cx-text-decoration,none)}.cx-name .cx-link:hover{color:var(--cx-color,var(--cx-g-color-primary))}.cx-code{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-secondary));padding:var(--cx-padding,.625rem 0)}.cx-property{display:var(--cx-display,flex)}.cx-label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);overflow-wrap:var(--cx-overflow-wrap,break-word);padding-right:1rem}.cx-value{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);overflow-wrap:var(--cx-overflow-wrap,break-word);font-weight:var(--cx-g-font-weight-normal,400)}@media (max-width:767.98px){.cx-info-container{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column)}.cx-label{min-width:var(--cx-min-width,5rem)}.cx-value{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222)}}.cx-price{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,center);align-items:var(--cx-align-items,center);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:400}@media (max-width:767.98px){.cx-price{justify-content:var(--cx-justify-content,flex-start)}}.cx-price .cx-old{-webkit-text-decoration:var(--cx-text-decoration,line-through);text-decoration:var(--cx-text-decoration,line-through);color:var(--cx-color,var(--cx-g-color-secondary));padding:var(--cx-padding,0 1rem 0 0)}.cx-price .cx-new{color:var(--cx-color,var(--cx-g-color-primary))}.cx-quantity{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,center);align-items:var(--cx-align-items,center)}@media (max-width:767.98px){.cx-quantity{justify-content:var(--cx-justify-content,flex-start)}}.cx-total{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);align-items:var(--cx-align-items,center)}@media (max-width:767.98px){.cx-total{justify-content:var(--cx-justify-content,flex-start)}}.cx-promo{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-success));padding:var(--cx-padding,.75rem 0);margin:var(--cx-margin,0)}.cx-availability{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-danger));padding:var(--cx-padding,.75rem 0);margin:var(--cx-margin,0)}.cx-actions{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);padding:var(--cx-padding,0)}@media (max-width:767.98px){.cx-actions{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-start);padding:var(--cx-padding,0)}}.cx-actions button.link{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-text))}.cx-compact{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row)}.cx-compact .cx-image-container{padding:var(--cx-padding,0)}.cx-compact .cx-info-container{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);margin:var(--cx-margin,0)}.cx-compact .cx-actions,.cx-compact .cx-price,.cx-compact .cx-quantity,.cx-compact .cx-total{justify-content:var(--cx-justify-content,flex-start);padding:var(--cx-padding,0)}.cx-compact .cx-actions .cx-label,.cx-compact .cx-price .cx-label,.cx-compact .cx-quantity .cx-label,.cx-compact .cx-total .cx-label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);min-width:var(--cx-min-width,5rem)}.cx-compact .cx-actions .cx-value,.cx-compact .cx-price .cx-value,.cx-compact .cx-quantity .cx-value,.cx-compact .cx-total .cx-value{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222)}.cx-compact .cx-actions button.link,.cx-compact .cx-price button.link,.cx-compact .cx-quantity button.link,.cx-compact .cx-total button.link{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-text))}"]
            }] }
];
CartItemComponent.propDecorators = {
    compact: [{ type: Input }],
    item: [{ type: Input }],
    potentialProductPromotions: [{ type: Input }],
    isReadOnly: [{ type: Input }],
    cartIsLoading: [{ type: Input }],
    remove: [{ type: Output }],
    update: [{ type: Output }],
    parent: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const missingProductImgSrc = 
// tslint:disable-next-line:max-line-length
'data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABVAAD/4QOIaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjEwOTUyZjYtMmRmOS00ZmIxLWJmZDItODBlZDVjZDY3YjhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU2RkNERDA2RDQyQjExRTVBRUE3REEyNEFBNDQxNDBDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RkNERDA1RDQyQjExRTVBRUE3REEyNEFBNDQxNDBDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZjI5Zjc3Zi1hZWM5LWY0NDgtOTM0MC1iZGJkYjk2MDk3OTIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MDcyNjk0NS0zNjQ0LTExNzgtODI2OC1mMDQzMTA0ZTU5MWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAQEBAQECAQECAwIBAgMDAgICAgMDAwMDAwMDBQMEBAQEAwUFBQYGBgUFBwcICAcHCgoKCgoMDAwMDAwMDAwMAQICAgQDBAcFBQcKCAcICgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAEsASwDAREAAhEBAxEB/8QArQABAAIDAQEBAQAAAAAAAAAAAAcIBAUGAwIBCQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEFEAABAwMCAwQCCgwKBwgDAAABAAIDBAUGEQchEggxQVETYRRxgeEiMlKTFVYXkUKS0iNzs3S0FjY3obHRYnJTVJRVGPCCojNjJHXBo9M0ZCW1OLKkSBEBAAICAQQCAgMBAQAAAAAAAAECEQMxIVESEzIEQSLwYRRDcf/aAAwDAQACEQMRAD8A/v4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPx72saXvIDANSTwAA7yg1D9wsBjeY5L5b2vadC01lMCD6RzrvjKPlHd+fWJt/8A47b/AO+033674z2PKO59Ym3/APjtv/vtN9+njPY8o7n1ibf/AOO2/wDvtN9+njPY8o7n1i7ff47b/wC+0336eM9jyju2Ntu1rvNP65aKmKqpCdBLTSMlZr/SYSFyYw7E5ZC46ICAgICAgICAgICAgICAgICAgICAgICAgICAgICDUZ1mlm29xWsy2/O0oKRnNyN055Hk8rI2A/bOcQAu1rmcI2tiMqebob455upcJJLxVPp7ESfItdM9zaeNmvAOA053eLne1oOC201xVivsmzjlNAQEBAQbHGstybDri27YvXTUNwaQfMp3lvNpx0cOxw9BBC5MRPLsWmOFsOnTfmPd6zy2y9NbDmtA1rqlkY0ZPETyiZg7uPBw7j2cDoMmzX4tmrZ5f+pKVS0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQV765cuLWWXBqd50d5l0qmA8OH4GHUfdrToj8s32LcQrwtDMmrGeivKr/AI7RXyqvFPST1kMdSaV0Mj3RiRoe1rnAjjoePDtVM74iV8aJmGd/kUyL6QU392l++XP9Ednf8/8AZ/kUyL6QU392l++T/RHY/wA/9n+RTIvpBTf3aX75P9Edj/P/AG/R0KZFrxyCm0/Npfv0/wBEdj/P/aHs9wy6be5dXYfeC11dRPDDJHryPa5oex7eYA6OaQVdW2YyptXxnDd9P+XHC93LNdXvLKKWYUNV4GKp/Anm9AJDvaUdlcw7rtiy7Cwt4gICAgICAgICAgICAgICAgICAgICAgICAgICAgpb1HZZ+uG8V4rY389FSyC3U+nYGUo8o6egvDj7a3aoxVh2zmzR7Y4s7NdwbPi2msVZVRMmH/BaeeU+0wFdvOIyjSMzhe1rWsaGMGjANAB2ABYHoP1AQEBBWXrfxL1DLrXmUDdIbhTupJnD+tpnagn0ljwPaWrRPTDL9ivXKD2PfG8SRkte0gtI4EEdhCvZ17ds8pbmu39oynXWWspYpJj/AMYN5JR7TwQsFoxOHoVnMZb1RSEBAQEBAQEBAQEBAQEBAQEBAQEBAQYOS5HacRsFXkt9k8q00Ubp536anlb3ADtJPADvK7EZcmcQrZlHW1n1bc3uxOipaKzNJETaljp5nN14F7g5rQT4AcPErTGiPyyzvn8Nb/nN3k/9D/dnffqXoq577H+c3eT/AND/AHZ336eip77NjjPWzuDR3NjsqoqStsxIErKZj4JmjXiWO5nN19BHHxC5OiPw7G+fynu77mWNu1NVuhZZfNtIopK2mcRoS8NIYxwPY7zPekeKzRXrhom/TKj080tTM+oncXzyOL3ud2lzjqSfbW9gTP0S4mbnnlflszNae103kxOI4CaqJaND+La77Ko3z0wv0R1ytCsrWICAgIIz6tMS/WbZ2rrYW81baZI7lH48jT5cv+w8n2lbpnFlW6uaqgLYxLQ9EuWfOeBV+JzO1qLXU+bE3XiIaoF44f02v+ysu+OuWvRPTCalQvEBAQEBAQEBAQEBAQEBAQEBAQEBB51NVS0cRnq5GxQjtfI4NaPbdwQRT1c3y21WzFTT2+rile+qpQ9kMrHEtEnNxDT4gFXaY/ZTun9VTlrYxAQEEo1OaG2dKNJiTJdau5XadhjDuLaaDlndwHHQylqq8f3yt8v0wi5Wqlruki22bEtp4664VMENzu08lc9sksbXiMHyYwQT2aMLvbWTdOZbNMYhKH6x49/b6b5eL+VVYlbmD9Y8e/t9N8vF/KmJMwfrHj39vpvl4v5UxJmD9Y8e/t9N8vF/KmJMwfrHj39vpvl4v5UxJmGNea/FL7aKqyVtdTuo6yGSllHnRcWSsLHd/gV2ImCZiVE7za5rJeKqzVJBqKSaSme5vEF0bywkEdx0W+Jy8+YwkrpBy5uN7uRWuofy0V3gkoTr2ea38NGfZ1aWj2VVurmFumcWWz9do/61n3TVjbD12j/rWfdN/lQPXaP+tZ903+VA9do/61n3Tf5UD12j/rWfdN/lQfTKmnldyxyNc7wa4E/wIPtAQEBAQEBAQEBAQEBAQc1u5uNRbWYNV5bUsEtVGBFSU5OnmzyHlY06dw7T6AVKlfKcI3t4xlTLNM+y7cG7PvGWVslVUuJcxjnERRA/axxj3rQPQFurWI4YbWmeWmXURAQEBAQEBB901NU1k7aakjdLUvOjI42lznHwAbxKDrbLsDvJf2Nlt+PVYid2OqWtpgR4/wDMFihOysflONdp/Ddt6SN8nN5jbImnwNZS6/wPUfdVL02YN06Y98LSC+WxSTRjjrSzU83+zG8u/gXY217uTqtH4cfesbyHG6j1XIaGooansDKuGSEnTwEgGqsiYlCYmGEjggIP3U+KBqfFA1PiganxQNT4oPSjrq231LK2gmfBWRnmjlhe5j2kd4c0ggoLQdKm+113Bp58JzGbz8looxPS1btA+opwQ1wf4vYSOPeDx4gk5d2vHWGvTsz0lMyoXiAgICAgICAgICAgIII66nuGM2BgPvDVVBI7iRE3T+NaPr8yz/Y4hWtaWUQEBAQEBBkWu1XK93CK02eCSquc7hHDTwNL5HuPcGt4lJnDsRlPW1vRZLPHFd91Kkxa6PFponDnHommGoHpDPulnvv7NFNHdOOKbf4Vg1MKXErZT0LNNC+GMeY7+nI7V7vbJVE2meV8ViOG4UUhAQeFxtdtvFI6gu1PFVUL+D4aiNsjHey14IKROCYyifcjo8wDKI5K7DXGx3s6uDI9ZKR7vAxk6t/1CAPAq6u6Y5U20RPCum4e1+abX3X5qy6kMPNr5FTH7+nnA745BwPpB0I7wFpreLcMtqTXlzykiICAgICAgk3pDc5u+FAGnQOgqwfSPV3H+MKrd8Vun5LfLG2iAgICAgICAgICAgIIH66v2cx/85qPyTVo+vzLP9jiFbFpZRAQEBAQbTDcNyDPcip8XxmAz3SoOgHYxjR8J73dzWjiT/2rlrREZdrWZnELgbM7GYttBaQKRrarKZmgVlzkaOd2vEsj1+AzXuHb3692O+ybNtNcVdnVVVNQ0z6ytkbDSRNMkssrgxjGtGpc5ztAAB3lVrEPbjdZeE43LJbcJp3Xu4t1aajmMNI09nB5Bc/T0AA9xV9dEzyotviOESZH1ab0X57vVa6K20xOoit8DBoPDnm53/wq2NNYUzutLSU+72+N3le6hv11nkaOZ4pp5yGjs1LY+ACl4V7I+du7NtnUhvnjtQA69TyFvwoa+OObX2fNaXfYK5OqsuxttCRcG64ahsjKTcS1NdCeDq21khw9JhlJB9Ojx7Crto7La/Y7pzw7OsTz+1C9YhXR1tDwD/LOj43Ea8sjHaOafQ4BUWrMctFbRPD2ynFcfzSyTY9k9KyrtE40fFIOw9zmkcWuHcQdQuRMxwTETyqPv1sJd9n7sKykL6vCap5bR1jh76Nx4+TNpwDgBwPY4cR3gbNezyY9mvx/8R4rFQgICAgIJN6Rf34278TWfozlXu+K3T8lvlibRAQEBAQEBAQEBAQEED9dX7OY/wDnNR+SatH1+ZZ/scQrYtLKICAgIPqGGWolbT07S+d5DGMYC5znOOgAA4kkoLj9PGzFLtNiTZLgxrszr2tluE4GpjB4tgafBnfp2nj2aLFsv5S3aqeMOwy3LLDg+P1GTZJOKe00zeaR54kk8GtaO0uceAAUIjM4TtOIyqJvTv8A5Vu7XvpS51Fhsbtaa2xu4O0PB85Hw39/gO7vJ2U1xVi2bJs4FWKxBO3Qt+1V+/NIfyxVH2OIaPr8ysReccx/Iqc0l/oaetpnDQx1cMcrfsPBWaJmGmYiUWbjdHWA5LDJW4U51kvXFzY2l0tI8+Do3Eubr4tOg8Cra7pjlTbRE8IFrKDdTp1zZj3mS23tmpimjPPT1UQPHQ/BkYe8EajvAK0Zi8M/WkrPbG752TeOyuAa2ky2laDXUGuo07PNi14lhPttPA9xOXZr8WvXs8nW5RjNlzKwVWM5BCJ7RVsMUsZ7ePEOae5zTxB7ioROE5jMYUn3X24um1ma1WJ3HV8LD5tHUEaCeneTyP8AZ4aEdxBW6lvKMsF6+M4c2pIiAgICCTekX9+Nu/E1n6M5V7vit0/Jb5Ym0QEBAQEBAQEBAQEBBA/XV+zmP/nNR+SatH1+ZZ/scQrYtLKICAgIJg6O9t48rzyTMLlHzWmxhskQcODquTXyvuAC72dFTutiML9FczlatZGtUPqe3kn3JzB9htMuuGWmR0VMGH3s8w94+c+Pe1vo495WzVTxhi238pRgrVQgIJN6Zt3MV2kvlzuGVNndT1kEcMXqkbZCHNk5jzBzm8NFVtpNuFuq8V5WIw3qI2iziobQ2m7MhuTzyspq9rqZ7iewNMoDHE+DXErNbXaGmu2su2UFjRbibd4zudjcuNZNCHwP1dBO0DzaeXTRskbj2EfYI4HgpVtNZ6I2rFoxKoV2tub9Ou6TWMk8u9W57Zqedmoiqqd/YdO9j26hw7jqO0LZExeGKYmkrg7f5tadxMQosvsx0pKtnM6MkF0UjTyvjdp3tcCPT2rHauJw21t5RlwPVzttFmG3Tsooo9b9Y+apa4D3z6U6ecw+wAHj2D4qzTbE4V7q5jKpa1sYgICAgk3pF/fjbvxNZ+jOVe74rdPyW+WJtEBAQEBAQEBAQEBAQQP11fs5j/5zUfkmrR9fmWf7HEK2LSyiAgICC43SxiUeK7N26UtArbnz3Sd2mhPnHSP/ALprVi22zZt0xirJ6ks7lwLaa4V1G/ku1bpbKRwOhD5wQ5w9LYw4j0pqrmXdtsVUwW1hEBAQEBBNfTf1K3PGblT4NntS6oxSctgpKydxdJRvJ0aHOPExE8OPwe7hwVG3VnrC/Vtx0laBZWtEvV7txDlm3TsspIx8+WPWo5gPfPpXECZp9DeD/RofFXabYnCndXMZcT0Q53LT3e5bd1b/APlahnzlRtJPvZY9GSgf0mkH/VU99fyr0W/CxlXS09dSS0NWwPpZmOilY7scx45XA+yCszUoZm2OS4hl9zxibXmoKmalBP2zY3lrXe23Qr0KzmMvOtGJw1a64ICAgk3pF/fjbvxNZ+jOVe74rdPyW+WJtEBAQEBAQEBAQEBAQQP11fs5j/5zUfkmrR9fmWf7HEK2LSyiAgIP1rS5wa3i48AEF/catrLPjlBaIxpHS00FM0DuEcQZ/wBi8+ZzL0YjEIG6671Jrj2OsP4I+s1sg8SOSJh//JaPrxyz/YnhXpaGYQEBAQEBBc7ppzOozfaG21tc4vuVHzW2oe46lzqfQMJPiYy0n0rFtrizdqtmrtbrbqe8WuptFYNaSqikppR26skYWO/gKhE4WTGVNNkauow/fezQudyyx15tspHDUSl1K7X7pbdnWrDr6WXTWFuU86sbVHbN77m+IaMqo6aq09LoGsd/C0rbpn9WLdH7I3VioQEBBJvSL+/G3fiaz9Gcq93xW6fkt8sTaICAgICAgICAgICAggfrq/ZzH/zmo/JNWj6/Ms/2OIVsWllEBAQetC5rK6F7/gB7CfYDgg/oLGQ6Nrm/BIBC856Ss/XOx4zKySn/AHZopGj2ROSf4wtX1+JZfscw2uy3TFtfuFtna8uu8lZ86VbZfPEE7GsDo53xaAGM6cG+K5fbMTh3Xqi0ZdBeejXamls9XVUDq91fHDLJA11RGQZGsJaD+D8VGN0pTohVhamQQEBAQdztl1BZ5tPY5sfxdtK6gnnNW81cT5HB7mNjOha9o00aO5Qvri3Kym2aujHWlvADr5VuPo9Wl/8AFUPRVL32cRg1bWZBu9aLlK0ev1l3pql7Yxo3nkrGyO5R3DUqy3SquvWy8ywPQVL6ynsdvM8N7W0VKHez74/xFbNHxY9/yRQrVIgICCTekX9+Nu/E1n6M5V7vit0/Jb5Ym0QEBAQEBAQEBAQEBBA/XV+zmP8A5zUfkmrR9fmWf7HEK2LSyiAgICC+m395jyLBrPfYjzNq6OmnJ/nOhaXD2jqFgtGJehWcwh7rmxySpx+yZVE0ltLPNRTOHcKhgkZr6NYz9lXaJ64U/YjpEtl0T5TFc9uqzF3uHrlrqnPDNePk1I52nT+mHrm+OuXdE9MJmVC9Sjfzbmp213JrrUIy2y1L3Vttfp70wSuLg0HxYdWn2Fu128oYdlfGXFqasQEBAQEHf9MeOy5FvVZmNGsFE99xmPxW07C5p+75Qq9s4qs1Rmy5ixNymXU7ehe97r3KwgxUz4qJund5ELY3D7sFbdUYrDDtnNpcCrFYgICCTekX9+Nu/E1n6M5V7vit0/Jb5Ym0QEBAQEBAQEBAQEBBA/XV+zmP/nNR+SatH1+ZZ/scQrYtLKICAgILYdHGaMyHa843M/W42WZ0BaSNfImJmiPsalzfaWTdXEtmi2Ydxu1gsW4+3tzxI6CrqIi+ke7sbURnzIjr3DmAB9BKrpbxnKy9fKMKrbCbi1Gz257H3sOhtM7nWy7RO4GIc+nOR4xvGp9GoWvZXyhj128ZXKiljmjbNC4PheA5j2kEOBGoII7QVibnMbs7TY3u7jZsV8BirIiZKGujaDJTyEaajXTVp+2brx9BAInS81lC9ItCp24+xW422VVJ89UL57M0ny7lRtdLTub3EuA1YfQ8Ba67Isx21zVxymgICAgILMdFO3Utpx+t3FuLC2ouX/KUPMND6tE7V7x6HyDT/VWXfbrhq0VxGUyZRkFDieOV2S3I6UNDBJVSekRtLtB6SeAVMRmV8ziMqGXe51V7u1Vea481bVyyVMzvF8ry938JXoRGHnzOWMjggICCTekX9+Nu/E1n6M5V7vit0/Jb5Ym0QEBAQEBAQEBAQEBBA/XV+zmP/nNR+SatH1+ZZ/scQrYtLKICAgIO96ctz2bYbjQVtwk5Mbrx6jcST71jHuBZKf6DtCfRqq9tPKFmq/jK5rXNe0PYQWEagjiCCsTcrr1dbGzQ1Mu7GKwl9NJob1BGNeRwGgqQB3Hsf4Hj3nTTp2fiWbdr/MMfpn6lqXHqaDbvcOfkszNI7ZcpD72AE8IZiexnxXfa9h4dndurPWHNW3HSVkY5I5o2zQuD4ngOa5pBBBGoII7llan0QCND2IIB63LLZrdjdlq7fSQQVctXMJJYYo2PePK10c5oBK0aJ6s2+OkK5LSzCAg7TZHZ68bvZWy3QB0WOUxbLc6zThHFr8Bp+O/TRo9vsChsv4ws108pXQtdsoLLbYLRaomwW2ljZBBCwaNZGxvK1o9gBYpnLdEYQZ1o7px0drg2stMmtbVclZdC0/AhaeaKM6d7nDmI8APFX6Kfln33/Cty0sogICAgk3pF/fjbvxNZ+jOVe74rdPyW+WJtEBAQEBAQEBAQEBAQQP11fs5j/wCc1H5Jq0fX5ln+xxCti0sogICAgILL9J2/MN5t8O12Wz6XymbyWmolI/DwtHCEk/bsHwfFvpHHNu146w1admekpyliinidDM0PheC17HAFrmkaEEHtBWdoV13z6RaqGabK9p4vMpXay1FlB9+w9pNMT2j+YeI7teAGnXu/Es2zT+YcBtzv/ufs9ObE1xqLPA4sltFza/SIg++awnR8Z9A4a9oVltcWVV2TVNGLdau2l1ia3JqaqtVZw5veesw6+h8Wj/ssVE6JXxvhxnVlutt/uNi9nhw25MraiCplkmjayVj2NdFoCRK1verNNJieqG68WjogpXs4gkTZ3pwzTdSeK4zsdbcN1BfcJ2kGVvhTsOheT8b4I8deCrvtiq2mqbLY4Tg+Nbe4/DjWLU4p7bFxJ7ZJXke+kkd2uce8+0NBoFjtaZnq2VrERiGo3i3asm0WKSXu4Fst3lDordRa6Onm04a6cQxva493skKVKeUo3v4wpdkWQXbKr5VZHfJTNdqyR088h73O7gO4AcAO4cFuiMMMzlhI4ICAgIJN6Rf34278TWfozlXu+K3T8lvlibRAQEBAQEBAQEBAQEED9dX7OY/+c1H5Jq0fX5ln+xxCti0sogICAgIPuCeelnZU0z3R1MbhJHJGS1zXNOoII4ggoLKbDdWNvvUMGI7ozNpr2NIqe7P0bDUdwEx7GP8A53wT6D25tmnHWGrXuz0lObXNe0PYQWEagjiCCs7Q5zO9o9vNyI9MttkU9WBysq2axVDQOzSWPRxA8CSPQpVvNeEbUi3KKMj6GLLO90uJ3yanaTq2GvhZONPDniMZ/wBkq6Psd4Uz9ftLnpOhrOw8iK80Do+4uFQ0/YDD/Gpe+Ef88tjZ+hSvdKHZBkEbIftmUdM57j7DpHtA+wuT9j+nY+v/AGkfBul7aTCJGVfqRul1ZoW1F0Im0I46tiAbEOPYeUkeKqttmVtdVYSG1rWtDWjRo4ADsAVaxw+8O/WHbRULoqx4rMre3mprXC4eYdRwdKRryM9J4nuBVlNc2V32RVUjP9wMm3KyOXJspn82tf72ONuoihjB1bHG3jo0fZPadStlaxWMQx2tNpzLSLqIgICAgIJN6Rf34278TWfozlXu+K3T8lvlibRAQEBAQEBAQEBAQEEI9cNnuFZhNpu9NGXUNHVPbUvH2nnRhrCfQSNFfonqo+xHRWJamQQEBAQEBAQd9tf1G7jbXsZbqOcV+Ns0At1cXPYxvhE8HmZ7APL6FXfVFllNs1TphXWLtbkbGQ5F51kuJ4OFS0zQa/zZYQTp6XNaqLaZhorviUh2XO8KyOMS2G7UdY13YKeoiefbAdqFVNZhbFoltgQ4atOo8QuOsW4XuzWmMy3Wrhpoh2uqJWRge28hdw5M4cVlfU3s1ikbue7Nr6tuulPa2moc4jwe3SMe24KcarShO2sIb3I6zMyyJkltwSnFmtrtWmqcRLWOaeHA6cjNR4AkdxV9dERyotvmeEN1dXVV9TJW10r5qyVxfLLK4ve9x4kuc7Ukn0q5Q80BAQEBAQEEp9HdvqqvemnqoGF0FLS1U0zgODWuj8ka/wCs8KrdP6rtEfstwsbYICAgICAgICAgICAgwMoxqz5jj9XjF/i860VkZhmZ2HQ8QWnuIIBB7iF2JxOXJjMYVY3G6SdyMSr3yYvF892F7tIZKbQVDWniBLEdOI8W6j2Oxa67onlktpmOHMfULvJ9HK35L3VL2V7oeu3Y+oXeT6OVvyXup7K9z127H1C7yfRyt+S91PZXueu3Y+oXeT6OVvyXup7K9z127H1C7yfRyt+S91PZXueu3Y+oXeT6OVvyXup7K9z127H1C7yfRyt+S91PZXueu3Y+oXeT6OVvyXup7K9z127H1C7yfRyt+S91PZXueu3Y+oXeT6OVvyXup7K9z127PZuyu+bG8jLHcQzwDXAfxp51PCzzfsTvPK7nkx6uc/xdGSf4Snsr3PXbs+fqF3k+jlb8l7qeyvc9dux9Qu8n0crfkvdT2V7nrt2PqF3k+jlb8l7qeyvc9dux9Qu8n0crfkvdT2V7nrt2PqF3k+jlb8l7qeyvc9dux9Qu8n0crfkvdT2V7nrt2PqF3k+jlb8l7qeyvc9dux9Qu8n0crfkvdT2V7nrt2PqF3k+jlb8l7qeyvc9duzNsXTZvNfbiy3tsstI13wqiu0hiYPEuOp+wCVydtYdjVaVltjNkLTs1YpIGyiryas5XV9by8oPLryxxg8QxuvfxJ4nuAzbNnk1a9fi7pVrBAQEBAQEBAQEBAQEHnU1DKaIyv7Ag0FdfauaQiE8rApRCOWN851/xyuuZPnOv+OUwZPnOv8AjlMGT5zr/jlMGT5zr/jlMGT5zr/jlMGT5zr/AI5TBk+c6/45TBk+c7h8cpgy+hX3N3Y4oPoVV3I11K46/DW3VvaSuj5NyuA7XlMOZfnznX/HKYMnznX/ABymDJ851/xymDJ851/xymDJ851/xymDJ851/wAcpgyfOdf8cpgyfOdf8cpgy+4bxXxP5i7UeCYMt7arm2uj0dwkHaozCUSzFx0QEBAQEBAQEBAQEBBrcgc7yQwdhXYclpfICllHB5ATJg8gJkweQEyYPICZMHkBMmGnrM4w6gyeLDaytazJp+XyqQskLnc4JboQ3l4geK7icZczGcPjKtwMIwioipcqr2Uc87TJE2RkjuZrToSORpHakVmeC1ojlvMcZRZPbIL3Z5Wz2mpaJYZm66Pae8a8VyejsdWHkW4u1GBXX5jy67RUl3DGymB7ZXEMfroT5bXDjp4rsVmeHJvWvLrqKK31FLHVUgDqaVrZY3aaatcOYHjx7FBY5247x7UWfJHYhcbvBFkTZWUzqZzZSRLJpytLg0t+2HfwUopMxlCb1icOndS07u1oUE3P5pk23+E0zKnL7jBb2S6+U2Z+j36dvKxurnad+gUqxM8I2mI5clbt6tmL/WtobNfoXVUjgxjKiKopuZzjoAHVEbBxPpU/C0fhCL1n8tjl2WYvgkEVTltW2igncY4nSNkcHOA1I94D3LkRM8O2mI5aL6+Nnf8AHIvk6j7xS8LdkfZXu7HyAoZTweQEyYPICZMHkBMmDyAmTB5ATJhnWJpZVADsXJdhvlFIQEBAQEBAQEBAQEBBgXlnO0BdhyWt8hScPIQPIQPIQPIQPIQQdm8RPV1ZIx2ltN+Ter6/CWe3zh99VWOsu+5WH2Cof5UdwIpHyfEE1WyIu9rXVc1T0l3dHWHY9HeTS1G3tbhl1Pl3TH6uWF8byNY4ZiZBzexIJB7ShujrnunonpjsgjdStnz6433dqRxNvqLqy20B7nQsgkIHHvbGyP7K0U6Yhnv1zK1seXUmNbfRX2t4UdFb2VMp101bFThxA9J00Cx4zLX5YhVr9TLrmW2uRb0V3MbyLnHOHt14se4moLe/4czDr3cpWvyxMQyeOYmVmdsdzI8t22t+X1TtZHU2tYdRwmgBZN29nvmkjXuWW9MThrpfMZQbs7izOpTdC75nuRK+e0UnJI6jbI5oPnOeIIAWkObG1rHfBIP2StF58IxDPSPOcylKnxTpIZdaG526qskN0opo56V1Pc4GkyRuDmhzBLo/iB8IFU5v/a3FP6c91zQsZiVkkaNHGskB+RKno5R+xxDQYtL0k1ltttvrmxPyKWKnhmaYbpqalzGtcOYN5fhntB0Up80Y8E5+QqGg8hA8hA8hA8hA8hBlWuLlqAVySG3UUhAQEBAQEBAQEBAQEGJcm8wXYGFyFMOHIUwHIUwHIUwHIUwP0Rk8EEHZnFydZVhY74tKf+6kWivwlnt84ZvVJoN6MDPd58P6dGuavjLu35Q5fde/V2ye7OXwWtpbQZTb3vgDOHJJVu0dLr4teJdNPFTpHlEf0hefC0/28d18LfhXTZitFOzkramsFfU6jQ+ZU00kmh9LWcrfaSls2kvXFIdn1PZRHjeyloxqneRcr0ynY4A6H1eniZLIeHi4sHpBKhqjNsp7ZxXDnLPsb1K0mDsxiguNHBidXC4voHvbry1I53tfrAXc3vuPvuHcVKdlc5RjXfGGb0mXiVrMg2kvhLaqB0k7IieI4+rVLRr4O5fslc3RxLumeYlotgsvoNj9wL5hO4LvUmVBjgdVPa7kbLTPfyE6Anke2QkO7OzuOqlsr5xEwjqt4TiWj3bx7afHskscW1lY2rhkeXVpjqPWA1wlZycewcNVKkzMdUbxWJjCUOuORsmG2Mj+2SfkCqdHK37HEPXEpekynxy1VVbJao8ijpqaSd7i4SNqGxNLif5welvPJXwwlqSF0buUqle+eQpgOQpgOQpgOQpgOQpge9CzSXVBsVx0QEBAQEBAQEBAQEBB41beYaIMfyV1w8lA8lA8lA8lB9w04LuKDU1+1eBXPNKfcKuoOfMKUMEFZ59Q3lDAWt/BteIzoCe1q75zjDk0jOXnl+2uE5reqDIMjofWbvbHB1DN51RH5ZbIJAeWJ7Wn3wB98ClbTBasS8cu2d293FrKe4ZpbhW1VK0xwvM1RFytLuYgiF7ARr46rsXmvDlqRPLPzbbfC9xbbDZ8yovXLdTyefDGJZ4eV4aWa6072HsJGhOi5W0xw7asW5YeVbM7aZrU0VXlNt9blt0TaajD6iqayONh5g3kjka13p5gSe9di8xw5NInl0NVpINAoJuWtm0WAWfMJs9tlB5OV1DpZJqpk9To903+8JjL/L466/B7ePapzeZjCEUjOTNdo9v9wy2TLbbHU1bG8jKhpfFM1vaB5kRa4gHuJ0St5jgtSLctPZumfZqx1Ta6ms4lqmHmY6qmqJmgjiPePeWfZClO20oxqrDocz22w3cWkgt+a0XrtHTPM0LPOnh5XlvKTrA9hPDxUa2mvCU1i3LRt6Vdg3DUWH/924/+Ou+63dz017O8qoA73wVax4eSuuHkoHkoHkoHkoPSmj5X8UGUuOiAgICAgICAgICAgIMK93iz2Kk9fvlXDRUTe2arlZCwey6QgLsRlyZwxbJlWLZLzfq5c6S4cvF3qVTDPp7PlOKTWYItEsyrqaagpn1ldKyGkjHM+WVzWMaOzUucQAuYday259gl5rRbbRe7fVXEnlEFNWU0smuumnKx5KlNZhGLRP5bfkcopNdbssxW71QobTc6SqrXAlsNPUwyPIA1JDWOJ4BdmsuRaJbMvhpYH1NQ4MhYC973kBrWtGpJJ4AALjrEt2VYxe5nUlluVLWVTWmR0VLURSvDAQC4tjcTpqQNV2YmHItEvlt9sLrv8wGup/nz+xedH5/wPM/3evN8H33Z2cUwZh93PKcYsU7aO83Glo6pzRI2KqqIonlhJaHBsjgdNQRqkRMk2iGa2WOSNssRDo3AOa5p1BB4gghcdYFBf7Leppae01sFVPBwmjppo5HR8SPfBhJHEHtXZjDkTl7VU9PRU7qqskbDSsHM+SVzWMaPEl2gC5h1qqTcTb64VfqFBfrdPXAlvkw11M+TUHQjla8lS8JR8o7tzyOUUnxUzwUcD6qskbFTMHM+SRwa1o8SXcAg1lqznCL9V+oWO80NbXDgYaSsp5pPuY3EqU1mHItEt1DqBoVF1p6jcjbqCr+bam/22Ov15fIfXUrZNezTlL9VLxnsj5R3bOMtmjbLC4PhcA5r2kEEEagghRSeVdW0VspnVtymjp6Nnw5p3tjY32XPIAXcGWvtGdYRkFV6jYbzQVtb/U0lZTzP+5jcT3Ls1mHItEtrI5sMbppiGRMBc5ziAAANSST3KLrCteS43fJ3UtluNLWVLW+Y6OlqIpXBoIHMRG4nTUjiuzEw5ExL3uF2tNjibV3uqho6VzhG2WqlZEwvILg0OeQNdAeCRGSZwzIZoaiFtRTuD4HgPY9hDmua4aggjgQQuOvpAQEBAQEBAQEBAQfMsscETppTpEwFzj4ADUoKxYLYLh1abpXTIMyqpo8PtgDoaSFwBjjme4QQM1Ba3VrCXu01JHp1Gq0+uOjJWPZPVK2JdLe3WD5xR5tj76ls1GJOSknkbLFzvjMYeCWh2oBPaSFVbbMxhdXVETlGe50t/wB/OocbTRVclNiFukfC9rNS1vq8ZfPM5p0BeXe8aT2cPTrbT9K5VXze2HQbldH2D23Cay64RLVRZHQQvqo/PlErajyW87muAaNHOA4FunHuUa7pz1SvpjHRvukjcW7Z3gE9sv8AK6ou1nlbTCokJc+SCRnNFzuPa4aObr4AaqO6uJS03zCvG19bVYPfLNui13/tlHc20VXpqC1j4gXcR8eJ0gHsLRfr0ZqdMSsp1VZm3FtnaympXj168OZa4OU66slBdKRp3GJrh7YWbTXNmrdbFUYdI9gqcY31vWO13/naO2VEM3DTSRtXTcw0PgdQrd05qq0xi0tmBp17af6fs6uf8/53d/6fzswOrLGa7Md+bNjNsLRcau1RR0/OdGukFTVOa0nu5iNPbXdM4rlzdGbYdt0l7nTZPi8u32QOc3KLCPKYyXUPfSNdyN1BHbG73h9Gir3UxOVmm+Yx2aLpGaDuLnI/47P0qdS3cQjp5locvnybqW34qNuIat9LhFplna5jOLWxUr/JlnLeAc97yGtJ7AR6dZVxSufyjbN7Y/Dvqrou2imo2U9NJXw1LNNZ/WGOc/Tt5muZy8f5oCr99lnoqlemo6ekp46SmbyU0TWxxsb2Na0aAD2AqVyBOty43eKbHrNNJLDh1QZpKp0TdQ6Vj2DiNQCWsOrQSO37GjRHLPvnhtsY6Ytg8tpaDJcIuNRU0VPJDNI6OojmbMGODnRzMLA5jnAaEDlI8Fydto5djVWesMXrHz/ILdHa9tcZkkinuodNWGElr5Yy/wAmOEEacHO15hrx0A7NU01jmXN9p4hnWnop24ixtlFeaqrlyRzPwtdDI1jGykceSMtI5Qe52pPik75y7GiMOe6YshyTBN1brsZfp3VFtiNQKUO15Y5qY8xdGDryskj1dp46enWW2ImPJHVMxPi1d+hvHUv1C1eEVdZLT4TaH1DfLi+0hpH+Q+RrXat55JCBzOHAH0aLsfpXLk/vbH4b3eLpQw/GMFq8uwGWpp71aYzXObNL5jZYoffyHUAOa5rRzAg6cOzvEabpmcSlfTERmHT7D7h3LcXYuvnvsjpr3bY6q3Tzv4umaynEkb3HvPK4AntJGveobK+NktdvKqvm29wyTbN9s3mtjfMs8VwltNVE06cwEEcr43/jI5HcvgW69y02iLdGaszXqmvrCvFsyLZCy3+zyCa11lxpaiCQfbMkoahw4dx8R3KjTGLNG+c1hK+3v7A2P/p9H+jMVVuZW04huFFIQEBAQEBAQEBAQeNxo23C3z0D/gTxvhPb2PaW93soSrh0e5Ja8DzPIsHyyZlDd6kwxR+svEbTNRSSxvi1doOY+ZqB36Fat0ZiJhl0ziZiViG5Ljr7lHZ2V9O67zcxipWzRmZ4a3ncQwHmIA4ngs2JacwrlQ3Oi2g6vq+tykilstwnqZPWpeDGx3AGZkmp4cvmHlJ7Bx8FpmPKnRmifG/VNe6+5mIYlt7cbtVV8D5JqaWKihjlY99RLJGWsawNOpGp4kdg4qilJmV97xEI76G8dq6HE71k08ZZT3Cohp4HO4c7aRj9SPRzSka+IPgrd89VX146ZR1tTiH647B5zTxNLq6hkorpTgDU81MyV79B4mPnHtqy9sWhVSM1lucUyabfzNdvcPn5n0VgpfWbsH6hrpKV+hLvHnZFGNf557OKjMeETKdZ85iOzo9k/wD7c5r+JuH/AMhTqOz4Q7r+csb/APvf/T6Orv8Az/nc/wCn87Mnez/7c4V+Jt//AMhULmv4SbPnDE34sty2N3ft29+Kx/8AstfLyXGBnBpmcPwzD+Oj1cPBwJ8F3XPnXEmyPC3lDI6OqyluGd5rX0Li+hnkimhe5paXMfUTuaSDxGoPYubuId0cy0W1t2t2z/VJfLbmD20dFWOraKKpnIZGxtRUMrIHvc7gGva0DU9mvFSvHlSMI0nxvOWF1QbS4viLn5/Z7qay43y4zzy02sJZG2o8ypJbycSAeAJXdV5no5tpEdVkdvf2Bsf/AE+j/RmLNbmWmnEMHPztdkQG3+4U1I6Sqj9Zho62VsT3AEsD4nEtIcOPFp19pK5jrBbE9JV33QxuPpr3Atd62qvT5vW+eV9AZGyPY2N7fwU3l8HxycxDdW68D3jVaaT5x1Zbx4T0dD1k2+utGc4zuKIHGlbEyndr2CWlqDVCNxGoBIkP2D4KOjrEwnv6TEpxtW5WCXjG2ZbSXWmFidGJnTSTRsEY01IkDj71w7CDxBVE1mJwvi0TGUDbIyt3J6qbnuDaY3GxUzqyrZKQWjkljNHFrr2F7Xa6ez4LRf8AWmGfX+18vDa67UGz3VJe7dl720dDWuraKOpqDyRtZUVDKuB7nO4APaxo1PAa8UvHlSMFJ8bzlLnUBuPimO7U3inmrYJLjcqOegoqaORj5JXVUZh5mtadeVodzE9nD2FTrrMyu2WiIcd0p49W2rYq+XmsYWMuTquWn5tRzwxU3lcw9HOHD2lPdP7IaY/VqemDB7XuNsXkuIXUAQ1da4RS6amKZtNG6OQelrgD6Rw71LbbFolHVXyrMIzyTJ71ZtuavY3LWujudlurayjGmoaBHNFNFr8UukEjT36n0K2IzPlCqZxHjK3e3v7A2P8A6fR/ozFjtzLZTiG4UUhAQEBAQEBAQEBAQR/uZ02bbboXJ19ucc1FkDwBLWW97WOl5Ryt8xsjXsJA4a6A+lWV2zVXfVFnhth0x4JtbkLMptVTWVV6ia+ON1VJF5bWyNLHaMiY3joe8ldvtm0Ycpqis5b/AHL2dwXdijjp8spiayEEU9bTO8uoiB7Q12hBHocCPQo1vNeErUi3LhLX0TbWUVc2qr6y4VlK06+rSSwxscPBzoo2v0/okKc75VxohLdptFssNths9mgZTWunaIoIIWhrGNHcAFVM5XRGHLbW7I4jtLb7hbLBLU1VJciw1Lbi+GTgxrmaDyo4xoQ4666qV9k2RprirH2q6fsH2gu1Xesalq566riFM51dJC/kj5xIQzyo4yNSBrqT2BdvsmzlNcV4ZeLbL4viW4t03NttRVPv12bNHUwzvhNO0TzMndyNbG1w98waauPBcm8zGHa64icvP6j8T+tz65/WKv8AWj+z+ZD6r/5L1H4Hl8/wOPw+30cE9k+OD1x5ZemU7L4vlu4tr3NuVRVMv1pbDHTQwPhFO4QTPnbztdG5x98866OHBIvMRgtriZy2+dYTYtxMXqsRyJrnWyqADnRENkjc1wc17HOBAc0jUag+ngo1ticu2rmMNDtNsRiOzlRW1OMVNZPJXtiZMK+SF4AiLi3l8qKP4x111Ur7JtyjTXFeHrufsbt/u15c+TwPjusLfLjr6J4inDNdeUlzXNcNezmadO5KbJrw7fXFuXFW7oj2wpqgTV9fcamJp18oyQRtd6HFkXN9ghTnfKuNEJetlvpbRbae00LS2ipY46eFpJJDI2hjRqeJ4BUzOV0Rhx+7GweE7wVEFwyJ9TT3SmjMENRRSNaeTmLw1zZGvaRzEnsB9KspsmqF9cWabBOkrbDCL1DkD3VNzuNO4S07a98Rhje3i13lxsbqQeI5iR6F226ZcrpiHf5XiWO5vZJcdymlZWWib4cUmo0I7HNc3RzXDuIIKriZjhZMRPKKp+iHbCSsM0VwuUdITr5IkpjoPAOdCTp7Oqu98qfRCSsC25xDbSzfMmIUgp6Zx55pCS+WZ+mnNI93Enw7h3AKq1ptytrWK8NZudsdt/uy1kuT072XWJvlxV9G8RVDWa68pLg5rhqexzTp3LtNk1cvri3LjrF0V7V2uvZW3OprrhCwhwpp5Yo4nadz/JY15HsOCnO+UI0QlU2S2ssZx2kjFPafJNIyKnDWCOIs8sBg00Gg7OCqytw0O1W0mObQWapsmNT1M9JVTetyOrnxPeH8jY9AYo4xpo0dyle82RpSK8NLuZ00bebp5H+tN7lrKW7OjZDM63yQsbL5fBrniWKT3wboNRpwAXa7ZrGHL6otOXdWa109jtFJZaQudS0cMVLE6QgvLImCNpcQANdBx0ChM5TiMMlcdEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEH/2Q==';
/** @type {?} */
const missingProductImageAlt = 'Image not available';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_FORMAT = 'product';
/** @type {?} */
const INITIALIZED_CLS = 'initialized';
/** @type {?} */
const LOADING_CLS = 'loading';
class PictureComponent {
    /**
     * @param {?} elRef
     * @param {?} cd
     * @param {?} renderer
     */
    constructor(elRef, cd, renderer) {
        this.elRef = elRef;
        this.cd = cd;
        this.renderer = renderer;
        this.loaded = new EventEmitter();
        this.missingProductImgSrc = missingProductImgSrc;
        this.missingProductImageAlt = missingProductImageAlt;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.loadImage();
    }
    /**
     * @return {?}
     */
    loadImage() {
        if (this.imageContainer) {
            /** @type {?} */
            const image = this.imageContainer[this.imageFormat || DEFAULT_FORMAT];
            if (image && image.url) {
                this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
                this.mainImage = image.url;
                this.cd.detectChanges();
            }
        }
    }
    /**
     * @return {?}
     */
    loadHandler() {
        this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), INITIALIZED_CLS);
        this.renderer.removeClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
        this.loaded.emit(this.elRef.nativeElement);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    loadErrorHandler(event) {
        event.target.src = missingProductImgSrc;
    }
}
PictureComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-picture',
                template: "<picture>\n  <!--\n    <source *ngIf=\"xsImage\" [srcset]=\"xsImage\" media=\"(max-width: 500px)\" />\n    <source *ngIf=\"smImage\" [srcset]=\"smImage\" media=\"(max-width: 800px)\" />\n    <source *ngIf=\"mdImage\" [srcset]=\"mdImage\" media=\"(max-width: 1200px)\" />\n    <source *ngIf=\"lgImage\" [srcset]=\"lgImage\" media=\"(min-width: 1200px)\" />\n  -->\n  <img\n    *ngIf=\"mainImage\"\n    [src]=\"mainImage || missingProductImgSrc\"\n    (load)=\"loadHandler()\"\n    (error)=\"loadErrorHandler($event)\"\n    [alt]=\"imageAlt\"\n  />\n\n  <img\n    *ngIf=\"!imageContainer\"\n    [src]=\"missingProductImgSrc\"\n    [alt]=\"missingProductImageAlt\"\n  />\n</picture>\n",
                styles: ["img{max-width:100%;max-height:100%;-webkit-transform:scale(var(--cx-zoom,1));transform:scale(var(--cx-zoom,1));opacity:var(--cx-zoom,1);transition:all var(--cx-g-transition-duration,.6s);border-radius:var(--cx-border-radius)}"]
            }] }
];
/** @nocollapse */
PictureComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
PictureComponent.propDecorators = {
    imageContainer: [{ type: Input }],
    imageFormat: [{ type: Input }],
    imagePosition: [{ type: Input }],
    imageAlt: [{ type: Input }],
    loaded: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediaModule {
}
MediaModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PictureComponent],
                exports: [PictureComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BootstrapModule {
}
BootstrapModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgbDropdownModule,
                    NgbTypeaheadModule,
                    NgbPaginationModule,
                    NgbModalModule,
                    NgbTabsetModule,
                    NgbAccordionModule,
                    NgbRatingModule,
                    NgbCollapseModule,
                ],
                exports: [
                    NgbDropdownModule,
                    NgbTabsetModule,
                    NgbAccordionModule,
                    NgbRatingModule,
                    NgbTypeaheadModule,
                    NgbCollapseModule,
                    NgbModalModule,
                    NgbPaginationModule,
                ],
                providers: [
                    NgbTabsetConfig,
                    NgbAccordionConfig,
                    NgbRatingConfig,
                    NgbPaginationConfig,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StarRatingComponent {
    constructor() {
        this.rating = 1;
        this.disabled = false;
        this.steps = 1;
        this.onChange = (_rating) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return this.rating;
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    setRating(rating) {
        if (!this.disabled) {
            this.writeValue(rating);
        }
    }
    // ControlvalueAccessor interface
    /**
     * @param {?} rating
     * @return {?}
     */
    writeValue(rating) {
        this.rating = rating;
        this.onChange(this.rating);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
StarRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-star-rating',
                template: "<div class=\"cx-star-rating\" tabindex=\"0\">\n  <ng-template #template let-fill=\"fill\">\n    <span class=\"star\" [class.full]=\"fill === 100\">\n      <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span> &#9733;\n    </span>\n  </ng-template>\n  <ngb-rating\n    [(rate)]=\"rating\"\n    (rateChange)=\"onTouched(); setRating($event)\"\n    [starTemplate]=\"template\"\n    [readonly]=\"disabled\"\n    max=\"5\"\n  ></ngb-rating>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => StarRatingComponent),
                    },
                ],
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.star{position:var(--cx-position,relative);display:var(--cx-display,inline-block);color:var(--cx-color,var(--cx-g-color-light));margin:var(--cx-margin,0 5px 0 0)}.full{color:var(--cx-color,var(--cx-g-color-primary))}.half{position:var(--cx-position,absolute);display:var(--cx-display,inline-block);overflow:var(--cx-overflow,hidden);color:var(--cx-color,var(--cx-g-color-primary))}"]
            }] }
];
StarRatingComponent.propDecorators = {
    rating: [{ type: Input }],
    disabled: [{ type: Input }],
    steps: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line */
    useExisting: forwardRef(() => ItemCounterComponent),
    multi: true,
};
class ItemCounterComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.value = 0;
        this.step = 1;
        this.async = false;
        this.cartIsLoading = false;
        this.isValueChangeable = false;
        this.update = new EventEmitter();
        this.isValueOutOfRange = false;
        this.inputValue = new FormControl({
            disabled: this.isValueChangeable,
        });
        this.onTouch = () => { };
        this.onModelChange = (_rating) => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.writeValue(this.min || 0);
        this.inputValue.valueChanges.pipe(debounceTime(300)).subscribe(value => {
            if (value) {
                this.manualChange(Number(value));
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.cartIsLoading) {
            this.inputValue.disable({
                onlySelf: true,
                emitEvent: false,
            });
        }
        else {
            this.inputValue.enable({
                onlySelf: true,
                emitEvent: false,
            });
        }
    }
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     * @param {?} incomingValue
     * @return {?}
     */
    adjustValueInRange(incomingValue) {
        return incomingValue < this.min || !this.min
            ? this.min
            : incomingValue > this.max || !this.max
                ? this.max
                : incomingValue;
    }
    /**
     * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    manualChange(newValue) {
        this.isValueOutOfRange = this.isOutOfRange(newValue);
        newValue = this.adjustValueInRange(newValue);
        this.updateValue(newValue);
        /* We use the value from the input, however, this value
          is not the correct value that should be displayed. The correct value to display
          is this.value, which the parent updates if the async call succeed. If the call
          fails, then the input will need to display this.value, and not what the user
          recently typed in */
        this.renderer.setProperty(this.input.nativeElement, 'value', newValue);
    }
    /**
     * Verify value for decision about displaying error about range
     * @param {?} value
     * @return {?}
     */
    isOutOfRange(value) {
        return value < this.min || value > this.max;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const handlers = {
            ArrowDown: () => this.decrement(),
            ArrowUp: () => this.increment(),
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    /**
     * Verify value that it can be incremented, if yes it does that.
     * @return {?}
     */
    increment() {
        this.manualChange(this.value + this.step);
    }
    /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    decrement() {
        this.manualChange(this.value - this.step);
    }
    // ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value || this.min || 0;
        this.onModelChange(this.value);
    }
    /**
     * Set up new value for input and emit event outside
     * @param {?} updatedQuantity
     * @return {?}
     */
    updateValue(updatedQuantity) {
        if (!this.async) {
            // If the async flag is true, then the parent component is responsible for updating the form
            this.writeValue(updatedQuantity);
        }
        // Additionally, we emit a change event, so that users may optionally do something on change
        this.update.emit(updatedQuantity);
        this.onTouch();
    }
}
ItemCounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-item-counter',
                template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n    >\n      -\n    </button>\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                providers: [COUNTER_CONTROL_ACCESSOR],
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.cx-counter-wrapper{display:var(--cx-display,inline-flex);flex-direction:var(--cx-flex-direction,column)}.cx-counter{border-radius:var(--cx-border-radius,4px);border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-counter-value{border:var(--cx-border,none);text-align:var(--cx-text-align,center);border-width:var(--cx-border-width,0 1px 0 1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));padding:var(--cx-padding,12px 9px 12px 9px);max-height:var(--cx-max-height,46px);min-width:var(--cx-min-width,48px);max-width:var(--cx-max-width,78px)}.cx-counter-action{max-height:var(--cx-max-height,48px);min-width:var(--cx-minwidth,40px);border:var(--cx-border,none);cursor:var(--cx-cursor,pointer);color:var(--cx-color,var(--cx-g-color-text));background-color:var(--cx-background-color,var(--cx-g-color-transparent));margin:var(--cx-margin,0);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}.cx-counter-action:hover{color:var(--cx-color,var(--cx-g-color-primary))}.cx-counter-action:disabled{color:var(--cx-color,var(--cx-g-color-light));opacity:var(--cx-opacity,1);cursor:var(--cx-cursor,not-allowed)}"]
            }] }
];
/** @nocollapse */
ItemCounterComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ItemCounterComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['itemCounterInput',] }],
    step: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    async: [{ type: Input }],
    cartIsLoading: [{ type: Input }],
    isValueChangeable: [{ type: Input }],
    update: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OnlyNumberDirective {
    /**
     * Class constructor
     * @param {?} hostElement
     * @param {?} renderer
     */
    constructor(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.previousValue = '';
        this.integerUnsigned = '^[0-9]*$';
    }
    /**
     * Event handler for host's change event
     * @return {?}
     */
    onChange() {
        this.validateValue(this.hostElement.nativeElement.value);
    }
    /**
     * Event handler for host's change event
     * @return {?}
     */
    onInput() {
        this.validateValue(this.hostElement.nativeElement.value);
    }
    /**
     * Event handler for host's paste event
     * @param {?} e
     * @return {?}
     */
    onPaste(e) {
        /** @type {?} */
        const value = e.clipboardData.getData('text/plain');
        this.validateValue(value);
        e.preventDefault();
    }
    /**
     * Event handler for host's keyup event
     * @param {?} e
     * @return {?}
     */
    onKeyUp(e) {
        /** @type {?} */
        const value = e.target['value'];
        this.validateValue(value);
    }
    /**
     * Event handler for host's keydown event
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const originalValue = e.target['value'];
        /** @type {?} */
        const key = this.getName(e);
        /** @type {?} */
        const controlOrCommand = e.ctrlKey === true || e.metaKey === true;
        // allowed keys apart from numeric characters
        /** @type {?} */
        const allowedKeys = [
            'Backspace',
            'ArrowLeft',
            'ArrowRight',
            'Escape',
            'Tab',
        ];
        // allow some non-numeric characters
        if (allowedKeys.indexOf(key) !== -1 ||
            // Allow: Ctrl+A and Command+A
            (key === 'a' && controlOrCommand) ||
            // Allow: Ctrl+C and Command+C
            (key === 'c' && controlOrCommand) ||
            // Allow: Ctrl+V and Command+V
            (key === 'v' && controlOrCommand) ||
            // Allow: Ctrl+X and Command+X
            (key === 'x' && controlOrCommand)) {
            // let it happen, don't do anything
            return;
        }
        // save value before keydown event
        this.previousValue = originalValue;
        // allow number characters only
        /** @type {?} */
        const isNumber = new RegExp(this.integerUnsigned).test(key);
        if (isNumber) {
            return;
        }
        else {
            e.preventDefault();
        }
    }
    /**
     * Test whether value is a valid number or not
     * @param {?} value
     * @return {?}
     */
    validateValue(value) {
        value = value.replace(/[^0-9]+/g, '');
        this.renderer.setProperty(this.hostElement.nativeElement, 'value', value);
    }
    /**
     * Get key's name
     * @param {?} e
     * @return {?}
     */
    getName(e) {
        if (e.key) {
            return e.key;
        }
        else {
            // for old browsers
            if (e.keyCode && String.fromCharCode) {
                switch (e.keyCode) {
                    case 8:
                        return 'Backspace';
                    case 9:
                        return 'Tab';
                    case 27:
                        return 'Escape';
                    case 37:
                        return 'ArrowLeft';
                    case 39:
                        return 'ArrowRight';
                    default:
                        return String.fromCharCode(e.keyCode);
                }
            }
        }
    }
}
OnlyNumberDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOnlyNumber]',
            },] }
];
/** @nocollapse */
OnlyNumberDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
OnlyNumberDirective.propDecorators = {
    onChange: [{ type: HostListener, args: ['change',] }],
    onInput: [{ type: HostListener, args: ['input',] }],
    onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormComponentsModule {
}
FormComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ReactiveFormsModule, BootstrapModule],
                declarations: [
                    StarRatingComponent,
                    ItemCounterComponent,
                    OnlyNumberDirective,
                ],
                exports: [StarRatingComponent, ItemCounterComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    constructor() {
        this.deleteCard = new EventEmitter();
        this.setDefaultCard = new EventEmitter();
        this.sendCard = new EventEmitter();
        this.editCard = new EventEmitter();
        this.cancelCard = new EventEmitter();
        this.border = false;
        this.editMode = false;
        this.isDefault = false;
        this.fitToContainer = false;
    }
    // ACTIONS
    /**
     * @return {?}
     */
    setEditMode() {
        this.editMode = true;
    }
    /**
     * @return {?}
     */
    cancelEdit() {
        this.editMode = false;
        this.cancelCard.emit(5);
    }
    /**
     * @return {?}
     */
    delete() {
        this.deleteCard.emit(1);
    }
    /**
     * @return {?}
     */
    setDefault() {
        this.isDefault = true;
        this.setDefaultCard.emit(2);
    }
    /**
     * @return {?}
     */
    send() {
        this.sendCard.emit(3);
    }
    /**
     * @return {?}
     */
    edit() {
        this.editCard.emit(4);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-card',
                template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <img src=\"{{ content.img }}\" alt=\"\" />\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.action.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.action.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"card-link btn-link\"\n            (click)=\"edit()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-card-border{border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-card-container{display:var(--cx-display,flex)}.cx-card-label-container{flex-grow:var(--cx-flex-grow,2)}.cx-card-fit-to-container{width:var(--cx-width,100%);height:var(--cx-height,100%);display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column)}.cx-card-body{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);justify-content:var(--cx-justify-content,space-between)}.cx-card-delete{background-color:var(--cx-background-color,var(--cx-g-color-background))}.cx-card-body-delete{padding:var(--cx-padding,1rem 0 0 0)}.cx-card-delete-msg{color:var(--cx-color,var(--cx-g-color-danger));padding:var(--cx-padding,0 0 1.25rem 0)}.cx-card-actions{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);padding:var(--cx-padding,1.25rem 0 0 0)}.cx-card-link{padding:var(--cx-padding,0 0 0 1rem)}"]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    deleteCard: [{ type: Output }],
    setDefaultCard: [{ type: Output }],
    sendCard: [{ type: Output }],
    editCard: [{ type: Output }],
    cancelCard: [{ type: Output }],
    border: [{ type: Input }],
    editMode: [{ type: Input }],
    isDefault: [{ type: Input }],
    content: [{ type: Input }],
    fitToContainer: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, I18nModule],
                declarations: [CardComponent],
                exports: [CardComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationComponent {
    constructor() {
        this.viewPageEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.viewPageEvent.emit(page - 1);
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-pagination',
                template: "<ngb-pagination\n  [collectionSize]=\"pagination.totalResults\"\n  [page]=\"pagination.currentPage + 1\"\n  (pageChange)=\"pageChange($event)\"\n  [maxSize]=\"3\"\n  [pageSize]=\"pagination.pageSize\"\n>\n</ngb-pagination>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["ngb-pagination .pagination .page-item.active .page-link{background-color:var(--cx-background-color,var(--cx-g-color-primary));border-color:var(--cx-border-color,var(--cx-g-color-primary))}"]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [];
PaginationComponent.propDecorators = {
    pagination: [{ type: Input }],
    viewPageEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortingComponent {
    constructor() {
        this.sortListEvent = new EventEmitter();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        this.sortListEvent.emit(sortCode);
    }
}
SortingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-sorting',
                template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
SortingComponent.ctorParameters = () => [];
SortingComponent.propDecorators = {
    sortOptions: [{ type: Input }],
    selectedOption: [{ type: Input }],
    placeholder: [{ type: Input }],
    sortLabels: [{ type: Input }],
    sortListEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationAndSortingModule {
}
PaginationAndSortingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NgSelectModule, FormsModule, BootstrapModule],
                declarations: [PaginationComponent, SortingComponent],
                exports: [PaginationComponent, SortingComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: Improve a11y with better text appropriate to usage (example: loading cart spinner)
class SpinnerComponent {
    constructor() { }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-spinner',
                template: "<div class=\"loader\">{{ 'common.label.loading' | cxTranslate }}</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.loader,.loader:after{margin:var(--cx-margin,0 auto);border-radius:var(--cx-border-radius,50%);width:var(--cx-width,10em);height:var(--cx-height,10em)}.loader{margin:var(--cx-margin,30px auto);font-size:var(--cx-font-size,.65em);position:var(--cx-position,relative);text-indent:var(--cx-text-indent,-9999em);border-width:var(--cx-border-width,1.1em);border-style:var(--cx-border-style,solid);border-top-color:var(--cx-border-top-color,var(--cx-g-color-light));border-bottom-color:var(--cx-border-bottom-color,var(--cx-g-color-light));border-right-color:var(--cx-border-right-color,var(--cx-g-color-light));border-left-color:var(--cx-border-left-color,var(--cx-g-color-primary));-webkit-transform:var(--cx-transform,translateZ(0));transform:var(--cx-transform,translateZ(0));-webkit-animation:var(--cx-animation,load8 1.1s infinite linear);animation:var(--cx-animation,load8 1.1s infinite linear)}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
SpinnerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerModule {
}
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, I18nModule],
                declarations: [SpinnerComponent],
                exports: [SpinnerComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
class GenericLinkComponent {
    constructor() {
        this.protocolRegex = /^https?:\/\//i;
    }
    /**
     * @return {?}
     */
    get routerUrl() {
        if (typeof this.url === 'string') {
            return [this.getAbsoluteUrl(this.url)];
        }
        return this.url;
    }
    /**
     * @return {?}
     */
    isExternalUrl() {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    getAbsoluteUrl(url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    }
}
GenericLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-generic-link',
                template: "<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [target]=\"target\"\n    [class]=\"class ? class : ''\"\n    [id]=\"id ? id : ''\"\n    [style]=\"style\"\n    [title]=\"title ? title : ''\"\n  >\n    <ng-container *ngTemplateOutlet=\"templateOutlet\"></ng-container>\n  </a>\n</ng-container>\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [target]=\"target\"\n    [class]=\"class ? class : ''\"\n    [id]=\"id ? id : ''\"\n    [style]=\"style\"\n    [title]=\"title ? title : ''\"\n  >\n    <ng-container *ngTemplateOutlet=\"templateOutlet\"></ng-container>\n  </a>\n</ng-template>\n<ng-template #templateOutlet> <ng-content></ng-content> </ng-template>\n",
                styles: [""]
            }] }
];
GenericLinkComponent.propDecorators = {
    url: [{ type: Input }],
    target: [{ type: Input }],
    class: [{ type: Input }],
    id: [{ type: Input }],
    style: [{ type: Input }],
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GenericLinkModule {
}
GenericLinkModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                declarations: [GenericLinkComponent],
                exports: [GenericLinkComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// we include all UI component modules here, but in real live
// projects would only include those that are relevant.
// for "accelerators", we could include only those that are relevant, so this
// component module could be configurable or we could have separate component modules,
// i.e. powertools-components.module.
class ComponentsModule {
}
ComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MediaModule,
                    FormComponentsModule,
                    CardModule,
                    PaginationAndSortingModule,
                    SpinnerModule,
                    GenericLinkModule,
                ],
                exports: [
                    PictureComponent,
                    StarRatingComponent,
                    ItemCounterComponent,
                    CardComponent,
                    PaginationComponent,
                    SortingComponent,
                    SpinnerComponent,
                    GenericLinkComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartItemListComponent {
    /**
     * @param {?} cartService
     * @param {?} fb
     */
    constructor(cartService, fb) {
        this.cartService = cartService;
        this.fb = fb;
        this.isReadOnly = false;
        this.hasHeader = true;
        this.items = [];
        this.potentialProductPromotions = [];
        this.cartIsLoading = false;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.items.forEach(item => {
            const { code } = item.product;
            if (!this.form.controls[code]) {
                this.form.setControl(code, this.createEntryFormGroup(item));
            }
            else {
                /** @type {?} */
                const entryForm = (/** @type {?} */ (this.form.controls[code]));
                entryForm.controls.quantity.setValue(item.quantity);
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updateEntry({ item, updatedQuantity, }) {
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getPotentialProductPromotionsForItem(item) {
        /** @type {?} */
        const entryPromotions = [];
        if (this.potentialProductPromotions &&
            this.potentialProductPromotions.length > 0) {
            for (const promotion of this.potentialProductPromotions) {
                if (promotion.description &&
                    promotion.consumedEntries &&
                    promotion.consumedEntries.length > 0) {
                    for (const consumedEntry of promotion.consumedEntries) {
                        if (this.isConsumedByEntry(consumedEntry, item)) {
                            entryPromotions.push(promotion);
                        }
                    }
                }
            }
        }
        return entryPromotions;
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createEntryFormGroup(entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    }
    /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    isConsumedByEntry(consumedEntry, entry) {
        /** @type {?} */
        const consumendEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            for (const subEntry of entry.entries) {
                if (subEntry.entryNumber === consumendEntryNumber) {
                    return true;
                }
            }
            return false;
        }
        else {
            return consumendEntryNumber === entry.entryNumber;
        }
    }
}
CartItemListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item-list',
                template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.label.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.label.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.label.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.label.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-item-list-header{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0);padding:var(--cx-padding,1.125rem 0);text-transform:var(--cx-text-transform,uppercase);color:var(--cx-color,var(--cx-g-color-secondary));border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-item-list-desc{text-align:var(--cx-text-align,left);padding:var(--cx-padding,0)}.cx-item-list-price,.cx-item-list-qty{text-align:var(--cx-text-align,center)}@media (max-width:991.98px){.cx-item-list-price,.cx-item-list-qty{text-align:var(--cx-text-align,left)}}.cx-item-list-total{text-align:var(--cx-text-align,right);padding:var(--cx-padding,0)}.cx-item-list-row{padding:var(--cx-padding,1.25rem 0);border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:991.98px){.cx-item-list-header{padding:var(--cx-padding,1.125rem 2.5rem)}.cx-item-list-items{padding:var(--cx-padding,0 2.5rem)}}@media (max-width:767.98px){.cx-item-list-items{padding:var(--cx-padding,0 0 0 1rem)}}"]
            }] }
];
/** @nocollapse */
CartItemListComponent.ctorParameters = () => [
    { type: CartService },
    { type: FormBuilder }
];
CartItemListComponent.propDecorators = {
    isReadOnly: [{ type: Input }],
    hasHeader: [{ type: Input }],
    items: [{ type: Input }],
    potentialProductPromotions: [{ type: Input }],
    cartIsLoading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PromotionsComponent {
    constructor() { }
}
PromotionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-promotions',
                template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <strong *ngFor=\"let promotion of promotions\">\n    {{ promotion.description }}\n  </strong>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-promotions{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-success));padding:var(--cx-padding,.5rem 0)}"]
            }] }
];
/** @nocollapse */
PromotionsComponent.ctorParameters = () => [];
PromotionsComponent.propDecorators = {
    promotions: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PromotionsModule {
}
PromotionsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PromotionsComponent],
                exports: [PromotionsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartSharedModule {
}
CartSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ReactiveFormsModule,
                    ComponentsModule,
                    UrlTranslationModule,
                    NgbModule,
                    PromotionsModule,
                    I18nModule,
                ],
                declarations: [
                    CartItemComponent,
                    OrderSummaryComponent,
                    CartItemListComponent,
                ],
                exports: [CartItemComponent, CartItemListComponent, OrderSummaryComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddedToCartDialogComponent {
    /**
     * @param {?} activeModal
     * @param {?} cartService
     * @param {?} fb
     */
    constructor(activeModal, cartService, fb) {
        this.activeModal = activeModal;
        this.cartService = cartService;
        this.fb = fb;
        this.quantity = 0;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loaded$ = this.loaded$.pipe(tap(res => {
            if (this.previousLoaded !== res) {
                this.finishedLoading = this.previousLoaded === false;
                this.previousLoaded = res;
            }
        }));
        this.entry$ = this.entry$.pipe(tap(entry => {
            if (entry) {
                const { code } = entry.product;
                if (!this.form.controls[code]) {
                    this.form.setControl(code, this.createEntryFormGroup(entry));
                }
                else {
                    /** @type {?} */
                    const entryForm = (/** @type {?} */ (this.form.controls[code]));
                    entryForm.controls.quantity.setValue(entry.quantity);
                }
                this.form.markAsPristine();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.finishedLoading) {
            this.finishedLoading = false;
            /** @type {?} */
            const elementToFocus = (/** @type {?} */ (this.dialog.nativeElement.querySelector(`[ngbAutofocus]`)));
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
        this.activeModal.dismiss('Removed');
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updateEntry({ item, updatedQuantity }) {
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createEntryFormGroup(entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    }
}
AddedToCartDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-added-to-cart-dialog',
                template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.label.itemsAddedToYourCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"(entry$ | async) as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"(cart$ | async) as cart\">\n            <div>\n              {{\n                'cartItems.label.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: ['cart'] } | cxTranslateUrl\"\n              class=\"btn btn-primary\"\n              ngbAutoFocus\n              (click)=\"!form.dirty && activeModal.dismiss('View Cart click')\"\n              >{{ 'addToCart.action.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: ['checkout'] } | cxTranslateUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"\n                !form.dirty && activeModal.dismiss('Proceed To Checkout click')\n              \"\n              >{{ 'addToCart.action.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.label.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-dialog-header{padding:var(--cx-padding,2rem 1.75rem .85rem);border-width:var(--cx-border-width,0)}.cx-dialog-title{font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222)}.cx-dialog-body{padding:var(--cx-padding,1rem 1rem 0 1rem)}@media (max-width:767.98px){.cx-dialog-body{padding:var(--cx-padding,0)}}.cx-dialog-row{margin:var(--cx-margin,0);display:var(--cx-display,flex);padding:var(--cx-padding,0 .875rem 2.875rem);max-width:var(--cx-max-width,100%);flex-wrap:var(--cx-flex-wrap,wrap)}@media (max-width:767.98px){.cx-dialog-row{flex-direction:var(--cx-flex-direction,column);padding:var(--cx-padding,0)}.cx-dialog-item{padding:var(--cx-padding,2rem)}}.cx-dialog-separator{border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-dialog-actions{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);padding:var(--cx-padding,0 1rem 0 2.5rem);border-width:var(--cx-border-width,0 0 0 1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:767.98px){.cx-dialog-actions{border-width:var(--cx-border-width,0);padding:var(--cx-padding,1.875rem)}}.cx-dialog-total{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,0 0 1.25rem 0)}.cx-dialog-buttons{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column)}.cx-dialog-buttons .btn-primary{margin:var(--cx-margin,0 0 .625rem 0)}"]
            }] }
];
/** @nocollapse */
AddedToCartDialogComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: CartService },
    { type: FormBuilder }
];
AddedToCartDialogComponent.propDecorators = {
    dialog: [{ type: ViewChild, args: ['dialog', { read: ElementRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToCartComponent {
    /**
     * @param {?} cartService
     * @param {?} modalService
     */
    constructor(cartService, modalService) {
        this.cartService = cartService;
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.productCode) {
            this.loaded$ = this.cartService.getLoaded();
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
        }
    }
    /**
     * @return {?}
     */
    addToCart() {
        if (!this.productCode || this.quantity <= 0) {
            return;
        }
        this.openModal();
        this.cartService.addEntry(this.productCode, this.quantity);
    }
    /**
     * @private
     * @return {?}
     */
    openModal() {
        this.modalInstance = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        }).componentInstance;
        this.modalInstance.entry$ = this.cartEntry$;
        this.modalInstance.cart$ = this.cartService.getActive();
        this.modalInstance.loaded$ = this.loaded$;
        this.modalInstance.quantity = this.quantity;
    }
}
AddToCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-cart',
                template: "<button\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.action.addToCart' | cxTranslate }}\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
AddToCartComponent.ctorParameters = () => [
    { type: CartService },
    { type: NgbModal }
];
AddToCartComponent.propDecorators = {
    iconOnly: [{ type: Input }],
    productCode: [{ type: Input }],
    quantity: [{ type: Input }],
    maxQuantity: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToCartModule {
}
AddToCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CommonModule,
                    RouterModule,
                    SpinnerModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductAddToCartComponent: { selector: 'cx-add-to-cart' },
                        },
                    }))),
                    UrlTranslationModule,
                    I18nModule,
                ],
                declarations: [AddToCartComponent, AddedToCartDialogComponent],
                entryComponents: [AddedToCartDialogComponent],
                exports: [AddToCartComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartDetailsComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter(entries => entries.length > 0));
        this.cartLoaded$ = this.cartService.getLoaded();
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    getAllPromotionsForCart(cart) {
        /** @type {?} */
        const potentialPromotions = cart.potentialOrderPromotions || [];
        /** @type {?} */
        const appliedPromotions = cart.appliedOrderPromotions || [];
        return [...potentialPromotions, ...appliedPromotions];
    }
}
CartDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-details',
                template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <div class=\"cart-details-wrapper\">\n      <h1>\n        {{ 'cart.label.shoppingCart' | cxTranslate }} ({{\n          'cart.label.id' | cxTranslate\n        }}\n        {{ cart?.code }})\n      </h1>\n      <div class=\"cx-total\">\n        {{\n          'cartItems.label.cartTotal'\n            | cxTranslate: { count: cart.deliveryItemsQuantity }\n        }}:\n        {{ cart.totalPrice?.formattedValue }}\n      </div>\n      <cx-promotions\n        [promotions]=\"getAllPromotionsForCart(cart)\"\n      ></cx-promotions>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n      ></cx-cart-item-list>\n      <!-- NOT FOR MVP  <cx-cart-coupon></cx-cart-coupon> -->\n    </div>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:block}.cart-details-wrapper{padding:2rem 1rem}.cx-total{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0 0 1rem)}.cx-promotions{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-success));padding:var(--cx-padding,.5rem 0)}"]
            }] }
];
/** @nocollapse */
CartDetailsComponent.ctorParameters = () => [
    { type: CartService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartDetailsModule {
}
CartDetailsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CommonModule,
                    RouterModule,
                    UrlTranslationModule,
                    PromotionsModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CartComponent: {
                                selector: 'cx-cart-details',
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [CartDetailsComponent],
                exports: [CartDetailsComponent],
                entryComponents: [CartDetailsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartTotalsComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter(entries => entries.length > 0));
    }
}
CartTotalsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-totals',
                template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <div class=\"cart-totals-wrapper\">\n      <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n      <button\n        [routerLink]=\"{ route: ['checkout'] } | cxTranslateUrl\"\n        *ngIf=\"entries.length\"\n        class=\"btn btn-primary btn-block\"\n        type=\"button\"\n      >\n        {{ 'cart.action.proceedToCheckout' | cxTranslate }}\n      </button>\n    </div>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".cart-totals-wrapper{padding:2rem 1rem}cx-order-summary{padding:0}"]
            }] }
];
/** @nocollapse */
CartTotalsComponent.ctorParameters = () => [
    { type: CartService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartTotalsModule {
}
CartTotalsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlTranslationModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CartTotalsComponent: {
                                selector: 'cx-cart-totals',
                            },
                        },
                    }))),
                    CartSharedModule,
                    I18nModule,
                ],
                declarations: [CartTotalsComponent],
                exports: [CartTotalsComponent],
                entryComponents: [CartTotalsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartComponentModule {
}
CartComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AddToCartModule,
                    CartDetailsModule,
                    CartTotalsModule,
                    CartSharedModule,
                    NgbModule,
                    CartModule,
                ],
                exports: [
                    AddToCartModule,
                    CartDetailsModule,
                    CartTotalsModule,
                    CartSharedModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SuggestedAddressDialogComponent {
    /**
     * @param {?} activeModal
     */
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedAddress = this.suggestedAddresses.length
            ? this.suggestedAddresses[0]
            : this.enteredAddress;
    }
}
SuggestedAddressDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-suggested-addresses-dialog',
                template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.label.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button\n    type=\"button\"\n    class=\"close\"\n    aria-label=\"Close\"\n    (click)=\"activeModal.close()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{\n            'checkoutAddress.label.ensureAccuracySuggestChange' | cxTranslate\n          }}\n          {{ 'checkoutAddress.label.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.label.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.label.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"activeModal.close()\"\n        >\n          {{ 'common.action.editAddress' | cxTranslate }}\n        </button>\n        <button\n          ngbAutofocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"activeModal.close(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.action.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-dialog-header{padding:var(--cx-padding,1rem 1rem 1rem 2rem);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-dialog-title{font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222)}.cx-dialog-body{padding:var(--cx-padding,1rem)}@media (max-width:767.98px){.cx-dialog-body{padding:var(--cx-padding,15px 0)}}.cx-dialog-entered,.cx-dialog-suggested{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0 0 0 .75rem)}.cx-dialog-label{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222)}.cx-dialog-actions{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row)}.cx-dialog-buttons{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,center);margin:var(--cx-margin,0 0 0 .5rem)}"]
            }] }
];
/** @nocollapse */
SuggestedAddressDialogComponent.ctorParameters = () => [
    { type: NgbActiveModal }
];
SuggestedAddressDialogComponent.propDecorators = {
    suggestedAddresses: [{ type: Input }],
    enteredAddress: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressFormComponent {
    /**
     * @param {?} fb
     * @param {?} checkoutService
     * @param {?} userService
     * @param {?} globalMessageService
     * @param {?} modalService
     */
    constructor(fb, checkoutService, userService, globalMessageService, modalService) {
        this.fb = fb;
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.modalService = modalService;
        this.submitAddress = new EventEmitter();
        this.backToAddress = new EventEmitter();
        this.address = this.fb.group({
            defaultAddress: [false],
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocode: [null, Validators.required],
            }),
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
            phone: '',
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Fetching countries
        this.countries$ = this.userService.getDeliveryCountries().pipe(tap(countries => {
            if (Object.keys(countries).length === 0) {
                this.userService.loadDeliveryCountries();
            }
        }));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap(titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }), map(titles => {
            /** @type {?} */
            const noneTitle = { code: '', name: 'Title' };
            return [noneTitle, ...titles];
        }));
        // Fetching regions
        this.regions$ = this.userService.getRegions().pipe(tap(regions => {
            /** @type {?} */
            const regionControl = this.address.get('region.isocode');
            if (Object.keys(regions).length === 0) {
                regionControl.disable();
                /** @type {?} */
                const countryIsoCode = this.address.get('country.isocode').value;
                if (countryIsoCode) {
                    this.userService.loadRegions(countryIsoCode);
                }
            }
            else {
                regionControl.enable();
            }
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutService
            .getAddressVerificationResults()
            .subscribe((results) => {
            if (results === 'FAIL') {
                this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.submitAddress.emit(this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some(error => error.subject === 'titleCode')) {
                    this.globalMessageService.add({
                        type: GlobalMessageType.MSG_TYPE_ERROR,
                        text: 'Title is required',
                    });
                }
                else {
                    this.globalMessageService.add({
                        type: GlobalMessageType.MSG_TYPE_ERROR,
                        text: 'Invalid Address',
                    });
                }
                this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                this.openSuggestedAddress(results);
            }
        });
        if (this.addressData) {
            this.address.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titleSelected(title) {
        this.address['controls'].titleCode.setValue(title.code);
    }
    /**
     * @param {?} country
     * @return {?}
     */
    countrySelected(country) {
        this.address['controls'].country['controls'].isocode.setValue(country.isocode);
        this.userService.loadRegions(country.isocode);
    }
    /**
     * @param {?} region
     * @return {?}
     */
    regionSelected(region) {
        this.address['controls'].region['controls'].isocode.setValue(region.isocode);
    }
    /**
     * @return {?}
     */
    toggleDefaultAddress() {
        this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
    }
    /**
     * @return {?}
     */
    back() {
        this.backToAddress.emit();
    }
    /**
     * @return {?}
     */
    verifyAddress() {
        this.checkoutService.verifyAddress(this.address.value);
    }
    /**
     * @param {?} results
     * @return {?}
     */
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.address.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(address => {
                this.checkoutService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: this.address.value.titleCode,
                        phone: this.address.value.phone,
                        selected: true,
                    }, address);
                    this.submitAddress.emit(address);
                }
                this.suggestedAddressModalRef = null;
            })
                .catch(() => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutService.clearAddressVerificationResults();
                /** @type {?} */
                const address = Object.assign({
                    selected: true,
                }, this.address.value);
                this.submitAddress.emit(address);
                this.suggestedAddressModalRef = null;
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    }
}
AddressFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-form',
                template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"(titles$ | async) as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'address.label.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'address.label.firstName' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{ 'address.placeholder.firstName' | cxTranslate }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'address.label.lastName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'address.placeholder.lastName' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'address.label.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{\n              'address.placeholder.streetAddress' | cxTranslate\n            }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'address.label.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'address.placeholder.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"(countries$ | async) as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'address.label.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{\n                  'address.placeholder.selectOne' | cxTranslate\n                }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'address.label.city' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'address.placeholder.city' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"(regions$ | async) as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'address.label.state' | cxTranslate\n                }}</span>\n                <ng-container *ngIf=\"regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    formControlName=\"isocode\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"name\"\n                    bindValue=\"isocode\"\n                    placeholder=\"{{\n                      'address.placeholder.selectOne' | cxTranslate\n                    }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n                <ng-container *ngIf=\"!regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"isocode\"\n                    bindValue=\"region\"\n                    placeholder=\"{{\n                      'address.placeholder.selectOne' | cxTranslate\n                    }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'address.label.zipCode' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'address.placeholder.zipCode' | cxTranslate }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'address.label.phoneNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'address.placeholder.phoneNumber' | cxTranslate }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField !== false\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'common.action.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('address.action.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.action.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}"]
            }] }
];
/** @nocollapse */
AddressFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutService },
    { type: UserService },
    { type: GlobalMessageService },
    { type: NgbModal }
];
AddressFormComponent.propDecorators = {
    addressData: [{ type: Input }],
    actionBtnLabel: [{ type: Input }],
    cancelBtnLabel: [{ type: Input }],
    setAsDefaultField: [{ type: Input }],
    showTitleCode: [{ type: Input }],
    submitAddress: [{ type: Output }],
    backToAddress: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressFormModule {
}
AddressFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    RouterModule,
                    NgSelectModule,
                    I18nModule,
                ],
                declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
                entryComponents: [SuggestedAddressDialogComponent],
                exports: [AddressFormComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShippingAddressComponent {
    /**
     * @param {?} userService
     * @param {?} cartData
     * @param {?} routingService
     */
    constructor(userService, cartData, routingService) {
        this.userService = userService;
        this.cartData = cartData;
        this.routingService = routingService;
        this.newAddressFormManuallyOpened = false;
        this.cards = [];
        this.addAddress = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isLoading$ = this.userService.getAddressesLoading();
        this.userService.loadAddresses(this.cartData.userId);
        this.existingAddresses$ = this.userService.getAddresses().pipe(tap(addresses => {
            if (this.cards.length === 0 && addresses) {
                addresses.forEach(address => {
                    /** @type {?} */
                    const card = this.getCardContent(address);
                    if (this.selectedAddress &&
                        this.selectedAddress.id === address.id) {
                        card.header = 'SELECTED';
                    }
                });
            }
        }), filter(Boolean));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    getCardContent(address) {
        /** @type {?} */
        let region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        /** @type {?} */
        const card = {
            title: address.defaultAddress ? 'Default Shipping Address' : '',
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
            actions: [{ name: 'Ship to this address', event: 'send' }],
        };
        this.cards.push(card);
        return card;
    }
    /**
     * @param {?} address
     * @param {?} index
     * @return {?}
     */
    addressSelected(address, index) {
        this.selectedAddress = address;
        for (let i = 0; this.cards[i]; i++) {
            /** @type {?} */
            const card = this.cards[i];
            if (i === index) {
                card.header = 'SELECTED';
            }
            else {
                card.header = '';
            }
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.addAddress.emit({ address: this.selectedAddress, newAddress: false });
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addNewAddress(address) {
        this.addAddress.emit({ address: address, newAddress: true });
    }
    /**
     * @return {?}
     */
    showNewAddressForm() {
        this.newAddressFormManuallyOpened = true;
    }
    /**
     * @param {?=} goBack
     * @return {?}
     */
    hideNewAddressForm(goBack = false) {
        this.newAddressFormManuallyOpened = false;
        if (goBack) {
            this.back();
        }
    }
    /**
     * @return {?}
     */
    back() {
        this.routingService.go({ route: ['cart'] });
    }
}
ShippingAddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-shipping-address',
                template: "<ng-container *ngIf=\"(existingAddresses$ | async) as existingAddresses\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.label.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingAddresses?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.label.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.action.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let address of existingAddresses; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(address, i)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"cards[i]\"\n              (sendCard)=\"addressSelected(address, i)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.action.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress\"\n            (click)=\"next()\"\n          >\n            {{ 'common.action.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"existingAddresses.length; else initialAddressForm\">\n        <cx-address-form\n          showTitleCode=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          showTitleCode=\"true\"\n          cancelBtnLabel=\"{{ 'checkout.action.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-shipping-address-card{padding-bottom:var(--cx-padding,30px)}.cx-shipping-address-card .cx-shipping-address-card-inner{height:var(--cx-height,100%);background-color:var(--cx-background-color,var(--cx-g-color-inverse));cursor:pointer}"]
            }] }
];
/** @nocollapse */
ShippingAddressComponent.ctorParameters = () => [
    { type: UserService },
    { type: CartDataService },
    { type: RoutingService }
];
ShippingAddressComponent.propDecorators = {
    selectedAddress: [{ type: Input }],
    addAddress: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShippingAddressModule {
}
ShippingAddressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    AddressFormModule,
                    CardModule,
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [ShippingAddressComponent],
                entryComponents: [ShippingAddressComponent],
                exports: [ShippingAddressComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeliveryModeComponent {
    /**
     * @param {?} fb
     * @param {?} service
     */
    constructor(fb, service) {
        this.fb = fb;
        this.service = service;
        this.selectMode = new EventEmitter();
        this.backStep = new EventEmitter();
        this.leave = false;
        this.mode = this.fb.group({
            deliveryModeId: ['', Validators.required],
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.supportedDeliveryModes$ = this.service
            .getSupportedDeliveryModes()
            .pipe(takeWhile(() => !this.leave), tap(supportedModes => {
            if (Object.keys(supportedModes).length === 0) {
                this.service.loadSupportedDeliveryModes();
            }
            else {
                if (this.selectedShippingMethod) {
                    this.mode.controls['deliveryModeId'].setValue(this.selectedShippingMethod);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    next() {
        this.selectMode.emit(this.mode.value);
    }
    /**
     * @return {?}
     */
    back() {
        this.leave = true;
        this.backStep.emit();
    }
    /**
     * @return {?}
     */
    get deliveryModeInvalid() {
        return this.mode.controls['deliveryModeId'].invalid;
    }
}
DeliveryModeComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-delivery-mode',
                template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.label.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <div\n        class=\"form-check\"\n        *ngFor=\"let mode of (supportedDeliveryModes$ | async)\"\n      >\n        <input\n          class=\"form-check-input\"\n          role=\"radio\"\n          type=\"radio\"\n          tabindex=\"0\"\n          id=\"deliveryMode-{{ mode.code }}\"\n          aria-checked=\"true\"\n          [value]=\"mode.code\"\n          formControlName=\"deliveryModeId\"\n        />\n        <label\n          class=\"cx-delivery-label form-check-label\n            form-radio-label\"\n          for=\"deliveryMode-{{ mode.code }}\"\n        >\n          <div class=\"cx-delivery-shipping\">{{ mode.name }}</div>\n          <div class=\"cx-delivery-price\">\n            {{ mode.deliveryCost.formattedValue }}\n          </div>\n          <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.action.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.action.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-delivery-label{padding:var(--cx-padding,0);margin:var(--cx-margin,0 auto 0 .75rem);width:var(--cx-width,100%);display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row);justify-content:var(--cx-space-justify-content,space-between);flex-wrap:var(--cx-flex-wrap,wrap)}.cx-delivery-label .cx-delivery-shipping{flex:var(--cx-flex,50%)}.cx-delivery-label .cx-delivery-price{flex:var(--cx-flex,50%);text-align:var(--cx-text-align,right)}.cx-delivery-label .cx-delivery-details{flex:var(--cx-flex,100%);color:var(--cx-color,var(--cx-g-color-success))}.form-check{display:var(--cx-display,flex)}"]
            }] }
];
/** @nocollapse */
DeliveryModeComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutService }
];
DeliveryModeComponent.propDecorators = {
    selectedShippingMethod: [{ type: Input }],
    selectMode: [{ type: Output }],
    backStep: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeliveryModeModule {
}
DeliveryModeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ReactiveFormsModule, I18nModule],
                declarations: [DeliveryModeComponent],
                entryComponents: [DeliveryModeComponent],
                exports: [DeliveryModeComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const infoIconImgSrc = 
// tslint:disable-next-line:max-line-length
'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAcJJREFUOBGdVE0vxGAQnnm7iTg4OThgCQcJwoWQsBIRdxcfcfIblmwTYb2Ij12Wn0CciR+AhIgQiYOvbFzEsg4O4g9ox0zppml1bbxJ25nneWY6nfedIvyyJk3dC4hDQBRDwCaRENADY6cKcX9tJXnmD0MvkEgsNllobSNitxf320R0YZAxkU7PPrhcIVHcXGhXSEdMVLrkH893m3BgI5W8Fp2TyDR19BPxkp0qfzAR3DtChJYAB/AGhtGVWZrJKSEtxJ1fkwC8VJRTm1zEtj+RE/NpbQmO8cT8gFJw6Bc5PlE+99hcL3a0MZvjwGoHD9xoMIKKRn6+MEDzLtVEG7JuD0KSyI7CMPcXY8EMHgThxuOFmX0KkOrCWH7XTWZ1bvy7R/QUpuNiahWXZYcJ+JM/hNNa21z/c5iOkEh2LR8mKBXnil6lRyelBhTRHUuPdosISqL40O6p9VUtZygwhJKBZ6rMzcTzV7Bd7Od5nknPHUTEsQxjVFnWVfB0Y+eUqcdEw2/tQBZ4F2/Um20Yw4IVqKlp3Qo2HjNW8tBahP2bqeStJHJmTYz1ZX2nbNUjvwjxiy3RiNZNItpCRd7A//zYvgA3qp1kzbwCaAAAAABJRU5ErkJggg==';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentFormComponent {
    /**
     * @param {?} checkoutService
     * @param {?} userService
     * @param {?} globalMessageService
     * @param {?} fb
     * @param {?} modalService
     */
    constructor(checkoutService, userService, globalMessageService, fb, modalService) {
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.modalService = modalService;
        this.months = [];
        this.years = [];
        this.sameAsShippingAddress = true;
        this.backToPayment = new EventEmitter();
        this.addPaymentInfo = new EventEmitter();
        this.payment = this.fb.group({
            defaultPayment: [false],
            accountHolderName: ['', Validators.required],
            cardNumber: ['', Validators.required],
            cardType: this.fb.group({
                code: ['', Validators.required],
            }),
            expiryMonth: ['', Validators.required],
            expiryYear: ['', Validators.required],
            cvn: ['', Validators.required],
        });
        this.billingAddress = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            country: this.fb.group({
                isocode: ['', Validators.required],
            }),
            postalCode: ['', Validators.required],
        });
        this.infoIconImgSrc = infoIconImgSrc;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.expMonthAndYear();
        this.countries$ = this.userService.getAllBillingCountries().pipe(tap(countries => {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                this.userService.loadBillingCountries();
            }
        }));
        this.cardTypes$ = this.checkoutService.getCardTypes().pipe(tap(cardTypes => {
            if (Object.keys(cardTypes).length === 0) {
                this.checkoutService.loadSupportedCardTypes();
            }
        }));
        this.shippingAddress$ = this.checkoutService.getDeliveryAddress();
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe((shouldShowCheckbox) => {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            this.sameAsShippingAddress = shouldShowCheckbox;
        });
        // verify the new added address
        this.addressVerifySub = this.checkoutService
            .getAddressVerificationResults()
            .subscribe((results) => {
            if (results === 'FAIL') {
                this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.next();
            }
            else if (results.decision === 'REJECT') {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'Invalid Address',
                });
                this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                this.openSuggestedAddress(results);
            }
        });
    }
    /**
     * @return {?}
     */
    expMonthAndYear() {
        /** @type {?} */
        const year = new Date().getFullYear();
        for (let i = 0; i < 10; i++) {
            this.years.push({ id: i + 1, name: year + i });
        }
        for (let j = 1; j <= 12; j++) {
            if (j < 10) {
                this.months.push({ id: j, name: '0' + j.toString() });
            }
            else {
                this.months.push({ id: j, name: j.toString() });
            }
        }
    }
    /**
     * @return {?}
     */
    toggleDefaultPaymentMethod() {
        this.payment.value.defaultPayment = !this.payment.value.defaultPayment;
    }
    /**
     * @param {?} card
     * @return {?}
     */
    paymentSelected(card) {
        this.payment['controls'].cardType['controls'].code.setValue(card.code);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    monthSelected(month) {
        this.payment['controls'].expiryMonth.setValue(month.name);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    yearSelected(year) {
        this.payment['controls'].expiryYear.setValue(year.name);
    }
    /**
     * @return {?}
     */
    toggleSameAsShippingAddress() {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    }
    /**
     * @return {?}
     */
    isContinueButtonDisabled() {
        return (this.payment.invalid ||
            (!this.sameAsShippingAddress && this.billingAddress.invalid));
    }
    /**
     * Check if the shipping address can also be a billing address
     *
     * \@memberof PaymentFormComponent
     * @return {?}
     */
    showSameAsShippingAddressCheckbox() {
        return combineLatest(this.countries$, this.shippingAddress$).pipe(map(([countries, address]) => {
            return !!countries.filter((country) => country.isocode === address.country.isocode).length;
        }));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    getAddressCardContent(address) {
        /** @type {?} */
        let region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        return {
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
        };
    }
    /**
     * @param {?} results
     * @return {?}
     */
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddress.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(() => {
                this.checkoutService.clearAddressVerificationResults();
                this.suggestedAddressModalRef = null;
            })
                .catch(() => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutService.clearAddressVerificationResults();
                this.suggestedAddressModalRef = null;
            });
        }
    }
    /**
     * @return {?}
     */
    back() {
        this.backToPayment.emit();
    }
    /**
     * @return {?}
     */
    verifyAddress() {
        if (this.sameAsShippingAddress) {
            this.next();
        }
        else {
            this.checkoutService.verifyAddress(this.billingAddress.value);
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.addPaymentInfo.emit({
            paymentDetails: this.payment.value,
            billingAddress: this.sameAsShippingAddress
                ? null
                : this.billingAddress.value,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.checkboxSub) {
            this.checkboxSub.unsubscribe();
        }
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    }
}
PaymentFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-form',
                template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"(cardTypes$ | async) as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'payment.label.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{\n                  'payment.placeholder.selectOne' | cxTranslate\n                }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'payment.label.accountHolderName' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'payment.placeholder.accountHolderName' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'payment.label.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'payment.label.expirationDate' | cxTranslate\n            }}</span>\n            <div class=\"cx-payment-form-exp-date row\">\n              <div class=\"col-sm-6 col-md-5\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"months\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryMonth\"\n                  placeholder=\"{{\n                    'payment.placeholder.monthMask' | cxTranslate\n                  }}\"\n                  (change)=\"monthSelected($event)\"\n                >\n                </ng-select>\n              </div>\n              <div class=\"col-sm-6 col-md-7\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"years\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryYear\"\n                  placeholder=\"{{\n                    'payment.placeholder.yearMask' | cxTranslate\n                  }}\"\n                  (change)=\"yearSelected($event)\"\n                >\n                </ng-select>\n              </div>\n            </div>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'payment.label.securityCode' | cxTranslate }}\n              <img\n                class=\"cx-payment-form-tooltip\"\n                [src]=\"infoIconImgSrc\"\n                placement=\"right\"\n                ngbTooltip=\"Card Verification Value\"\n                alt=\"\"\n              />\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'payment.label.saveAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'payment.label.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"(showSameAsShippingAddressCheckbox() | async)\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'payment.label.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            (sameAsShippingAddress && shippingAddress$\n              | async) as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          ></cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'payment.action.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.action.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-payment-form-tooltip{margin:var(--cx-margin,0 0 0 .625rem);height:var(--cx-height,1.125rem);width:var(--cx-width,1.125rem)}.cx-payment-form-billing{margin:var(--cx-margin,0 0 1.25rem 0)}.cx-payment-form-billing-address{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);padding:var(--cx-padding,.875rem 0 1.25rem 0)}.cx-payment-form-exp-date{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row);flex-wrap:var(--cx-flex-wrap,nowrap)}.form-check{margin:var(--cx-margin,0)}"]
            }] }
];
/** @nocollapse */
PaymentFormComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: NgbModal }
];
PaymentFormComponent.propDecorators = {
    backToPayment: [{ type: Output }],
    addPaymentInfo: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BillingAddressFormComponent {
    /**
     * @param {?} country
     * @return {?}
     */
    countrySelected(country) {
        this.billingAddress['controls'].country['controls'].isocode.setValue(country.isocode);
    }
}
BillingAddressFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-billing-address-form',
                template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'address.label.firstName' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'address.placeholder.firstName' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'address.label.lastName' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'address.placeholder.lastName' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'address.label.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'address.placeholder.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'address.label.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'address.placeholder.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"(countries$ | async) as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'address.label.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"false\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'address.placeholder.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'address.label.city' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'address.placeholder.city' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'address.label.zipCode' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'address.placeholder.zipCode' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}"]
            }] }
];
BillingAddressFormComponent.propDecorators = {
    billingAddress: [{ type: Input }],
    countries$: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BillingAddressFormModule {
}
BillingAddressFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    RouterModule,
                    NgSelectModule,
                    I18nModule,
                ],
                declarations: [BillingAddressFormComponent],
                exports: [BillingAddressFormComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentFormModule {
}
PaymentFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    NgSelectModule,
                    BootstrapModule,
                    CardModule,
                    BillingAddressFormModule,
                    I18nModule,
                ],
                declarations: [PaymentFormComponent],
                entryComponents: [PaymentFormComponent],
                exports: [PaymentFormComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const masterCardImgSrc = 
// tslint:disable-next-line:max-line-length
'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAwCAYAAABUtfevAAAAAXNSR0IArs4c6QAACWdJREFUaAXtWguMVNUZ/s69d2Z2dnbZXQR57C4sylMei1ihNBRIRESFPoLY1hRKYtAUtaIJJqJNpLU2BqlNLGIbU0CDktAuUFGooUrRPn3wXB77YGF5Y9llZ3dndh73nn7nLruzwszO4w4xaeckd+655/zn9Z3//8///2dEdXXDQEtE1kgp5giBfORSXASkxGUIbJZ9C58wLBHdAIjZBCyXekGA+BSzeoloagsYkHImWDJ6RAUMw+il2f93VbAjhPqGU4C0ZmgEzK3gyAHWO1NoMVH0aL2T5mrjIZADLR4qScpyoCUBKF51DrR4qCQpy4GWBKB41TnQ4qGSpOy6G2ayrR3RfYf4HIRZUw/z3AV7SsLthjFxHIxxY2CMHg5t2NAkU6WJdLkaaK2DbG1g/jDprc6+CoYBBRUQxbfwGQdorqR9OSG4bqDJlla0//wlhLa8C4QjcecY2fOP7nJjyiT4nl4G47bK7rKujDyzA+ax14B2Gpdxkrz0eazUXcINuB/ayCUsuz6CJA4erpVqxHFjhscGdpgLrl2P4Ku/Jze0pNcTDUj3vLtQ8MKzEEWFgL8G5sEXIZv2ptePos4vhX7L4xCDZqXfNk6LUCiM2uONZHd5JKugSX8r/D96FNFP98UZNvUiUVKMwhfm01nZSAmMz6Wp9qYNvQ/ahKdJ7sy57gla9viXvpl/4VLHgCkwNN9lBNa8DvNCmF9KEHo+iiL1ZJ38A8z9z6feIAXKrIHW+vgKRD8/kMKQyUlclQLGUA3R/RZkR3L6ZBSycQusunXJyFKuzwpoHeveQvi9XSkPmohQeAHPvSLGVyGByF5b5SZqknK5deQ3kM37U6bvjdAxaOqUDKx+tbcx0qozeS71fCL/4ndDWl0kIJawql9OUJdesWOTI/i7DVDAZSN5Fwlo8WLHmuI2Z4pczU82H4D84u8Q/b/haLqOQQtt2+FoAl2Ntb5A6IPEouj9oYDev4s687d1eif7+QpBM4/UwDp5mkwgIFydVrgM88TTGNtkFFgysI5IcpNBeQf6kAj00l7AaGFf/cltmocR0zz2yxNChnppcFWV8hKkCXl+NyuUJ5G5Zsq8JYdV7pFKnrmzUbTtDRRt2QDRpxD5P16Moq0b0OeNNRAFPhtU6LpN2/2jQusEWxt5M4re2QjXjEmdBwDLJEFXPGc/6pt58xI3ZuB06FNegTH9behT6SHQgL02XSvGwsiH/vU10IYu4KTbKKZ0xxwkR+IZPVpnD61cH50+pEr6oAHwLFwArXQwJI1cY9ZMuCZXQnDlVt0JBDdVIf+JpdRdXpgGwTlWS8t9JPSa2bDOu+CafocNZnjXO+ReD1x3zgPqj8Ls54N+20P0MmphXdwNuAcAvgpo5XPtcWVbI+SFPdDHPwVLgaK5IVqPAwOm06M4BHHD1yBP/NGmRfAsUDK+M5/BryPQlJukxFIvL4V56oz9ds2eCW3wIH6fhXX2PNyVYymmXENZKfIWfQ9i/Ch4F3wHwbe3AC1+imUZ5KVmWO0u5P90FSKf7LOB9z45FWH6pu477kG0fDTkqUZySRDWZ8tpu53jUsl5Nz1gL1n4hpBjH4ZZ/SuIsnnQ+95KcGsgxi4jVx3iBs6y6ayWo/ZbRlodHSuOxNOegTcPGhdu1TXYn+5vzUFkfzU0ncbp8ZNcaASusaOgDbiixcNRm06nbxne8Rf6hgNhHqmG8PJasagP9LJBjFQUQSv00cAtQ7R6Hzo2PMI+ygnAQaqxziiJLbzRDpuDQNBU0gpvphx3ILp3OeDtb9ObHy+GdWIzEDxPPZimL2z3eu2PI9BE32KIPA90e3Gdu2iMHgEVvRCDB7K8HHlLFiL4+kZE//kpQzptCK5eC/9TK2GQA33PLbdpovUnYV2iUg8EEfnsAMK7/opQ1XZyCDn2cC2fdsgAAfINpgLtRx2QB1F6D/TKZ2Cdfhfy3AfEMApJdSbbuFEBP4SiC160VywKKiBVhMRSB4A6tAqvRSKNEkfiaYwdjeihI9zVPESov7ymCVz2wzqjxIcLoD+qkmvSBHjmz4VZfwIFL62EefqMujOEoH2nTxoP6fcTqI+47ihct0+EDHbAamqGPmwI/cZN8MwMwPrifegjl8OYto71TQSH+opJFJGLB1EPMsYm1MEQoL4Kt3CDTvLgmAF92nqIkgmQjdsowo8SPILqK7fbZvqjL33kJ8+pxjf2p6GUZhJUVuFde9TmIbRpqy1eoe3vw2KgUUU8AqteITi6vcORjz9BVJkoTS10yL0I/+3faP/ZKi6OXMR4W3hnFSK7q4Dmi4jUHYbVcBQi2I6Ore9RzzVBhA8SFIaIBIXDXw/r2BoO2tSp5878mQb2YR42NCkYRpIt1fahAMPDfC0PBAY/L3xE0eWmdpyFdtMPOvtJY70m2zY12+L9H8ehoeapd1NEuLsOkzGS+I4g+gmSezrXWch6ZX/QDMk0iXIeFBNXpt08q6GhvEX3pz2BeA2iNWTIgIzZZyRS+NgYlVwBLF7DNMu0ofPTbHEtuaODQHWX98B9EDdS6WYhmbWUoKscdvWtO1NB3TMT/Sbb+q27IMOMo4NAjanC0r4Vy9C27NkMpxBrZp6mkf/wl512QYdCG9xDHHtkYy1TydF3HfUQWZd6TVDPOkiOOU2N7Zk/D+5773QwjVjTwG8lgpv5bJfo+JAmgtJjPZOS1wySNuYxHuPcgfbOUzeDLrqbOOa0rp4Kf/0LtNDU6PJHu8ozeWs30BSr4CXLVDr+zkwqe3gx5LvQhi/OZCpx22SF0+yeaeT22fgajNtvjTtQOoXRxmK45zxIz8DNZorTejxpnpzqYkWvdK46es4/e6CppTHCUVS1HvnPPEmFq/44mGZidMP97btRsudPcM19DMY334ToOzHNTq6Q55fRwX+RN1ErWHCViGfWY3crx3Zad09XZSQ9g/bnVyNE4xS8M0yWjMm8LOaBEv+yeCcvi9cmvCz+Ut/2ZfH3af0/yOLs8URPO+26gda1kJT+ljBmBLSKIV1NEr6/yr8l9AQtawdBopWqIKRr2hT7SUSTarkoHgvwya6wpTp6jC57/Bvr838+lwMtgy3OgZYDLQMEMmiS47QUQbOvI6/Q5kBLETRL3Q51gyalbXn2RLKrMveOIRCJdF4ISSFaaKeJD1l1V/XR+hhFLpcQAbq+O+ntGYsZZKoi9wUSUuYqiIC8RAF9WbPCv/wvB2R7gtIeYHoAAAAASUVORK5CYII=';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const visaImgSrc = 
// tslint:disable-next-line:max-line-length
'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAwCAYAAABUtfevAAAAAXNSR0IArs4c6QAABslJREFUaAXtm2tMFFcUx/+zu4IrIAIiCz5YEQWUWtT6TAUVam1aY9MPmjQabROrJrWm7Rf7qaZtoolNa9KX7Qfb+khrjJrYNNqmxqrxgaj4YHmUxyKgqAjLCgILy07vmfXOzj7KsA8TrHMSd+4599yZuz/OPffMBQWLxWpyCX3fiKKwTBAwApoEJCCKaIeAQ2Ji3PsGl+D8GRCWMmCaDECA8RnFutcLbZ1dBojiIjBL9mQzDAbDAMOe7a7uHgdqrY2A6CrQMWBRhEMDNnBQ6DxLMVo3sKvWG4iABi0QFRWbBk0FUKBuDVogKio2DZoKoEDdGrRAVFRsGjQVQIG6NWiBqKjYNGgqgAJ1a9ACUVGxadBUAAXq1qAFoqJiC+tYo85aAXtrs98joo1xyMqeAb3e//aVdztx1+6Qx2SZYpEaH42/q1rpsEWSeOMw5I0fKftQwyUCpQ12nK1pRVdvP/LGxWNeRgISY4Z5+XGFfMi/r58NZJKTGouUkdG8O6yr/7cK4nbpphRYWmrgrDqEXH2518imkngkrzqGEcYYL/urXxWj7kGXZCNG9duLJGCLvzgv+21ZMhG7VuVKeq/Thd1nbmHHiWo0K2Bz59Vzx2Hf2zO4Kl0tdzowf8dZdDj6Zfu25Vn4+LUpsh5OI6zlqTcmYvqc5Zi5Zi9qsz+FpTtVnktqlB3/VFyWdWoUW20yMNKLcpIxIdGI+lY3RLKRmEe7D5ApWgo+P48tB8sCAiNfg87/9PS70/VewMivpN5Gl4hIWNCUM8iZ+QoOJ+3E1tqX4HS5b9t2+6bSBQeKb3vpmwrMku4LjZYeyY/nG3GRgeZCgJZPT5EiZuWsNIwcbvBbxgSaxvnKJWu7rylkPazl6ftUipzFxxfgSkcajj73C/TtlbJLP0tK+4ubZN3E8suKPJOkUz5TCs9nx8vuKc24uHUhZqW7gVIHLV2CpJQ95xpkG0F2UjJk0tLZi4a2bimylf6htCMWafTwFzMTEW3Q4YzdjFWWlRjjtMpz+rO8BbauPlnfkJ8OvrLauz32eKMBo0a4k3u7wp8GEhCe2EmPYs/ivqST7DpZ526wzy2FGXKbGiX1kYm2iEIz6AUUTEmSJvqXbRIutqegq/uRpB9QRBnB2phvluz0cb3podzmS5MM8zISZTs1vmW5atq2UzhaetfLzpWTlQ9Q2+LZZD4oysCkZM8v2IYkNJp8YfZo/h3wYc0yVNXVoKfPhcNXPaXJiudNMLEyg+RaowcY6XxpUnvrskyYk4zUlKX6/iO8sbsEG/ffAC15pXx9yhPZi7KSkDZqOGan0y+R3DJkoVFe42JzGnHuXiyOlDajh+UfLnwDIN13E+A7J/WNjo3CpY/y8daC8WBB7CXfn72F9fuuy7ZGlq+OXfdE4Lr5E6S+2WYPtCsNQ3B50ixnjI9HwuOcRPq1pk62a3o2ACoxlGCvNdrJTRbl8iRjclwU9qzNQ+UnS7B0qucHQn20S1JyJ6GlywMvJkqPlS+kSfY5ExOkK33Yu52oYsV1uBLRnEaToapeuUTPVLfiD8t9eZ6bF0+UK38yDrQ85UGskTkmBifem4c5isihfoLgYFH8AyuAuTxiO6rx3d8hbPgNC3ee42bpWnIr/GiLODSaWWG2JyIoBz1+k5F21ncWpnt9CeUOqdw5KT+1dPR6+fb2u9iO671OxyYMx8GSO2jz2Wm9BiqUSOS1iNZpfG5FOZ7NgNvoKhWkrKRQymkWiVz40qT6i94CNv9ahty0OORPTsL9DgeobHnY4+TuUpKfmhqHNXtKZZtaY8hCo6VEuYvnG/5FNi0y86Z09d8E3DtlBVtyPD+VsfdI+ucrlDfpnZMq/avsxZzLBhbJu1dP56p03XuhCWt/coO9zJYn3ZvXiF6Og1SeyPKkZxcpSg/Sp7GImM9OJZRS/8CdxLnNnOSuqahAJv//ktfZm0TNZ4WgExJlmUH+b84d6zeMTji4UHF8Q1EXcnswV+FmebVU7OTmZAYzTtW3ydaDGpbPuIxjuYciUCkUaUpwVKMpK3wrOw0pb+5ARXMnKLlnpcRIx0EcLt3rQp0NDlYHcqHi2iftSRvFhVrPO2zu2DipnOFjBnN1OHpRXdfA/gBGrHhi0AYzkafJRwntiS3PpwlIsHPVoAVLjPlr0DRoIRAIYYgWaRq0EAiEMESLNA1aCARCGKJFmgYtBAIhDNEibZDQRPb/fLho0DgJlavLC5ooSsejSpIq45/J7r4+9+GnKAh2dowqnGIUXrZU1j6TMIL90uzY6YROB8M6dkh0hEWf91+hBHu3/72/2Mqy2pc6V+/2fwHiF0LekPcNzgAAAABJRU5ErkJggg==';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentMethodComponent {
    /**
     * @param {?} cartData
     * @param {?} userService
     */
    constructor(cartData, userService) {
        this.cartData = cartData;
        this.userService = userService;
        this.newPaymentFormManuallyOpened = false;
        this.cards = [];
        this.backStep = new EventEmitter();
        this.addPaymentInfo = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isLoading$ = this.userService.getPaymentMethodsLoading();
        this.userService.loadPaymentMethods(this.cartData.userId);
        this.existingPaymentMethods$ = this.userService.getPaymentMethods().pipe(tap(payments => {
            if (this.cards.length === 0) {
                payments.forEach(payment => {
                    /** @type {?} */
                    const card = this.getCardContent(payment);
                    if (this.selectedPayment &&
                        this.selectedPayment.id === payment.id) {
                        card.header = 'SELECTED';
                    }
                });
            }
        }));
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    getCardContent(payment) {
        /** @type {?} */
        let ccImage;
        if (payment.cardType.code === 'visa') {
            ccImage = visaImgSrc;
        }
        else if (payment.cardType.code === 'master') {
            ccImage = masterCardImgSrc;
        }
        /** @type {?} */
        const card = {
            title: payment.defaultPayment ? 'Default Payment Method' : '',
            textBold: payment.accountHolderName,
            text: [
                payment.cardNumber,
                'Expires: ' + payment.expiryMonth + '/' + payment.expiryYear,
            ],
            img: ccImage,
            actions: [{ name: 'Use this payment', event: 'send' }],
        };
        this.cards.push(card);
        return card;
    }
    /**
     * @param {?} paymentDetails
     * @param {?} index
     * @return {?}
     */
    paymentMethodSelected(paymentDetails, index) {
        this.selectedPayment = paymentDetails;
        for (let i = 0; this.cards[i]; i++) {
            /** @type {?} */
            const card = this.cards[i];
            if (i === index) {
                card.header = 'SELECTED';
            }
            else {
                card.header = '';
            }
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.addPaymentInfo.emit({
            payment: this.selectedPayment,
            newPayment: false,
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addNewPaymentMethod({ paymentDetails, billingAddress, }) {
        this.addPaymentInfo.emit({
            payment: paymentDetails,
            billingAddress,
            newPayment: true,
        });
    }
    /**
     * @return {?}
     */
    showNewPaymentForm() {
        this.newPaymentFormManuallyOpened = true;
    }
    /**
     * @return {?}
     */
    hideNewPaymentForm() {
        this.newPaymentFormManuallyOpened = false;
    }
    /**
     * @return {?}
     */
    back() {
        this.backStep.emit();
    }
}
PaymentMethodComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-method',
                template: "<ng-container\n  *ngIf=\"(existingPaymentMethods$ | async) as existingPaymentMethods\"\n>\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'payment.label.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'payment.label.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'payment.action.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"cards[i]\"\n              (sendCard)=\"paymentMethodSelected(method, i)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.action.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.action.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (addPaymentInfo)=\"addNewPaymentMethod($event)\"\n        (backToPayment)=\"hideNewPaymentForm()\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-payment.container{padding:var(--cx-padding,0)}.cx-payment-card{padding-bottom:var(--cxpadding,30px)}.cx-payment-card-inner{height:var(--cx-height,100%);background-color:var(--cx-background-color,var(--cx-g-color-inverse));cursor:pointer}.cx-checkout-title{text-transform:var(--cx-text-transform,uppercase);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}@media (max-width:991.98px){.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-payment-card-inner{background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}.cx-checkout-btns{padding-bottom:var(--cx-padding,1rem)}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}.cx-checkout-btns .btn-action{margin-bottom:var(--cx-margin,1rem)}}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}"]
            }] }
];
/** @nocollapse */
PaymentMethodComponent.ctorParameters = () => [
    { type: CartDataService },
    { type: UserService }
];
PaymentMethodComponent.propDecorators = {
    selectedPayment: [{ type: Input }],
    backStep: [{ type: Output }],
    addPaymentInfo: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentMethodModule {
}
PaymentMethodModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    PaymentFormModule,
                    CardModule,
                    SpinnerModule,
                    I18nModule,
                ],
                providers: [UserService],
                declarations: [PaymentMethodComponent],
                entryComponents: [PaymentMethodComponent],
                exports: [PaymentMethodComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReviewSubmitComponent {
    /**
     * @param {?} checkoutService
     * @param {?} userService
     * @param {?} cartService
     */
    constructor(checkoutService, userService, cartService) {
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
        this.deliveryMode$ = this.checkoutService.getSelectedDeliveryMode().pipe(tap(selected => {
            if (selected === null) {
                this.checkoutService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.userService
            .getCountry(this.deliveryAddress.country.isocode)
            .pipe(tap(country => {
            if (country === null) {
                this.userService.loadDeliveryCountries();
            }
        }));
    }
    /**
     * @param {?} countryName
     * @return {?}
     */
    getShippingAddressCard(countryName) {
        if (!countryName) {
            countryName = this.deliveryAddress.country.isocode;
        }
        /** @type {?} */
        let region = '';
        if (this.deliveryAddress.region && this.deliveryAddress.region.isocode) {
            region = this.deliveryAddress.region.isocode + ', ';
        }
        return {
            title: 'Ship To',
            textBold: this.deliveryAddress.firstName + ' ' + this.deliveryAddress.lastName,
            text: [
                this.deliveryAddress.line1,
                this.deliveryAddress.line2,
                this.deliveryAddress.town + ', ' + region + countryName,
                this.deliveryAddress.postalCode,
                this.deliveryAddress.phone,
            ],
        };
    }
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    getShippingMethodCard(deliveryMode) {
        if (deliveryMode) {
            return {
                title: 'Shipping Method',
                textBold: this.shippingMethod,
                text: [deliveryMode.description],
            };
        }
    }
    /**
     * @return {?}
     */
    getPaymentMethodCard() {
        return {
            title: 'Payment',
            textBold: this.paymentDetails.accountHolderName,
            text: [
                this.paymentDetails.cardNumber,
                'Expires: ' +
                    this.paymentDetails.expiryMonth +
                    '/' +
                    this.paymentDetails.expiryYear,
            ],
        };
    }
}
ReviewSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-review-submit',
                template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.label.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"getShippingAddressCard((countryName$ | async)?.name)\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- SHIPPING METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          [content]=\"getShippingMethodCard(deliveryMode$ | async)\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card [content]=\"getPaymentMethodCard()\"></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.label.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.action.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-review-title{text-transform:var(--cx-text-transform,uppercase);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.25rem 0)}.cx-review-summary{margin:var(--cx-margin,0);background-color:var(--cx-background-color,var(--cx-g-color-background))}.row{margin:var(--cx-margin,0)}.form-check{padding:var(--cx-padding,0);margin:var(--cx-margin,0)}.col-md-4{padding:var(--cx-padding,0)}.cx-review-cart-total{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,2.625rem 0 .5rem 0)}.cx-review-cart-heading{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);padding:var(--cx-padding,1.375rem 0);margin:var(--cx-margin,0);border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px 0);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:991.98px){.cx-review-summary .cx-review-summary-card{background-color:#fff;border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-review-cart-heading{border-width:var(--cx-border-width,1px 0 0);max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,1.375rem 0 1.375rem 3.5rem)}.cx-review-cart-item .col-md-12{padding:var(--cx-padding,0)}}@media (max-width:767.98px){.cx-review-cart-heading{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,1.375rem 0 1.375rem 1.25rem)}.cx-review-cart-item .col-md-12{padding:var(--cx-padding,0)}}.cx-review-cart-item{padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-review-cart-item{border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px 0 0);border-color:var(--cx-border-color,var(--cx-g-color-light))}:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}@media (max-width:991.98px){.col-md-12{padding:var(--cx-padding,0 3.5rem 3.5rem 3.5rem)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 1.25rem 1.25rem 1.25rem)}}"]
            }] }
];
/** @nocollapse */
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: UserService },
    { type: CartService }
];
ReviewSubmitComponent.propDecorators = {
    deliveryAddress: [{ type: Input }],
    shippingMethod: [{ type: Input }],
    paymentDetails: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReviewSubmitModule {
}
ReviewSubmitModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CardModule, CartSharedModule, I18nModule],
                declarations: [ReviewSubmitComponent],
                entryComponents: [ReviewSubmitComponent],
                exports: [ReviewSubmitComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultiStepCheckoutComponent {
    /**
     * @param {?} checkoutService
     * @param {?} cartService
     * @param {?} cartDataService
     * @param {?} routingService
     * @param {?} globalMessageService
     * @param {?} cd
     */
    constructor(checkoutService, cartService, cartDataService, routingService, globalMessageService, cd) {
        this.checkoutService = checkoutService;
        this.cartService = cartService;
        this.cartDataService = cartDataService;
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.cd = cd;
        this.step = 1;
        this.done = false;
        this.subscriptions = [];
        this.tAndCToggler = false;
        this.navs = this.initializeCheckoutNavBar();
    }
    /**
     * @private
     * @return {?}
     */
    refreshCart() {
        this.cartService.loadDetails();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.cartDataService.getDetails) {
            this.cartService.loadDetails();
        }
        this.cart$ = this.cartService.getActive();
        this.processSteps();
    }
    /**
     * @return {?}
     */
    processSteps() {
        // step1: set delivery address
        this.subscriptions.push(this.checkoutService
            .getDeliveryAddress()
            .pipe(filter(deliveryAddress => Object.keys(deliveryAddress).length !== 0 && this.step === 1))
            .subscribe(deliveryAddress => {
            this.deliveryAddress = deliveryAddress;
            this.nextStep(2);
            this.refreshCart();
            this.cd.detectChanges();
        }));
        // step2: select delivery mode
        this.subscriptions.push(this.checkoutService
            .getSelectedDeliveryModeCode()
            .pipe(filter(selected => selected !== '' && this.step === 2))
            .subscribe(selectedMode => {
            this.nextStep(3);
            this.refreshCart();
            this.shippingMethod = selectedMode;
            this.cd.detectChanges();
        }));
        // step3: set payment information
        this.subscriptions.push(this.checkoutService
            .getPaymentDetails()
            .pipe(filter(paymentInfo => Object.keys(paymentInfo).length !== 0 && this.step === 3))
            .subscribe(paymentInfo => {
            if (!paymentInfo['hasError']) {
                this.nextStep(4);
                this.paymentDetails = paymentInfo;
                this.cd.detectChanges();
            }
            else {
                Object.keys(paymentInfo).forEach(key => {
                    if (key.startsWith('InvalidField')) {
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'InvalidField: ' + paymentInfo[key],
                        });
                    }
                });
                this.checkoutService.clearCheckoutStep(3);
            }
        }));
        // step4: place order
        this.subscriptions.push(this.checkoutService
            .getOrderDetails()
            .pipe(filter(order => Object.keys(order).length !== 0 && this.step === 4))
            .subscribe(() => {
            // checkout steps are done
            this.done = true;
            this.routingService.go({ route: ['orderConfirmation'] });
        }));
    }
    /**
     * @param {?} backStep
     * @return {?}
     */
    setStep(backStep) {
        this.nextStep(backStep);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    nextStep(step) {
        /** @type {?} */
        const previousStep = step - 1;
        this.navs.forEach(function (nav) {
            if (nav.id === previousStep) {
                nav.status.completed = true;
            }
            if (nav.id === step) {
                nav.status.active = true;
                nav.status.disabled = false;
            }
            else {
                nav.status.active = false;
            }
            nav.progressBar = nav.status.active || nav.status.completed;
        });
        this.step = step;
        this.tAndCToggler = false;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addAddress({ newAddress, address, }) {
        if (newAddress) {
            this.checkoutService.createAndSetAddress(address);
            return;
        }
        // if the selected address is the same as the cart's one
        if (this.deliveryAddress && address.id === this.deliveryAddress.id) {
            this.nextStep(2);
            return;
        }
        this.checkoutService.setDeliveryAddress(address);
        return;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    setDeliveryMode({ deliveryModeId }) {
        // if the selected shipping method is the same as the cart's one
        if (this.shippingMethod && this.shippingMethod === deliveryModeId) {
            this.nextStep(3);
            return;
        }
        this.checkoutService.setDeliveryMode(deliveryModeId);
        return;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addPaymentInfo({ newPayment, payment, billingAddress, }) {
        payment.billingAddress = billingAddress
            ? billingAddress
            : this.deliveryAddress;
        if (newPayment) {
            this.checkoutService.createPaymentDetails(payment);
            return;
        }
        // if the selected payment is the same as the cart's one
        if (this.paymentDetails && this.paymentDetails.id === payment.id) {
            this.nextStep(4);
            return;
        }
        this.checkoutService.setPaymentDetails(payment);
    }
    /**
     * @return {?}
     */
    placeOrder() {
        this.checkoutService.placeOrder();
    }
    /**
     * @return {?}
     */
    toggleTAndC() {
        this.tAndCToggler = !this.tAndCToggler;
    }
    /**
     * @return {?}
     */
    initializeCheckoutNavBar() {
        return [
            {
                id: 1,
                label: '1. Shipping Address',
                status: {
                    disabled: false,
                    completed: false,
                    active: true,
                },
                progressBar: true,
            },
            {
                id: 2,
                label: '2. Shipping Method',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
            {
                id: 3,
                label: '3. Payment',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
            {
                id: 4,
                label: '4. Review',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
        ];
    }
    /**
     * @return {?}
     */
    clearCheckoutNavBar() {
        this.navs = [];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        if (!this.done) {
            this.checkoutService.clearCheckoutData();
        }
        this.clearCheckoutNavBar();
    }
}
MultiStepCheckoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-multi-step-checkout',
                template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-8\">\n      <!-- VISIBLE ONLY ON LG AND XL SCREENS -->\n      <!-- Navigation -->\n      <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n        <ul class=\"cx-list\">\n          <li\n            *ngFor=\"let nav of navs\"\n            class=\"cx-item\"\n            [ngClass]=\"{\n              ' is-disabled': nav.status.disabled,\n              ' is-active': nav.status.active\n            }\"\n          >\n            <a\n              class=\"cx-link \"\n              [ngClass]=\"{\n                ' is-disabled': nav.status.disabled,\n                ' is-active': nav.status.active\n              }\"\n              (click)=\"nav.status.disabled === false ? setStep(nav.id) : false\"\n              >{{ nav.label }}</a\n            >\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"cx-media\">\n        <div class=\"cx-list-media\">\n          {{\n            'cartItems.label.cartTotal'\n              | cxTranslate: { count: cart.totalItems }\n          }}:\n          {{ cart.subTotal?.formattedValue }}\n        </div>\n\n        <div *ngFor=\"let nav of navs\">\n          <!-- Navigation -->\n          <div\n            class=\"cx-list-media\"\n            [ngClass]=\"{ ' is-active': nav.status.active }\"\n          >\n            <div>{{ nav.label }}</div>\n            <button\n              *ngIf=\"nav.status.completed && !nav.status.active\"\n              class=\"btn btn-link\"\n              (click)=\"setStep(nav.id)\"\n            >\n              {{ 'common.action.edit' | cxTranslate }}\n            </button>\n          </div>\n\n          <!-- Content -->\n          <div *ngIf=\"nav.status.active && step === 1\">\n            <cx-shipping-address\n              [selectedAddress]=\"deliveryAddress\"\n              (addAddress)=\"addAddress($event)\"\n            ></cx-shipping-address>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 2\">\n            <cx-delivery-mode\n              [selectedShippingMethod]=\"shippingMethod\"\n              (selectMode)=\"setDeliveryMode($event)\"\n              (backStep)=\"setStep(1)\"\n            ></cx-delivery-mode>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 3\">\n            <cx-payment-method\n              [selectedPayment]=\"paymentDetails\"\n              (addPaymentInfo)=\"addPaymentInfo($event)\"\n              (backStep)=\"setStep(2)\"\n            ></cx-payment-method>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 4\">\n            <cx-review-submit\n              [deliveryAddress]=\"deliveryAddress\"\n              [shippingMethod]=\"shippingMethod\"\n              [paymentDetails]=\"paymentDetails\"\n            >\n            </cx-review-submit>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ORDER SUMMARY SECTION -->\n    <div class=\"col-md-7 offset-md-5 col-lg-4 offset-lg-0\">\n      <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n\n      <!-- CHECKBOX AND PLACE ORDER BUTTON -->\n      <div class=\"cx-place-order\" *ngIf=\"step === 4\">\n        <div class=\"cx-place-order-form form-check\">\n          <label>\n            <input\n              class=\"form-check-input\"\n              type=\"checkbox\"\n              (change)=\"toggleTAndC()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'checkoutReview.label.confirmThatRead' | cxTranslate }}\n              <a\n                [routerLink]=\"\n                  { route: ['termsAndConditions'] } | cxTranslateUrl\n                \"\n                class=\"cx-tc-link\"\n                target=\"_blank\"\n              >\n                {{ 'checkoutReview.action.termsAndConditions' | cxTranslate }}\n              </a>\n            </span>\n          </label>\n        </div>\n        <button\n          [disabled]=\"!tAndCToggler\"\n          (click)=\"placeOrder()\"\n          class=\"btn btn-primary btn-block\"\n        >\n          {{ 'checkoutReview.action.placeOrder' | cxTranslate }}\n        </button>\n        <button class=\"btn btn-action btn-block\" (click)=\"setStep(3)\">\n          {{ 'common.action.back' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-nav{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0)}.cx-nav .cx-list{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row);list-style:var(--cx-list-style,none);padding:var(--cx-padding,0);margin:var(--cx-margin,0)}.cx-nav .cx-item{color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,0 0 1.375rem 0)}.cx-nav .cx-item.progressbar{border-bottom:5px solid;border-color:var(--cx-border-color,var(--cx-g-color-primary))}.cx-nav .cx-item.progressbar ::before{color:var(--cx-color,var(--cx-g-color-text))}.cx-nav .cx-item ::before{padding:var(--cx-padding,0 .5rem);content:var(--cx-content, \">\")}.cx-nav .cx-item:first-child ::before{padding:var(--cx-padding,0);content:var(--cx-content, \"\")}.cx-link,.cx-link:hover{cursor:var(--cx-cursor,pointer)}.cx-link.is-disabled,.cx-link:hover.is-disabled{color:var(--cx-color,var(--cx-g-color-light));cursor:var(--cx-cursor,not-allowed)}.cx-link.is-active,.cx-link:hover.is-active{color:var(--cx-color,var(--cx-g-color-primary))}.cx-link.is-active ::before,.cx-link:hover.is-active ::before{color:var(--cx-color,var(--cx-g-color-text))}@media (max-width:991.98px){:host{padding:var(--cx-padding,1.5rem 0)}.cx-media>:last-child{border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}}.cx-media .cx-list-media{display:var(--cx-display,none);font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);text-transform:var(--cx-text-transform,capitalize);justify-content:var(--cx-justify-content,space-between);align-items:var(--cx-align-items,center);line-height:var(--cx-line-height,4.75rem);min-width:var(--cx-min-width,100%);border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));margin:var(--cx-margin,0)}.cx-media .cx-list-media button{text-transform:var(--cx-text-transform,capitalize);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi))}@media (max-width:991.98px){.cx-media .cx-list-media{display:var(--cx-display,flex);padding:var(--cx-padding,0 3.5rem)}}@media (max-width:767.98px){.cx-media .cx-list-media{padding:var(--cx-padding,0 1.375rem)}}.cx-place-order{padding:var(--cx-padding,0 1rem)}.cx-place-order .cx-form{display:var(--cx-display,flex)}.cx-place-order .cx-form .form-check-input{min-height:var(--cx-min-height,1.375rem);min-width:var(--cx-min-width,1.375rem)}.cx-place-order button{margin:var(--cx-margin,1.25rem 0 0)}@media (max-width:991.98px){.col-md-12{max-width:var(--cx-max-width,100%);padding:var(--cx-padding,0 0 2rem)}.cx-list-media.is-active{background-color:var(--cx-background-color,var(--cx-g-color-background))}}"]
            }] }
];
/** @nocollapse */
MultiStepCheckoutComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: CartService },
    { type: CartDataService },
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultiStepCheckoutModule {
}
MultiStepCheckoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CartSharedModule,
                    ShippingAddressModule,
                    DeliveryModeModule,
                    PaymentMethodModule,
                    ReviewSubmitModule,
                    RouterModule,
                    UrlTranslationModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MultiStepCheckoutComponent: { selector: 'cx-multi-step-checkout' },
                        },
                    }))),
                    CheckoutModule,
                    I18nModule,
                ],
                declarations: [MultiStepCheckoutComponent],
                entryComponents: [MultiStepCheckoutComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationPageGuard {
    /**
     * @param {?} checkoutService
     * @param {?} routingService
     */
    constructor(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.checkoutService.getOrderDetails().pipe(map(orderDetails => {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                this.routingService.go({ route: ['orders'] });
                return false;
            }
        }));
    }
}
OrderConfirmationPageGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderConfirmationPageGuard.ctorParameters = () => [
    { type: CheckoutService },
    { type: RoutingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const guards = [OrderConfirmationPageGuard];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutComponentModule {
}
CheckoutComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MultiStepCheckoutModule,
                    CartComponentModule,
                    CheckoutModule,
                ],
                providers: [...guards],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationComponent {
    /**
     * @param {?} checkoutService
     */
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
    /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    getAddressCardContent(deliveryAddress) {
        return {
            title: 'Ship To',
            textBold: `${deliveryAddress.firstName} ${deliveryAddress.lastName}`,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                `${deliveryAddress.town}, ${deliveryAddress.country.isocode}, ${deliveryAddress.postalCode}`,
                deliveryAddress.phone,
            ],
        };
    }
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    getShippingCardContent(deliveryMode) {
        return {
            title: 'Shipping Method',
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        };
    }
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    getBillingAddressCardContent(billingAddress) {
        return {
            title: 'Bill To',
            textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
                billingAddress.phone,
            ],
        };
    }
    /**
     * @param {?} paymentInfo
     * @return {?}
     */
    getPaymentInfoCardContent(paymentInfo) {
        return {
            title: 'Payment',
            textBold: paymentInfo.accountHolderName,
            text: [
                paymentInfo.cardNumber,
                `Expires: ${paymentInfo.expiryMonth} / ${paymentInfo.expiryYear}`,
            ],
        };
    }
}
OrderConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation',
                template: "<div class=\"cx-page\" *ngIf=\"(order$ | async) as order\">\n  <header class=\"cx-page__header\">\n    <h1 class=\"cx-page__title\">\n      {{ 'checkoutOrderConfirmation.label.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </header>\n\n  <div class=\"cx-order-confirmation\">\n    <div class=\"cx-order-confirmation-message\">\n      <h2>{{ 'checkoutOrderConfirmation.label.thankYou' | cxTranslate }}</h2>\n      <p>\n        {{\n          'checkoutOrderConfirmation.label.invoiceHasBeenSentByEmail'\n            | cxTranslate\n        }}\n      </p>\n      <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n    </div>\n\n    <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n\n    <div class=\"cx-order-review-summary\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getAddressCardContent(order.deliveryAddress)\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"\n                  getBillingAddressCardContent(order.paymentInfo.billingAddress)\n                \"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getShippingCardContent(order.deliveryMode)\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getPaymentInfoCardContent(order.paymentInfo)\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-order-items container\">\n      <h4 class=\"cx-order-items-header\">\n        {{ 'checkoutOrderConfirmation.label.orderItems' | cxTranslate }}\n      </h4>\n      <cx-cart-item-list\n        [items]=\"order.entries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n\n    <div class=\"cx-order-summary container\">\n      <div class=\"row justify-content-end\">\n        <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n          <cx-order-summary [cart]=\"order\"></cx-order-summary>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-order-confirmation-message{text-align:var(--cx-text-align,center);padding:var(--cx-padding,2.5rem)}.cx-order-confirmation-message h2{font-weight:400}.cx-order-confirmation-message .btn-link{font-size:.875rem;font-weight:700;text-transform:var(--cx-text-transform,uppercase)}.cx-order-review-summary{background-color:var(--cx-background-color,var(--cx-g-color-background));border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-order-review-summary .container{padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-order-review-summary{background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-order-review-summary .container{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,0 1.25rem)}}@media (max-width:767.98px){.cx-order-review-summary .summary-card{background-color:var(--cx-background-color,var(--cx-g-color-inverse));border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));margin:var(--cx-margin,.625rem 0)}.cx-order-review-summary .container{padding:var(--cx-padding,1.25rem)}.cx-order-items.container{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,0)}}.cx-order-items-header{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);padding:var(--cx-padding,1.375rem 0);margin:var(--cx-margin,0);border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-order-summary{padding-right:var(--cx-padding,0)}@media (max-width:991.98px){.cx-order-items.container{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,0)}.cx-order-items-header{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding-left:var(--cx-padding,2.5rem)}.cx-order-summary.container{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding-right:var(--cx-padding,1.625rem)}}@media (max-width:767.98px){.cx-order-items-header{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding-left:var(--cx-padding,1rem)}.cx-order-summary.container{padding:var(--cx-padding,0)}}"]
            }] }
];
/** @nocollapse */
OrderConfirmationComponent.ctorParameters = () => [
    { type: CheckoutService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class PWAModuleConfig extends ServerConfig {
}
/** @type {?} */
const defaultPWAModuleConfig = {
    pwa: {
        enabled: false,
        addToHomeScreen: false,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToHomeScreenService {
    /**
     * @param {?} config
     * @param {?} globalMessageService
     * @param {?} winRef
     */
    constructor(config, globalMessageService, winRef) {
        this.config = config;
        this.globalMessageService = globalMessageService;
        this.winRef = winRef;
        this.canPrompt = new BehaviorSubject(false);
        this.canPrompt$ = this.canPrompt.asObservable();
        if (this.config.pwa.addToHomeScreen) {
            this.init();
        }
    }
    /**
     * @return {?}
     */
    init() {
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', event => {
                event.preventDefault();
                this.deferredEvent = event;
                this.enableAddToHomeScreen();
            });
            this.winRef.nativeWindow.addEventListener('appinstalled', () => {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                    text: 'SAP Storefront was added to your home screen',
                });
                this.disableAddToHomeScreen();
                this.deferredEvent = null;
            });
        }
    }
    /**
     * @return {?}
     */
    enableAddToHomeScreen() {
        this.canPrompt.next(true);
    }
    /**
     * @return {?}
     */
    disableAddToHomeScreen() {
        this.canPrompt.next(false);
    }
    /**
     * @return {?}
     */
    firePrompt() {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    }
}
AddToHomeScreenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddToHomeScreenService.ctorParameters = () => [
    { type: PWAModuleConfig },
    { type: GlobalMessageService },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        this.addToHomeScreenService = addToHomeScreenService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.canPrompt$ = this.addToHomeScreenService.canPrompt$;
    }
    /**
     * @return {?}
     */
    prompt() {
        this.addToHomeScreenService.firePrompt();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToHomeScreenBtnComponent extends AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
}
AddToHomeScreenBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-home-screen-btn',
                template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"(canPrompt$ | async)\"></ng-content>\n</span>\n"
            }] }
];
/** @nocollapse */
AddToHomeScreenBtnComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToHomeScreenBannerComponent extends AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
}
AddToHomeScreenBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-home-screen-banner',
                template: "<div *ngIf=\"(canPrompt$ | async)\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.label.addSapStorefront' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.label.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.label.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.action.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-add-to-home-screen-banner{background-color:var(--cx-background-color,var(--cx-g-color-background));padding:var(--cx-padding,20px);text-align:var(--cx-text-align,center);margin:var(--cx-margin,0 0 2.5rem)}.cx-add-to-home-screen-banner ul{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-around);flex-wrap:var(--cx-flex-wrap,wrap);padding:var(--cx-padding,10px 40px)}@media (max-width:767.98px){.cx-add-to-home-screen-banner{margin:var(--cx-margin,0 1.25rem 2rem)}.cx-add-to-home-screen-banner ul{flex-direction:var(--cx-flex-direction,column);margin:var(--cx-margin,0 auto 0 auto);max-width:var(--cx-max-width,280px);padding:var(--cx-padding,0 20px 20px 50px)}}.cx-add-to-home-screen-banner ul li{min-width:var(--cx-min-width,35%);text-align:var(--cx-text-align,left)}.cx-add-to-home-screen-banner-inner{max-width:var(--cx-max-width,600px);margin:var(--cx-margin,0 auto)}"]
            }] }
];
/** @nocollapse */
AddToHomeScreenBannerComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} pwaConfig
 * @return {?}
 */
function pwaConfigurationFactory(pwaConfig) {
    return { enabled: (pwaConfig.production && pwaConfig.pwa.enabled) || false };
}
/**
 * @param {?} addToHomeScreenService
 * @return {?}
 */
function pwaFactory(addToHomeScreenService) {
    /** @type {?} */
    const result = () => addToHomeScreenService;
    return result;
}
class PwaModule {
}
PwaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig(defaultPWAModuleConfig),
                    ServiceWorkerModule.register('/ngsw-worker.js'),
                    I18nModule,
                ],
                providers: [
                    { provide: PWAModuleConfig, useExisting: Config },
                    {
                        provide: ɵangular_packages_service_worker_service_worker_b,
                        useFactory: pwaConfigurationFactory,
                        deps: [Config],
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: pwaFactory,
                        deps: [AddToHomeScreenService],
                        multi: true,
                    },
                    AddToHomeScreenService,
                ],
                declarations: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
                exports: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationModule {
}
OrderConfirmationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MediaModule,
                    CartSharedModule,
                    CardModule,
                    PwaModule,
                    CheckoutModule,
                    I18nModule,
                ],
                declarations: [OrderConfirmationComponent],
                exports: [OrderConfirmationComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsMappingService {
    /**
     * @param {?} config
     * @param {?} platformId
     */
    constructor(config, platformId) {
        this.config = config;
        this.platformId = platformId;
    }
    /**
     * @param {?} flexType
     * @return {?}
     */
    isComponentEnabled(flexType) {
        /** @type {?} */
        const isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        const isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
            .disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getRoutesForComponents(componentTypes) {
        /** @type {?} */
        const routes = [];
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                routes.push(...this.getRoutesForComponent(componentType));
            }
        }
        return routes;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getGuardsForComponents(componentTypes) {
        /** @type {?} */
        const guards = new Set();
        for (const componentType of componentTypes) {
            this.getGuardsForComponent(componentType).forEach(guard => guards.add(guard));
        }
        return Array.from(guards);
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getI18nKeysForComponents(componentTypes) {
        /** @type {?} */
        const namespaces = new Set();
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                this.getI18nKeysForComponent(componentType).forEach(namespace => namespaces.add(namespace));
            }
        }
        return Array.from(namespaces);
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getRoutesForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.childRoutes) || [];
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getGuardsForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.guards) || [];
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getI18nKeysForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.i18nKeys) || [];
    }
}
CmsMappingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsMappingService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ CmsMappingService.ngInjectableDef = defineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(inject(CmsConfig), inject(PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsGuardsService {
    /**
     * @param {?} cmsMapping
     * @param {?} injector
     */
    constructor(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    /**
     * @param {?} componentTypes
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    cmsPageCanActivate(componentTypes, route, state) {
        /** @type {?} */
        const guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            /** @type {?} */
            const canActivateObservables = guards.map(guardClass => {
                /** @type {?} */
                const guard = this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            });
            return concat(...canActivateObservables).pipe(skipWhile((canActivate) => canActivate === true), endWith(true), first());
        }
        else {
            return of(true);
        }
    }
}
CmsGuardsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsGuardsService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: Injector }
];
/** @nocollapse */ CmsGuardsService.ngInjectableDef = defineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(inject(CmsMappingService), inject(INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function wrapIntoObservable(value) {
    if (isObservable(value)) {
        return value;
    }
    if (isPromise(value)) {
        return from(Promise.resolve(value));
    }
    return of(value);
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
/**
 * @param {?} guard
 * @return {?}
 */
function isCanActivate(guard) {
    return guard && isFunction(guard.canActivate);
}
/**
 * @template T
 * @param {?} v
 * @return {?}
 */
function isFunction(v) {
    return typeof v === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsI18nService {
    /**
     * @param {?} cmsMapping
     * @param {?} translation
     * @param {?} translationNamespace
     */
    constructor(cmsMapping, translation, translationNamespace) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationNamespace = translationNamespace;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    loadNamespacesForComponents(componentTypes) {
        /** @type {?} */
        const i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        /** @type {?} */
        const i18nNamespaces = new Set();
        for (const key of i18nKeys) {
            i18nNamespaces.add(this.translationNamespace.getNamespace(key));
        }
        this.translation.loadNamespaces(Array.from(i18nNamespaces));
    }
}
CmsI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsI18nService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: TranslationService },
    { type: TranslationNamespaceService }
];
/** @nocollapse */ CmsI18nService.ngInjectableDef = defineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(inject(CmsMappingService), inject(TranslationService), inject(TranslationNamespaceService)); }, token: CmsI18nService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const BREAKPOINT = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};
/**
 * @abstract
 */
class LayoutConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreakpointService {
    /**
     * @param {?} winRef
     * @param {?} config
     */
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    /**
     * @return {?}
     */
    get breakpoint$() {
        if (!this.window) {
            return of(BREAKPOINT.xs);
        }
        return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map(event => this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth)), distinctUntilChanged());
    }
    /**
     * @return {?}
     */
    get breakpoints() {
        return [
            BREAKPOINT.xs,
            BREAKPOINT.sm,
            BREAKPOINT.md,
            BREAKPOINT.lg,
            BREAKPOINT.xl,
        ];
    }
    /**
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    getBreakpoint(windowWidth) {
        /** @type {?} */
        const breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    }
    /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    getClosest(windowWidth) {
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find(br => windowWidth >= this.getSize(br));
    }
    /**
     * @protected
     * @param {?} breakpoint
     * @return {?}
     */
    getSize(breakpoint) {
        return this.config.breakpoints[breakpoint];
    }
    /**
     * @return {?}
     */
    get window() {
        return this.winRef.nativeWindow;
    }
}
BreakpointService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageLayoutService {
    /**
     * @param {?} cms
     * @param {?} config
     * @param {?} breakpointService
     */
    constructor(cms, config, breakpointService) {
        this.cms = cms;
        this.config = config;
        this.breakpointService = breakpointService;
        // we print warn messages on missing layout configs
        // only once to not polute the console log
        this.warnLogMessages = {};
    }
    // TODO:
    // distinctUntilChanged is not enough here, probably because
    // we use the startWith operator in the breakpoint service which
    // doesn't seem to work well with distinctUntilChanged, see
    // https://github.com/ReactiveX/rxjs/issues/4030
    /**
     * @param {?=} section
     * @return {?}
     */
    getSlots(section) {
        return this.breakpointService.breakpoint$.pipe(switchMap(breakpoint => this.page$.pipe(map(page => this.getSlotConfig(page.template, 'slots', section, breakpoint)), filter(Boolean), map(config => config.slots))), distinctUntilChanged());
    }
    /**
     * @return {?}
     */
    get page$() {
        return this.cms.getCurrentPage().pipe(filter(Boolean));
    }
    /**
     * @return {?}
     */
    get templateName$() {
        return this.page$.pipe(filter(page => !!page.template), map((page) => page.template));
    }
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    getSlotConfig(templateUid, configAttribute, section, breakpoint) {
        /** @type {?} */
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (!pageTemplateConfig) {
            return this.noConfigFound(templateUid);
        }
        else {
            return this.getResponsiveSlotConfig((/** @type {?} */ (pageTemplateConfig)), configAttribute, breakpoint);
        }
    }
    /**
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    getSlotConfigForSection(templateUid, configAttribute, section, breakpoint) {
        /** @type {?} */
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        /** @type {?} */
        const sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        /** @type {?} */
        const responsiveConfig = this.getResponsiveSlotConfig((/** @type {?} */ (sectionConfig)), configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return (/** @type {?} */ (this.config.layoutSlots[section]));
        }
    }
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     * @protected
     * @param {?} layoutSlotConfig
     * @param {?} configAttribute
     * @param {?=} breakpoint
     * @return {?}
     */
    getResponsiveSlotConfig(layoutSlotConfig, configAttribute, breakpoint) {
        /** @type {?} */
        let slotConfig = (/** @type {?} */ (layoutSlotConfig));
        // fallback to default slot config
        if (!breakpoint) {
            return slotConfig;
        }
        // we have a config for the specific breakpoint
        if (layoutSlotConfig[breakpoint] &&
            layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
            return (/** @type {?} */ (layoutSlotConfig[breakpoint]));
        }
        // find closest config
        /** @type {?} */
        const all = this.breakpointService.breakpoints;
        for (const br of all.splice(0, all.indexOf(breakpoint))) {
            if (layoutSlotConfig[br] &&
                layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                slotConfig = (/** @type {?} */ (layoutSlotConfig[br]));
            }
        }
        return slotConfig;
    }
    /**
     * @private
     * @param {?} template
     * @param {?=} section
     * @return {?}
     */
    noConfigFound(template, section) {
        if (section) {
            if (!this.warnLogMessages[section + ':' + template]) {
                console.warn(`no layout config found for section ${section} of template ${template}`);
                this.warnLogMessages[section + ':' + template] = true;
            }
        }
        else if (!this.warnLogMessages[template]) {
            console.warn(`no layout config found for ${template}`);
            this.warnLogMessages[template] = true;
        }
        return null;
    }
}
PageLayoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageLayoutService.ctorParameters = () => [
    { type: CmsService },
    { type: LayoutConfig },
    { type: BreakpointService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageLayoutComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} pageLayoutService
     */
    constructor(el, renderer, pageLayoutService) {
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.section) {
            this.styleClass = this.section;
        }
    }
    /**
     * @return {?}
     */
    get slots$() {
        return this.pageLayoutService.getSlots(this.section);
    }
    /**
     * @return {?}
     */
    get templateName$() {
        return this.pageLayoutService.templateName$.pipe(
        // intercept the observable to keep a clean DOM tree
        tap(name => {
            this.styleClass = name;
        }));
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    set styleClass(cls) {
        this.renderer.addClass(this.el.nativeElement, cls);
    }
}
PageLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-layout',
                template: "<ng-container *cxOutlet=\"section || (templateName$ | async)\">\n  <ng-content></ng-content>\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PageLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: PageLayoutService }
];
PageLayoutComponent.propDecorators = {
    section: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsRoutesService {
    /**
     * @param {?} router
     * @param {?} cmsMapping
     */
    constructor(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    cmsRouteExist(url) {
        /** @type {?} */
        const isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        /** @type {?} */
        const routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find((route) => route.data && route.data.cxCmsRouteContext && route.path === routePath));
    }
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param {?} pageContext
     * @param {?} componentTypes
     * @param {?} currentUrl
     * @return {?}
     */
    handleCmsRoutesInGuard(pageContext, componentTypes, currentUrl) {
        /** @type {?} */
        const componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} routes
     * @return {?}
     */
    updateRouting(pageContext, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageContext.id.startsWith('/') &&
            pageContext.id.length > 1) {
            /** @type {?} */
            const newRoute = {
                path: pageContext.id.substr(1),
                component: PageLayoutComponent,
                children: routes,
                data: {
                    cxCmsRouteContext: pageContext,
                },
            };
            this.router.resetConfig([newRoute, ...this.router.config]);
            return true;
        }
        return false;
    }
}
CmsRoutesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsRoutesService.ctorParameters = () => [
    { type: Router },
    { type: CmsMappingService }
];
/** @nocollapse */ CmsRoutesService.ngInjectableDef = defineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(inject(Router), inject(CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsPageGuard {
    /**
     * @param {?} routingService
     * @param {?} cmsService
     * @param {?} cmsRoutes
     * @param {?} cmsI18n
     * @param {?} cmsGuards
     */
    constructor(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.routingService.getPageContext().pipe(switchMap(pageContext => this.cmsService.hasPage(pageContext).pipe(first(), withLatestFrom(of(pageContext)))), switchMap(([hasPage, pageContext]) => {
            if (hasPage) {
                return this.cmsService.getPageComponentTypes(pageContext).pipe(switchMap(componentTypes => this.cmsGuards
                    .cmsPageCanActivate(componentTypes, route, state)
                    .pipe(withLatestFrom(of(componentTypes)))), tap(([canActivate, componentTypes]) => {
                    if (canActivate === true) {
                        this.cmsI18n.loadNamespacesForComponents(componentTypes);
                    }
                }), map(([canActivate, componentTypes]) => {
                    if (canActivate === true &&
                        !route.data.cxCmsRouteContext &&
                        !this.cmsRoutes.cmsRouteExist(pageContext.id)) {
                        return this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url);
                    }
                    return canActivate;
                }));
            }
            else {
                if (pageContext.id !== '/not-found') {
                    this.routingService.go(['/not-found']);
                }
                return of(false);
            }
        }));
    }
}
CmsPageGuard.guardName = 'CmsPageGuard';
CmsPageGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CmsPageGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: CmsService },
    { type: CmsRoutesService },
    { type: CmsI18nService },
    { type: CmsGuardsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const guards$1 = [CmsPageGuard];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletStyleService {
    constructor() {
        this.templateRefs = {};
    }
    /**
     * @param {?} outlet
     * @param {?} elem
     * @return {?}
     */
    add(outlet, elem) {
        this.templateRefs[outlet] = elem;
    }
    /**
     * @param {?} outlet
     * @return {?}
     */
    get(outlet) {
        return this.templateRefs[outlet];
    }
}
OutletStyleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ OutletStyleService.ngInjectableDef = defineInjectable({ factory: function OutletStyleService_Factory() { return new OutletStyleService(); }, token: OutletStyleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const OutletPosition = {
    REPLACE: 'replace',
    BEFORE: 'before',
    AFTER: 'after',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletService {
    constructor() {
        this.templatesRefs = {};
        this.templatesRefsBefore = {};
        this.templatesRefsAfter = {};
    }
    /**
     * @param {?} outlet
     * @param {?} template
     * @param {?=} position
     * @return {?}
     */
    add(outlet, template, position = OutletPosition.REPLACE) {
        if (position === OutletPosition.BEFORE) {
            this.templatesRefsBefore[outlet] = template;
        }
        if (position === OutletPosition.REPLACE) {
            this.templatesRefs[outlet] = template;
        }
        if (position === OutletPosition.AFTER) {
            this.templatesRefsAfter[outlet] = template;
        }
    }
    /**
     * @param {?} outlet
     * @param {?=} position
     * @return {?}
     */
    get(outlet, position = OutletPosition.REPLACE) {
        /** @type {?} */
        let templateRef;
        switch (position) {
            case OutletPosition.BEFORE:
                templateRef = this.templatesRefsBefore[outlet];
                break;
            case OutletPosition.AFTER:
                templateRef = this.templatesRefsAfter[outlet];
                break;
            default:
                templateRef = this.templatesRefs[outlet];
        }
        return templateRef;
        // return this.templatesRefs[outlet] ? this.templatesRefs[outlet] : null;
    }
}
OutletService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ OutletService.ngInjectableDef = defineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletDirective {
    /**
     * @param {?} vcr
     * @param {?} templateRef
     * @param {?} outletService
     * @param {?} outletStyleService
     * @param {?} renderer
     */
    constructor(vcr, templateRef, outletService, outletStyleService, renderer) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.outletStyleService = outletStyleService;
        this.renderer = renderer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cxOutletContext(value) {
        this._context = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const nodes = [];
        nodes.push(...this.renderTemplate(OutletPosition.BEFORE));
        nodes.push(...this.renderTemplate(OutletPosition.REPLACE, true));
        nodes.push(...this.renderTemplate(OutletPosition.AFTER));
        this.renderStyleLink(nodes);
    }
    /**
     * @private
     * @param {?} position
     * @param {?=} replace
     * @return {?}
     */
    renderTemplate(position, replace = false) {
        /** @type {?} */
        const nodes = [];
        /** @type {?} */
        const template = this.outletService.get(this.cxOutlet, position);
        if (template || replace) {
            /** @type {?} */
            const ref = this.vcr.createEmbeddedView(template || this.templateRef, {
                $implicit: this.context,
            });
            nodes.push(...ref.rootNodes);
        }
        return nodes;
    }
    /**
     * @private
     * @param {?} nodes
     * @return {?}
     */
    renderStyleLink(nodes) {
        /** @type {?} */
        const styleElement = this.outletStyleService.get(this.cxOutlet);
        if (styleElement) {
            /** @type {?} */
            let parentElement = nodes.find(node => node instanceof HTMLElement);
            if (parentElement.shadowRoot) {
                parentElement = parentElement.shadowRoot;
            }
            styleElement.nativeElement.rel = 'stylesheet';
            this.renderer.appendChild(parentElement, styleElement.nativeElement);
        }
    }
    /**
     * @private
     * @return {?}
     */
    get context() {
        // return specific context if provided
        if (this._context) {
            return this._context;
        }
        /** @type {?} */
        const ctx = ((/** @type {?} */ (this.vcr.injector))).view.context;
        // the context might already be given $implicit
        // by a parent *ngIf or *ngFor
        return ctx.$implicit || ctx;
    }
}
OutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOutlet]',
            },] }
];
/** @nocollapse */
OutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: OutletService },
    { type: OutletStyleService },
    { type: Renderer2 }
];
OutletDirective.propDecorators = {
    cxOutlet: [{ type: Input }],
    cxOutletContext: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletModule {
}
OutletModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [OutletDirective],
                providers: [OutletService],
                exports: [OutletDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsModule$1 {
}
CmsModule$1.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    ConfigModule.withConfig(defaultCmsModuleConfig),
                    OutletModule,
                    CmsModule,
                ],
                providers: [...guards$1, { provide: CmsConfig, useExisting: Config }],
                declarations: [],
                exports: [OutletDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageSlotComponent {
    /**
     * @param {?} cmsService
     * @param {?} dynamicAttributeService
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?} cmsMapping
     */
    constructor(cmsService, dynamicAttributeService, renderer, hostElement, cmsMapping) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cmsMapping = cmsMapping;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // add the position name as a css class so that
        // layout can be applied to it, using the position based class.
        this.renderer.addClass(this.hostElement.nativeElement, this.position);
    }
    /**
     * returns an observable with `ContentSlotData` for the current position
     * @return {?}
     */
    get slot$() {
        return this.cmsService
            .getContentSlot(this.position)
            .pipe(tap(slot => this.addSmartEditSlotClass(slot)));
    }
    /**
     * returns an observable with components (`ContentSlotComponentData[]`)
     * for the current slot
     * @return {?}
     */
    get components$() {
        return this.slot$.pipe(map(slot => (slot && slot.components ? slot.components : [])), tap(components => this.addComponentClass(components)));
    }
    // add a class to indicate whether the class is empty or not
    /**
     * @private
     * @param {?} components
     * @return {?}
     */
    addComponentClass(components) {
        if (components && components.length > 0) {
            this.renderer.addClass(this.hostElement.nativeElement, 'has-components');
        }
    }
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    addSmartEditSlotClass(slot) {
        if (this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    }
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    addSmartEditContract(slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    }
}
PageSlotComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-slot',
                template: "<ng-container *cxOutlet=\"position\">\n  <ng-container *ngFor=\"let component of (components$ | async)\">\n    <ng-container\n      *cxOutlet=\"component.flexType\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: CmsMappingService }
];
PageSlotComponent.propDecorators = {
    position: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class CmsComponentData {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentWrapperDirective {
    /**
     * @param {?} vcr
     * @param {?} componentMapper
     * @param {?} injector
     * @param {?} cmsService
     * @param {?} dynamicAttributeService
     * @param {?} renderer
     * @param {?} cd
     * @param {?} config
     * @param {?} platformId
     */
    constructor(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, cd, config, platformId) {
        this.vcr = vcr;
        this.componentMapper = componentMapper;
        this.injector = injector;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.cd = cd;
        this.config = config;
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.shouldRenderComponent()) {
            return;
        }
        if (this.componentMapper.isWebComponent(this.cxComponentWrapper.flexType)) {
            this.launchWebComponent();
        }
        else {
            this.launchComponent();
        }
    }
    /**
     * @private
     * @return {?}
     */
    shouldRenderComponent() {
        /** @type {?} */
        const isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        const isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    /**
     * @private
     * @return {?}
     */
    launchComponent() {
        /** @type {?} */
        const factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            this.cd.detectChanges();
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    launchWebComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const elementName = yield this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer);
            if (elementName) {
                this.webElement = this.renderer.createElement(elementName);
                this.webElement.cxApi = Object.assign({}, this.injector.get(CxApiService), { CmsComponentData: this.getCmsDataForComponent() });
                this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
            }
        });
    }
    /**
     * @private
     * @template T
     * @return {?}
     */
    getCmsDataForComponent() {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getInjectorForComponent() {
        /** @type {?} */
        const configProviders = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {})
            .providers || [];
        return Injector.create({
            providers: [
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsDataForComponent(),
                },
                ...configProviders,
            ],
            parent: this.injector,
        });
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    addSmartEditContract(element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.renderer.removeChild(this.vcr.element.nativeElement.parentElement, this.webElement);
        }
    }
}
ComponentWrapperDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxComponentWrapper]',
            },] }
];
/** @nocollapse */
ComponentWrapperDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentMapperService },
    { type: Injector },
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ComponentWrapperDirective.propDecorators = {
    cxComponentWrapper: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageComponentModule {
}
PageComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [],
                declarations: [ComponentWrapperDirective],
                exports: [ComponentWrapperDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageSlotModule {
}
PageSlotModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OutletModule, PageComponentModule],
                providers: [],
                declarations: [PageSlotComponent],
                exports: [PageSlotComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageLayoutModule {
}
PageLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CmsModule$1, PageSlotModule],
                declarations: [PageLayoutComponent],
                providers: [PageLayoutService],
                exports: [PageLayoutComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailsService {
    /**
     * @param {?} authService
     * @param {?} userService
     * @param {?} routingService
     */
    constructor(authService, userService, routingService) {
        this.authService = authService;
        this.userService = userService;
        this.routingService = routingService;
        this.userId$ = this.authService
            .getUserToken()
            .pipe(map(userData => userData.userId));
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map(routingData => routingData.state.params.orderCode));
        this.orderLoad$ = combineLatest(this.userId$, this.orderCode$).pipe(tap(([userId, orderCode]) => {
            if (userId && orderCode) {
                this.userService.loadOrderDetails(userId, orderCode);
            }
            else {
                this.userService.clearOrderDetails();
            }
        }), 
        // TODO: Replace next two lines with shareReplay(1, undefined, true) when RxJS 6.4 will be in use
        multicast(() => new ReplaySubject(1)), refCount());
    }
    /**
     * @return {?}
     */
    getOrderDetails() {
        return this.orderLoad$.pipe(switchMap(() => this.userService.getOrderDetails()));
    }
}
OrderDetailsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderDetailsService.ctorParameters = () => [
    { type: AuthService },
    { type: UserService },
    { type: RoutingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailHeadlineComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
}
OrderDetailHeadlineComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-headline',
                template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.label.orderId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.label.placed' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.created | date }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.label.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.statusDisplay }}</div>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-header{padding:var(--cx-padding,1.875rem 0);margin-top:var(--cx-margin,2.5rem);margin-bottom:var(--cx-margin,1.875rem);border-width:var(--cx-border-width,1px);border-style:var(--cx-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:767.98px){.cx-header{border:var(--cx-border,0 none);margin:var(--cx-margin,0)}}.cx-detail{border-width:var(--cx-border-width,0 1px 0 0);border-style:var(--cx-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));padding-left:var(--cx-padding,1.875rem)}.cx-detail:last-child{border:var(--cx-border,0 none)}@media (max-width:767.98px){.cx-detail{padding-bottom:var(--cx-padding,.625rem);padding-left:var(--cx-padding,.3125rem);border-right:var(--cx-border,0 none)}}.cx-detail-label{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222)}.cx-detail-value{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:var(--cx-g-font-weight-normal,400)}"]
            }] }
];
/** @nocollapse */
OrderDetailHeadlineComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailItemsComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    /**
     * @param {?} consignment
     * @return {?}
     */
    getConsignmentProducts(consignment) {
        /** @type {?} */
        const products = [];
        consignment.entries.forEach(element => {
            products.push(element.orderEntry);
        });
        return products;
    }
}
OrderDetailItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-items',
                template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">{{ consignment?.status }}</div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ 'orderDetails.label.shippedOn' | cxTranslate }}&nbsp;</div>\n        <div>{{ consignment?.statusDate | date }}</div>\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"getConsignmentProducts(consignment)\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.label.inProcess' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-list-header{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);align-items:var(--cx-align-items,center);height:var(--cx-height,3.5rem);background-color:var(--cx-background-color,var(--cx-g-color-background));padding-left:var(--cx-padding,1.875rem);padding-right:var(--cx-padding,1.875rem)}.cx-list-status{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin-bottom:var(--cx-margin,0)}.cx-list-date{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);margin-bottom:var(--cx-margin,0)}@media (max-width:767.98px){.cx-list-header{padding-left:var(--cx-padding,1.25rem);padding-right:var(--cx-padding,1.25rem)}.cx-list-date{flex-direction:var(--cx-flex-direction,column);align-items:var(--cx-align-items,flex-end)}}.cx-list-item{padding:var(--cx-padding,0 0 2.5rem 0)}@media (max-width:767.98px){.cx-list-item{padding:var(--cx-padding,0)}}"]
            }] }
];
/** @nocollapse */
OrderDetailItemsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailTotalsComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
}
OrderDetailTotalsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-totals',
                template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:767.98px){.cx-summary{padding:var(--cx-padding,0 .25rem)}}"]
            }] }
];
/** @nocollapse */
OrderDetailTotalsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailShippingComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    /**
     * @param {?} address
     * @return {?}
     */
    getAddressCardContent(address) {
        return {
            title: 'Ship to',
            textBold: `${address.firstName} ${address.lastName}`,
            text: [
                address.line1,
                address.line2,
                `${address.town}, ${address.country.isocode}, ${address.postalCode}`,
                address.phone,
            ],
        };
    }
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    getBillingAddressCardContent(billingAddress) {
        return {
            title: 'Bill To',
            textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
                billingAddress.phone,
            ],
        };
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    getPaymentCardContent(payment) {
        return {
            title: 'Payment',
            textBold: payment.accountHolderName,
            text: [
                payment.cardType.name,
                payment.cardNumber,
                `Expires: ${payment.expiryMonth} / ${payment.expiryYear}`,
            ],
        };
    }
    /**
     * @param {?} shipping
     * @return {?}
     */
    getShippingMethodCardContent(shipping) {
        return {
            title: 'Shipping Method',
            textBold: shipping.name,
            text: [shipping.description],
        };
    }
}
OrderDetailShippingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-shipping',
                template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress)\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress)\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card [content]=\"getPaymentCardContent(order.paymentInfo)\"></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode)\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-account-summary{background-color:var(--cx-background-color,var(--cx-g-color-background));margin-bottom:var(--cx-margin,3.125rem)}@media (max-width:767.98px){.cx-account-summary{margin-bottom:var(--cx-margin,0)}.cx-account-summary .cx-summary-card{padding-left:var(--cx-padding,0);padding-right:var(--cx-padding,0)}}"]
            }] }
];
/** @nocollapse */
OrderDetailShippingComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moduleComponents = [
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
];
class OrderDetailsModule {
}
OrderDetailsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CardModule,
                    CommonModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AccountOrderDetailsHeadlineComponent: {
                                selector: 'cx-order-details-headline',
                            },
                            AccountOrderDetailsItemsComponent: {
                                selector: 'cx-order-details-items',
                            },
                            AccountOrderDetailsTotalsComponent: {
                                selector: 'cx-order-details-totals',
                            },
                            AccountOrderDetailsShippingComponent: {
                                selector: 'cx-order-details-shipping',
                            },
                        },
                    }))),
                ],
                providers: [OrderDetailsService],
                declarations: [...moduleComponents],
                exports: [...moduleComponents],
                entryComponents: [...moduleComponents],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderHistoryComponent {
    /**
     * @param {?} auth
     * @param {?} routing
     * @param {?} userService
     */
    constructor(auth, routing, userService) {
        this.auth = auth;
        this.routing = routing;
        this.userService = userService;
        this.PAGE_SIZE = 5;
        this.sortLabels = {
            byDate: 'Date',
            byOrderNumber: 'Order Number',
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.auth.getUserToken().subscribe(userData => {
            if (userData && userData.userId) {
                this.user_id = userData.userId;
            }
        });
        this.orders$ = this.userService
            .getOrderHistoryList(this.user_id, this.PAGE_SIZE)
            .pipe(tap((orders) => {
            if (orders.pagination) {
                this.sortType = orders.pagination.sort;
            }
        }));
        this.isLoaded$ = this.userService.getOrderHistoryListLoaded();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.userService.clearOrderList();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    changeSortCode(sortCode) {
        /** @type {?} */
        const event = {
            sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchOrders(event);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        /** @type {?} */
        const event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchOrders(event);
    }
    /**
     * @param {?} order
     * @return {?}
     */
    goToOrderDetail(order) {
        this.routing.go({
            route: [{ name: 'orderDetails', params: order }],
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    fetchOrders(event) {
        this.userService.loadOrderList(this.user_id, this.PAGE_SIZE, event.currentPage, event.sortCode);
    }
}
OrderHistoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-history',
                template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.label.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{\n                'orderHistory.placeholder.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.label.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.label.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.label.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.label.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.statusDisplay }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{\n                'orderHistory.placeholder.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.label.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ route: ['home'] } | cxTranslateUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.action.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:767.98px){.cx-order-history{max-width:var(--cx-max-width,100%);padding:var(--cx-padding,0)}.cx-order-history-table tr{border-width:var(--cx-border-width,1px 0 0 0);border-color:var(--cx-border-color,var(--cx-g-color-light));border-style:var(--cx-border-style,solid)}.cx-order-history-table tr:first-child{border-width:var(--cx-border-width,0);padding:var(--cx-padding,1.25rem 0 0 0)}}.cx-order-history-table{padding:var(--cx-paddding,1.5rem 0 1.125rem 0);margin-bottom:var(--cx-margin,0);border-width:var(--cx-border-width,1px 0 1px 0);border-color:var(--cx-border-color,var(--cx-g-color-light));border-style:var(--cx-border-style,solid)}.cx-order-history-table tr{width:var(--cx-width,100%)}.cx-order-history-table th{padding:var(--cx-padding,1.5rem 0 1.125rem 0);text-align:var(--cx-text-align,left)}.cx-order-history-table th:last-child{text-align:var(--cx-text-align,right)}.cx-order-history-table td{width:var(--cx-width,25%);padding:var(--cx-padding,1.625rem 0)}@media (min-width:768px){.cx-order-history-table td{text-align:var(--cx-text-align,left)}.cx-order-history-table td:last-child{text-align:var(--cx-text-align,right)}}.cx-order-history-header{padding:var(--cx-padding,40px 0 0 0);color:var(--cx-color,var(--cx-g-color-text))}.cx-order-history-code{-webkit-text-decoration:var(--cx-text-decoration,underline);text-decoration:var(--cx-text-decoration,underline)}.cx-order-history-placed{text-align:var(--cx-text-align,center)}@media (max-width:767.98px){.cx-order-history-table td{width:var(--cx-width,100%);display:var(--cx-display,flex);border-width:var(--cx-border-width,0);padding:var(--cx-padding,0 1.25rem)}.cx-order-history-table td:first-child{padding-top:var(--cx-padding,1.25rem)}.cx-order-history-table td:last-child{padding-bottom:var(--cx-padding,1.25rem)}.cx-order-history-header{padding:var(cx-padding,40px 20px 0 20px)}.cx-order-history-thead-mobile{display:var(--cx-display,none)}.cx-order-history-placed{text-align:var(--cx-text-align,left)}}.cx-order-history-status{text-align:var(--cx-text-align,center)}@media (max-width:767.98px){.cx-order-history-status{text-align:var(--cx-text-align,left)}}.cx-order-history-total{text-align:var(--cx-text-align,right)}.cx-order-history-label{text-transform:var(--cx-text-transform,uppercase);color:var(--cx-color,var(--cx-g-color-secondary))}.cx-order-history-value{color:var(--cx-color,var(--cx-g-color-text))}.cx-order-history-form-group{padding:var(--cx-padding,0);margin-bottom:var(--cx-margin,0)}.cx-order-history-sort.top{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,1rem 0);margin:var(--cx-margin,0)}@media (max-width:767.98px){.cx-order-history-total{text-align:var(--cx-text-align,left)}.cx-order-history-label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);min-width:var(--cx-min-width,110px)}.cx-order-history-value{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:400}.cx-order-history-form-group{padding:var(--cx-padding,1.25rem)}.cx-order-history-sort.top{flex-direction:var(--cx-flex-direction,column);padding-top:var(--cx-padding,0)}}.cx-order-history-sort.bottom{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,2rem 0 1rem 0);margin:var(--cx-margin,0)}.cx-order-history-no-order{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:400;min-height:var(--cx-min-height,415px)}@media (max-width:767.98px){.cx-order-history-sort.bottom{flex-direction:var(--cx-flex-direction,column);padding-top:var(--cx-padding,0)}.cx-order-history-pagination{margin:var(--cx-margin,0 auto)}.cx-order-history-no-order{min-height:var(--cx-min-height,474px);padding-left:var(--cx-padding,1.25rem);padding-right:var(--cx-padding,1.25rem)}}.cx-order-history-no-order .btn{margin:var(--cx-margin,1.25rem 0)}"]
            }] }
];
/** @nocollapse */
OrderHistoryComponent.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService },
    { type: UserService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderHistoryModule {
}
OrderHistoryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AccountOrderHistoryComponent: { selector: 'cx-order-history' },
                        },
                    }))),
                    RouterModule,
                    FormsModule,
                    NgSelectModule,
                    BootstrapModule,
                    PaginationAndSortingModule,
                    UrlTranslationModule,
                    I18nModule,
                ],
                declarations: [OrderHistoryComponent],
                exports: [OrderHistoryComponent],
                providers: [UserService],
                entryComponents: [OrderHistoryComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentMethodsComponent {
    /**
     * @param {?} userService
     */
    constructor(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.paymentMethods$ = this.userService.getPaymentMethods();
        this.editCard = null;
        this.loading$ = this.userService.getPaymentMethodsLoading();
        this.userServiceSub = this.userService.get().subscribe(data => {
            this.userId = data.uid;
            this.userService.loadPaymentMethods(this.userId);
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, }) {
        /** @type {?} */
        const actions = [];
        if (!defaultPayment) {
            actions.push({ name: 'Set as default', event: 'default' });
        }
        actions.push({ name: 'Delete', event: 'edit' });
        /** @type {?} */
        const card = {
            header: defaultPayment ? 'DEFAULT' : null,
            textBold: accountHolderName,
            text: [cardNumber, `Expires: ${expiryMonth}/${expiryYear}`],
            actions,
            deleteMsg: 'Are you sure you want to delete this payment method?',
        };
        return card;
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    deletePaymentMethod(paymentMethod) {
        if (this.userId) {
            this.userService.deletePaymentMethod(this.userId, paymentMethod.id);
        }
        this.editCard = null;
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    setEdit(paymentMethod) {
        this.editCard = paymentMethod.id;
    }
    /**
     * @return {?}
     */
    cancelCard() {
        this.editCard = null;
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    setDefaultPaymentMethod(paymentMethod) {
        if (this.userId) {
            this.userService.setPaymentMethodAsDefault(this.userId, paymentMethod.id);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.userServiceSub) {
            this.userServiceSub.unsubscribe();
        }
    }
}
PaymentMethodsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-methods',
                template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.label.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.label.newPaymentMethodsAreAddedDuringCheckout'\n          | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod)\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:767.98px){.cx-payment{padding-left:var(--cx-padding,1.25rem);padding-right:var(--cx-padding,1.25rem)}}.cx-header{padding:var(--cx-padding,2.5rem 0 0 0)}.cx-existing{display:var(--cx-display,flex);padding:var(--cx-padding,0 0 2.5rem 0);align-items:var(--cx-align-items,stretch)}@media (max-width:991.98px){.cx-existing{padding:var(--cx-padding,0 0 3.125rem 0)}}@media (max-width:767.98px){.cx-existing{padding:var(--cx-padding,0 0 4.375rem 0)}}.cx-payment-card{padding-top:var(--cx-padding,1.875rem)}.cx-payment-inner{height:var(--cx-height,100%)}"]
            }] }
];
/** @nocollapse */
PaymentMethodsComponent.ctorParameters = () => [
    { type: UserService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentMethodsModule {
}
PaymentMethodsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CardModule,
                    SpinnerModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AccountPaymentDetailsComponent: { selector: 'cx-payment-methods' },
                        },
                    }))),
                    I18nModule,
                ],
                providers: [UserService],
                declarations: [PaymentMethodsComponent],
                exports: [PaymentMethodsComponent],
                entryComponents: [PaymentMethodsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomFormValidators {
    /**
     * @param {?} control
     * @return {?}
     */
    static emailDomainValidator(control) {
        /** @type {?} */
        const email = (/** @type {?} */ (control.value));
        return email.match('[.][a-zA-Z]+$') ? null : { InvalidEmail: true };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static emailValidator(control) {
        /** @type {?} */
        const email = (/** @type {?} */ (control.value));
        return email.match(
        // Email Standard RFC 5322:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // tslint:disable-line
        )
            ? null
            : { InvalidEmail: true };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static passwordValidator(control) {
        /** @type {?} */
        const password = (/** @type {?} */ (control.value));
        return password.match('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^*()_+{};:.,]).{6,}$')
            ? null
            : { InvalidPassword: true };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility class when working with forms.
 */
class FormUtils {
    /**
     *
     * Checks is the `formControlName` field valid in the provided `form`.
     *
     * If it's NOT valid, the method returns `true`.
     *
     * @param {?} form a form whose field to check
     * @param {?} formControlName a field name
     * @param {?} submitted is the form submitted
     * @return {?}
     */
    static isNotValidField(form, formControlName, submitted) {
        return (form.get(formControlName).invalid &&
            (submitted ||
                (form.get(formControlName).touched && form.get(formControlName).dirty)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdatePasswordFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    }
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    /**
     * @return {?}
     */
    isPasswordConfirmNotValid() {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('newPasswordConfirm').touched &&
                    this.form.get('newPasswordConfirm').dirty)));
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            oldPassword: this.form.value.oldPassword,
            newPassword: this.form.value.newPassword,
        });
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelled.emit();
    }
    /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    matchPassword(abstractControl) {
        if (abstractControl.get('newPassword').value !==
            abstractControl.get('newPasswordConfirm').value) {
            return { NotEqual: true };
        }
        return null;
    }
}
UpdatePasswordFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-password-form',
                template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">Old Password</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"Old Password\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>Old password is required.</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">New Password</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"New Password\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span\n            >Password must be six characters minimum, with one uppercase letter,\n            one number, one symbol</span\n          >\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">Confirm New Password</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"Confirm Password\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>Both password must match</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        Cancel\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">Save</button>\n    </div>\n  </div>\n</form>\n",
                styles: [".form-group button:first-child{margin-bottom:1rem}"]
            }] }
];
/** @nocollapse */
UpdatePasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UpdatePasswordFormComponent.propDecorators = {
    submited: [{ type: Output }],
    cancelled: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdatePasswordComponent {
    /**
     * @param {?} routingService
     * @param {?} userService
     * @param {?} globalMessageService
     */
    constructor(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userService.resetUpdatePasswordProcessState();
        this.loading$ = this.userService.getUpdatePasswordResultLoading();
        this.userService
            .get()
            .pipe(take(1))
            .subscribe(user => {
            this.userId = user.uid;
        });
        this.subscription.add(this.userService
            .getUpdatePasswordResultSuccess()
            .subscribe(success => this.onSuccess(success)));
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({
                text: 'Password updated with success',
                type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
            });
            this.routingService.go({ route: ['home'] });
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.routingService.go({ route: ['home'] });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSubmit({ oldPassword, newPassword, }) {
        this.userService.updatePassword(this.userId, oldPassword, newPassword);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.userService.resetUpdatePasswordProcessState();
    }
}
UpdatePasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-password',
                template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
UpdatePasswordComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdatePasswordModule {
}
UpdatePasswordModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            UpdatePasswordComponent: { selector: 'cx-update-password' },
                        },
                    }))),
                    SpinnerModule,
                ],
                declarations: [UpdatePasswordComponent, UpdatePasswordFormComponent],
                exports: [UpdatePasswordComponent],
                entryComponents: [UpdatePasswordComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateProfileFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.form = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        });
        this.submitClicked = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.user) {
            this.form.patchValue(this.user);
        }
    }
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            uid: this.user.uid,
            userUpdates: Object.assign({}, this.form.value),
        });
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelled.emit();
    }
}
UpdateProfileFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-profile-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">Title</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">None</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">First Name</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"First Name\"\n          formControlName=\"firstName\"\n          [class.is-invalid]=\"isNotValid('firstName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\n          <span>First name is required.</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">Last Name</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"Last Name\"\n          formControlName=\"lastName\"\n          [class.is-invalid]=\"isNotValid('lastName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\n          <span>Last name is required.</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        Cancel\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">Save</button>\n    </div>\n  </div>\n</form>\n",
                styles: [".form-group button:first-child{margin-bottom:1rem}"]
            }] }
];
/** @nocollapse */
UpdateProfileFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UpdateProfileFormComponent.propDecorators = {
    user: [{ type: Input }],
    titles: [{ type: Input }],
    submited: [{ type: Output }],
    cancelled: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateProfileComponent {
    /**
     * @param {?} routingService
     * @param {?} userService
     * @param {?} globalMessageService
     */
    constructor(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // reset the previous form processing state
        this.userService.resetUpdatePersonalDetailsProcessingState();
        this.user$ = this.userService.get();
        this.titles$ = this.userService.getTitles().pipe(tap(titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }));
        this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
        this.subscription.add(this.userService
            .getUpdatePersonalDetailsResultSuccess()
            .subscribe(success => this.onSuccess(success)));
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({
                text: 'Personal details successfully updated',
                type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
            });
            this.routingService.go({ route: ['home'] });
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.routingService.go({ route: ['home'] });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSubmit({ uid, userUpdates }) {
        this.userService.updatePersonalDetails(uid, userUpdates);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // clean up the state
        this.userService.resetUpdatePersonalDetailsProcessingState();
    }
}
UpdateProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-profile',
                template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
UpdateProfileComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateProfileModule {
}
UpdateProfileModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            UpdateProfileComponent: { selector: 'cx-update-profile' },
                        },
                    }))),
                    FormsModule,
                    ReactiveFormsModule,
                    SpinnerModule,
                ],
                declarations: [UpdateProfileComponent, UpdateProfileFormComponent],
                exports: [UpdateProfileComponent],
                entryComponents: [UpdateProfileComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ViewModes = {
    Grid: 'grid',
    List: 'list',
};
class ProductViewComponent {
    constructor() {
        this.modeChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get buttonClass() {
        return `cx-product-${this.mode}`;
    }
    /**
     * @return {?}
     */
    changeMode() {
        /** @type {?} */
        const newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    }
}
ProductViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-view',
                template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\"><span></span></div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-product-layout{position:var(--cx-position,relative);display:var(--cx-display,inline-block);overflow:var(--cx-overflow,hidden);border-radius:var(--cx-border-radius,4px);border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));max-height:var(--cx-max-height,48px)}.cx-product-layout span{position:var(--cx-position,relative);display:var(--cx-display,inline-block);overflow:var(--cx-overflow,hidden);width:var(--cx-width,20px);height:var(--cx-height,20px)}.cx-product-grid{display:var(--cx-display,inline-block);padding:var(--cx-padding,13px 18px 13px 18px);color:var(--cx-color,var(--cx-g-color-light))}@media (max-width:767.98px){.cx-product-grid{padding:var(--cx-padding,13px 12px 13px 12px)}}.cx-product-grid span{color:var(--cx-color,var(--cx-g-color-inverse));background-color:var(--cx-background-color,var(--cx-g-color-secondary))}.cx-product-grid span:hover{background:var(--cx-background,var(--cx-g-color-primary))}.cx-product-grid span:before{-webkit-transform:rotate(90deg);transform:rotate(90deg);content:'';position:var(--cx-position,absolute);width:var(--cx-width,100%);height:var(--cx-height,2px);top:var(--cx-top,50%);left:var(--cx-left,0);margin:var(--cx-margin,-1px 0 0 0);background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-product-grid span:after{-webkit-transform:rotate(0);transform:rotate(0);content:'';position:var(--cx-position,absolute);width:var(--cx-width,100%);height:var(--cx-height,2px);top:var(--cx-top,50%);left:var(--cx-left,0);margin:var(--cx-margin,-1px 0 0 0);background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-product-list{display:var(--cx-display,inline-block);padding:var(--cx-padding,13px 18px 13px 18px)}@media (max-width:767.98px){.cx-product-list{padding:var(--cx-padding,13px 12px 13px 12px)}}.cx-product-list span{color:var(--cx-color,var(--cx-g-color-secondary))}.cx-product-list span:hover{color:var(--cx-color,var(--cx-g-color-primary))}.cx-product-list span:before{content:'\\2630';font-size:var(--cx-font-size,25px);bottom:var(--cx-bottom,12px);position:var(--cx-position,relative)}"]
            }] }
];
ProductViewComponent.propDecorators = {
    mode: [{ type: Input }],
    modeChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductListComponent {
    /**
     * @param {?} productSearchService
     * @param {?} activatedRoute
     * @param {?} pageLayoutService
     */
    constructor(productSearchService, activatedRoute, pageLayoutService) {
        this.productSearchService = productSearchService;
        this.activatedRoute = activatedRoute;
        this.pageLayoutService = pageLayoutService;
        this.searchConfig = {};
        this.gridMode$ = new BehaviorSubject(ViewModes.Grid);
    }
    /**
     * @return {?}
     */
    update() {
        const { queryParams } = this.activatedRoute.snapshot;
        this.options = this.createOptionsByUrlParams();
        if (this.categoryCode && this.categoryCode !== queryParams.categoryCode) {
            this.query = ':relevance:category:' + this.categoryCode;
        }
        if (this.brandCode && this.brandCode !== queryParams.brandCode) {
            this.query = ':relevance:brand:' + this.brandCode;
        }
        if (!this.query && queryParams.query) {
            this.query = queryParams.query;
        }
        this.search(this.query, this.options);
    }
    /**
     * @return {?}
     */
    createOptionsByUrlParams() {
        const { queryParams } = this.activatedRoute.snapshot;
        /** @type {?} */
        const newConfig = Object.assign({}, queryParams);
        delete newConfig.query;
        /** @type {?} */
        const options = Object.assign({}, this.searchConfig, newConfig, { pageSize: this.itemPerPage || 10 });
        if (this.categoryCode) {
            options.categoryCode = this.categoryCode;
        }
        if (this.brandCode) {
            options.brandCode = this.brandCode;
        }
        return options;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateParams$ = this.activatedRoute.params.pipe(tap(params => {
            this.categoryCode = params.categoryCode;
            this.brandCode = params.brandCode;
            this.query = params.query;
            this.update();
        }));
        this.pageLayoutService.templateName$.pipe(take(1)).subscribe(template => {
            this.gridMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
        });
        // clean previous search result
        this.productSearchService.clearSearchResults();
        this.model$ = this.productSearchService.getSearchResults().pipe(tap(searchResult => {
            if (Object.keys(searchResult).length === 0) {
                this.search(this.query, this.options);
            }
            else {
                this.getCategoryTitle(searchResult);
            }
        }), filter(searchResult => Object.keys(searchResult).length > 0));
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    getCategoryTitle(data) {
        if (data.breadcrumbs && data.breadcrumbs.length > 0) {
            this.categoryTitle = data.breadcrumbs[0].facetValueName;
        }
        else if (!this.query.includes(':relevance:')) {
            this.categoryTitle = this.query;
        }
        if (this.categoryTitle) {
            this.categoryTitle =
                data.pagination.totalResults + ' results for ' + this.categoryTitle;
        }
        return this.categoryTitle;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.search(this.query, { currentPage: pageNumber });
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        this.search(this.query, { sortCode: sortCode });
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setGridMode(mode) {
        this.gridMode$.next(mode);
    }
    /**
     * @protected
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    search(query, options) {
        if (this.query) {
            if (options) {
                // Overide default options
                this.searchConfig = Object.assign({}, this.searchConfig, options);
            }
            this.productSearchService.search(query, this.searchConfig);
        }
    }
}
ProductListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-list',
                template: "<ng-container *ngIf=\"(updateParams$ | async)\">\n  <div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n    <section class=\"cx-page__section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-12\" *ngIf=\"(gridMode$ | async) as gridMode\">\n            <div class=\"cx-sorting top\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.placeholder.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"cx-pagination\"\n                    aria-label=\"product search pagination\"\n                  >\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n            <div class=\"cx-product-container\">\n              <ng-container *ngIf=\"gridMode === 'grid'\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"gridMode === 'list'\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </div>\n            <div class=\"cx-sorting bottom\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.placeholder.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\" aria-label=\"product search pagination\">\n                  <div class=\"cx-pagination\">\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-product-search-list{display:block;border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));margin:var(--cx-padding,0 0 25px 0)}.cx-product-search-list:last-of-type{border:var(--cx-border,none)}.cx-product-container{margin:var(--cx-margin,40px 0)}.cx-sorting{border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:991.98px){.cx-sorting{border:var(--cx-border,none)}}.cx-sorting.top{border-width:var(--cx-border-width,0 0 1px 0);padding:var(--cx-padding,0 0 8px 0)}.cx-sorting.bottom{border-width:var(--cx-border-width,1px 0 0 0);padding:var(--cx-padding,25px 0 0 0)}.cx-pagination{display:var(--cx-dispaly,inline-block);vertical-align:var(--cx-vertical-align,top)}.cx-sort-dropdown{height:var(--cx-height,48px)}.cx-sort-dropdown .ng-arrow-wrapper{padding:var(--cx-padding,0 35px 0 0)}"]
            }] }
];
/** @nocollapse */
ProductListComponent.ctorParameters = () => [
    { type: ProductSearchService },
    { type: ActivatedRoute },
    { type: PageLayoutService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductFacetNavigationComponent {
    /**
     * @param {?} modalService
     * @param {?} activatedRoute
     * @param {?} productSearchService
     */
    constructor(modalService, activatedRoute, productSearchService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.productSearchService = productSearchService;
        this.minPerFacet = 6;
        this.collapsedFacets = new Set();
        this.showAllPerFacetMap = new Map();
        this.queryCodec = new HttpUrlEncodingCodec();
    }
    /**
     * @return {?}
     */
    get visibleFacets() {
        if (!this.searchResult.facets) {
            return [];
        }
        return this.searchResult.facets.filter(facet => facet.visible);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateParams$ = this.activatedRoute.params.pipe(tap(params => {
            this.activeFacetValueCode = params.categoryCode || params.brandCode;
        }));
        this.searchResult$ = this.productSearchService.getSearchResults().pipe(tap(searchResult => {
            this.searchResult = searchResult;
            if (this.searchResult.facets) {
                this.searchResult.facets.forEach(el => {
                    this.showAllPerFacetMap.set(el.name, false);
                });
            }
        }), filter(searchResult => Object.keys(searchResult).length > 0));
    }
    /**
     * @param {?} content
     * @return {?}
     */
    openFilterModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    /**
     * @param {?} query
     * @return {?}
     */
    toggleValue(query) {
        this.productSearchService.search(this.queryCodec.decodeValue(query));
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    showLess(facetName) {
        this.updateShowAllPerFacetMap(facetName, false);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    showMore(facetName) {
        this.updateShowAllPerFacetMap(facetName, true);
    }
    /**
     * @private
     * @param {?} facetName
     * @param {?} showAll
     * @return {?}
     */
    updateShowAllPerFacetMap(facetName, showAll) {
        this.showAllPerFacetMap.set(facetName, showAll);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    isFacetCollapsed(facetName) {
        return this.collapsedFacets.has(facetName);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    toggleFacet(facetName) {
        if (this.collapsedFacets.has(facetName)) {
            this.collapsedFacets.delete(facetName);
        }
        else {
            this.collapsedFacets.add(facetName);
        }
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    getVisibleFacetValues(facet) {
        return facet.values.slice(0, this.showAllPerFacetMap.get(facet.name)
            ? facet.values.length
            : this.minPerFacet);
    }
}
ProductFacetNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-facet-navigation',
                template: "<div class=\"cx-search-facet\" *ngIf=\"(searchResult$ | async) as searchResult\">\n  <ng-template [ngIf]=\"searchResult.breadcrumbs?.length\">\n    <h4 class=\"cx-facet-filter-header\">\n      {{ 'productList.label.filterBy' | cxTranslate }}\n    </h4>\n    <div class=\"cx-facet-filter-container\">\n      <div\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n      >\n        <span>{{ breadcrumb.facetValueName }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template ngFor let-facet [ngForOf]=\"visibleFacets\" let-facetId=\"index\">\n    <div class=\"cx-facet-group\">\n      <span class=\"cx-facet-header\">\n        <a\n          class=\"cx-facet-header-link\"\n          (click)=\"toggleFacet(facet.name)\"\n          [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n          aria-controls=\"\"\n        >\n          {{ facet.name }}\n        </a>\n      </span>\n      <div [ngbCollapse]=\"isFacetCollapsed(facet.name)\">\n        <ul class=\"cx-facet-list\">\n          <li\n            *ngFor=\"\n              let value of getVisibleFacetValues(facet);\n              index as facetValueId\n            \"\n          >\n            <div class=\"form-check\">\n              <label class=\"form-checkbox cx-facet-label\">\n                <input\n                  class=\"form-check-input cx-facet-checkbox\"\n                  role=\"checkbox\"\n                  type=\"checkbox\"\n                  aria-checked=\"true\"\n                  [checked]=\"value.selected\"\n                  (change)=\"toggleValue(value.query.query.value)\"\n                />\n                <span class=\"cx-facet-text\"\n                  >{{ value.name }} ({{ value.count }})</span\n                >\n              </label>\n            </div>\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showLess(facet.name)\"\n            *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n          >\n            {{ 'productList.action.showLess' | cxTranslate }}\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showMore(facet.name)\"\n            *ngIf=\"\n              !showAllPerFacetMap.get(facet.name) &&\n              facet.values.length > minPerFacet\n            \"\n          >\n            {{ 'productList.action.showMore' | cxTranslate }}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </ng-template>\n</div>\n\n<div class=\"cx-facet-mobile\">\n  <button\n    class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n    (click)=\"openFilterModal(content)\"\n  >\n    {{ 'productList.action.filterBy' | cxTranslate }}\n  </button>\n</div>\n\n<!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n<div *ngIf=\"(updateParams$ | async) as params\">\n  <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n    <div class=\"cx-facet-filter-container\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.label.appliedFilter' | cxTranslate }}\n      </h4>\n      <div\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n      >\n        {{ breadcrumb.facetValueName }}\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n      {{ 'productList.label.filterBy' | cxTranslate }}\n    </h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"d('Cross click')\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body cx-facet-modal-body\">\n    <form>\n      <div\n        class=\"form-group\"\n        *ngFor=\"let facet of searchResult.facets; index as facetId\"\n      >\n        <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">{{ facet.name }}</h4>\n        <div class=\"input-group\">\n          <ul class=\"cx-facet-list\">\n            <li *ngFor=\"let value of facet.values; index as facetValueId\">\n              <div class=\"form-check\">\n                <label class=\"form-checkbox cx-facet-label\">\n                  <input\n                    class=\"form-check-input cx-facet-checkbox\"\n                    role=\"checkbox\"\n                    type=\"checkbox\"\n                    aria-checked=\"true\"\n                    [checked]=\"value.selected\"\n                    (change)=\"toggleValue(value.query.query.value)\"\n                  />\n                  <span class=\"cx-facet-text\"\n                    >{{ value.name }} ({{ value.count }})</span\n                  >\n                </label>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){.cx-search-facet{display:var(--cx-display,none)}}.cx-facet-checkbox{position:var(--cx-position,relative);margin:var(--cx-margin,0 10px 0 0);min-width:var(--cx-min-width,22px);transition:var(--cx-transition,.3s)}.cx-facet-checkbox:checked+.cx-facet-text{color:var(--cx-color,var(--cx-g-color-primary))}.cx-facet-list{padding:var(--cx-padding,0);list-style:var(--cx-list-style,none);margin:var(--cx-margin,0 0 32px 0)}.cx-facet-list .form-check{padding:var(--cx-padding,0);margin:var(--cx-margin,0 0 20px 0)}.cx-facet-list .cx-facet-label{color:var(--cx-color,var(--cx-g-color-secondary));font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-normal,400));position:var(--cx-position,relative);margin:var(--cx-margin,0);display:var(--cx-display,flex);align-items:var(--cx-align-items,flex-start);justify-content:var(--cx-justify-content,flex-start);cursor:var(--cx-cursor,pointer)}.cx-facet-list .cx-facet-label:hover .cx-facet-checkbox:not(:checked){background-color:var(--cx-background-color,var(--cx-g-color-light))}.cx-facet-list .cx-facet-label .cx-facet-text{line-height:var(--cx-light-height,22px)}.cx-facet-list .cx-facet-toggle-btn{cursor:pointer}.cx-facet-header{border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6);color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,0 0 10px 0);margin:var(--cx-margin,0 0 17px 0);display:var(--cx-display,block);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi,600))}.cx-facet-header .cx-facet-header-link:after{float:var(--cx-float,right);font-size:var(--cx-font-size,25px);line-height:var(--cx-line-height,0);position:var(--cx-position,relative);top:var(--cx-top,10px);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-normal,400));color:var(--cx-color,var(--cx-g-color-secondary))}.cx-facet-header .cx-facet-header-link[aria-expanded=false]:after{content:'+'}.cx-facet-header .cx-facet-header-link[aria-expanded=true]:after{content:'\\2013';height:var(--cx-height,2px)}.cx-facet-filter-container{margin:var(--cx-margin,0 0 40px 0)}@media (max-width:991.98px){.cx-facet-filter-container{margin:var(--cx-margin,0)}}.cx-facet-filter-header{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6);color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,0 0 10px 0);margin:var(--cx-margin,0 0 20px 0)}@media (max-width:991.98px){.cx-facet-filter-header{display:var(--cx-display,inline-block);margin:var(--cx-margin,0 20px 0 0)}.cx-facet-mobile .cx-facet-mobile-btn{margin:var(--cx-margin,0 0 20px 0)}}.cx-facet-filter-pill{background:var(--cx-background,var(--cx-g-color-light));padding:var(--cx-padding,10px 10px 10px 13px);margin:var(--cx-margin,10px 10px 5px 0);display:var(--cx-display,flex);align-items:var(--cx-align-items,flex-start);border-radius:var(--cx-border-radius,4px)}.cx-facet-filter-pill span{flex:var(--cx-flex,1 1 auto)}.cx-facet-filter-pill button{margin:var(--cx-margin,0 0 0 10px);flex:var(--cx-flex,0 0 1rem)}.cx-facet-modal-title{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}@media (min-width:992px){.cx-facet-mobile{display:var(--cx-display,none)}}@media (max-width:991.98px){.cx-facet-modal-body{overflow-y:var(--cx-overflow-y,scroll);height:var(--cx-height,100vh)}.cx-facet-modal-label{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi,600));margin:var(--cx-margin,0 0 27px 0)}}"]
            }] }
];
/** @nocollapse */
ProductFacetNavigationComponent.ctorParameters = () => [
    { type: NgbModal },
    { type: ActivatedRoute },
    { type: ProductSearchService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductGridItemComponent {
}
ProductGridItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-grid-item',
                template: "<a\n  [routerLink]=\"\n    { route: [{ name: 'product', params: product | stripHtml }] }\n      | cxTranslateUrl\n  \"\n  class=\"cx-product-image-container\"\n>\n  <cx-picture\n    class=\"cx-product-image\"\n    [imageContainer]=\"product.images?.PRIMARY\"\n    imageFormat=\"product\"\n    [imageAlt]=\"product.summary\"\n  ></cx-picture>\n</a>\n<a\n  [routerLink]=\"\n    { route: [{ name: 'product', params: product | stripHtml }] }\n      | cxTranslateUrl\n  \"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.name\"\n  >{{ product.name }}</a\n>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price.formattedValue }}\n  </div>\n</div>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n  [productCode]=\"product.code\"\n></cx-add-to-cart>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-product-image-container{display:var(--cx-display,block);text-align:var(--cx-text-align,center)}.cx-product-image{width:var(--cx-width,100%);padding:var(--cx-padding,20px);display:var(--cx-display,block)}@media (max-width:767.98px){.cx-product-image{padding:var(--cx-padding,1.25rem 0 0 0)}}.cx-product-name{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);text-align:var(--cx-text-align,center);display:var(--cx-display,block);margin:var(--cx-margin,0 0 25px 0);color:var(--cx-color,--cx-g-color-dark);-webkit-text-decoration:var(--cx-text-decoration,none);text-decoration:var(--cx-text-decoration,none);height:var(--cx-height,2.4em);overflow:var(--cx-overflow,hidden);position:var(--cx-position,relative)}.cx-product-name:before{bottom:var(--cx-bottom,0);right:var(--cx-right,0);position:var(--cx-position,absolute);content:'\u2026'}.cx-product-name:after{content:'';background:var(--cx-background,none repeat scroll 0 0);background-color:var(--cx-background-color,--cx-g-color-inverse);position:var(--cx-position,absolute);height:var(--cx-height,50px);width:var(--cx-width,100%);z-index:var(--cx-z-index,1)}.cx-product-name:hover{color:var(--cx-color,--cx-g-color-primary)}.cx-product-price-container,.cx-product-rating{text-align:var(--cx-text-align,center)}.cx-product-price{font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);text-align:var(--cx-text-align,center);display:var(--cx-display,inline-block);margin:var(--cx-margin,0 0 25px 0)}.cx-product-price .old{color:var(--cx-g-secondary);-webkit-text-decoration:var(--cx-text-decoration,line-through);text-decoration:var(--cx-text-decoration,line-through);margin:var(--cx-margin,0)}.cx-product-price .new{margin:var(--cx-margin,0 0 25px 5px);color:var(--cx-color,--cx-g-primary)}"]
            }] }
];
ProductGridItemComponent.propDecorators = {
    product: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductListItemComponent {
}
ProductListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-list-item',
                template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"\n        { route: [{ name: 'product', params: product | stripHtml }] }\n          | cxTranslateUrl\n      \"\n      class=\"cx-product-image-container\"\n    >\n      <cx-picture\n        class=\"cx-product-image\"\n        [imageContainer]=\"product.images?.PRIMARY\"\n        imageFormat=\"product\"\n        [imageAlt]=\"product.summary\"\n      ></cx-picture>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"\n        { route: [{ name: 'product', params: product | stripHtml }] }\n          | cxTranslateUrl\n      \"\n      class=\"cx-product-name\"\n      [innerHtml]=\"product.name\"\n      >{{ product.name }}</a\n    >\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ product.price?.formattedValue }}\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p class=\"cx-product-summary\" [innerHtml]=\"product.summary\">\n          {{ product.summary }}\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n          [productCode]=\"product.code\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-product-search-list{border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));margin:var(--cx-margin,0 0 25px 0)}.cx-product-search-list:last-of-type{border-width:var(--cx-border-width,0 0 0 0)}.cx-product-image-container{display:block;text-align:center}.cx-product-image{width:100%}.cx-product-name{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);text-align:left;display:block;margin:var(--cx-margin,0 0 3px 0);color:var(--cx-color,var(--cx-g-color-dark));text-decoration:none}.cx-product-name:hover{color:var(--cx-color,var(--cx-g-color-primary))}.cx-product-price{font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);text-align:left;display:inline-block;margin:var(--cx-margin,0 0 25px 0)}.cx-product-price.old{color:var(--cx-color,var(--cx-g-color-secondary));-webkit-text-decoration:var(--cx-text-decoration,line-through);text-decoration:var(--cx-text-decoration,line-through)}.cx-product-price.new{margin:var(--cx-margin,0 0 0 5px);color:var(--cx-color,var(--cx-g-color-primary))}"]
            }] }
];
ProductListItemComponent.propDecorators = {
    product: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductListModule {
}
ProductListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSProductListComponent: { selector: 'cx-product-list' },
                            SearchResultsListComponent: { selector: 'cx-product-list' },
                            ProductRefinementComponent: { selector: 'cx-product-facet-navigation' },
                        },
                    }))),
                    RouterModule,
                    MediaModule,
                    BootstrapModule,
                    AddToCartModule,
                    FormComponentsModule,
                    PaginationAndSortingModule,
                    StripHtmlModule,
                    UrlTranslationModule,
                    I18nModule,
                ],
                declarations: [
                    ProductListComponent,
                    ProductFacetNavigationComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                    ProductViewComponent,
                ],
                exports: [
                    ProductListComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                ],
                entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletRefDirective {
    /**
     * @param {?} tpl
     * @param {?} outletService
     */
    constructor(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    }
}
OutletRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOutletRef]',
            },] }
];
/** @nocollapse */
OutletRefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: OutletService }
];
OutletRefDirective.propDecorators = {
    cxOutletRef: [{ type: Input }],
    cxOutletPos: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletRefModule {
}
OutletRefModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [OutletRefDirective],
                exports: [OutletRefDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrentProductService {
    /**
     * @param {?} routingService
     * @param {?} productService
     */
    constructor(routingService, productService) {
        this.routingService = routingService;
        this.productService = productService;
    }
    /**
     * @return {?}
     */
    getProduct() {
        return this.routingService.getRouterState().pipe(map(state => state.state.params['productCode']), filter(productCode => !!productCode), switchMap((productCode) => this.productService.get(productCode)));
    }
}
CurrentProductService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrentProductService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ProductDetailOutlets = {
    PAGE: 'PDP.PAGE',
    SUMMARY: 'PDP.SUMMARY',
    IMAGES: 'PDP.IMAGES',
    TITLE: 'PDP.TITLE',
    RATING: 'PDP.RATING',
    ADDTOCART: 'PDP.ADDTOCART',
    PRICE: 'PDP.PRICE',
    SHARE: 'PDP.SHARE',
};
/** @enum {string} */
const ProductTabsOutlets = {
    DESCRIPTION: 'PDP.DESCRIPTION',
    SPECIFICATIONS: 'PDP.SPECIFICATIONS',
    REVIEWS: 'PDP.REVIEWS',
    SHIPPING: 'PDP.SHIPPING',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductTabsComponent {
    /**
     * @param {?} winRef
     * @param {?} currentPageService
     */
    constructor(winRef, currentPageService) {
        this.winRef = winRef;
        this.currentPageService = currentPageService;
        this.isWritingReview = false;
        this.activatedElements = [];
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    set initial(ref) {
        if (ref) {
            ref.nativeElement.click();
        }
    }
    /**
     * @return {?}
     */
    get outlets() {
        return ProductTabsComponent.outlets;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.product$ = this.currentPageService.getProduct();
    }
    /**
     * @param {?} event
     * @param {?} tab
     * @return {?}
     */
    select(event, tab) {
        if (this.activatedElements.indexOf(tab) === -1) {
            // remove active class on both header and content panel
            this.activatedElements.forEach(el => el.classList.remove('active', 'toggled'));
            this.activatedElements = [(/** @type {?} */ (event.target)), tab];
            this.activatedElements.forEach(el => el.classList.add('active'));
            // only scroll if the element is not yet visible
            if (this.isElementOutViewport(tab)) {
                tab.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        }
        else {
            this.activatedElements.forEach(el => el.classList.toggle('toggled'));
        }
    }
    /**
     * @return {?}
     */
    openReview() {
        if (this.reviewHeader.nativeElement) {
            this.reviewHeader.nativeElement.click();
        }
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    isElementOutViewport(el) {
        if (!this.winRef.nativeWindow) {
            return false;
        }
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        return (rect.bottom < 0 ||
            rect.right < 0 ||
            rect.left > this.winRef.nativeWindow.innerWidth ||
            rect.top > this.winRef.nativeWindow.innerHeight);
    }
}
ProductTabsComponent.outlets = ProductTabsOutlets;
ProductTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-tabs',
                template: "<div class=\"details\" *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.DESCRIPTION\">\n    <h3 #descriptionHeader (click)=\"select($event, description)\">\n      {{ 'productDetails.label.productDetails' | cxTranslate }}\n    </h3>\n    <div #description>\n      <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SPECIFICATIONS\">\n    <h3 (click)=\"select($event, specifications)\">\n      {{ 'productDetails.label.specification' | cxTranslate }}\n    </h3>\n    <div #specifications>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.label.specification' | cxTranslate }}</h2>\n        <cx-product-attributes [product]=\"product\"></cx-product-attributes>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.REVIEWS\">\n    <h3 #reviewHeader (click)=\"select($event, reviews)\">\n      {{ 'productDetails.label.reviews' | cxTranslate }} ({{\n        product?.numberOfReviews\n      }})\n    </h3>\n    <div #reviews>\n      <div class=\"container\">\n        <h2>\n          {{ 'productDetails.label.reviews' | cxTranslate }} ({{\n            product?.numberOfReviews\n          }})\n        </h2>\n        <cx-product-reviews\n          class=\"container\"\n          [(isWritingReview)]=\"isWritingReview\"\n          [product]=\"product\"\n        ></cx-product-reviews>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SHIPPING\">\n    <h3 (click)=\"select($event, shipping)\">\n      {{ 'productDetails.label.shipping' | cxTranslate }}\n    </h3>\n    <div #shipping>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.label.shipping' | cxTranslate }}</h2>\n        <ng-container\n          [cxComponentWrapper]=\"{\n            flexType: 'CMSTabParagraphComponent',\n            uid: 'deliveryTab'\n          }\"\n        ></ng-container>\n      </div>\n    </div>\n  </ng-container>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ProductTabsComponent.ctorParameters = () => [
    { type: WindowRef },
    { type: CurrentProductService }
];
ProductTabsComponent.propDecorators = {
    initial: [{ type: ViewChild, args: ['descriptionHeader',] }],
    reviewHeader: [{ type: ViewChild, args: ['reviewHeader',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductAttributesComponent {
}
ProductAttributesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-attributes',
                template: "<table *ngFor=\"let class of product?.classifications\">\n  <th>\n    <h3>{{ class.name }}</h3>\n  </th>\n  <tr *ngFor=\"let feature of class.features\">\n    <td>{{ feature.name }}</td>\n    <td>\n      <ul>\n        <li *ngFor=\"let featureValue of feature?.featureValues\">\n          {{ featureValue?.value }}\n        </li>\n      </ul>\n    </td>\n  </tr>\n</table>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["table{width:var(--cx-width,100%);margin:var(--cx-margin,0 0 30px 0)}table th h3{margin:var(--cx-margin,0 0 18px 0)}table tr{border-top:var(--cx-border-top,1px solid var(--cx-g-color-light));border-bottom:var(--cx-border-bottom,1px solid var(--cx-g-color-light))}table td{padding:var(--cx-padding,12px 0 12px 0);vertical-align:var(--cx-vertical-align,top);width:var(--cx-width,50%)}table ul{list-style:var(--cx-list-style,none);padding:var(--cx-padding,0 0 0 0)}"]
            }] }
];
ProductAttributesComponent.propDecorators = {
    product: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewsComponent {
    /**
     * @param {?} reviewService
     * @param {?} fb
     */
    constructor(reviewService, fb) {
        this.reviewService = reviewService;
        this.fb = fb;
        this.isWritingReviewChange = new EventEmitter();
        this._isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
    }
    /**
     * @return {?}
     */
    get isWritingReview() {
        return this._isWritingReview;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isWritingReview(val) {
        this._isWritingReview = val;
        this.isWritingReviewChange.emit(this.isWritingReview);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.maxListItems = this.initialMaxListItems;
        if (this.product) {
            this.reviews$ = this.reviewService.getByProductCode(this.product.code);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.resetReviewForm();
    }
    /**
     * @return {?}
     */
    initiateWriteReview() {
        this.isWritingReview = true;
    }
    /**
     * @return {?}
     */
    cancelWriteReview() {
        this.isWritingReview = false;
        this.resetReviewForm();
    }
    /**
     * @return {?}
     */
    submitReview() {
        /** @type {?} */
        const reviewFormControls = this.reviewForm.controls;
        /** @type {?} */
        const review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(this.product.code, review);
        this.isWritingReview = false;
        this.resetReviewForm();
    }
    /**
     * @private
     * @return {?}
     */
    resetReviewForm() {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [0, [Validators.min(1), Validators.max(5)]],
            reviewerName: '',
        });
    }
}
ProductReviewsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-reviews',
                template: "<ng-container *ngIf=\"!isWritingReview; else writeReview\">\n  <div class=\"header\">\n    <h3>{{ 'productReview.label.overallRating' | cxTranslate }}</h3>\n    <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n      {{ 'productReview.action.writeReview' | cxTranslate }}\n    </button>\n    <cx-star-rating\n      class=\"rating\"\n      [rating]=\"product.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n  </div>\n\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <ng-container *ngIf=\"(reviews$ | async) as reviews\">\n      <div\n        class=\"review\"\n        tabindex=\"0\"\n        *ngFor=\"let review of (reviews | slice: 0:maxListItems)\"\n      >\n        <div class=\"title\">{{ review.headline }}</div>\n        <cx-star-rating\n          [rating]=\"review.rating\"\n          [disabled]=\"true\"\n        ></cx-star-rating>\n        <div class=\"name\">\n          {{ review.alias ? review.alias : review.principal?.name }}\n        </div>\n        <div class=\"date\">{{ review.date | cxDate }}</div>\n        <div class=\"text\">{{ review.comment }}</div>\n      </div>\n      <div *ngIf=\"reviews.length > initialMaxListItems\">\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = reviews.length\"\n          *ngIf=\"maxListItems === initialMaxListItems\"\n        >\n          {{ 'productReview.action.more' | cxTranslate }}\n        </button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = initialMaxListItems\"\n          *ngIf=\"maxListItems !== initialMaxListItems\"\n        >\n          {{ 'productReview.action.less' | cxTranslate }}\n        </button>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #writeReview>\n  <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview()\">\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.reviewTitle' | cxTranslate\n        }}</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.writeYourComments' | cxTranslate\n        }}</span>\n        <textarea\n          class=\"form-control\"\n          rows=\"3\"\n          formControlName=\"comment\"\n        ></textarea>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.rating' | cxTranslate\n        }}</span>\n        <cx-star-rating formControlName=\"rating\" [steps]=\"0.5\"></cx-star-rating>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.reviewerName' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"reviewerName\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-secondary\"\n          (click)=\"cancelWriteReview()\"\n        >\n          {{ 'common.action.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-primary\"\n          [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n          [disabled]=\"!reviewForm.valid\"\n        >\n          {{ 'common.action.submit' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.header{display:flex;flex-wrap:wrap;border-bottom:var(--cx-border-bottom,1px solid var(--cx-g-color-light));padding:var(--cx-padding,0 15px 15px);margin:var(--cx-margin,0 -15px 40px -15px)}.header button{margin:var(--cx-margin,0 0 0 auto)}.header .rating{flex-basis:100%}.review{display:-ms-grid;display:grid;-ms-grid-columns:var(--cx-grid-template-columns,auto auto 10vw);grid-template-columns:var(--cx-grid-template-columns,auto auto 10vw);-ms-grid-rows:var(--cx-grid-template-rows,repeat(3,minmax(10px,auto)) auto);grid-template-rows:var(--cx-grid-template-rows,repeat(3,minmax(10px,auto)) auto);grid-column-gap:1vw;margin:1vh 0}.review .text,.review .title,.review cx-star-rating{grid-column:var(--cx-grid-column,1/span 2)}@media (max-width:991.98px){.review .text{grid-column:var(--cx-grid-column,1/span 3)}}.review .date{grid-column:var(--cx-grid-column,2/span 3)}.review .name{grid-column:var(--cx-grid-column,2/span 3);grid-row:var(--cx-grid-row,5)}.review .text{grid-row:var(--cx-grid-row,0);margin:.5vh 0}.review .title{font-weight:700}.review .date,.review .name{text-align:var(--cx-text-align,right)}"]
            }] }
];
/** @nocollapse */
ProductReviewsComponent.ctorParameters = () => [
    { type: ProductReviewService },
    { type: FormBuilder }
];
ProductReviewsComponent.propDecorators = {
    product: [{ type: Input }],
    isWritingReview: [{ type: Input }],
    isWritingReviewChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewsModule {
}
ProductReviewsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    FormComponentsModule,
                    I18nModule,
                ],
                declarations: [ProductReviewsComponent],
                exports: [ProductReviewsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductTabsModule {
}
ProductTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ComponentsModule,
                    CartSharedModule,
                    CmsModule$1,
                    AddToCartModule,
                    OutletModule,
                    ProductReviewsModule,
                    PageComponentModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSTabParagraphContainer: {
                                selector: 'cx-product-tabs',
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [ProductAttributesComponent, ProductTabsComponent],
                exports: [
                    ProductAttributesComponent,
                    ProductReviewsComponent,
                    ProductTabsComponent,
                ],
                entryComponents: [ProductTabsComponent],
                providers: [ProductService, WindowRef, RoutingService],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressBookComponentService {
    /**
     * @param {?} userService
     */
    constructor(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    getAddresses() {
        return this.userService.getAddresses();
    }
    /**
     * @return {?}
     */
    getAddressesStateLoading() {
        return this.userService.getAddressesLoading();
    }
    /**
     * @return {?}
     */
    getUserId() {
        return this.userService.get().pipe(map(({ uid }) => uid));
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadAddresses(userId) {
        this.userService.loadAddresses(userId);
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    addUserAddress(userId, address) {
        this.userService.addUserAddress(userId, address);
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    updateUserAddress(userId, addressId, address) {
        this.userService.updateUserAddress(userId, addressId, address);
    }
}
AddressBookComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressBookComponentService.ctorParameters = () => [
    { type: UserService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressBookComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service
            .getUserId()
            .pipe(take(1))
            .subscribe(id => {
            this.userId = id;
            this.service.loadAddresses(id);
        });
    }
    /**
     * @return {?}
     */
    addAddressButtonHandle() {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    editAddressButtonHandle(address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addAddressSubmit(address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(this.userId, address);
    }
    /**
     * @return {?}
     */
    addAddressCancel() {
        this.showAddAddressForm = false;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    editAddressSubmit(address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.userId, this.currentAddress['id'], address);
    }
    /**
     * @return {?}
     */
    editAddressCancel() {
        this.showEditAddressForm = false;
    }
}
AddressBookComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-book',
                template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.action.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of (addresses$ | async)\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [userId]=\"userId\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.label.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'address.action.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'address.action.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.label.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'address.action.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'address.action.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-address-deck{padding:var(--cx-padding,1.25rem 0 0 0)}.cx-address-deck-spinner{padding:var(--cx-padding,5rem 0 5rem 0)}.cx-address-card{padding-bottom:var(--cx-padding,30px)}.cx-form{padding-top:var(--cx-padding,30px)}"]
            }] }
];
/** @nocollapse */
AddressBookComponent.ctorParameters = () => [
    { type: AddressBookComponentService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressCardComponent {
    /**
     * @param {?} userService
     */
    constructor(userService) {
        this.userService = userService;
        this.editEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    openEditFormEvent() {
        this.editEvent.emit();
    }
    /**
     * @return {?}
     */
    cancelEdit() {
        this.editMode = false;
    }
    /**
     * @return {?}
     */
    setEditMode() {
        this.editMode = true;
    }
    /**
     * @param {?} addressId
     * @return {?}
     */
    setAddressAsDefault(addressId) {
        if (this.userId) {
            this.userService.setAddressAsDefault(this.userId, addressId);
        }
    }
    /**
     * @param {?} addressId
     * @return {?}
     */
    deleteAddress(addressId) {
        if (this.userId) {
            this.userService.deleteUserAddress(this.userId, addressId);
        }
    }
}
AddressCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-card',
                template: "<div class=\"cx-address-card-inner card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'common.label.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.label.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.action.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.action.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"cx-address-card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'common.action.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.action.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.action.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-address-card-inner{margin:var(--cx-margin,0 0 1.25rem 0);border-radius:var(--cx-border-radius,0);height:var(--cx-height,100%)}.cx-address-card-actions{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);padding:var(--cx-padding,1.25rem 0 0 0)}.cx-address-card-delete{padding:var(--cx-padding,1.25rem 0 0 0)}.cx-address-card-label-name{font-weight:var(--cx-g-font-weight-bold)}.cx-address-card-delete-msg{color:var(--cx-color,var(--cx-g-color-danger));padding:var(--cx-padding,0 0 1.25rem 0)}.cx-address-card-delete-mode{background-color:var(--cx-background-color,var(--cx-g-color-background))}.cx-card-body{justify-content:var(--cx-justify-content,space-between);display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column)}"]
            }] }
];
/** @nocollapse */
AddressCardComponent.ctorParameters = () => [
    { type: UserService }
];
AddressCardComponent.propDecorators = {
    userId: [{ type: Input }],
    address: [{ type: Input }],
    editEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressBookModule {
}
AddressBookModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AccountAddressBookComponent: {
                                selector: 'cx-address-book',
                                providers: [
                                    {
                                        provide: AddressBookComponentService,
                                        useClass: AddressBookComponentService,
                                        deps: [UserService],
                                    },
                                ],
                            },
                        },
                    }))),
                    CardModule,
                    AddressFormModule,
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [AddressBookComponent, AddressCardComponent],
                exports: [AddressBookComponent, AddressCardComponent],
                providers: [UserService, AddressBookComponentService],
                entryComponents: [AddressBookComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerComponentService {
    /**
     * @param {?} component
     * @param {?} config
     */
    constructor(component, config) {
        this.component = component;
        this.config = config;
        this.convertToAbsoluteUrl = map(url => this.getBaseUrl() + url);
        // TODO: move to a more generic location
        // TODO: Make configurable
        this.formats = [
            { code: 'mobile', width: 200 },
            { code: 'tablet', width: 500 },
            { code: 'desktop', width: 800 },
            { code: 'widescreen', width: 1200 },
        ];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    static hasMedia(data) {
        return !!data.media;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    static hasHeadline(data) {
        return !!data.headline;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    static hasContent(data) {
        return !!data.content;
    }
    /**
     * @return {?}
     */
    getComponentData() {
        return this.component.data$;
    }
    /**
     * @return {?}
     */
    hasImage() {
        return this.getComponentData().pipe(map(BannerComponentService.hasMedia));
    }
    /**
     * @return {?}
     */
    hasHeadline() {
        return this.getComponentData().pipe(map(BannerComponentService.hasHeadline));
    }
    /**
     * @return {?}
     */
    hasContent() {
        return this.getComponentData().pipe(map(BannerComponentService.hasContent));
    }
    /**
     * @return {?}
     */
    getImageUrl() {
        return this.getComponentData().pipe(map(data => BannerComponentService.hasMedia(data)
            ? ((/** @type {?} */ (data.media))).url
            : ''));
    }
    /**
     * @return {?}
     */
    getResponsiveImageUrl() {
        return this.getComponentData().pipe(map(data => BannerComponentService.hasMedia(data)
            ? ((/** @type {?} */ (data.media))).desktop.url
            : ''));
    }
    /**
     * @return {?}
     */
    getTarget() {
        return this.getComponentData().pipe(map(data => {
            return !data.external || data.external === 'false' ? '_self' : '_blank';
        }));
    }
    /**
     * @return {?}
     */
    getAltText() {
        return this.getComponentData().pipe(map(data => BannerComponentService.hasMedia(data)
            ? ((/** @type {?} */ (data.media))).altText
            : ''));
    }
    /**
     * @return {?}
     */
    getHeadline() {
        return this.getComponentData().pipe(map(data => BannerComponentService.hasHeadline(data) ? data.headline : ''));
    }
    /**
     * @return {?}
     */
    getContent() {
        return this.getComponentData().pipe(map(data => (BannerComponentService.hasContent(data) ? data.content : '')));
    }
    /**
     * @return {?}
     */
    getBaseUrl() {
        return this.config.backend.occ.baseUrl || '';
    }
    /**
     * @return {?}
     */
    getImageAbsoluteUrl() {
        return this.getImageUrl().pipe(this.convertToAbsoluteUrl);
    }
    /**
     * @return {?}
     */
    getResponsiveImageAbsoluteUrl() {
        return this.getResponsiveImageUrl().pipe(this.convertToAbsoluteUrl);
    }
    /**
     * @return {?}
     */
    getResponsiveSrcSet() {
        return this.getComponentData().pipe(map(data => {
            return this.formats.reduce((srcset, format) => {
                if (typeof data.media[format.code] !== 'undefined') {
                    return (srcset += `${this.getBaseUrl()}${data.media[format.code].url} ${format.width}w, `);
                }
                else {
                    return srcset;
                }
            }, '');
        }));
    }
    /**
     * @return {?}
     */
    getComponentUID() {
        return this.component.uid;
    }
}
BannerComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BannerComponentService.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-banner',
                template: "<p class=\"cx-banner-headline\" *ngIf=\"(service.hasHeadline() | async)\">\n  {{ service.getHeadline() | async }}\n</p>\n<cx-generic-link\n  *ngIf=\"\n    (service.hasImage() | async) && (service.getComponentData() | async) as data\n  \"\n  [url]=\"data.urlLink\"\n  [target]=\"service.getTarget() | async\"\n>\n  <img\n    [title]=\"service.getAltText() | async\"\n    [alt]=\"service.getAltText() | async\"\n    [src]=\"service.getImageAbsoluteUrl() | async\"\n    alt=\"\"\n  />\n</cx-generic-link>\n<p class=\"cx-banner-content\" *ngIf=\"(service.hasContent() | async)\">\n  {{ service.getContent() | async }}\n</p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["img{width:var(--cx-width);margin:var(--cx-margin)}"]
            }] }
];
/** @nocollapse */
BannerComponent.ctorParameters = () => [
    { type: BannerComponentService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResponsiveBannerComponent extends BannerComponent {
    /**
     * @return {?}
     */
    getClass() {
        /** @type {?} */
        const RESPONSIVE_BANNER_CLASS = 'responsive-banner';
        return `${RESPONSIVE_BANNER_CLASS} ${this.service.getComponentUID()}`;
    }
}
ResponsiveBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-responsive-banner',
                template: "<cx-generic-link\n  fxFlex\n  class=\"link\"\n  *ngIf=\"service.hasImage() && (service.getComponentData() | async) as data\"\n  [url]=\"data.urlLink\"\n  [target]=\"service.getTarget() | async\"\n>\n  <picture [class]=\"getClass()\">\n    <img\n      [src]=\"service.getResponsiveImageAbsoluteUrl() | async\"\n      [srcset]=\"service.getResponsiveSrcSet() | async\"\n      sizes=\"100%\"\n      alt=\"\"\n    />\n  </picture>\n</cx-generic-link>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".link{flex:1 1 0%;box-sizing:border-box}.link picture.responsive-banner img{width:100%;display:block}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerModule {
}
BannerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    GenericLinkModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            SimpleResponsiveBannerComponent: {
                                selector: 'cx-responsive-banner',
                                providers: [
                                    {
                                        provide: BannerComponentService,
                                        useClass: BannerComponentService,
                                        deps: [CmsComponentData, CmsConfig],
                                    },
                                ],
                            },
                            BannerComponent: {
                                selector: 'cx-banner',
                                providers: [
                                    {
                                        provide: BannerComponentService,
                                        useClass: BannerComponentService,
                                        deps: [CmsComponentData, CmsConfig],
                                    },
                                ],
                            },
                            SimpleBannerComponent: {
                                selector: 'cx-banner',
                                providers: [
                                    {
                                        provide: BannerComponentService,
                                        useClass: BannerComponentService,
                                        deps: [CmsComponentData, CmsConfig],
                                    },
                                ],
                            },
                        },
                    }))),
                ],
                declarations: [BannerComponent, ResponsiveBannerComponent],
                exports: [BannerComponent, ResponsiveBannerComponent],
                entryComponents: [BannerComponent, ResponsiveBannerComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbModule {
}
BreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            BreadcrumbComponent: { selector: 'cx-breadcrumb' },
                        },
                    }))),
                    CmsPageTitleModule,
                ],
                declarations: [BreadcrumbComponent],
                entryComponents: [BreadcrumbComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationComponentService {
    /**
     * @param {?} cmsService
     * @param {?} componentData
     */
    constructor(cmsService, componentData) {
        this.cmsService = cmsService;
        this.componentData = componentData;
    }
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    getNavigationEntryItems(nodeData, root, itemsList = []) {
        if (nodeData.children && nodeData.children.length > 0) {
            this.processChildren(nodeData, itemsList);
        }
        else if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach(entry => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
        }
        if (root) {
            /** @type {?} */
            const rootUid = nodeData.uid;
            this.cmsService.loadNavigationItems(rootUid, itemsList);
        }
    }
    /**
     * @private
     * @param {?} node
     * @param {?} itemsList
     * @return {?}
     */
    processChildren(node, itemsList) {
        for (const child of node.children) {
            this.getNavigationEntryItems(child, false, itemsList);
        }
    }
    /**
     * Create a new node tree for display
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    createNode(nodeData, items) {
        /** @type {?} */
        const node = {};
        node['title'] = nodeData.title;
        node['url'] = '';
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            const children = this.createChildren(nodeData, items);
            node['children'] = children;
        }
        else if (nodeData.entries && nodeData.entries.length > 0) {
            /** @type {?} */
            const entry = nodeData.entries[0];
            /** @type {?} */
            const item = items[`${entry.itemId}_${entry.itemSuperType}`];
            // now we only consider CMSLinkComponent
            if (entry.itemType === 'CMSLinkComponent' && item !== undefined) {
                if (!node['title']) {
                    node['title'] = item.linkName;
                }
                node['url'] = item.url;
                // if "NEWWINDOW", target is true
                node['target'] = item.target;
            }
        }
        return node;
    }
    /**
     * @private
     * @param {?} node
     * @param {?} items
     * @return {?}
     */
    createChildren(node, items) {
        /** @type {?} */
        const children = [];
        for (const child of node.children) {
            /** @type {?} */
            const childNode = this.createNode(child, items);
            children.push(childNode);
        }
        return children;
    }
    /**
     * @return {?}
     */
    getComponentData() {
        return this.componentData.data$;
    }
    /**
     * @return {?}
     */
    getNodes() {
        return this.getComponentData().pipe(switchMap(data => {
            if (data) {
                /** @type {?} */
                const navigation = data.navigationNode ? data.navigationNode : data;
                return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap(items => {
                    if (items === undefined) {
                        this.getNavigationEntryItems(navigation, true, []);
                    }
                }), filter(items => items !== undefined), map(items => this.createNode(navigation, items)));
            }
        }));
    }
}
NavigationComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NavigationComponentService.ctorParameters = () => [
    { type: CmsService },
    { type: CmsComponentData, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.dropdownMode = 'list';
        this.node$ = this.service.getNodes();
    }
}
NavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-navigation',
                template: "<cx-navigation-ui [node]=\"node$ | async\" [dropdownMode]=\"dropdownMode\">\n</cx-navigation-ui>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
NavigationComponent.ctorParameters = () => [
    { type: NavigationComponentService }
];
NavigationComponent.propDecorators = {
    dropdownMode: [{ type: Input }],
    node: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationUIComponent {
    constructor() {
        this.dropdownMode = 'list';
    }
}
NavigationUIComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-navigation-ui',
                template: "<div *ngIf=\"node\" class=\"cx-nav-item nav-item\" ngbDropdown>\n  <a\n    *ngIf=\"node.children && !node.title; else nodeWithChildren\"\n    ngbDropdownToggle\n    >&nbsp;\n  </a>\n  <ng-template #nodeWithChildren>\n    <span\n      *ngIf=\"node.children; else noChildren\"\n      ngbDropdownToggle\n      class=\"cx-nav-link nav-link\"\n      role=\"link\"\n      id=\"{{ node.title }}\"\n      >{{ node.title }}</span\n    >\n  </ng-template>\n  <ng-template #noChildren>\n    <a\n      [routerLink]=\"node.url\"\n      class=\"cx-nav-link nav-link\"\n      id=\"{{ node.title }}\"\n      >{{ node.title }}\n    </a>\n  </ng-template>\n  <ng-container [ngSwitch]=\"dropdownMode\">\n    <ng-container *ngSwitchCase=\"'list'\">\n      <div\n        ngbDropdownMenu\n        class=\"cx-nav-child-list\"\n        [attr.aria-label]=\"node.title\"\n        role=\"list\"\n      >\n        <div\n          role=\"listitem\"\n          *ngFor=\"let subCategory of node.children\"\n          class=\"dropdown-item cx-nav-child-item\"\n        >\n          <ng-container *ngIf=\"subCategory.url\">\n            <a [routerLink]=\"subCategory.url\" class=\"cx-nav-child-link\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"!subCategory.url\">\n            <a class=\"cx-nav-child-link\">{{ subCategory.title }} </a>\n          </ng-container>\n          <a\n            [routerLink]=\"subCategoryChild.url\"\n            *ngFor=\"let subCategoryChild of subCategory.children\"\n            >{{ subCategoryChild.title }}\n          </a>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'column'\">\n      <div\n        ngbDropdownMenu\n        class=\"cx-nav-child-list-columns\"\n        [attr.aria-label]=\"node.title\"\n      >\n        <div\n          class=\"cx-nav-child-column\"\n          *ngFor=\"let subCategory of node.children\"\n        >\n          <ng-container *ngIf=\"subCategory.url\">\n            <a\n              role=\"link\"\n              [routerLink]=\"subCategory.url\"\n              class=\"cx-nav-child-link cx-nav-column-title\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"!subCategory.url\">\n            <a class=\"cx-nav-child-link cx-nav-column-title\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n\n          <div\n            *ngFor=\"let subCategoryChild of subCategory.children\"\n            class=\"dropdown-item cx-nav-child-column-item\"\n          >\n            <a\n              role=\"link\"\n              [routerLink]=\"subCategoryChild.url\"\n              class=\"cx-nav-child-link\"\n              >{{ subCategoryChild.title }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){.cx-nav-item{border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,0 0 1px);border-color:var(--cx-border-color,var(--cx-g-color-background));padding:var(--cx-padding,.5rem 0)}}.cx-nav-link{color:var(--cx-color,var(--cx-g-color-inverse));text-transform:var(--cx-text-transform,capitalize);padding:var(--cx-padding,.2rem 0)}.cx-nav-link:focus{color:var(--cx-color,var(--cx-g-color-primary))}.cx-nav-link:hover{color:var(--cx-color,var(--cx-g-color-primary));cursor:var(--cx-cursor,pointer)}@media (max-width:991.98px){.cx-nav-link{color:var(--cx-color,var(--cx-g-color-text));display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,.5rem 1rem)}.cx-nav-link::after{margin-right:20px;border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,3px);border-color:var(--cx-border-color,currentColor currentColor var(--cx-g-color-transparent) var(--cx-g-color-transparent));display:var(--cx-display,block);width:var(--cx-width,1rem);height:var(--cx-height,1rem)}.cx-nav-link[aria-expanded=false]::after{-webkit-transform:var(--cx-transform,rotate(45deg));transform:var(--cx-transform,rotate(45deg))}.cx-nav-link[aria-expanded=true]::after{-webkit-transform:var(--cx-transform,rotate(-45deg));transform:var(--cx-transform,rotate(-45deg))}.cx-nav-child-list{position:var(--cx-position,relative);background-color:var(--cx-background-color,var(--cx-g-color-background));border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);width:var(--cx-width,100%);top:var(--cx-top,0)!important}}@media (min-width:992px) and (max-width:1199.98px){.cx-nav-link{padding:var(--cx-padding,.5rem 0)}}.cx-nav-child-list{border-radius:var(--cx-border-radius,0);text-transform:var(--cx-text-transform,capitalize);padding:var(--cx-padding,0)}.cx-nav-child-item{border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,0 0 1px);border-color:var(--cx-border-color,var(--cx-g-color-background));padding:var(--cx-padding,.45rem 1rem)}.cx-nav-child-item:hover{background-color:var(--cx-background-color,var(--cx-g-color-transparent))}.cx-nav-child-item:last-child{border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0)}.cx-nav-child-link{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-text))}.cx-nav-child-link:hover{color:var(--cx-color,var(--cx-g-color-primary));-webkit-text-decoration:var(--cx-text-decoration,none);text-decoration:var(--cx-text-decoration,none)}.cx-nav-child-list-columns{border-radius:var(--cx-border-radius,0);padding:var(--cx-padding,.75rem);margin:var(--cx-margin,0)}.cx-nav-child-list-columns.show{display:var(--cx-display,flex)}.cx-nav-column-title{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);text-transform:var(--cx-text-transform,capitalize);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-bold));display:var(--cx-display,block);width:var(--cx-width,100%);padding:var(--cx-padding,.25rem 1.5rem)}.cx-nav-child-column{margin:var(--cx-margin,0)}@media (max-width:991.98px){.cx-nav-child-item{border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0)}.cx-nav-child-list-columns{flex-direction:var(--cx-flex-direction,column);position:var(--cx-position,static);width:var(--cx-width,100%);border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);margin:var(--cx-margin,0)}.cx-nav-child-column{margin:var(--cx-margin,1rem unset 0 0)}}.cx-nav-child-column-item{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);padding:var(--cx-padding,.25rem 1.5rem)}.cx-nav-child-column-item:hover{background-color:var(--cx-background-color,var(--cx-g-color-transparent))}"]
            }] }
];
NavigationUIComponent.propDecorators = {
    dropdownMode: [{ type: Input }],
    node: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationModule {
}
NavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    BootstrapModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            NavigationComponent: {
                                selector: 'cx-navigation',
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
                    I18nModule,
                ],
                declarations: [NavigationComponent, NavigationUIComponent],
                entryComponents: [NavigationComponent],
                exports: [NavigationComponent, NavigationUIComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryNavigationComponent extends NavigationComponent {
}
CategoryNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-category-navigation',
                template: "<nav *ngIf=\"(node$ | async) as node\">\n  <cx-navigation-ui\n    *ngFor=\"let child of node?.children\"\n    ngbDropdown\n    [node]=\"child\"\n    dropdownMode=\"column\"\n  ></cx-navigation-ui>\n</nav>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#fe5757}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid;vertical-align:0}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent;vertical-align:0}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#fe5757}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}nav{display:flex;justify-content:space-between;flex-wrap:wrap;padding:var(--cx-padding,1rem 0);min-height:63.38px}nav cx-navigation:not(:first-child){margin-left:10px}@media (max-width:991.98px){nav{padding:var(--cx-padding,0);flex-direction:column;background-color:var(--cx-background-color,var(--cx-g-color-inverse))}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryNavigationModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterNavigationComponent extends NavigationComponent {
}
FooterNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-footer-navigation',
                template: "<nav *ngIf=\"(node$ | async) as node\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-xs-12 col-sm-4 col-md-3 navigation-elements\"\n        *ngFor=\"let child of node?.children\"\n      >\n        <h1>{{ child.title }}</h1>\n        <ul>\n          <li *ngFor=\"let link of child.children\">\n            <cx-generic-link\n              [url]=\"link.url\"\n              [target]=\"link.target === true ? 'blank' : 'self'\"\n              >{{ link.title }}</cx-generic-link\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"notice\" *ngIf=\"(service.getComponentData() | async) as data\">\n  {{ data.notice }}\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/nav{padding:var(--cx-padding,34px 0 0)}@media (min-width:768px){nav{margin:var(--cx-margin,0 0 47px)}}nav h1{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0 0 12px);text-transform:var(--cx-text-transform,capitalize)}nav ul{padding:var(--cx-padding,0)}@media (max-width:575.98px){nav h1{text-align:var(--cx-text-align,center)}nav ul{text-align:var(--cx-text-align,center);padding:var(--cx-padding,0 0 24px)}}nav li{padding-left:0;list-style:none}nav a{padding:var(--cx-padding,0);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}nav a:hover{-webkit-text-decoration:var(--cx-text-decoration,none);text-decoration:var(--cx-text-decoration,none)}.notice{padding:var(--cx-padding,32px 0);text-align:var(--cx-text-align,center);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6);color:var(--cx-color,var(--cx-g-color-dark));background-color:var(--cx-background-color,var(--cx-g-color-inverse))}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterNavigationModule {
}
FooterNavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            FooterNavigationComponent: {
                                selector: 'cx-footer-navigation',
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
                    GenericLinkModule,
                ],
                declarations: [FooterNavigationComponent],
                entryComponents: [FooterNavigationComponent],
                exports: [FooterNavigationComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkComponent {
    /**
     * @param {?} component
     */
    constructor(component) {
        this.component = component;
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-link',
                template: "<a\n  *ngIf=\"(component.data$ | async) as data\"\n  role=\"link\"\n  [routerLink]=\"data.url\"\n  >{{ data.linkName }}</a\n>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["a{display:var(--cx-display,inline);padding:var(--cx-padding,0);margin:var(--cx-margin,0);color:currentColor;display:var(--cx-display)}"]
            }] }
];
/** @nocollapse */
LinkComponent.ctorParameters = () => [
    { type: CmsComponentData }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkModule {
}
LinkModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSLinkComponent: { selector: 'cx-link' },
                        },
                    }))),
                ],
                declarations: [LinkComponent],
                exports: [LinkComponent],
                entryComponents: [LinkComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MiniCartComponent {
    /**
     * @param {?} component
     * @param {?} cartService
     */
    constructor(component, cartService) {
        this.component = component;
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
}
MiniCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-mini-cart',
                template: "<a\n  *ngIf=\"(cart$ | async) as cart\"\n  aria-label=\"Cart\"\n  [routerLink]=\"{ route: ['cart'] } | cxTranslateUrl\"\n>\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 35 28\">\n    <g transform=\"translate(-4758 4746)\">\n      <path\n        d=\"M4758.7-4746h4.7c0.3,0.1,0.6,0.3,0.7,0.5l1.7,7.5h23.6c0.4,0,0.7,0.4,0.7,0.8c0,0.1,0,0.1,0,0.2l-4,12\n c-0.1,0.2-0.4,0.4-0.7,0.4h-16.4l0.3,1.3h14.1c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7l0,0c-1.5,0-2.6-1.2-2.6-2.6\n c0-0.5,0.1-1,0.4-1.4h-10.1c0.8,1.2,0.4,2.9-0.9,3.6c-0.4,0.3-0.9,0.4-1.4,0.4c-1.5,0-2.7-1.2-2.7-2.7c0-1.2,0.8-2.2,1.9-2.5\n l-5.1-21.4h-4.1c-0.3,0-0.6-0.2-0.7-0.6c0,0,0-0.1,0-0.1C4758-4745.7,4758.2-4746,4758.7-4746C4758.6-4746,4758.6-4746,4758.7-4746\n z\"\n      />\n    </g>\n  </svg>\n\n  <span\n    class=\"count\"\n    *ngIf=\"cart.deliveryItemsQuantity || '0' as qty\"\n    [attr.aria-label]=\"'My cart. ' + qty + ' items currently in your cart.'\"\n    >{{ qty }}</span\n  >\n</a>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{margin-left:.75rem;display:block}a{display:flex;background:var(--cx-background,var(--cx-g-color-primary));padding:var(--cx-padding,0 .5rem);color:var(--cx-color,var(--cx-g-color-inverse));text-decoration:none}a svg{fill:currentColor;width:30px;height:30px;margin:9px 0}a span{color:currentColor;-ms-grid-row-align:center;align-self:center;padding:var(--cx-padding,0 .5rem)}@media (max-width:1199.98px){a{margin-right:.5rem}}@media (max-width:575.98px){a{margin-right:0;min-height:55px;flex-direction:column;padding:var(--cx-padding,.3rem .75rem)}a svg{margin:0;height:24px}}"]
            }] }
];
/** @nocollapse */
MiniCartComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CartService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MiniCartModule {
}
MiniCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    BannerModule,
                    MediaModule,
                    CartModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MiniCartComponent: { selector: 'cx-mini-cart' },
                        },
                    }))),
                    UrlTranslationModule,
                ],
                declarations: [MiniCartComponent],
                entryComponents: [MiniCartComponent],
                exports: [MiniCartComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParagraphComponent {
    /**
     * @param {?} component
     */
    constructor(component) {
        this.component = component;
    }
}
ParagraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-paragraph',
                template: "<p *ngIf=\"(component.data$ | async) as data\" [innerHTML]=\"data.content\"></p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
ParagraphComponent.ctorParameters = () => [
    { type: CmsComponentData }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsParagraphModule {
}
CmsParagraphModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSParagraphComponent: { selector: 'cx-paragraph' },
                        },
                    }))),
                ],
                declarations: [ParagraphComponent],
                exports: [ParagraphComponent],
                entryComponents: [ParagraphComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductCarouselService {
    /**
     * @param {?} component
     * @param {?} productService
     */
    constructor(component, productService) {
        this.component = component;
        this.productService = productService;
        this.MAX_WIDTH = 360;
        this.MAX_ITEM_SIZE = 4;
        this.SPEED = 250;
        this.itemSize$ = of(this.MAX_ITEM_SIZE);
        this.activeItem$ = of(0);
        this.activeItemWithDelay$ = of(0);
    }
    /**
     * @return {?}
     */
    getActiveItem() {
        return this.activeItem$;
    }
    /**
     * @return {?}
     */
    getActiveItemWithDelay() {
        return this.activeItemWithDelay$;
    }
    /**
     * @return {?}
     */
    getTitle() {
        return this.title$;
    }
    /**
     * @return {?}
     */
    setTitle() {
        this.title$ = this.component.data$.pipe(map(data => {
            return data.title;
        }));
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.items$;
    }
    /**
     * @return {?}
     */
    getItemSize() {
        return this.itemSize$;
    }
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     * @return {?}
     */
    setItems() {
        this.items$ = this.component.data$.pipe(map(data => {
            /** @type {?} */
            const productCodes = data.productCodes.split(' ');
            return productCodes.map(code => this.productService.get(code));
        }));
    }
    /**
     * The number of items shown in the carousel can be calculated
     * the standard implemenattions uses the element size to calculate
     * the items that fit in the carousel.
     * This method is called in `ngOnInit`.
     * @param {?} window
     * @param {?} nativeElement
     * @return {?}
     */
    setItemSize(window, nativeElement) {
        this.itemSize$ = !window
            ? of(this.MAX_ITEM_SIZE)
            : fromEvent(window, 'resize').pipe(map(() => ((/** @type {?} */ (nativeElement))).clientWidth), startWith(((/** @type {?} */ (nativeElement))).clientWidth), 
            // avoid to much calls
            debounceTime(100), map((innerWidth) => {
                /** @type {?} */
                const itemsPerPage = Math.round(innerWidth / this.MAX_WIDTH);
                return itemsPerPage > 2 ? this.MAX_ITEM_SIZE : itemsPerPage;
            }), 
            // only emit new size when the size changed
            distinctUntilChanged());
    }
    /**
     * @param {?} newActiveItem
     * @return {?}
     */
    setItemAsActive(newActiveItem) {
        this.activeItem$ = this.itemSize$.pipe(map(itemSize => this.setItem(newActiveItem, itemSize)));
    }
    /**
     * @return {?}
     */
    setPreviousItemAsActive() {
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map(([activeItem, itemSize]) => this.setItem(activeItem - itemSize, itemSize)));
    }
    /**
     * @return {?}
     */
    setNextItemAsActive() {
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map(([activeItem, itemSize]) => this.setItem(activeItem + itemSize, itemSize)));
    }
    /**
     * @private
     * @param {?} newActiveItem
     * @param {?} itemSize
     * @return {?}
     */
    setItem(newActiveItem, itemSize) {
        this.activeItemWithDelay$ = of(newActiveItem).pipe(delay(this.getDelayValue(itemSize)));
        return newActiveItem;
    }
    /**
     * @private
     * @param {?} itemSize
     * @return {?}
     */
    getDelayValue(itemSize) {
        return (itemSize - 1) * this.SPEED;
    }
}
ProductCarouselService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductCarouselService.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductCarouselComponent {
    /**
     * @param {?} winRef
     * @param {?} el
     * @param {?} service
     */
    constructor(winRef, el, service) {
        this.el = el;
        this.service = service;
        this.window = winRef.nativeWindow;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.service.setTitle();
        this.service.setItemSize(this.window, this.el.nativeElement);
        this.service.setItems();
        this.service.setItemAsActive(0);
    }
}
ProductCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-carousel',
                template: "<h3 *ngIf=\"(service.getTitle() | async) as title\">{{ title }}</h3>\n\n<ng-container\n  *ngIf=\"{\n    maxItemSize: service.getItemSize() | async,\n    products: service.getItems() | async,\n    activeItem: service.getActiveItemWithDelay() | async,\n    active: service.getActiveItem() | async\n  } as carousel\"\n>\n  <div class=\"cx-carousel\" [ngClass]=\"'size-' + carousel.maxItemSize\">\n    <button\n      class=\"previous\"\n      (click)=\"service.setPreviousItemAsActive()\"\n      [disabled]=\"carousel.activeItem === 0\"\n    ></button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n        <div class=\"group\" *ngIf=\"i % carousel.maxItemSize === 0\">\n          <ng-container\n            *ngFor=\"\n              let product$ of (carousel.products\n                | slice: i:i + carousel.maxItemSize)\n            \"\n          >\n            <a\n              *ngIf=\"(product$ | async) as product\"\n              class=\"product\"\n              [class.active]=\"i === carousel.activeItem\"\n              [routerLink]=\"\n                { route: [{ name: 'product', params: product }] }\n                  | cxTranslateUrl\n              \"\n            >\n              <cx-picture\n                [imageContainer]=\"product.images?.PRIMARY\"\n                imageFormat=\"product\"\n              >\n              </cx-picture>\n\n              <h4>{{ product.name }}</h4>\n              <div class=\"price\">{{ product.price?.formattedValue }}</div>\n            </a>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      class=\"next\"\n      (click)=\"service.setNextItemAsActive()\"\n      [disabled]=\"\n        carousel.activeItem > carousel.products.length - carousel.maxItemSize\n      \"\n    ></button>\n  </div>\n\n  <div class=\"indicators\">\n    <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n      <button\n        *ngIf=\"i % carousel.maxItemSize === 0\"\n        (click)=\"service.setItemAsActive(i)\"\n        [disabled]=\"i === carousel.activeItem\"\n      ></button>\n    </ng-container></div\n></ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{flex:100%;--cx-speed:0.5;display:flex;flex-direction:column}@media (max-width:991.98px){:host{padding:1rem}}:host>h3{font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);font-weight:700;text-align:center;margin-top:2rem;margin-bottom:1rem}@media (min-width:1200px){:host>h3{margin-bottom:3rem}}.cx-carousel{display:flex;justify-content:space-between}.cx-carousel.size-1 .product{flex:0 0 100%}.cx-carousel.size-2 .product{flex:0 0 50%}.cx-carousel.size-4 .product{flex:0 0 25%}.cx-carousel .groups{flex:auto;position:relative}.cx-carousel .groups .group{transition:var(--cx-transition-duration,.6s) all;width:100%;display:flex;flex-wrap:nowrap;justify-content:flex-start}.cx-carousel .groups .group:not(:last-child){position:absolute}.cx-carousel .groups .group .product{display:flex;flex-direction:column;text-align:center;justify-content:space-between;padding-bottom:10px;color:var(--cx-color,var(--cx-g-color-text));opacity:0;z-index:-1;transition:var(--cx-transition-duration,.6s) all}.cx-carousel .groups .group .product cx-picture{height:var(--cx-height,20vmin)}.cx-carousel .groups .group .product.active{opacity:1;z-index:1}.cx-carousel .groups .group .product:nth-child(1){transition-delay:calc(var(--cx-speed,1) * .25s)}.cx-carousel .groups .group .product:nth-child(2){transition-delay:calc(var(--cx-speed,1) * .5s)}.cx-carousel .groups .group .product:nth-child(3){transition-delay:calc(var(--cx-speed,1) * .75s)}.cx-carousel .groups .group .product:nth-child(4){transition-delay:calc(var(--cx-speed,1) * 1s)}.cx-carousel .groups .group .product h4{font-size:.9rem;height:30px;font-weight:700;margin-top:5px}.cx-carousel .groups .group .product:hover{text-decoration:none}.cx-carousel .groups .group .product:hover h4{color:var(--cx-color,var(--cx-g-color-primary))}button{color:var(--cx-g-color-light)}button:focus{outline:0}button:not(:disabled){cursor:pointer}.indicators{display:flex;justify-content:center}.indicators button{border-radius:15px;width:15px;height:15px;border:none;padding:0;margin:10px;background-color:currentColor;transition:var(--cx-transition-duration,.6s) all}.indicators button[disabled]{color:var(--cx-background-color,var(--cx-g-color-primary))}.indicators button:not(:disabled):hover{color:var(--cx-g-color-secondary)}@media (max-width:575.98px){.indicators{display:none}}.next,.previous{background-color:transparent;border:none}.next:disabled,.previous:disabled{opacity:.5}.next:not(:disabled):hover,.previous:not(:disabled):hover{color:var(--cx-color,var(--cx-g-color-primary))}.next:after,.previous:after{content:'';border-style:solid;border-color:currentColor;border-width:var(--cx-border-width,4px);width:15px;height:15px;display:block;border-top:0}.previous:after{border-right:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.next:after{border-left:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}"]
            }] }
];
/** @nocollapse */
ProductCarouselComponent.ctorParameters = () => [
    { type: WindowRef },
    { type: ElementRef },
    { type: ProductCarouselService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductCarouselModule {
}
ProductCarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MediaModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductCarouselComponent: {
                                selector: 'cx-product-carousel',
                                providers: [
                                    {
                                        provide: ProductCarouselService,
                                        useClass: ProductCarouselService,
                                        deps: [CmsComponentData, ProductService],
                                    },
                                ],
                            },
                        },
                    }))),
                    UrlTranslationModule,
                ],
                declarations: [ProductCarouselComponent],
                entryComponents: [ProductCarouselComponent],
                exports: [ProductCarouselComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchBoxComponentService {
    /**
     * @param {?} componentData
     * @param {?} searchService
     * @param {?} routingService
     */
    constructor(componentData, searchService, routingService) {
        this.componentData = componentData;
        this.searchService = searchService;
        this.routingService = routingService;
        this.defaultConfig = {
            maxProducts: 2,
            displaySuggestions: true,
            maxSuggestions: 5,
            minCharactersBeforeRequest: 3,
            displayProducts: false,
        };
        this.config$ = of(this.defaultConfig);
        this.queryParam$ = this.routingService
            .getRouterState()
            .pipe(map(routingData => routingData.state.params.query));
        this.typeahead = (text$) => combineLatest(text$.pipe(debounceTime(300), distinctUntilChanged()), this.config$).pipe(switchMap(([term, config]) => {
            if (term.length >= config.minCharactersBeforeRequest) {
                return this.fetch(term, config);
            }
            else {
                return of([]);
            }
        }));
        if (componentData) {
            this.config$ = merge(this.config$, this.componentData.data$.pipe(map(config => (Object.assign({}, this.defaultConfig, config)))));
        }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    launchSearchPage(query) {
        this.routingService.go({
            route: [{ name: 'search', params: { query } }],
        });
    }
    /**
     * @private
     * @param {?} text
     * @param {?} config
     * @return {?}
     */
    fetch(text, config) {
        this.executeSearch(text, config);
        /** @type {?} */
        const suggestions = this.searchService
            .getSearchSuggestions()
            .pipe(map(res => res.map(suggestion => suggestion.value)));
        /** @type {?} */
        const products = this.searchService
            .getAuxSearchResults()
            .pipe(map(res => res.products || []));
        return combineLatest(suggestions, products).pipe(map(([a, b]) => [...a, ...b]));
    }
    /**
     * @private
     * @param {?} search
     * @param {?} config
     * @return {?}
     */
    executeSearch(search, config) {
        if (config.displayProducts) {
            this.searchService.searchAuxiliary(search, {
                pageSize: config.maxProducts,
            });
        }
        if (config.displaySuggestions) {
            this.searchService.getSuggestions(search, {
                pageSize: config.maxSuggestions,
            });
        }
    }
}
SearchBoxComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchBoxComponentService.ctorParameters = () => [
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: ProductSearchService },
    { type: RoutingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchBoxComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.searchBoxControl = new FormControl();
        this.queryText$ = new Subject();
        this.typeahead = (text$) => this.service.typeahead(merge(text$, this.queryText$));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set queryText(value) {
        this.queryText$.next(value);
        this.searchBoxControl.setValue(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.service.queryParam$.pipe(take(1)).subscribe(query => {
            if (query) {
                this.searchBoxControl.setValue(query);
            }
        });
    }
    /**
     * @return {?}
     */
    submitSearch() {
        this.service.launchSearchPage(this.searchBoxControl.value);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectSuggestion(item) {
        if (typeof item.item === 'string') {
            this.searchBoxControl.setValue(item.item);
            this.submitSearch();
        }
        else {
            item.preventDefault();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (event.key === 'Enter') {
            this.service.launchSearchPage(this.searchBoxControl.value);
        }
    }
    /**
     * @return {?}
     */
    toggleMobileSearchInput() {
        this.isMobileSearchVisible = !this.isMobileSearchVisible;
    }
}
SearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-searchbox',
                template: "<form class=\"cx-form\">\n  <div class=\"cx-form-group form-group\">\n    <!-- searchbox input -->\n    <input\n      class=\"cx-input form-control dropdown-menu-toggle\"\n      [ngClass]=\"{ 'show-mobile': isMobileSearchVisible }\"\n      type=\"text\"\n      placeholder=\"{{ 'common.placeholder.searchHere' | cxTranslate }}\"\n      aria-label=\"search\"\n      [ngbTypeahead]=\"typeahead\"\n      [resultTemplate]=\"rt\"\n      [formControl]=\"searchBoxControl\"\n      (keyup)=\"onKey($event)\"\n      (selectItem)=\"selectSuggestion($event)\"\n    />\n    <!-- searchbox button desktop -->\n    <button\n      class=\"cx-button cx-button-desktop\"\n      type=\"submit\"\n      aria-label=\"Submit \"\n      (click)=\"submitSearch()\"\n      [disabled]=\"!searchBoxControl?.value\"\n    >\n      <svg\n        class=\"cx-icon \"\n        xmlns=\"http://www.w3.org/2000/svg \"\n        viewBox=\"-4472 4760 26 26 \"\n      >\n        <path\n          id=\"Trac\u00E9_982 \"\n          data-name=\"Trac\u00E9 982 \"\n          d=\"M9.75,19.5a9.241,9.241,0,0,0,6.067-2.167l8.342,8.342a1.072,1.072,0,0,0,1.517-1.517l-8.342-8.342A9.854,9.854,0,0,0,19.5,9.75,9.75,9.75,0,1,0,9.75,19.5Zm0-17.333A7.583,7.583,0,1,1,2.167,9.75,7.537,7.537,0,0,1,9.75,2.167Z \"\n          transform=\"translate(-4472 4760) \"\n        />\n      </svg>\n    </button>\n    <!-- searchbox button mobile -->\n    <button\n      class=\"cx-button cx-button-mobile\"\n      type=\"button\"\n      aria-label=\"Search \"\n      (click)=\"toggleMobileSearchInput()\"\n    >\n      <svg\n        class=\"cx-icon \"\n        xmlns=\"http://www.w3.org/2000/svg \"\n        viewBox=\"-4472 4760 26 26 \"\n      >\n        <path\n          id=\"Trac\u00E9_982 \"\n          data-name=\"Trac\u00E9 982 \"\n          d=\"M9.75,19.5a9.241,9.241,0,0,0,6.067-2.167l8.342,8.342a1.072,1.072,0,0,0,1.517-1.517l-8.342-8.342A9.854,9.854,0,0,0,19.5,9.75,9.75,9.75,0,1,0,9.75,19.5Zm0-17.333A7.583,7.583,0,1,1,2.167,9.75,7.537,7.537,0,0,1,9.75,2.167Z \"\n          transform=\"translate(-4472 4760) \"\n        />\n      </svg>\n    </button>\n    <!-- searchbox results -->\n    <ng-template #rt let-suggestion=\"result\">\n      <div\n        *ngIf=\"!suggestion.code; else productView\"\n        class=\"cx-dropdown-content\"\n      >\n        {{ suggestion }}\n      </div>\n      <ng-template #productView>\n        <div\n          [routerLink]=\"\n            {\n              route: [\n                {\n                  name: 'product',\n                  params: suggestion | stripHtml\n                }\n              ]\n            } | cxTranslateUrl\n          \"\n          class=\"cx-product\"\n        >\n          <cx-picture\n            [imageContainer]=\"suggestion.images?.PRIMARY\"\n            imageFormat=\"product\"\n            [imageAlt]=\"suggestion.summary\"\n          ></cx-picture>\n          <div [innerHtml]=\"suggestion.name\" class=\"cx-product-name\">\n            {{ suggestion.name }}\n          </div>\n          <div class=\"cx-product-price\">\n            {{ suggestion.price.formattedValue }}\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n  </div>\n</form>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:var(--cx-display,block)}@media (max-width:575.98px){:host{margin:var(--cx-margin,0)}}.cx-form-group{background-color:var(--cx-background-color,var(--cx-g-color-secondary));padding:var(--cx-padding,0);display:var(--cx-display,flex);margin:var(--cx-margin,auto)}.cx-form{display:var(--cx-display,inline-block);vertical-align:var(--cx-vertical-align,middle)}.cx-input{background-color:var(--cx-background-color,var(--cx-g-color-transparent));color:var(--cx-color,var(--cx-g-color-inverse));border-radius:var(--cx-border-radius,0);border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);margin:var(--cx-margin,0);z-index:var(--cx-z-index,1)}.cx-input::-webkit-input-placeholder{color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input::-moz-placeholder{color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input:-moz-placeholder{color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input:-ms-input-placeholder{color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input[aria-label=search]{width:var(--cx-width,22rem)}.cx-input[aria-label=search]:focus{background-color:var(--cx-background-color,var(--cx-g-color-transparent));color:var(--cx-color,var(--cx-g-color-inverse));box-shadow:var(--cx-box-shadow,none)}@media (max-width:1199.98px){.cx-input[aria-label=search]{width:var(--cx-width,18rem)}}@media (max-width:991.98px){.cx-input[aria-label=search]{width:var(--cx-width,16rem)}}@media (max-width:767.98px){.cx-input[aria-label=search]{width:var(--cx-width,7rem)}}@media (max-width:575.98px){.cx-form-group{background-color:var(--cx-background-color,var(--cx-g-color-transparent))}.cx-input[aria-label=search]{background-color:var(--cx-background-color,var(--cx-g-color-secondary));color:var(--cx-color,var(--cx-g-color-inverse));display:var(--cx-display,none);position:var(--cx-position,absolute);left:var(--cx-left,0);top:var(--cx-top,56px);width:var(--cx-width,100%)}.cx-input[aria-label=search]:focus{background-color:var(--cx-background-color,var(--cx-g-color-secondary));color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input[aria-label=search]+.dropdown-menu{width:var(--cx-width,100%);border-radius:var(--cx-border-radius,0);border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);margin:var(--cx-margin,0)}.cx-button-desktop{display:var(--cx-display,none)}}.cx-input.show-mobile{display:var(--cx-display,block)}.cx-button{border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);padding:var(--cx-padding,5px);margin:var(--cx-margin,5px);background-color:var(--cx-background-color,var(--cx-g-color-transparent))}.cx-button-mobile{display:var(--cx-display,none)}.cx-icon{width:var(--cx-width,28px);height:var(--cx-height,28px);fill:var(--cx-fill,var(--cx-g-color-inverse));pointer-events:var(--cx-pointer-events,none)}.cx-dropdown-content{width:var(--cx-width,22rem)}@media (max-width:1199.98px){.cx-dropdown-content{width:var(--cx-width,18rem)}}@media (max-width:991.98px){.cx-dropdown-content{width:var(--cx-width,16rem)}}@media (max-width:767.98px){.cx-dropdown-content{width:var(--cx-width,7rem)}}@media (max-width:575.98px){.cx-button-mobile{display:var(--cx-display,block)}.cx-dropdown-content{width:var(--cx-width,auto)}}.cx-product{display:var(--cx-display,flex)}.cx-product cx-picture{min-width:var(--cx-min-width,80px);width:var(--cx-width,80px);flex-shrink:var(--cx-flex-shrink,0)}.cx-product-name{padding:var(--cx-padding,0 15px);flex-grow:var(--cx-flex-grow,1);flex-shrink:var(--cx-flex-shrink,1);height:var(--cx-height,80px);display:var(--cx-display,flex);align-items:var(--cx-align-items,center);overflow:var(--cx-overflow,hidden)}.cx-product-price{text-align:var(--cx-text-align,right);-ms-grid-row-align:var(--cx-align-self,center);align-self:var(--cx-align-self,center);flex-shrink:var(--cx-flex-shrink,0)}.dropdown-menu .dropdown-item.active{background-color:var(--cx-background-color,var(--cx-g-color-primary))}"]
            }] }
];
/** @nocollapse */
SearchBoxComponent.ctorParameters = () => [
    { type: SearchBoxComponentService }
];
SearchBoxComponent.propDecorators = {
    queryText: [{ type: Input, args: ['queryText',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchBoxModule {
}
SearchBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BootstrapModule,
                    FormsModule,
                    RouterModule,
                    ReactiveFormsModule,
                    MediaModule,
                    ProductModule,
                    StripHtmlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            SearchBoxComponent: {
                                selector: 'cx-searchbox',
                                providers: [
                                    {
                                        provide: SearchBoxComponentService,
                                        useClass: SearchBoxComponentService,
                                        deps: [CmsComponentData, ProductSearchService, RoutingService],
                                    },
                                ],
                            },
                        },
                    }))),
                    UrlTranslationModule,
                    I18nModule,
                ],
                declarations: [SearchBoxComponent],
                entryComponents: [SearchBoxComponent],
                exports: [SearchBoxComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LABELS = {
    [LANGUAGE_CONTEXT_ID]: 'Language',
    [CURRENCY_CONTEXT_ID]: 'Currency',
};
class SiteContextComponentService {
    /**
     * @param {?} componentData
     * @param {?} contextServiceMap
     * @param {?} injector
     */
    constructor(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get items$() {
        return this.service$.pipe(switchMap((service) => service.getAll()), switchMap(items => this.context$.pipe(switchMap(context => {
            items.forEach(item => {
                return (item.label = this.getOptionLabel(item, context));
            });
            return of(items);
        }))));
    }
    /**
     * @return {?}
     */
    get activeItem$() {
        return this.service$.pipe(switchMap((service) => service.getActive()));
    }
    /**
     * @return {?}
     */
    get label$() {
        return this.componentData.data$.pipe(map(data => {
            return LABELS[data.context];
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        this.service$.pipe(take(1)).subscribe(service => {
            service.setActive(value);
        });
    }
    /**
     * @protected
     * @return {?}
     */
    get service$() {
        return this.context$.pipe(map(context => this.getService(context)), filter(Boolean));
    }
    /**
     * @protected
     * @return {?}
     */
    get context$() {
        return this.componentData.data$.pipe(map(data => data.context));
    }
    /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    getService(context) {
        return this.injector.get(this.contextServiceMap[context], null);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?=} context
     * @return {?}
     */
    getOptionLabel(item, context) {
        switch (context) {
            case LANGUAGE_CONTEXT_ID:
                return item.nativeName;
                break;
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
                break;
            default:
                return item.isocode;
        }
    }
}
SiteContextComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextComponentService.ctorParameters = () => [
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: ContextServiceMap },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextSelectorComponent {
    /**
     * @param {?} componentService
     */
    constructor(componentService) {
        this.componentService = componentService;
    }
    /**
     * @return {?}
     */
    get items$() {
        return this.componentService.items$;
    }
    /**
     * @return {?}
     */
    get activeItem$() {
        return this.componentService.activeItem$;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        this.componentService.active = value;
    }
    /**
     * @return {?}
     */
    get label$() {
        return this.componentService.label$;
    }
}
SiteContextSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-site-context-selector',
                template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    >\n  </select>\n</label>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{position:relative;margin:var(--cx-margin,8px)}@media (max-width:991.98px){:host{display:inline-block}:host:first-child{margin-left:0}:host:not(:first-child){padding-left:16px;border-left:1px solid var(--cx-border-color,var(--cx-g-color-secondary))}}label{display:inline}label span{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}label::after{content:'';border:2px solid currentColor;border-top:0;border-left:0;width:7px;height:7px;right:3.5px;top:3.5px;position:absolute;display:block;z-index:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}select{color:inherit;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:14px;outline:0;position:relative;z-index:1}"]
            }] }
];
/** @nocollapse */
SiteContextSelectorComponent.ctorParameters = () => [
    { type: SiteContextComponentService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextSelectorModule {
}
SiteContextSelectorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSSiteContextComponent: {
                                selector: 'cx-site-context-selector',
                                providers: [
                                    {
                                        provide: SiteContextComponentService,
                                        useClass: SiteContextComponentService,
                                        deps: [CmsComponentData, ContextServiceMap, Injector],
                                    },
                                ],
                            },
                        },
                    }))),
                    UrlTranslationModule,
                    SiteContextModule.forRoot(),
                ],
                providers: [SiteContextComponentService],
                declarations: [SiteContextSelectorComponent],
                exports: [SiteContextSelectorComponent],
                entryComponents: [SiteContextSelectorComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { ProductReferencesModule } from './product-references/product-references.module';
// import { TabParagraphContainerModule } from './tab-paragraph-container/tab-paragraph-container.module';
class CmsLibModule {
}
CmsLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CmsParagraphModule,
                    LinkModule,
                    BannerModule,
                    CategoryNavigationModule,
                    NavigationModule,
                    FooterNavigationModule,
                    BreadcrumbModule,
                    ProductCarouselModule,
                    SearchBoxModule,
                    MiniCartModule,
                    // ProductReferencesModule,
                    // TabParagraphContainerModule
                    SiteContextSelectorModule,
                    AddressBookModule,
                    OrderHistoryModule,
                    ProductListModule,
                    ProductTabsModule,
                    CartDetailsModule,
                    CartTotalsModule,
                    OrderDetailsModule,
                    PaymentMethodsModule,
                    UpdatePasswordModule,
                    UpdateProfileModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { AbstractProductComponent } from '../abstract-product-component';
class TabParagraphContainerComponent {
}
TabParagraphContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-tab-paragraph-container',
                template: "<!--\n  <p #tabContent [innerHTML]=\"model?.content\">\n  </p>\n-->\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { AbstractProductComponent } from '../abstract-product-component';
class ProductReferencesComponent {
} /*extends AbstractProductComponent {

    @Input() productCode;

    productCodes: Array<String> = [];

    protected fetchData() {
        // load the product data by context parameters
        if (this.contextParameters.productCode) {
            this.productLoader.loadReferences(this.contextParameters.productCode);
            this.productLoader.getSubscription(this.contextParameters.productCode + 'references').subscribe((refData) => {
                if (refData) {
                    this.createCodeList(refData);
                    this.cd.detectChanges();
                }
            });
        }
        super.fetchData();
    }

    createCodeList(references) {
        if (!this.component || !this.component.productReferenceTypes || !references[this.component.productReferenceTypes]) {
            return;
        }
        references[this.component.productReferenceTypes].forEach((item, index) => {
            if (!this.component.maximumNumberProducts || index < this.component.maximumNumberProducts) {
                this.productCodes.push(item.target.code);
            }
        });
    }
}*/
ProductReferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-references',
                template: "",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabParagraphContainerModule {
}
TabParagraphContainerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSTabParagraphComponent: { selector: 'cx-tab-paragraph-container' },
                        },
                    }))),
                ],
                declarations: [TabParagraphContainerComponent],
                entryComponents: [TabParagraphContainerComponent],
                exports: [TabParagraphContainerComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReferencesModule {
}
ProductReferencesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    // MediaModule,
                    ProductCarouselModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductReferencesComponent: { selector: 'cx-product-references' },
                        },
                    }))),
                ],
                declarations: [ProductReferencesComponent],
                entryComponents: [ProductReferencesComponent],
                exports: [ProductReferencesComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageComponent {
    /**
     * @param {?} globalMessageService
     */
    constructor(globalMessageService) {
        this.globalMessageService = globalMessageService;
        this.messageType = GlobalMessageType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.messages$ = this.globalMessageService.get();
    }
    /**
     * @param {?} type
     * @param {?} index
     * @return {?}
     */
    clear(type, index) {
        this.globalMessageService.remove(type, index);
    }
}
GlobalMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-global-message',
                template: "<div *ngIf=\"(messages$ | async) as messages\">\n  <div\n    class=\"alert alert-info\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ confMsg }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ infoMsg }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ errorMsg }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
GlobalMessageComponent.ctorParameters = () => [
    { type: GlobalMessageService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageComponentModule {
}
GlobalMessageComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, GlobalMessageModule.forRoot()],
                declarations: [GlobalMessageComponent],
                exports: [GlobalMessageComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderModule {
}
OrderModule.decorators = [
    { type: NgModule, args: [{
                imports: [OrderHistoryModule, OrderDetailsModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccModule {
}
OccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    OccUserService,
                    OccMiscsService,
                    OccOrderService,
                    { provide: OccConfig, useExisting: Config },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductModule$1 {
}
ProductModule$1.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, MediaModule, CmsModule$1],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductDetailsComponent {
    /**
     * @param {?} currentPageService
     */
    constructor(currentPageService) {
        this.currentPageService = currentPageService;
        this.openReview = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get outlets() {
        return ProductDetailsComponent.outlets;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.product$ = this.currentPageService.getProduct();
    }
    /**
     * @return {?}
     */
    launchReview() {
        this.openReview.emit();
    }
}
ProductDetailsComponent.outlets = ProductDetailOutlets;
ProductDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-details',
                template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.PAGE\">\n    <ng-container *cxOutlet=\"outlets.SUMMARY\">\n      <cx-product-summary\n        class=\"container\"\n        [product]=\"product\"\n        (openReview)=\"launchReview()\"\n      >\n        <cx-product-images [product]=\"product\"></cx-product-images>\n      </cx-product-summary>\n    </ng-container> </ng-container\n></ng-container>\n",
                styles: ["cx-product-summary{margin-bottom:var(--cx-margin-bottom,40px)}"]
            }] }
];
/** @nocollapse */
ProductDetailsComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductDetailsComponent.propDecorators = {
    openReview: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductSummaryComponent {
    constructor() {
        this.itemCount = 1;
        this.openReview = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get outlets() {
        return ProductSummaryComponent.outlets;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateCount(value) {
        this.itemCount = value;
    }
    /**
     * @return {?}
     */
    get stockInfo() {
        return this.hasStock()
            ? `${this.product.stock.stockLevel} in stock`
            : 'Out of stock';
    }
    /**
     * @private
     * @return {?}
     */
    hasStock() {
        return (this.product &&
            this.product.stock &&
            (this.product.stock.stockLevel > 0 ||
                this.product.stock.stockLevelStatus === 'inStock'));
    }
    /**
     * @return {?}
     */
    launchReview() {
        this.openReview.emit();
    }
}
ProductSummaryComponent.outlets = ProductDetailOutlets;
ProductSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-summary',
                template: "<ng-container *cxOutlet=\"outlets.TITLE\">\n  <div class=\"name\">{{ product?.name }}</div>\n  <div class=\"code\">\n    {{ 'productDetails.label.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n\n<div class=\"images\"><ng-content></ng-content></div>\n\n<ng-container *cxOutlet=\"outlets.RATING\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a class=\"btn-link\" (click)=\"launchReview()\">{{\n      'productDetails.action.showReviews' | cxTranslate\n    }}</a>\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.PRICE\">\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-container>\n\n<div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n\n<ng-container *cxOutlet=\"outlets.ADDTOCART\">\n  <div class=\"quantity\">\n    <label>{{ 'productDetails.label.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      isValueChangeable=\"true\"\n      [min]=\"1\"\n      [max]=\"product.stock?.stockLevel || 1000\"\n      *ngIf=\"\n        product?.stock?.stockLevel > 0 ||\n        product?.stock?.stockLevelStatus === 'inStock'\n      \"\n      (update)=\"updateCount($event)\"\n    ></cx-item-counter>\n    <span class=\"info\">{{ stockInfo }}</span>\n  </div>\n  <cx-add-to-cart\n    *ngIf=\"product?.stock?.stockLevelStatus !== 'outOfStock'\"\n    [quantity]=\"itemCount\"\n    [productCode]=\"product?.code\"\n    [maxQuantity]=\"product.stock.stockLevel\"\n  ></cx-add-to-cart>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.SHARE\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productDetails.action.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:-ms-grid;display:grid;grid-column-gap:var(--cx-grid-column-gap,30px)}@media (min-width:992px){:host{-ms-grid-columns:var(--cx-grid-template-columns,50% auto);grid-template-columns:var(--cx-grid-template-columns,50% auto);-ms-grid-rows:var(--cx-grid-template-row,repeat(7,auto) 1fr);grid-template-rows:var(--cx-grid-template-row,repeat(7,auto) 1fr)}.images{grid-column:var(--cx-grid-column,1);grid-row:var(--cx-grid-row,1/span 8)}}.name{font-size:var(--cx-font-size,2.25rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222)}.code{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-secondary))}.rating{display:flex;flex-direction:row;align-items:baseline;margin:var(--cx-margin,0 0 12px 0)}.rating .count{margin:var(--cx-margin,0 20px 0 5px)}.price{display:inline-block;font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);font-weight:400}.quantity label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,15px 0 10px 0)}.quantity .info{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0 15px 0 15px);color:var(--cx-color,var(--cx-g-color-secondary))}cx-add-to-cart{margin:var(--cx-margin,20px 0 10px 0)}"]
            }] }
];
ProductSummaryComponent.propDecorators = {
    product: [{ type: Input }],
    openReview: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const WAITING_CLASS = 'waiting';
class ProductImagesComponent {
    constructor() {
        this.outlets = ProductDetailOutlets;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.product && this.product.images) {
            this.mainImageContainer = this.product.images.PRIMARY;
        }
    }
    /**
     * @param {?} event
     * @param {?} imageContainer
     * @return {?}
     */
    showImage(event, imageContainer) {
        if (this.mainImageContainer === imageContainer) {
            return;
        }
        this.startWaiting((/** @type {?} */ (event.target)));
        this.mainImageContainer = imageContainer;
    }
    /**
     * @param {?} imageContainer
     * @return {?}
     */
    isMainImageContainer(imageContainer) {
        return imageContainer.zoom.url === this.mainImageContainer.zoom.url;
    }
    /**
     * @return {?}
     */
    loadHandler() {
        this.clearWaitList();
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    startWaiting(el) {
        this.clearWaitList();
        el.classList.add(WAITING_CLASS);
        this.waiting = el;
    }
    /**
     * @private
     * @return {?}
     */
    clearWaitList() {
        if (this.waiting) {
            this.waiting.classList.remove(WAITING_CLASS);
            delete this.waiting;
        }
    }
}
ProductImagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-images',
                template: "<ng-container *ngIf=\"product\">\n  <ng-container *cxOutlet=\"outlets.IMAGES\">\n    <cx-picture\n      [imageContainer]=\"mainImageContainer\"\n      imageFormat=\"zoom\"\n      (loaded)=\"loadHandler()\"\n    >\n    </cx-picture>\n\n    <ng-container *ngIf=\"product.images?.GALLERY.length > 1\">\n      <div class=\"thumbs\">\n        <cx-picture\n          *ngFor=\"let image of product.images.GALLERY\"\n          [imageContainer]=\"image\"\n          imageFormat=\"thumbnail\"\n          (focus)=\"showImage($event, image)\"\n          tabindex=\"0\"\n          [class.active]=\"isMainImageContainer(image)\"\n        >\n        </cx-picture>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                styles: [":host{display:flex;flex-direction:var(--cx-flex-direction,column);height:100%}:host>cx-picture{height:100%;width:100%;position:relative}.thumbs{display:flex;justify-content:flex-start}.thumbs cx-picture{width:var(--cx-width,75px);height:var(--cx-width,75px);transition:all var(--cx-g-transition-duration);overflow:hidden;position:relative;border:var(--cx-border,2px solid var(--cx-g-color-light));margin:var(--cx-margin,.5vw);padding:var(--cx-padding,.5vw)}.thumbs cx-picture:not(.active){cursor:pointer}.thumbs cx-picture.active,.thumbs cx-picture:hover{border-color:var(--cx-border-color,var(--cx-g-color-primary))}"]
            }] }
];
ProductImagesComponent.propDecorators = {
    product: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductDetailsModule {
}
ProductDetailsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ComponentsModule,
                    CartSharedModule,
                    CmsModule$1,
                    AddToCartModule,
                    OutletModule,
                    I18nModule,
                ],
                declarations: [
                    ProductDetailsComponent,
                    ProductSummaryComponent,
                    ProductImagesComponent,
                ],
                exports: [
                    ProductDetailsComponent,
                    ProductSummaryComponent,
                    ProductImagesComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderSearchComponent {
    /**
     * @param {?} routing
     * @param {?} route
     */
    constructor(routing, route) {
        this.routing = routing;
        this.route = route;
        this.searchBox = new FormControl();
    }
    /**
     * @param {?} address
     * @return {?}
     */
    findStores(address) {
        this.routing.go(['find'], { query: address }, { relativeTo: this.route });
    }
    /**
     * @return {?}
     */
    viewStoresWithMyLoc() {
        this.routing.go(['find'], { useMyLocation: true }, { relativeTo: this.route });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    }
}
StoreFinderSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-search',
                template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"form-group\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.placeholder.searchBox' | cxTranslate }}\"\n          required\n        />\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary btn-block cx-find-store\"\n        [routerLink]=\"['find']\"\n        [queryParams]=\"{ query: queryInput.value }\"\n      >\n        {{ 'storeFinder.action.findStore' | cxTranslate }}\n      </button>\n\n      <div class=\"cx-bottom-links\">\n        <button (click)=\"viewStoresWithMyLoc()\" class=\"cx-link btn-link\">\n          {{ 'storeFinder.action.useMyLocation' | cxTranslate }}\n        </button>\n        |\n        <a [routerLink]=\"['view-all']\" class=\"cx-link btn-link\">{{\n          'storeFinder.action.viewAllStores' | cxTranslate\n        }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:var(--cx-display,block);margin:var(--cx-margin,0 0 3rem)}.cx-find-store{margin:var(--cx-margin,0 0 1rem)}.cx-bottom-links{text-align:var(--cx-text-align,center)}.cx-link{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);border:var(--cx-border,0);padding:var(--cx-padding,0)}"]
            }] }
];
/** @nocollapse */
StoreFinderSearchComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: ActivatedRoute }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderMapComponent {
    /**
     * @param {?} googleMapRendererService
     */
    constructor(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.locations && this.locations) {
            this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, markerIndex => {
                this.selectStoreItemClickHandle(markerIndex);
            });
        }
    }
    /**
     * Sets the center of the map to the given location
     * @param {?} latitude latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    centerMap(latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    }
    /**
     * @private
     * @param {?} markerIndex
     * @return {?}
     */
    selectStoreItemClickHandle(markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    }
}
StoreFinderMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-map',
                template: "<div #mapElement class=\"cx-store-map\"></div>\n",
                styles: [".cx-store-map{width:var(--cx-width,45.5rem);height:var(--cx-height,31.25rem)}"]
            }] }
];
/** @nocollapse */
StoreFinderMapComponent.ctorParameters = () => [
    { type: GoogleMapRendererService }
];
StoreFinderMapComponent.propDecorators = {
    mapElement: [{ type: ViewChild, args: ['mapElement',] }],
    locations: [{ type: Input }],
    selectedStoreItem: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderListComponent {
    /**
     * @param {?} storeDataService
     * @param {?} document
     */
    constructor(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.selectedStore = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    centerStoreOnMapByIndex(index) {
        this.selectedStore = index;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectStoreItemList(index) {
        this.selectedStore = index;
        /** @type {?} */
        const storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView();
    }
}
StoreFinderListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-list',
                template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <ol class=\"cx-list\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStore === i\n            }\"\n            class=\"cx-list-items cx-ordered\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event)\"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.label.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <ol class=\"cx-list\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStore === i\n                  }\"\n                  class=\"cx-list-items cx-ordered\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event)\"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.label.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.label.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-columns{display:var(--cx-display,none)}@media (min-width:768px){.cx-columns{display:var(--cx-display,flex);height:var(--cx-height,70vh)}}.cx-columns-mobile{display:var(--cx-display,block)}.cx-address-col{height:var(--cx-height,100%)}@media (min-width:768px){.cx-columns-mobile{display:var(--cx-display,none)}.cx-address-col{height:var(--cx-height,100%);overflow-y:var(--cx-overflow-y,scroll);padding:var(--cx-padding,inherit inherit inherit 0)}.cx-map-col{height:var(--cx-height,100%);overflow-y:var(--cx-overflow-y,scroll)}}.cx-list{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);list-style:var(--cx-list-style,none);padding:var(--cx-padding,inherit inherit inherit 0)}.cx-list-items{border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));padding:var(--cx-padding,1rem 1.5rem)}.cx-list-items:hover{background-color:var(--cx-background-color,var(--cx-g-color-background))}.cx-list-items.cx-selected-item,.cx-list-items.cx-selected-item:hover{background-color:var(--cx-background-color,var(--cx-g-color-light))}.cx-ordered{counter-increment:var(--cx-counter-increment,resultCount)}.cx-ordered:before{content:var(--cx-content,counter(resultCount,decimal));position:var(--cx-position,absolute);left:var(--cx-left,1rem)}.cx-not-found{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);text-align:var(--cx-text-align,center);padding:var(--cx-padding,3rem 0)}"]
            }] }
];
/** @nocollapse */
StoreFinderListComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
StoreFinderListComponent.propDecorators = {
    locations: [{ type: Input }],
    storeMap: [{ type: ViewChild, args: ['storeMap',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
        this.current_date = new Date();
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getDirections(location) {
        /** @type {?} */
        const google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        /** @type {?} */
        const latitude = this.storeDataService.getStoreLatitude(location);
        /** @type {?} */
        const longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getClosingTime(location) {
        return this.storeDataService.getStoreClosingTime(location, this.current_date);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getOpeningTime(location) {
        return this.storeDataService.getStoreOpeningTime(location, this.current_date);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    isOpen(location) {
        return this.storeDataService.isStoreOpen(location, this.current_date);
    }
}
AbstractStoreItemComponent.propDecorators = {
    location: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.locationIndex = null;
        this.storeItemClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    handleStoreItemClick() {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    }
}
StoreFinderListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-list-item',
                template: "<ng-container>\n  <div (click)=\"handleStoreItemClick()\">\n    <div class=\"cx-store-name\">\n      {{ location.displayName }}\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      {{ location.address.line1 }}<br />\n      {{ location.address.town }},\n      {{ location.address.region ? location.address.region.name + ',' : '' }}\n      {{ location.address.postalCode }}\n    </div>\n    <div *ngIf=\"location.openingHours\">\n      <div *ngIf=\"isOpen(location)\" class=\"cx-store-open\">\n        {{ getClosingTime(location) | cxDate: 'EEE' }}:\n        {{ 'storeFinder.label.openUntil' | cxTranslate }}\n        {{ getClosingTime(location) | cxDate: 'shortTime' }}\n      </div>\n      <div *ngIf=\"!isOpen(location)\" class=\"cx-store-closed\">\n        {{ getClosingTime(location) | cxDate: 'EEE' }}:\n        {{ 'storeFinder.label.closed' | cxTranslate }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      >{{ 'storeFinder.label.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:var(--cx-display,block);margin:var(--cx-margin,1.25rem 0)}.cx-store-name{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);-webkit-text-decoration:var(--cx-text-decoration,underline);text-decoration:var(--cx-text-decoration,underline);cursor:pointer}.cx-store-address{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222)}.cx-store-open{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-success))}.cx-store-closed{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-danger))}.cx-button{line-height:var(--cx-line-height,2);margin:var(--cx-margin,1rem 0 0)}"]
            }] }
];
/** @nocollapse */
StoreFinderListItemComponent.ctorParameters = () => [
    { type: StoreDataService }
];
StoreFinderListItemComponent.propDecorators = {
    locationIndex: [{ type: Input }],
    storeItemClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     * @param {?} storeFinderService
     * @param {?} route
     */
    constructor(storeDataService, storeFinderService, route) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.storeFinderService = storeFinderService;
        this.route = route;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.requestStoresData();
        this.location$ = this.storeFinderService.getFindStoresEntities();
        this.isLoading$ = this.storeFinderService.getStoresLoading();
    }
    /**
     * @return {?}
     */
    requestStoresData() {
        /** @type {?} */
        const storeId = this.route.snapshot.params.store;
        this.storeFinderService.viewStoreById(storeId);
    }
}
StoreFinderStoreDescriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-store-description',
                template: "<div\n  class=\"container\"\n  *ngIf=\"!(isLoading$ | async) && (location$ | async) as location; else loading\"\n>\n  <div class=\"row\">\n    <article class=\"cx-store col-lg-4\">\n      <h2>{{ location.displayName }}</h2>\n\n      <p *ngIf=\"location.address\" class=\"storeAddress\">\n        {{ location.address.line1 }} <br />\n        {{ location.address.town + ',' }}\n        {{ location.address.region ? location.address.region.name + ',' : '' }}\n        {{ location.address.postalCode }}\n      </p>\n\n      <section class=\"cx-contact\">\n        <ul class=\"cx-list\">\n          <li class=\"cx-item\">\n            <a\n              class=\"cx-link\"\n              [href]=\"getDirections(location)\"\n              target=\"_blank\"\n              >{{ 'storeFinder.label.getDirections' | cxTranslate }}</a\n            >\n          </li>\n          <li class=\"cx-item\">\n            {{ 'storeFinder.label.call' | cxTranslate }}\n            {{ location.address?.phone }}\n          </li>\n          <li class=\"cx-item\">\n            <a class=\"cx-link\" [routerLink]=\"['/contact']\">{{\n              'storeFinder.action.contactUs' | cxTranslate\n            }}</a>\n          </li>\n        </ul>\n      </section>\n      <div class=\"cx-schedule\">\n        <cx-schedule [location]=\"location\">\n          <h3>{{ 'storeFinder.label.storeHours' | cxTranslate }}</h3>\n        </cx-schedule>\n      </div>\n    </article>\n    <article class=\"cx-storeMap col-lg-8\">\n      <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n    </article>\n  </div>\n\n  <div class=\"row cx-feature\">\n    <div class=\"col-lg-12\">\n      <h3 class=\"cx-features-header\">\n        {{ 'storeFinder.label.storeFeatures' | cxTranslate }}\n      </h3>\n    </div>\n  </div>\n\n  <article class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let feature of location.features?.entry\">\n      <div class=\"cx-features\">{{ feature.value }}</div>\n    </div>\n  </article>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-store{text-align:var(--cx-text-align,left)}.cx-contact{margin-bottom:var(--cx-margin,1rem);font-weight:var(--cx-g-font-weight-bold,700);-webkit-text-decoration:var(--cx-text-dectoration,underline);text-decoration:var(--cx-text-dectoration,underline)}.cx-list{padding:var(--cx-padding,0);list-style:var(--cx-list-style,none)}.cx-link{color:var(--cx-color,var(--cx-g-color-text))}.cx-item{margin-bottom:var(--cx-margin,.5rem)}.cx-schedule{margin-top:var(--cx-margin,1.5rem);font-weight:var(--cx-g-font-weight-bold,700)}.cx-feature{margin-top:var(--cx-margin,30px);margin-bottom:var(--cx-margin,20px)}.cx-features-header{text-align:var(--cx-text-align,left)}.cx-features{border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid)}@media (max-width:991.98px){.cx-features{margin:var(--cx-margin,5px 0)}}"]
            }] }
];
/** @nocollapse */
StoreFinderStoreDescriptionComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: StoreFinderService },
    { type: ActivatedRoute }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const WEEK_DAYS_NUMBER = 7;
class ScheduleComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.location && this.location) {
            /** @type {?} */
            const initialDate = this.getInitialDate();
            this.displayDays = [];
            for (let i = 0; i < WEEK_DAYS_NUMBER; i++) {
                /** @type {?} */
                const date = new Date(initialDate.valueOf());
                date.setDate(date.getDate() + i);
                this.displayDays.push(date);
            }
        }
    }
    /**
     * Returns the store's opening time for the given date
     * @param {?} date date
     * @return {?}
     */
    getStoreOpeningTime(date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    }
    /**
     * Returns the store's closing time for the given date
     * @param {?} date date
     * @return {?}
     */
    getStoreClosingTime(date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    }
    /**
     * return initial (first) date to be displayed in the schedule
     * @private
     * @return {?}
     */
    getInitialDate() {
        /** @type {?} */
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    }
}
ScheduleComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-schedule',
                template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-6\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== null\" class=\"cx-hours col-6\">\n      {{ getStoreOpeningTime(day) | cxDate: 'HH:mm' }} -\n      {{ getStoreClosingTime(day) | cxDate: 'HH:mm' }}\n    </div>\n    <div *ngIf=\"getStoreOpeningTime(day) === null\" class=\"cx-hours col-6\">\n      {{ 'storeFinder.label.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n",
                styles: [".cx-days{padding:var(--cx-padding,0 1rem 0 0)}.cx-store-hours{margin:var(--cx-margin,1.5rem 0)}.cx-hours{text-align:var(--cx-text-align,center)}"]
            }] }
];
/** @nocollapse */
ScheduleComponent.ctorParameters = () => [
    { type: StoreDataService }
];
ScheduleComponent.propDecorators = {
    location: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderStoresCountComponent {
    /**
     * @param {?} storeFinderService
     */
    constructor(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    }
}
StoreFinderStoresCountComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-stores-count',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div\n      *ngFor=\"let country of locations?.countriesAndRegionsStoreCount\"\n      class=\"cx-set\"\n    >\n      <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n        <div class=\"cx-title\">\n          <span\n            [ngClass]=\"\n              country?.storeCountDataList\n                ? 'country-header'\n                : 'country-header-link'\n            \"\n            class=\"cx-name\"\n            >{{ country.name }}</span\n          >\n          <span\n            [ngClass]=\"\n              country?.storeCountDataList\n                ? 'country-header'\n                : 'country-header-link'\n            \"\n            *ngIf=\"!country?.storeCountDataList\"\n            class=\"cx-country-count\"\n            >({{ country.count }})</span\n          >\n        </div>\n      </a>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-set{width:var(--cx-width,100%)}.cx-title{width:var(--cx-width,100%);margin-bottom:var(--cx-margin,1.5rem)}.cx-name{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);padding-right:var(--cx-padding,.5rem)}.cx-country-count{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:var(--cx-font-weight,normal)}.cx-region-set{width:var(--cx-width,100%)}.cx-region-directory{-webkit-column-count:var(--cx-column-count,1);column-count:var(--cx-column-count,1);list-style:var(--cx-list-style,none);padding-left:var(--cx-padding,0)}@media (min-width:768px){.cx-region-directory{-webkit-column-count:var(--cx-column-count,4);column-count:var(--cx-column-count,4)}}.cx-directory-item{padding:var(--cx-padding,0);line-height:var(--cx-line-height,normal)}.cx-item-link{padding:var(--cx-padding,0 .5rem .5rem .2rem);font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);line-height:var(--cx-line-height,normal)}.cx-item-count{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222)}.cx-count-spinner{padding:var(--cx-padding,30px 0)}"]
            }] }
];
/** @nocollapse */
StoreFinderStoresCountComponent.ctorParameters = () => [
    { type: StoreFinderService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderGridComponent {
    /**
     * @param {?} storeFinderService
     * @param {?} route
     * @param {?} routingService
     */
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', this.defaultLocation, {
                pageSize: -1,
            }, this.route.snapshot.params.country);
        }
    }
    /**
     * @param {?} location
     * @return {?}
     */
    viewStore(location) {
        if (this.route.snapshot.params.region) {
            this.routingService.go(['region', this.route.snapshot.params.region, location.name], undefined, { relativeTo: this.route });
            return;
        }
        this.routingService.go(['region', '', location.name], undefined, {
            relativeTo: this.route,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
StoreFinderGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-grid',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-md-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n",
                styles: [".cx-spinner{padding:var(--cx-padding,2rem 0)}"]
            }] }
];
/** @nocollapse */
StoreFinderGridComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: RoutingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderHeaderComponent {
}
StoreFinderHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-header',
                template: "<ng-container> <cx-store-finder-search></cx-store-finder-search> </ng-container>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderSearchResultComponent {
    /**
     * @param {?} storeFinderService
     * @param {?} route
     */
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.route.queryParams.subscribe(params => this.initialize(params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.searchConfig = Object.assign({}, this.searchConfig, { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
        this.subscription = this.locations$
            .pipe(map(data => data.geolocation))
            .subscribe(geoData => (this.geolocation = geoData));
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    parseParameters(queryParams) {
        /** @type {?} */
        let searchQuery;
        if (queryParams.query) {
            searchQuery = { queryText: queryParams.query };
        }
        else {
            searchQuery = { queryText: '' };
        }
        searchQuery.useMyLocation =
            queryParams.useMyLocation != null &&
                queryParams.useMyLocation.toUpperCase() === 'TRUE';
        return searchQuery;
    }
}
StoreFinderSearchResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-search-result',
                template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <cx-store-finder-list [locations]=\"locations\"></cx-store-finder-list>\n  <div *ngIf=\"locations?.stores\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-pagination{margin:var(--cx-margin,2rem auto);justify-content:var(--cx-justify-content,center);display:var(--cx-display,flex)}.cx-spinner{padding:var(--cx-padding,2rem 0)}"]
            }] }
];
/** @nocollapse */
StoreFinderSearchResultComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderPaginationDetailsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    getResultsPerPage() {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            /** @type {?} */
            const firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
            /** @type {?} */
            let resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
            if (resultsPerPage > this.pagination.totalResults) {
                resultsPerPage = this.pagination.totalResults;
            }
            return `${firstItem} - ${resultsPerPage}`;
        }
        else {
            return `1 - ${this.pagination.totalResults}`;
        }
    }
}
StoreFinderPaginationDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-pagination-details',
                template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.label.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-pagination-details{display:var(--cx-display,block);margin:var(--cx-margin,1rem 0)}@media (min-width:768px){.cx-pagination-details{text-align:var(--cx-text-align,left)}}"]
            }] }
];
/** @nocollapse */
StoreFinderPaginationDetailsComponent.ctorParameters = () => [];
StoreFinderPaginationDetailsComponent.propDecorators = {
    pagination: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderComponent {
}
StoreFinderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder',
                template: "<ng-container>\n  <div class=\"wrapper\">\n    <cx-store-finder-header></cx-store-finder-header>\n    <router-outlet></router-outlet>\n  </div>\n</ng-container>\n",
                styles: [".wrapper{text-align:center;padding-top:3%}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderModule {
}
StoreFinderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CmsModule$1,
                    ReactiveFormsModule,
                    RouterModule,
                    PaginationAndSortingModule,
                    BootstrapModule,
                    SpinnerModule,
                    UrlTranslationModule,
                    StoreFinderCoreModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            StoreFinderComponent: {
                                selector: 'cx-store-finder',
                                childRoutes: [
                                    {
                                        path: 'find',
                                        component: StoreFinderSearchResultComponent,
                                    },
                                    {
                                        path: 'view-all',
                                        component: StoreFinderStoresCountComponent,
                                    },
                                    {
                                        path: 'country/:country',
                                        component: StoreFinderGridComponent,
                                    },
                                    {
                                        path: 'country/:country/region/:region',
                                        component: StoreFinderGridComponent,
                                    },
                                    {
                                        path: 'country/:country/region/:region/:store',
                                        component: StoreFinderStoreDescriptionComponent,
                                    },
                                    {
                                        path: 'country/:country/:store',
                                        component: StoreFinderStoreDescriptionComponent,
                                    },
                                ],
                            },
                        },
                        layoutSlots: {
                            StoreFinderPageTemplate: {
                                slots: ['MiddleContent', 'SideContent'],
                            },
                        },
                    }))),
                ],
                declarations: [
                    StoreFinderSearchComponent,
                    StoreFinderListComponent,
                    StoreFinderMapComponent,
                    StoreFinderListItemComponent,
                    StoreFinderStoresCountComponent,
                    StoreFinderGridComponent,
                    StoreFinderStoreDescriptionComponent,
                    ScheduleComponent,
                    StoreFinderHeaderComponent,
                    StoreFinderSearchResultComponent,
                    StoreFinderComponent,
                    StoreFinderPaginationDetailsComponent,
                ],
                exports: [
                    StoreFinderSearchComponent,
                    StoreFinderListComponent,
                    StoreFinderMapComponent,
                    StoreFinderListItemComponent,
                    StoreFinderStoresCountComponent,
                    StoreFinderGridComponent,
                    StoreFinderStoreDescriptionComponent,
                    ScheduleComponent,
                    StoreFinderHeaderComponent,
                    StoreFinderSearchResultComponent,
                    StoreFinderComponent,
                    StoreFinderPaginationDetailsComponent,
                ],
                entryComponents: [
                    StoreFinderComponent,
                    StoreFinderSearchResultComponent,
                    StoreFinderStoresCountComponent,
                    StoreFinderGridComponent,
                    StoreFinderStoreDescriptionComponent,
                    StoreFinderStoreDescriptionComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleRefDirective {
    /**
     * @param {?} element
     * @param {?} cssOutletService
     */
    constructor(element, cssOutletService) {
        this.element = element;
        this.cssOutletService = cssOutletService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cssOutletService.add(this.cxCssRef, this.element);
    }
}
StyleRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxCssRef]',
            },] }
];
/** @nocollapse */
StyleRefDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: OutletStyleService }
];
StyleRefDirective.propDecorators = {
    cxCssRef: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleRefModule {
}
StyleRefModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [StyleRefDirective],
                exports: [StyleRefDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultLayoutConfig = {
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200,
    },
    layoutSlots: {
        footer: {
            slots: ['Footer'],
        },
        LandingPage2Template: {
            slots: [
                'Section1',
                'Section2A',
                'Section2B',
                'Section2C',
                'Section3',
                'Section4',
                'Section5',
            ],
        },
        ContentPage1Template: {
            slots: ['Section2A', 'Section2B'],
        },
        CategoryPageTemplate: {
            slots: ['Section1', 'Section2', 'Section3'],
        },
        ProductListPageTemplate: {
            slots: ['ProductListSlot', 'ProductLeftRefinements'],
        },
        SearchResultsListPageTemplate: {
            slots: [
                'Section2',
                'SearchResultsListSlot',
                'ProductLeftRefinements',
                'Section4',
            ],
        },
        ProductDetailsPageTemplate: {
            slots: [
                'TopHeaderSlot',
                'VariantSelectorSlot',
                'AddToCart',
                'UpSelling',
                'CrossSelling',
                'Tabs',
                'PlaceholderContentSlot',
            ],
        },
        CartPageTemplate: {
            slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
        },
        AccountPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        LoginPageTemplate: {
            slots: ['LeftContentSlot', 'RightContentSlot'],
        },
        ErrorPageTemplate: {
            slots: ['TopContent', 'MiddleContent', 'BottomContent'],
        },
        OrderConfirmationPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        MultiStepCheckoutSummaryPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} auth
     * @param {?} userService
     */
    constructor(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.isLogin = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.user$ = this.userService.get();
        this.subscription = this.auth
            .getUserToken()
            .subscribe((token) => {
            if (token && token.access_token && !this.isLogin) {
                this.isLogin = true;
                this.userService.load(token.userId);
                this.auth.login();
            }
            else if (token && !token.access_token && this.isLogin) {
                this.isLogin = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login',
                template: "<ng-container *ngIf=\"(user$ | async) as user\">\n  <ng-container *ngIf=\"user?.name\">\n    <div class=\"cx-login-greet\">\n      {{ 'common.label.userGreeting' | cxTranslate: { name: user.name } }}\n    </div>\n    <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n  </ng-container>\n\n  <ng-container *ngIf=\"!user?.name\">\n    <a role=\"link\" [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\">{{\n      'common.action.signInRegister' | cxTranslate\n    }}</a>\n  </ng-container>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-login-greet{margin:var(--cx-margin,0);color:var(--cx-color,var(--cx-g-color-inverse));font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi));padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-login-greet{color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,.5rem 1rem 0);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.6)}}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginModule {
}
LoginModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    CmsModule$1,
                    BootstrapModule,
                    UserModule,
                    UrlTranslationModule,
                    PageSlotModule,
                    I18nModule,
                ],
                declarations: [LoginComponent],
                exports: [LoginComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.showMenu = false;
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        this.showMenu = !this.showMenu;
        if (this.showMenu) {
            this.subscription = this.router.events.subscribe(() => {
                this.toggleMenu();
            });
        }
        else {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-header',
                template: "<header class=\"cx-header\">\n  <button\n    class=\"cx-hamburger\"\n    type=\"button\"\n    (click)=\"toggleMenu()\"\n    [class.is-active]=\"showMenu\"\n    [attr.aria-expanded]=\"showMenu\"\n    aria-label=\"Menu\"\n    aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n  >\n    <span class=\"hamburger-box\"> <span class=\"hamburger-inner\"></span> </span>\n  </button>\n  <cx-header-skipper></cx-header-skipper>\n\n  <cx-page-slot position=\"SiteContext\"></cx-page-slot>\n  <cx-page-slot position=\"SiteLinks\"></cx-page-slot>\n  <cx-page-slot position=\"SiteLogo\"></cx-page-slot>\n  <cx-page-slot position=\"SearchBox\"></cx-page-slot>\n  <cx-login class=\"SiteLogin\"></cx-login>\n  <cx-page-slot position=\"MiniCart\"></cx-page-slot>\n  <cx-page-slot position=\"NavigationBar\"></cx-page-slot>\n</header>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{background-color:var(--cx-background-color,var(--cx-g-color-dark));color:var(--cx-color,var(--cx-g-color-inverse));display:block}header{max-width:var(--cx-max-width,1140px);margin:auto;display:flex;flex-wrap:wrap}header>*{-ms-grid-row-align:center;align-self:center}.SiteContext,.SiteLinks{font-size:var(--cx-g-font-small,.75rem);color:var(--cx-color,var(--cx-g-color-light))}.SiteLinks{--cx-display:block}.SiteLogo{--cx-width:95px}.SearchBox{margin:.5rem auto}.NavigationBar{flex:100%}.cx-hamburger{display:block}@media (max-width:575.98px){.SearchBox{margin:0 0 0 auto}}@media (max-width:991.98px){.NavigationBar,.SiteContext,.SiteLinks,.SiteLogin{flex:100%}.NavigationBar,.SiteLogin{order:1}.SiteContext,.SiteLinks{order:2}.SiteContext,.SiteLinks,.SiteLogin{background-color:var(--cx-background-color,var(--cx-g-color-background));color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,.25rem 0)}.SiteContext{padding:.5rem 1rem .25rem}.SiteLinks{padding:.25rem 1rem .5rem}:host:not(.mobile-nav) .NavigationBar,:host:not(.mobile-nav) .SiteContext,:host:not(.mobile-nav) .SiteLinks,:host:not(.mobile-nav) .SiteLogin{display:none}}@media (min-width:992px){header{padding:0 1rem}.cx-hamburger{display:none}.SiteContext,.SiteLinks{flex:50%;display:flex;--cx-margin:0.5rem 8px}.SiteContext.has-components:before,.SiteLinks.has-components:before{border-top:var(--cx-border-top,1px solid currentColor);content:'';position:absolute;right:0;left:0;margin-top:30px}.SiteLinks{justify-content:flex-end;--cx-padding:0 0.5rem}.SiteLogin{padding:.5rem 1rem}}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: Router }
];
HeaderComponent.propDecorators = {
    showMenu: [{ type: HostBinding, args: ['class.mobile-nav',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderSkipperComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
HeaderSkipperComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-header-skipper',
                template: "<div class=\"cx-header-skipper\">\n  <a class=\"sr-only sr-only-focusable\" href=\"#header-categories-container\">{{\n    'common.action.skipToNavigation' | cxTranslate\n  }}</a>\n  <a class=\"sr-only sr-only-focusable\" href=\"#mini-cart\">{{\n    'common.action.skipToShoppingCart' | cxTranslate\n  }}</a>\n  <a class=\"sr-only sr-only-focusable\" href=\"#main-content\">{{\n    'common.action.skipToMainContent' | cxTranslate\n  }}</a>\n  <a class=\"sr-only sr-only-focusable\" href=\"#footer\">{{\n    'common.action.skipToFooter' | cxTranslate\n  }}</a>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-header-skipper{position:absolute;top:0;left:0}"]
            }] }
];
/** @nocollapse */
HeaderSkipperComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CmsModule$1,
                    LoginModule,
                    RouterModule,
                    PwaModule,
                    UrlTranslationModule,
                    PageSlotModule,
                    I18nModule,
                ],
                declarations: [HeaderComponent, HeaderSkipperComponent],
                exports: [HeaderComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiFrameworkModule {
}
UiFrameworkModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, BrowserAnimationsModule],
                declarations: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorefrontComponent {
    constructor() { }
}
StorefrontComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-storefront',
                template: "<cx-header></cx-header>\n\n<cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n\n<cx-global-message></cx-global-message>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <cx-page-layout section=\"footer\"></cx-page-layout>\n</footer>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
StorefrontComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cartComponents = {
    emptyCartText: {
        flexType: 'CMSParagraphComponent',
        typeCode: 'CMSParagraphComponent',
        content: `
      <h2>Your shopping cart is empty</h2>
      <p>Suggestions</p>
      <ul>
          <li>
          Browse our products by selecting a category above
          </li>
      </ul>`,
    },
};
/** @type {?} */
const defaultCartPageConfig = {
    ignoreBackend: false,
    pageId: 'cartPage',
    type: 'ContentPage',
    template: 'CartPageTemplate',
    title: 'Cart',
    slots: {
        EmptyCartMiddleContent: {
            componentIds: ['emptyCartText'],
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const headerComponents = {
    LanguageComponent: {
        typeCode: 'CMSSiteContextComponent',
        flexType: 'CMSSiteContextComponent',
        context: 'LANGUAGE',
    },
    CurrencyComponent: {
        typeCode: 'CMSSiteContextComponent',
        flexType: 'CMSSiteContextComponent',
        context: 'CURRENCY',
    },
    storeFinder: {
        typeCode: 'CMSLinkComponent',
        flexType: 'CMSLinkComponent',
        linkName: 'Find a Store',
        url: '/store-finder',
    },
    breadcrumbComponent: {
        typeCode: 'BreadcrumbComponent',
        flexType: 'BreadcrumbComponent',
    },
};
/** @type {?} */
const defaultPageHeaderConfig = {
    SiteContext: {
        componentIds: ['LanguageComponent', 'CurrencyComponent'],
    },
    SiteLinks: {
        componentIds: ['storeFinder'],
    },
    BottomHeaderSlot: {
        componentIds: ['breadcrumbComponent'],
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultCmsContentConfig() {
    return {
        cmsStructure: {
            components: Object.assign({}, headerComponents, cartComponents),
            slots: Object.assign({}, defaultPageHeaderConfig),
            pages: [defaultCartPageConfig],
        },
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SeoMetaService {
    /**
     * @param {?} ngTitle
     * @param {?} ngMeta
     * @param {?} pageMetaService
     */
    constructor(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    init() {
        this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe((meta) => (this.meta = meta));
    }
    /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    set meta(meta) {
        this.title = meta.title;
        this.description = meta.description;
        this.image = meta.image;
        this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
    }
    /**
     * @protected
     * @param {?} title
     * @return {?}
     */
    set title(title) {
        this.ngTitle.setTitle(title || '');
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set description(value) {
        this.addTag({ name: 'description', content: value });
    }
    /**
     * @protected
     * @param {?} imageUrl
     * @return {?}
     */
    set image(imageUrl) {
        if (imageUrl) {
            this.addTag({ name: 'og:image', content: imageUrl });
        }
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set robots(value) {
        if (value) {
            this.addTag({ name: 'robots', content: value.join(', ') });
        }
    }
    /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    addTag(meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    }
}
SeoMetaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SeoMetaService.ctorParameters = () => [
    { type: Title },
    { type: Meta },
    { type: PageMetaService }
];
/** @nocollapse */ SeoMetaService.ngInjectableDef = defineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(inject(Title), inject(Meta), inject(PageMetaService)); }, token: SeoMetaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function initSeoService(injector) {
    /** @type {?} */
    const result = () => {
        /** @type {?} */
        const service = injector.get(SeoMetaService);
        service.init();
    };
    return result;
}
class SeoModule {
}
SeoModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initSeoService,
                        deps: [Injector],
                        multi: true,
                    },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegisterComponent {
    /**
     * @param {?} auth
     * @param {?} routing
     * @param {?} userService
     * @param {?} globalMessageService
     * @param {?} fb
     */
    constructor(auth, routing, userService, globalMessageService, fb) {
        this.auth = auth;
        this.routing = routing;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.userRegistrationForm = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
            newsletter: [false],
            termsandconditions: [false, Validators.requiredTrue],
        }, { validator: this.matchPassword });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.titles$ = this.userService.getTitles().pipe(tap(titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }));
        this.subscription = this.auth
            .getUserToken()
            .pipe(switchMap(data => {
            if (data && data.access_token) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                return this.routing.getRedirectUrl().pipe(take(1));
            }
            return of();
        }))
            .subscribe(url => {
            if (url) {
                // If forced to login due to AuthGuard, then redirect to intended destination
                this.routing.goByUrl(url);
                this.routing.clearRedirectUrl();
            }
            else {
                // User manual login
                this.routing.back();
            }
        });
    }
    /**
     * @return {?}
     */
    submit() {
        const { firstName, lastName, email, password, titleCode, } = this.userRegistrationForm.value;
        /** @type {?} */
        const userRegisterFormData = {
            firstName,
            lastName,
            uid: email,
            password,
            titleCode,
        };
        this.userService.register(userRegisterFormData);
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.globalMessageService
            .get()
            .pipe(filter(data => Object.keys(data).length > 0))
            .subscribe((globalMessageEntities) => {
            if (globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR].some(message => message === 'This field is required.')) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'Title is required.',
                });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    matchPassword(ac) {
        if (ac.get('password').value !== ac.get('passwordconf').value) {
            return { NotEqual: true };
        }
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-register',
                template: "<section class=\"cx-page__section container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <h1 class=\"cx-section__title\">\n          {{ 'register.label.createAccount' | cxTranslate }}\n        </h1>\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.placeholder.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of (titles$ | async)\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.firstName' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.placeholder.firstName' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.lastName' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.placeholder.lastName' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.emailAddress' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  (userRegistrationForm.get('email').errors?.email ||\n                    userRegistrationForm.get('email').errors?.InvalidEmail) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.placeholder.emailAddress' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.password' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.placeholder.password' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.validation.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.confirmPassword' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.placeholder.confirmPassword' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.validation.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.label.emailMarketing' | cxTranslate }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.label.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"\n                      { route: ['termsAndConditions'] } | cxTranslateUrl\n                    \"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.action.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.action.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\"\n            >{{ 'register.action.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n",
                styles: ["form a{-webkit-text-decoration:var(--cx-text-decoration,underline);text-decoration:var(--cx-text-decoration,underline)}form .cx-login-link{margin:var(--cx-margin,1rem 0 0)}"]
            }] }
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegisterComponentModule {
}
RegisterComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LoginModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UserModule,
                    UrlTranslationModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            RegisterCustomerComponent: {
                                selector: 'cx-register',
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [RegisterComponent],
                exports: [RegisterComponent],
                entryComponents: [RegisterComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginFormComponent {
    /**
     * @param {?} auth
     * @param {?} routing
     * @param {?} globalMessageService
     * @param {?} fb
     */
    constructor(auth, routing, globalMessageService, fb) {
        this.auth = auth;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.auth
            .getUserToken()
            .pipe(switchMap(data => {
            if (data && data.access_token) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                return this.routing.getRedirectUrl().pipe(take(1));
            }
            return of();
        }))
            .subscribe(url => {
            if (url) {
                // If forced to login due to AuthGuard, then redirect to intended destination
                this.routing.goByUrl(url);
                this.routing.clearRedirectUrl();
            }
            else {
                // User manual login
                this.routing.back();
            }
        });
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
    }
    /**
     * @return {?}
     */
    login() {
        this.auth.authorize(this.form.controls.userId.value, this.form.controls.password.value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
LoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login-form',
                template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'login.label.emailAddress' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'login.placeholder.emailAddress' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'login.validation.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'login.label.password' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'login.placeholder.password' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ route: ['forgotPassword'] } | cxTranslateUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'login.action.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'login.action.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section__title cx-section__title--alt\">\n    {{ 'login.label.dontHaveAccount' | cxTranslate }}\n  </h3>\n  <a\n    [routerLink]=\"{ route: ['register'] } | cxTranslateUrl\"\n    class=\"btn btn-block btn-secondary\"\n    >{{ 'login.action.register' | cxTranslate }}</a\n  >\n</div>\n",
                styles: [".register{margin-top:2rem}"]
            }] }
];
/** @nocollapse */
LoginFormComponent.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginFormModule {
}
LoginFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    CmsModule$1,
                    BootstrapModule,
                    UserModule,
                    UrlTranslationModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ReturningCustomerLoginComponent: {
                                selector: 'cx-login-form',
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [LoginFormComponent],
                exports: [LoginFormComponent],
                entryComponents: [LoginFormComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResetPasswordFormComponent {
    /**
     * @param {?} fb
     * @param {?} routingService
     * @param {?} userService
     */
    constructor(fb, routingService, userService) {
        this.fb = fb;
        this.routingService = routingService;
        this.userService = userService;
        this.subscription = new Subscription();
        this.submited = false;
        this.form = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            repassword: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription.add(this.routingService
            .getRouterState()
            .subscribe(state => (this.token = state.state.queryParams['token'])));
        this.subscription.add(this.userService.isPasswordReset().subscribe(reset => {
            if (reset) {
                this.routingService.go({ route: ['login'] });
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    resetPassword() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        const password = this.form.value['password'];
        this.userService.resetPassword(this.token, password);
    }
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    matchPassword(ac) {
        if (ac.get('password').value !== ac.get('repassword').value) {
            return { NotEqual: true };
        }
    }
}
ResetPasswordFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-reset-password-form',
                template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.label.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.placeholder.password' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{\n          'register.validation.passwordMinRequirements' | cxTranslate\n        }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.validation.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.placeholder.confirmPassword' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{\n          'register.validation.bothPasswordMustMatch' | cxTranslate\n        }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.action.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ResetPasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: RoutingService },
    { type: UserService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResetPasswordModule {
}
ResetPasswordModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ResetPasswordComponent: { selector: 'cx-reset-password-form' },
                        },
                    }))),
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    I18nModule,
                ],
                declarations: [ResetPasswordFormComponent],
                exports: [ResetPasswordFormComponent],
                entryComponents: [ResetPasswordFormComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ForgotPasswordComponent {
    /**
     * @param {?} fb
     * @param {?} userService
     * @param {?} routingService
     */
    constructor(fb, userService, routingService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
        this.submited = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    }
    /**
     * @return {?}
     */
    requestForgotPasswordEmail() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.requestForgotPasswordEmail(this.form.value.userEmail);
        this.routingService.go({ route: ['login'] });
    }
}
ForgotPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-forgot-password',
                template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.label.emailAddress' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.placeholder.emailAddress' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{\n          'forgottenPassword.validation.enterValidEmail' | cxTranslate\n        }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.action.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\"\n    >{{ 'common.action.cancel' | cxTranslate }}</a\n  >\n</form>\n",
                styles: [".reset-password h1{margin:var(--cx-margin,0)}.reset-password button{margin:var(--cx-margin,30px 0 0)}.reset-password a{margin:var(--cx-margin,20px 0 0)}"]
            }] }
];
/** @nocollapse */
ForgotPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UserService },
    { type: RoutingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ForgotPasswordModule {
}
ForgotPasswordModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UrlTranslationModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ForgotPasswordComponent: { selector: 'cx-forgot-password' },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [ForgotPasswordComponent],
                exports: [ForgotPasswordComponent],
                entryComponents: [ForgotPasswordComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserComponentModule {
}
UserComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LoginModule,
                    LoginFormModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UserModule,
                    UrlTranslationModule,
                    RegisterComponentModule,
                    ResetPasswordModule,
                    ForgotPasswordModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainModule {
}
MainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    GlobalMessageComponentModule,
                    UserComponentModule,
                    CmsModule$1,
                    LoginModule,
                    HeaderModule,
                    UiFrameworkModule,
                    OutletRefModule,
                    PwaModule,
                    PageLayoutModule,
                    SeoModule,
                    PageSlotModule,
                ],
                declarations: [StorefrontComponent],
                exports: [StorefrontComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const layoutModules = [OutletRefModule, StyleRefModule];
class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MainModule,
                    ...layoutModules,
                    ConfigModule.withConfig(defaultLayoutConfig),
                ],
                providers: [
                    { provide: LayoutConfig, useExisting: Config },
                    BreakpointService,
                ],
                exports: [MainModule, ...layoutModules],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogoutGuard {
    /**
     * @param {?} auth
     * @param {?} cms
     */
    constructor(auth, cms) {
        this.auth = auth;
        this.cms = cms;
    }
    /**
     * @return {?}
     */
    canActivate() {
        this.logout();
        return this.cms.hasPage({
            id: '/logout',
            type: PageType.CONTENT_PAGE,
        });
    }
    /**
     * @protected
     * @return {?}
     */
    logout() {
        this.auth.logout();
    }
}
LogoutGuard.GUARD_NAME = 'LogoutGuard';
LogoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService }
];
/** @nocollapse */ LogoutGuard.ngInjectableDef = defineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(inject(AuthService), inject(CmsService)); }, token: LogoutGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogoutModule {
}
LogoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forChild([
                        {
                            path: 'logout',
                            canActivate: [LogoutGuard],
                            component: PageLayoutComponent,
                        },
                    ]),
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartPageComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
    }
}
CartPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-page',
                template: "<cx-page-layout [class.empty]=\"!(cart$ | async).totalItems\"></cx-page-layout>\n"
            }] }
];
/** @nocollapse */
CartPageComponent.ctorParameters = () => [
    { type: CartService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = { pageLabel: 'cartPage', cxPath: 'cart' };
/** @type {?} */
const routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: CartPageComponent,
        data: ɵ0,
    },
];
class CartPageModule {
}
CartPageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule.forChild(routes),
                    PageLayoutModule,
                    CartDetailsModule,
                    OutletRefModule,
                    CmsModule$1,
                ],
                declarations: [CartPageComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HardcodedCheckoutComponent {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req).pipe(map(event => {
            if (event instanceof HttpResponse && this.shouldBeIntercepted(event)) {
                event = event.clone({ body: this.addComponent(event.body) });
            }
            return event;
        }));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    shouldBeIntercepted(event) {
        return event.url.indexOf('pageLabelOrId=multiStepCheckoutSummaryPage') > -1;
    }
    /**
     * @private
     * @param {?} body
     * @return {?}
     */
    addComponent(body) {
        if (body.contentSlots && body.contentSlots.contentSlot) {
            ((/** @type {?} */ (body))).contentSlots.contentSlot.push({
                position: 'BodyContent',
                components: {
                    component: [
                        {
                            uid: 'MultiStepCheckoutComponent',
                            typeCode: 'JspIncludeComponent',
                        },
                    ],
                },
            });
        }
        return body;
    }
}
HardcodedCheckoutComponent.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartNotEmptyGuard {
    /**
     * @param {?} cartService
     * @param {?} routingService
     */
    constructor(cartService, routingService) {
        this.cartService = cartService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.cartService.getLoaded().pipe(skipWhile(loaded => !loaded), switchMap(() => this.cartService.getActive()), map(cart => {
            if (this.cartService.isEmpty(cart)) {
                this.routingService.go({ route: ['home'] });
                return false;
            }
            return true;
        }));
    }
}
CartNotEmptyGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartNotEmptyGuard.ctorParameters = () => [
    { type: CartService },
    { type: RoutingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GuardsModule {
}
GuardsModule.decorators = [
    { type: NgModule, args: [{
                imports: [RoutingModule, CartModule],
                providers: [CartNotEmptyGuard],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationPageComponent {
}
OrderConfirmationPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation-page',
                template: "<cx-page-layout>\n  <!-- \n    TODO: as long as order confirmation isn't a cms component we render\n    the hard-coded version to  OrderConfirmationOverviewComponent\n  -->\n  <ng-template cxOutletRef=\"OrderConfirmationOverviewComponent\">\n    <cx-order-confirmation></cx-order-confirmation>\n  </ng-template>\n</cx-page-layout>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$1 = { pageLabel: 'orderConfirmationPage', cxPath: 'orderConfirmation' };
/** @type {?} */
const routes$1 = [
    // TODO: as soon as the components are moved to CMS driven components we can drop this specific OrderConfirmationPageComponent
    {
        path: null,
        canActivate: [AuthGuard, CmsPageGuard, OrderConfirmationPageGuard],
        component: OrderConfirmationPageComponent,
        data: ɵ0$1,
    },
];
class OrderConfirmationPageModule {
}
OrderConfirmationPageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OrderConfirmationModule,
                    PageLayoutModule,
                    OutletRefModule,
                    RouterModule.forChild(routes$1),
                ],
                providers: [OrderConfirmationPageGuard],
                declarations: [OrderConfirmationPageComponent],
                exports: [OrderConfirmationPageComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductPageComponent {
    constructor() { }
}
ProductPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-page',
                template: "<cx-page-layout>\n  <cx-product-details></cx-product-details>\n</cx-page-layout>\n",
                providers: [CurrentProductService]
            }] }
];
/** @nocollapse */
ProductPageComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$2 = { cxPath: 'product' }, ɵ1 = { cxRedirectTo: 'product' };
/** @type {?} */
const routes$2 = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: ProductPageComponent,
        data: ɵ0$2,
    },
    {
        path: 'Open-Catalogue/:category1/:category2/:category3/:category4/p/:productCode',
        redirectTo: null,
        data: ɵ1,
    },
];
class ProductPageModule {
}
ProductPageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule.forChild(routes$2),
                    ProductDetailsModule,
                    PageLayoutModule,
                ],
                declarations: [ProductPageComponent],
                exports: [ProductPageComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pageModules = [
    CartPageModule,
    OrderConfirmationPageModule,
    ProductPageModule,
    GuardsModule,
];
const ɵ0$3 = { pageLabel: 'homepage', cxPath: 'home' }, ɵ1$1 = { pageLabel: 'address-book', cxPath: 'addressBook' }, ɵ2 = { pageLabel: 'updatePassword', cxPath: 'updatePassword' }, ɵ3 = { pageLabel: 'orders', cxPath: 'orders' }, ɵ4 = { pageLabel: 'multiStepCheckoutSummaryPage', cxPath: 'checkout' }, ɵ5 = { pageLabel: 'login', cxPath: 'login' }, ɵ6 = { pageLabel: 'search', cxPath: 'search' }, ɵ7 = { cxPath: 'category' }, ɵ8 = { cxPath: 'brand' }, ɵ9 = { cxRedirectTo: 'category' }, ɵ10 = { cxRedirectTo: 'category' }, ɵ11 = { cxRedirectTo: 'category' }, ɵ12 = { cxRedirectTo: 'category' }, ɵ13 = { pageLabel: 'payment-details', cxPath: 'paymentManagement' }, ɵ14 = { pageLabel: 'order', cxPath: 'orderDetails' }, ɵ15 = { pageLabel: 'forgotPassword', cxPath: 'forgotPassword' }, ɵ16 = { pageLabel: 'resetPassword', cxPath: 'resetPassword' }, ɵ17 = {
    pageLabel: 'update-profile',
    cxPath: 'updateProfile',
};
class PagesModule {
}
PagesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ...pageModules,
                    PageLayoutModule,
                    LogoutModule,
                    RouterModule.forChild([
                        {
                            // This route can be dropped only when we have a mapping path to page label for content pages
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ0$3,
                        },
                        {
                            // This route can be dropped only when the link from CMS in MyAccount dropdown menu ("my-account/address-book")
                            // is the same as the page label ("address-book"). Or when we have a mapping for content pages.
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            data: ɵ1$1,
                            component: PageLayoutComponent,
                        },
                        {
                            path: null,
                            component: PageLayoutComponent,
                            canActivate: [AuthGuard, CmsPageGuard],
                            data: ɵ2,
                        },
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ3,
                        },
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard, CartNotEmptyGuard],
                            component: PageLayoutComponent,
                            data: ɵ4,
                        },
                        {
                            path: null,
                            canActivate: [NotAuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ5,
                        },
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ6,
                        },
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ7,
                        },
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ8,
                        },
                        // redirect OLD links
                        {
                            path: 'Open-Catalogue/:title/c/:categoryCode',
                            redirectTo: null,
                            data: ɵ9,
                        },
                        {
                            path: 'Open-Catalogue/:category1/:title/c/:categoryCode',
                            redirectTo: null,
                            data: ɵ10,
                        },
                        {
                            path: 'Open-Catalogue/:category1/:category2/:title/c/:categoryCode',
                            redirectTo: null,
                            data: ɵ11,
                        },
                        {
                            path: 'OpenCatalogue/:category1/:category2/:title/c/:categoryCode',
                            redirectTo: null,
                            data: ɵ12,
                        },
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            data: ɵ13,
                            component: PageLayoutComponent,
                        },
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ14,
                        },
                        {
                            path: null,
                            canActivate: [NotAuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ15,
                        },
                        {
                            path: null,
                            component: PageLayoutComponent,
                            canActivate: [NotAuthGuard, CmsPageGuard],
                            data: ɵ16,
                        },
                        {
                            path: null,
                            component: PageLayoutComponent,
                            canActivate: [AuthGuard, CmsPageGuard],
                            data: ɵ17,
                        },
                        // PLEASE ADD ALL ROUTES ABOVE THIS LINE ===============================
                        {
                            path: '**',
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                        },
                    ]),
                ],
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: HardcodedCheckoutComponent,
                        multi: true,
                    },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiModule {
}
UiModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LayoutModule, PagesModule],
                exports: [LayoutModule, PagesModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function provideConfigFromMetaTags() {
    return [provideConfigFactory(serverConfigFromMetaTagFactory, [Meta])];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorefrontModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: StorefrontModule,
            providers: [provideConfig(config), ...provideConfigFromMetaTags()],
        };
    }
}
StorefrontModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StateModule,
                    RoutingModule,
                    AuthModule.forRoot(),
                    OccModule,
                    StoreFinderModule,
                    CmsLibModule,
                    CmsModule$1,
                    UiModule,
                    UiFrameworkModule,
                    ConfigModule.forRoot(),
                    CxApiModule,
                    SmartEditModule.forRoot(),
                    MultiStepCheckoutModule,
                    I18nModule.forRoot(),
                ],
                exports: [UiModule],
                declarations: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addToCart = {
    addToCart: {
        label: {
            itemsAddedToYourCart: 'Item(s) added to your cart',
            items: 'items',
            updatingCart: 'Updating cart...',
        },
        action: {
            addToCart: 'Add to cart',
            viewCart: 'view cart',
            proceedToCheckout: 'proceed to checkout',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const address = {
    address: {
        label: {
            title: 'Title',
            firstName: 'First name',
            lastName: 'Last name',
            address1: 'Address 1',
            address2: 'Address 2 (optional)',
            country: 'Country',
            city: 'City',
            state: 'State',
            zipCode: 'Zip code',
            phoneNumber: 'Phone number (optional)',
        },
        action: {
            saveAsDefault: 'Save as default',
            chooseAddress: 'Choose address',
            backToAddressList: 'Back to address list',
            addAddress: 'Add address',
            updateAddress: 'Update address',
        },
        placeholder: {
            firstName: 'First Name',
            lastName: 'Last Name',
            streetAddress: 'Street Address',
            aptSuite: 'Apt, Suite',
            selectOne: 'Select One...',
            city: 'City',
            zipCode: 'Postal Code/Zip',
            phoneNumber: '(555) 555 - 0123',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addressBook = {
    addressBook: {
        label: {
            addNewShippingAddress: 'Add a new shipping address',
            editShippingAddress: 'Edit shipping address',
            areYouSureToDeleteAddress: 'Are you sure you want to delete this address?',
        },
        action: {
            addNewAddress: 'Add new address',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cart = {
    cart: {
        label: {
            shoppingCart: 'Shopping Cart',
            id: 'ID',
        },
        action: {
            proceedToCheckout: 'Proceed to Checkout',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cartItems = {
    cartItems: {
        label: {
            id: 'ID',
            description: 'Description',
            item: 'Item',
            itemPrice: 'Item price',
            quantity: 'Qty',
            total: 'Total',
            cartTotal: 'Cart total ({{count}} item)',
            cartTotal_plural: 'Cart total ({{count}} items)',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const checkout = {
    checkout: {
        action: {
            backToCart: 'Back to cart',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const checkoutAddress = {
    checkoutAddress: {
        label: {
            shippingAddress: 'Shipping Address',
            selectYourShippingAddress: 'Select your Shipping Address',
            defaultShippingAddress: 'Default Shipping Address',
            verifyYourAddress: 'Verify your address',
            ensureAccuracySuggestChange: 'To ensure delivery accuracy, we suggest the change selected below.',
            chooseAddressToUse: 'Please choose which address you would like to use:',
            suggestedAddress: 'Suggested address',
            enteredAddress: 'Entered address',
        },
        action: {
            addNewAddress: 'Add New Address',
            shipToThisAddress: 'Ship to this address',
            editAddress: 'Edit address',
            saveAddress: 'Save address',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const checkoutOrderConfirmation = {
    checkoutOrderConfirmation: {
        label: {
            confirmationOfOrder: 'Confirmation of Order:',
            thankYou: 'Thank you for your order!',
            invoiceHasBeenSentByEmail: 'An invoice has been sent by email. You should receive it soon.',
            orderItems: 'Order Items',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const checkoutReview = {
    checkoutReview: {
        label: {
            review: 'Review',
            orderItems: 'Order Items',
            confirmThatRead: 'I am confirming that I have read and agreed with the',
        },
        action: {
            placeOrder: 'Place Order',
            termsAndConditions: 'Terms & Conditions',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const checkoutShipping = {
    checkoutShipping: {
        label: {
            shippingMethod: 'Shipping Method',
            standardDelivery: 'Standard Delivery',
            premiumDelivery: 'Premium Delivery',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const common = {
    common: {
        label: {
            loading: 'Loading...',
            default: 'DEFAULT',
            selected: 'SELECTED',
            userGreeting: 'Hi, {{name}}',
        },
        action: {
            cancel: 'Cancel',
            delete: 'Delete',
            remove: 'Remove',
            edit: 'Edit',
            setAsDefault: 'Set as default',
            back: 'Back',
            submit: 'Submit',
            continue: 'Continue',
            signInRegister: 'Sign In / Register',
            skipToNavigation: 'Skip to navigation',
            skipToShoppingCart: 'Skip to shopping cart',
            skipToMainContent: 'Skip to main content',
            skipToFooter: 'Skip to Footer',
        },
        placeholder: {
            searchHere: 'Search here...',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const forgottenPassword = {
    forgottenPassword: {
        label: {
            resetPassword: 'Reset password',
            enterEmailAddressAssociatedWithYourAccount: 'Enter the email address associated with your account',
            emailAddress: 'Email address',
        },
        placeholder: {
            emailAddress: 'Enter email',
        },
        validation: {
            enterValidEmail: 'Please enter a valid email.',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const login = {
    login: {
        action: {
            forgotPassword: 'Forgot password?',
            signIn: 'Sign In',
            register: 'Register',
        },
        label: {
            dontHaveAccount: 'Don’t have an account',
            emailAddress: 'Email address',
            password: 'Password',
        },
        placeholder: {
            emailAddress: 'Enter email',
            password: 'Password',
        },
        validation: {
            wrongEmailFormat: 'This is not a valid email format.',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderCost = {
    orderCost: {
        label: {
            orderSummary: 'Order Summary',
            subtotal: 'Subtotal:',
            estimatedShipping: 'Estimated shipping:',
            discount: 'Discount:',
            salesTax: 'Sales Tax:',
            total: 'Total:',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderDetails = {
    orderDetails: {
        label: {
            orderId: 'Order #',
            placed: 'Placed',
            status: 'Status',
            shippedOn: 'Shipped on',
            inProcess: 'In process...',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderHistory = {
    orderHistory: {
        label: {
            orderHistory: 'Order history',
            orderId: 'Order #',
            date: 'Date',
            status: 'Status',
            total: 'Total',
            noOrders: 'We have no order records for this account.',
        },
        action: {
            startShopping: 'Start Shopping',
        },
        placeholder: {
            sortByMostRecent: 'Sort by Most recent',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderReview = {
    orderReview: {
        label: {
            shipTo: 'Ship to',
            shippingMethod: 'Shipping Method',
            billTo: 'Bill to',
            payment: 'Payment',
            cardExpires: 'Expires:',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const payment = {
    payment: {
        label: {
            payment: 'Payment',
            choosePaymentMethod: 'Choose a payment method',
            expires: 'Expires:',
            defaultPaymentMethod: 'Default Payment Method',
            paymentType: 'Payment Type',
            accountHolderName: 'Account Holder Name',
            cardNumber: 'Card Number',
            expirationDate: 'Expiration Date',
            securityCode: 'Security code (CVV)',
            saveAsDefault: 'Save as default',
            billingAddress: 'Billing address',
            sameAsShippingAddress: 'Same as shipping address',
        },
        placeholder: {
            selectOne: 'Select One...',
            accountHolderName: 'Account Holder Name',
            monthMask: 'MM',
            yearMask: 'YYYY',
        },
        action: {
            useThisPayment: 'Use this payment',
            addNewPayment: 'Add New Payment',
            changePayment: 'Change Payment',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const paymentMethods = {
    paymentMethods: {
        label: {
            paymentMethods: 'Payment methods',
            newPaymentMethodsAreAddedDuringCheckout: 'New payment methods are added during checkout.',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const productDetails = {
    productDetails: {
        label: {
            id: 'ID',
            quantity: 'Qty',
            productDetails: 'Product Details',
            specification: 'Specs',
            reviews: 'Reviews',
            shipping: 'Shipping',
        },
        action: {
            share: 'Share',
            showReviews: 'Show reviews',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const productList = {
    productList: {
        label: {
            filterBy: 'Filter by',
            appliedFilter: 'Applied Filter:',
        },
        action: {
            showLess: 'Show less...',
            showMore: 'Show more...',
            filterBy: 'Filter by',
        },
        placeholder: {
            sortByRelevance: 'Sort by Relevance',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const productReview = {
    productReview: {
        label: {
            overallRating: 'Overall Rating',
            reviewTitle: 'Review Title',
            writeYourComments: 'Write your comments',
            rating: 'Rating',
            reviewerName: 'Reviewer name (optional)',
        },
        action: {
            writeReview: 'Write a Review',
            more: 'More',
            less: 'Less',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pwa = {
    pwa: {
        label: {
            addToHomeScreenDescription: 'Add SAP storefront to your device homescreen for a faster return visit',
            noInstallationNeeded: 'No installation needed',
            fastAccessToApplication: 'Fast access to application',
        },
        action: {
            addToHomeScreen: 'Add to home screen',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const register = {
    register: {
        action: {
            confirmPassword: 'Confirm password',
            managmentInMyAccount: 'Management in My Account.',
            termsAndConditions: 'Terms & Conditions',
            signIn: 'I already have an account. Sign In',
            register: 'Register',
            confirmNewPassword: 'Confirm New Password',
            resetPassword: 'Reset Password',
        },
        label: {
            createAccount: 'Create an account',
            title: 'Title',
            firstName: 'First name',
            lastName: 'Last name',
            emailAddress: 'Email address',
            password: 'Password',
            newPassword: 'New Password',
            confirmPassword: 'Confirm password',
            /* tslint:disable:max-line-length */
            emailMarketing: 'Use my personal data to receive e-mail newsletters for marketing campaigns. To change your settings, go to Consent Management in My Account.',
            confirmThatRead: 'I am confirming that I have read and agreed with the',
        },
        placeholder: {
            selectTitle: 'Select Title',
            firstName: 'First Name',
            lastName: 'Last Name',
            emailAddress: 'Email Address',
            password: 'Password',
            confirmPassword: 'Confirm Password',
        },
        validation: {
            passwordMinRequirements: 'Password must be six characters minimum, with one uppercase letter, one number, one symbol',
            bothPasswordMustMatch: 'Both password must match',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const storeFinder = {
    storeFinder: {
        label: {
            openUntil: 'Open until',
            closed: 'Closed',
            call: 'Call',
            getDirections: 'Get Directions',
            listView: 'List View',
            mapView: 'Map View',
            noStoresFound: 'No Stores Found.',
            storeHours: 'Store hours',
            storeFeatures: 'Store features',
            fromStoresFound: 'from {{ count }} store found',
            fromStoresFound_plural: 'from {{ count }} stores found',
        },
        action: {
            findStore: 'Find store',
            useMyLocation: 'Use my location',
            viewAllStores: 'View all stores',
            contactUs: 'Contact us',
        },
        placeholder: {
            searchBox: 'Enter postal code, town or address',
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const translations = {
    en: {
        addToCart,
        address,
        addressBook,
        cart,
        cartItems,
        checkout,
        checkoutAddress,
        checkoutOrderConfirmation,
        checkoutReview,
        checkoutShipping,
        common,
        forgottenPassword,
        login,
        orderCost,
        orderDetails,
        orderHistory,
        orderReview,
        payment,
        paymentMethods,
        productDetails,
        productList,
        productReview,
        pwa,
        register,
        storeFinder,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CartComponentModule, CartDetailsModule, AddToCartModule, CartItemComponent, CartDetailsComponent, CartTotalsComponent, OrderSummaryComponent, AddToCartComponent, CheckoutComponentModule, MultiStepCheckoutModule, ShippingAddressModule, OrderConfirmationModule, SuggestedAddressDialogComponent, AddressFormComponent, PaymentFormComponent, ReviewSubmitComponent, DeliveryModeComponent, MultiStepCheckoutComponent, OrderConfirmationComponent, CmsModule$1 as CmsModule, CmsPageGuard, PageLayoutModule, PageLayoutComponent, CmsMappingService, CmsRoutesService, CmsLibModule, MiniCartComponent, FooterNavigationComponent, ParagraphComponent, ProductCarouselComponent, TabParagraphContainerComponent, NavigationComponent, CategoryNavigationComponent, ProductReferencesComponent, LinkComponent, BreadcrumbComponent, BannerComponent, ResponsiveBannerComponent, MiniCartModule, FooterNavigationModule, CmsParagraphModule, ProductCarouselModule, TabParagraphContainerModule, NavigationModule, CategoryNavigationModule, ProductReferencesModule, LinkModule, SearchBoxModule, SearchBoxComponent, SearchBoxComponentService, BreadcrumbModule, BannerModule, SiteContextSelectorModule, SiteContextComponentService, GlobalMessageComponentModule, GlobalMessageComponent, OrderModule, OrderDetailHeadlineComponent, OrderDetailItemsComponent, OrderDetailShippingComponent, OrderDetailTotalsComponent, OrderHistoryComponent, PaymentMethodsComponent, OccModule, ProductModule$1 as ProductModule, ProductDetailsModule, ProductListModule, ProductTabsModule, ProductSummaryComponent, ProductDetailsComponent, ProductImagesComponent, ProductListItemComponent, ProductGridItemComponent, ProductListComponent, ProductFacetNavigationComponent, ProductAttributesComponent, ProductReviewsComponent, ProductTabsComponent, ProductDetailOutlets, ProductTabsOutlets, StoreFinderModule, UiModule, UiFrameworkModule, ComponentsModule, MediaModule, FormComponentsModule, PaginationAndSortingModule, SpinnerComponent, PictureComponent, StarRatingComponent, ItemCounterComponent, GenericLinkComponent, PagesModule, ProductPageComponent, CartPageComponent, OrderConfirmationPageComponent, CartPageModule, ProductPageModule, LayoutModule, MainModule, BREAKPOINT, LayoutConfig, defaultLayoutConfig, BreakpointService, StorefrontComponent, HeaderComponent, UserComponentModule, LoginModule, LoginComponent, LoginFormModule, LoginFormComponent, RegisterComponent, pwaConfigurationFactory, pwaFactory, PwaModule, StorefrontModule, OutletModule, OutletService, OutletDirective, OutletRefModule, OutletRefDirective, translations, CmsComponentData, PageSlotModule, PageSlotComponent, PageComponentModule, ComponentWrapperDirective, defaultCmsContentConfig, SeoMetaService, initSeoService, SeoModule, LogoutGuard, LogoutModule, defaultCartPageConfig as ɵeg, BootstrapModule as ɵb, AddedToCartDialogComponent as ɵm, CartItemListComponent as ɵl, CartSharedModule as ɵa, CartTotalsModule as ɵn, DeliveryModeModule as ɵq, BillingAddressFormComponent as ɵu, BillingAddressFormModule as ɵt, PaymentFormModule as ɵs, PaymentMethodComponent as ɵv, PaymentMethodModule as ɵr, ReviewSubmitModule as ɵw, AddressFormModule as ɵo, ShippingAddressComponent as ɵp, PromotionsComponent as ɵk, PromotionsModule as ɵj, guards as ɵx, OrderConfirmationPageGuard as ɵy, AddressBookComponent as ɵbr, AddressBookComponentService as ɵbq, AddressBookModule as ɵbp, AddressCardComponent as ɵbs, BannerComponentService as ɵbk, NavigationUIComponent as ɵbm, NavigationComponentService as ɵbl, ProductCarouselService as ɵbn, SiteContextSelectorComponent as ɵbo, guards$1 as ɵbg, PageLayoutService as ɵbj, CmsGuardsService as ɵbi, CmsI18nService as ɵbh, OrderDetailsModule as ɵbx, OrderDetailsService as ɵby, OrderHistoryModule as ɵbt, PaymentMethodsModule as ɵbz, UpdatePasswordFormComponent as ɵcc, UpdatePasswordComponent as ɵcb, UpdatePasswordModule as ɵca, UpdateProfileFormComponent as ɵcf, UpdateProfileComponent as ɵce, UpdateProfileModule as ɵcd, OutletStyleService as ɵbf, StyleRefDirective as ɵdb, StyleRefModule as ɵda, ProductViewComponent as ɵbu, ProductReviewsModule as ɵbv, provideConfigFromMetaTags as ɵdg, AddToHomeScreenBannerComponent as ɵbe, AddToHomeScreenBtnComponent as ɵbc, AddToHomeScreenComponent as ɵbd, PWAModuleConfig as ɵz, defaultPWAModuleConfig as ɵba, AddToHomeScreenService as ɵbb, AbstractStoreItemComponent as ɵck, ScheduleComponent as ɵcp, StoreFinderGridComponent as ɵci, StoreFinderHeaderComponent as ɵcq, StoreFinderListItemComponent as ɵco, StoreFinderMapComponent as ɵcn, StoreFinderPaginationDetailsComponent as ɵcs, StoreFinderListComponent as ɵcm, StoreFinderSearchResultComponent as ɵcg, StoreFinderSearchComponent as ɵcl, StoreFinderStoreDescriptionComponent as ɵcj, StoreFinderStoresCountComponent as ɵch, StoreFinderComponent as ɵcr, CardComponent as ɵe, CardModule as ɵd, GenericLinkModule as ɵi, PaginationComponent as ɵf, SortingComponent as ɵg, SpinnerModule as ɵh, OnlyNumberDirective as ɵc, HeaderSkipperComponent as ɵcz, HeaderModule as ɵcy, HardcodedCheckoutComponent as ɵdf, CartNotEmptyGuard as ɵde, GuardsModule as ɵdd, OrderConfirmationPageModule as ɵdc, CurrentProductService as ɵbw, ForgotPasswordComponent as ɵcx, ForgotPasswordModule as ɵcw, RegisterComponentModule as ɵct, ResetPasswordFormComponent as ɵcv, ResetPasswordModule as ɵcu, addToCart as ɵdh, addressBook as ɵdj, address as ɵdi, cartItems as ɵdl, cart as ɵdk, checkoutAddress as ɵdn, checkoutOrderConfirmation as ɵdo, checkoutReview as ɵdp, checkoutShipping as ɵdq, checkout as ɵdm, common as ɵdr, forgottenPassword as ɵds, login as ɵdt, orderCost as ɵdu, orderDetails as ɵdv, orderHistory as ɵdw, orderReview as ɵdx, paymentMethods as ɵdz, payment as ɵdy, productDetails as ɵea, productList as ɵeb, productReview as ɵec, pwa as ɵed, register as ɵee, storeFinder as ɵef };

//# sourceMappingURL=spartacus-storefront.js.map