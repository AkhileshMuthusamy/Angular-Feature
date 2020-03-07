import { Component, OnInit, ViewChild } from '@angular/core';
import { ITreeOptions } from 'angular-tree-component';
import { ContextMenuService } from 'ngx-contextmenu';

@Component({
  selector: 'app-ng-tree',
  templateUrl: './ng-tree.component.html',
  styleUrls: ['./ng-tree.component.css']
})
export class NgTreeComponent implements OnInit {



  nodes = [
    {
      id: 0,
      name: 'root1',
      // classes: ['text-bold'],
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      classes: ['text-bold'],
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    },
    {
      id: 8,
      name: 'root3'
    }
  ];
  options: ITreeOptions = {
    actionMapping: {
        mouse: {
            contextMenu: (model: any, node: any, event: any) => {
                this.onContextMenu(event, node.data.name);
                console.log('in context menu...', node.data.name);
            }
        }
    },
  };

  @ViewChild('contextMenu', {static: false}) contextMenu;

  constructor(private contextMenuService: ContextMenuService) { }

  ngOnInit() {
  }

  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({
      // Optional - if unspecified, all context menu components will open
      contextMenu: this.contextMenu,
      event: $event,
      item: item,
    });
    $event.preventDefault();
    $event.stopPropagation();
  }

  showMessage(message: string) {
    console.log(message);
  }

}
