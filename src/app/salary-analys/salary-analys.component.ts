import { FolderMetadata } from './../../../node_modules/memfs/lib/snapshot/types.d';
import { FormDataService } from '../services/form-data.service';
import { Component } from '@angular/core';
import { AnalysisComponent } from '../analysis/analysis.component';
import { SalarySortPipe } from '../pipes/salary-sort.pipe';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { SubscriptionHighlightsDirective } from '../Directive/subscription-highlights.directive';

@Component({
  selector: 'app-salary-analys',
  imports: [SalarySortPipe,TableModule, CommonModule,SubscriptionHighlightsDirective],
  templateUrl: './salary-analys.component.html',
  styleUrl: './salary-analys.component.css',
  providers: [AnalysisComponent],
})
export class SalaryAnalysComponent {
  formdata!: any;
  selectedSortOrder!: any;
  constructor(
    private analysisComponent: AnalysisComponent,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.formDataService.getFormData().subscribe((data) => {
      this.formdata = data;
    });

    this.formDataService.selectedSortOrder$.subscribe((data) => {
      this.selectedSortOrder = data;
    });
  }
}
