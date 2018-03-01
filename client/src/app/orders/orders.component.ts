import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {RestApiService} from '../rest-api.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
    order: any;

    constructor(private data: DataService, private rest: RestApiService) {
    }

    async ngOnInit() {
        try {
            const data = await this.rest.get('http://localhost:3030/api/accounts/orders');
            data['success']
                ? (this.order = data['orders'])
                : this.data.error('Could not fetch orders.');
        } catch (error) {
            this.data.error(error['message']);
        }
    }
}
