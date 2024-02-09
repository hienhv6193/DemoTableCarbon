import {AfterViewInit, Component, OnChanges, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {
  OnInit,
  Input
} from "@angular/core";
import {
  IconService,
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';
import {SharedModule} from "../shared/shared.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  title = 'carbon-angular-tutorial';

  @Input() model = new TableModel();
  disabled = false;
  @Input() size = "md";
  @Input() showSelectionColumn = true;
  @Input() enableSingleSelect = false;
  @Input() striped = false;
  @Input() sortable = true;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  @Input() ariaLabelledby = "table";
  @Input() ariaDescribedby = "desc";

  selectPage(page: number) {
    this.model.currentPage = page;
  }

  @ViewChild("overflowMenuItemTemplateImg", {static: false})
  protected overflowMenuItemTemplateImg: TemplateRef<any> | undefined;

  @ViewChild("overflowMenuItemTemplate", {static: false})
  protected overflowMenuItemTemplate: TemplateRef<any> | undefined;

  @ViewChild("overflowMenuItemTemplateEdit", {static: false})
  protected overflowMenuItemTemplateEdit: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateRemove", {static: false})
  protected overflowMenuItemTemplateRemove: TemplateRef<any> | undefined;


  constructor(protected iconService: IconService) {
  }

  ngOnInit(): void {
    // this.iconService.registerAll([UserAvatar20]);
  }

  ngOnChanges(): void {

  }


  ngAfterViewInit() {
    this.model.data = [
      [
        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Name 1"}),
        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplateEdit,
        }),
        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplateRemove,
        }),
      ],
      [
        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Name 2"}),
        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplateEdit,
        }),
        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplateRemove,
        }),
      ],
      [
        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Name 3"}),
        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplateEdit,
        }),
        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplateRemove,
        }),
      ],
      [
        new TableItem({
          data: {id: "4"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Name 4"}),
        new TableItem({
          data: {id: "4"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "4"},
        template: this.overflowMenuItemTemplateEdit,
      }),
        new TableItem({
          data: {id: "4"},
          template: this.overflowMenuItemTemplateRemove,
        }),
      ],
    ];
    this.model.header = [
      new TableHeaderItem({data: "Image"}),
      new TableHeaderItem({data: "Name"}),
      new TableHeaderItem({data: "Add"}),
      new TableHeaderItem({data: "Edit"}),
      new TableHeaderItem({data: "Remove"}),
    ];
  }

  isActiveOpenCUD: boolean = false;

  toggleActive() {
    this.isActiveOpenCUD = !this.isActiveOpenCUD;
  }

  toggleClose() {
    this.isActiveOpenCUD = false;
  }
}
