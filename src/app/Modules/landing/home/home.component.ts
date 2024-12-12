import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicHostDirective } from '../dynamic-host.directive';
import { DynamicComponent1Component } from '../dynamic-component1/dynamic-component1.component';
import { DynamicComponent2Component } from '../dynamic-component2/dynamic-component2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  @ViewChild(DynamicHostDirective, { static: true }) dynamicHost!: DynamicHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent('component1'); // Load the first component by default
  }

  loadComponent(component: string) {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    let componentFactory: any;
    if (component === 'component1') {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent1Component);
      this.setActiveTab('tab1');
    } else if (component === 'component2') {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent2Component);
      this.setActiveTab('tab2');
    }

    viewContainerRef.createComponent(componentFactory);
  }

  private setActiveTab(tabId: string) {
    // Remove 'active' class from all tabs
    document.querySelectorAll('.list-group-item').forEach((el) => el.classList.remove('active'));

    // Add 'active' class to the selected tab
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add('active');
    }
  }
}

