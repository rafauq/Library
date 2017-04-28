"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var category_service_1 = require("./category.service");
var CategoryComponent = (function () {
    function CategoryComponent(categoryService) {
        this.categoryService = categoryService;
    }
    ;
    CategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (genres) { return _this.genres = genres; }, function (err) {
            console.log(err);
        });
    };
    CategoryComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
    };
    CategoryComponent.prototype.ngOnInit = function () {
        if (!this.selectedCategory) {
            this.getCategories();
        }
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    core_1.Component({
        selector: 'genres',
        templateUrl: 'app/category/category.component.html',
        styleUrls: ['app/category/category.component.css', 'app/offer.css'],
        providers: [category_service_1.CategoryService],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map