import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true,
    // template: '<h1>This is inline template</h1>',
    templateUrl: './header.component.html',
    // styles: ['h3 {color: red}'],
    styleUrl:'./header.component.css',
    // styleUrls:['./header.component.css'],
})
export class HeaderComponent {}