import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-user-filter',
  imports: [],
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.css',
})
export class UserFilterComponent implements OnChanges {
  @Input() selectedStatus!: any;
  @Output() filteredUsers = new EventEmitter<any[]>();
  filtered: any[] = [];
  
  constructor(private formDataService: FormDataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedStatus'] && changes['selectedStatus'].currentValue !== undefined) {
      this.filterUsers();
    }
  }
  filterUsers() {
    this.formDataService.getFormData().subscribe((data) => {
        this.filtered = data.filter(
          (user) => {

            const employmentStatus = Array.isArray(user.employmentStatus)
              ? user.employmentStatus[0]
              : user.employmentStatus;
            return employmentStatus === JSON.parse(this.selectedStatus);
          });
        this.filteredUsers.emit(this.filtered);
      });
    }
  
}
