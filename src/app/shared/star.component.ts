import { Component, OnChanges, Input,
            Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    startWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.startWidth = Math.round(this.rating);
    } 

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
    }
}
