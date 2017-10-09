import { Component, OnInit } from '@angular/core';

import { Event } from './../shared/event';
import { Bigv } from './../shared/bigv';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit {

  bigvs: Bigv[] = [
                      {
                        name: '這人牛逼',
                        image: './../../assets/images/t5.jpg',
                        category: '設計',
                        description: 'Gogoro 網站UI設計師',
                        results: 23,
                      },
                      {
                        name: '這人依然牛逼',
                        image: './../../assets/images/t6.jpg',
                        category: '後端開發',
                        description: 'Gogoro 網站後端設計師',
                        results: 29,
                      },
                      {
                        name: '這人哪位',
                        image: './../../assets/images/CC_10.jpg',
                        category: '專案管理',
                        description: 'Gogoro 專案經理(???)',
                        results: 10,
                      }
  ]

  events: Event[] = [
                      {
                        name: '30天AngularJS從0到1',
                        image: '',
                        category: '前端開發',
                        host: '是誰不重要',
                        progress: 0,
                        description: '30天從初學到建出一個完整應用',
                      },
                      {
                        name: '攝影百日挑戰',
                        image: '',
                        category: '攝影',
                        host: 'HK Photographer',
                        progress: 10,
                        description: '挑戰你的街拍極限',
                      },
                      {
                        name: '連續52周UI設計鐵人賽',
                        image: '',
                        category: 'UI/UX',
                        host: '有這人嗎',
                        progress: 20,
                        description: '就看你能不能一整年每星期都出一個UI介面設計啊',
                      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
