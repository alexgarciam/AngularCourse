"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "hola tio!!!!";
        this.user = {
            "id": 25,
            "name": "alex",
            "username": "agmarchena"
        };
        this.users = [
            { "id": 25, "name": "alex", "username": "agmarchena" },
            { "id": 26, "name": "paco", "username": "pacooo" },
            { "id": 27, "name": "pepe", "username": "pepeee" }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    \n    <header>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\">\n             <a href=\"/\" class=\"navbar-brand\">My anguila app</a>\n            </div>\n        </nav>\n    </header>\n\n\n    <main>\n\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <p>The user is {{user.name}} ({{user.username}}) </p>\n\n            <div *ngIf=\"users\">\n\n                <ul class=\"list-group users-list\">\n                <li class=\"list-group-item\" *ngFor=\"let usuario of users\">\n                    usuario {{usuario.id}} es {{usuario.name}} ({{usuario.username}})\n                </li>\n                </ul>\n\n            </div>\n\n        </div>\n        <div class=\"col-sm-8\">\n\n            <div class=\"jumbotron\">\n                <h1>Welcome to my App!!</h1>\n                <p>{{message}}</p>\n            </div>\n            \n        </div>\n    </div>\n    \n\n    \n\n    </main>\n\n\n\n    <footer class=\"text-center\">\n        Copyright &copy; 2017\n    </footer>\n\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map