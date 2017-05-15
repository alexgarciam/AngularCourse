import { Component } from '@angular/core';    

@Component({
    selector:'my-app',
    template:`
    
    <header>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
             <a href="/" class="navbar-brand">My anguila app</a>
            </div>
        </nav>
    </header>


    <main>

    <div class="row">
        <div class="col-sm-4">
            <p>The user is {{user.name}} ({{user.username}}) </p>

            <div *ngIf="users">

                <ul class="list-group users-list">
                <li class="list-group-item" *ngFor="let usuario of users">
                    usuario {{usuario.id}} es {{usuario.name}} ({{usuario.username}})
                </li>
                </ul>

            </div>

        </div>
        <div class="col-sm-8">

            <div class="jumbotron">
                <h1>Welcome to my App!!</h1>
                <p>{{message}}</p>
            </div>
            
        </div>
    </div>
    

    

    </main>



    <footer class="text-center">
        Copyright &copy; 2017
    </footer>

    `
})

export class AppComponent{
    message ="hola tio!!!!";
     user={
        "id":25,
        "name":"alex",
        "username":"agmarchena"
    }

    users=[
        {"id":25, "name":"alex","username":"agmarchena"},
        {"id":26, "name":"paco","username":"pacooo"},
        {"id":27, "name":"pepe","username":"pepeee"}
    ]
}