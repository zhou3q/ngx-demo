import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import { TreeNode } from 'primeng/primeng';
import { Car } from './model/car';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private files: TreeNode[];
  private selectedFiles: TreeNode[];
  private tree1: TreeNode[];
  private tree2: TreeNode[];
  private lineData: any;
  private barData: any;
  private pieData: any;
  private radarData: any;
  // table
  private cars: Car[];
  constructor(private appservice: AppService) {
    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#A5D6A7',
          fill: true
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: '#FF9E80',
          fill: true
        }
      ]
    };
    this.barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.pieData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
    this.radarData = {
      labels: ['吃', '喝', '睡', '设计', '代码', '骑车', '跑步'],
      datasets: [
        {
          label: '数据一',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: '#BA68C8',
          pointBackgroundColor: '#BA68C8',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#BA68C8',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: '数据二',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };
  }
  ngOnInit(): void {
    this.appservice.getFiles('../assets/json/treefile.json').then(files => this.files = files);
    this.appservice.getFiles('../assets/json/tree1.json').then(tree => this.tree1 = tree);
    this.appservice.getFiles('../assets/json/tree2.json').then(tree => this.tree2 = tree);
    // table
    this.appservice.getCarsSmall('../assets/json/car.json').then(cars => this.cars = cars);
  }
  nodeSelect(event) {
    const selNode = event.node;
    console.log('选中了：' + selNode.label);
    // alert('选中了：' + selNode.label);
  }
  loadNode(event) {
    if (event.node && event.node.label === 'Pictures') {
      console.log('选中了：' + event.node.label);
      // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      this.appservice.getFiles('../assets/json/treefileLazy.json').then(nodes => event.node.children = nodes);
    }
  }
  // tslint:disable-next-line:member-ordering
  display = false;

  showDialog() {
    this.display = true;
  }
}
