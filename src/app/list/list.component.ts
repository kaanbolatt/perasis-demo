import { Component, OnInit } from '@angular/core';
import { customerData } from '../data';
import { TreeNode } from 'primeng/api';
import { GroupType } from '../enums/selectedGroupType.enum';
interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers = customerData;
  cols!: Column[];
  files!: TreeNode[];
  selectedGroupType: GroupType = GroupType.firma;
  selectableRows!: any[];
  selectedRow: number = 10;
  constructor() {
  }

  ngOnInit(): void {
    this.groupByFirma(this.customers.data);
    this.cols = [
      { field: 'firma', header: 'Firma' },
      { field: 'grup', header: 'Grup' },
      { field: 'ad', header: 'Ad' },
      { field: 'soyad', header: 'Soyad' },
      { field: 'eposta', header: 'E-Posta' },
      { field: 'telefon', header: 'Telefon' },
      { field: 'il', header: 'İl' },
      { field: 'ilce', header: 'İlçe' }
    ];
    this.selectableRows = [
      { name: "2", value: 2 },
      { name: "5", value: 5 },
      { name: "10", value: 10 },
      { name: "15", value: 15 },
      { name: "20", value: 20 }
    ];
  }

  onRowsChange(eventTarget: any) {
    this.selectedRow = Number(eventTarget);
    switch (this.selectedGroupType) {
      case GroupType.firma:
        this.groupByFirma(this.customers.data);
        break;
      case GroupType.sehir:
        this.groupByCity(this.customers.data);
        break;
      case GroupType.grup:
        this.groupByGrup(this.customers.data);
        break;
      default:
        break;
    }
  }

  groupByFirma(data: any[]): any[] {
    this.selectedGroupType = GroupType.firma;
    this.files = [];
    const groupedData: any = {};

    data.forEach(item => {
      const group = item.firma;
      if (!groupedData[group]) {
        groupedData[group] = [];
      }
      groupedData[group].push(item);
    });

    const groupedArray = Object.keys(groupedData).map(key => ({
      firma: key,
      items: groupedData[key]
    }));


    groupedArray.forEach((element: any) => {
      let node = {
        data: {
          firma: element.firma
        },
        children: [
          {
            data: {
            }
          }
        ]
      };
      element.items.forEach((q: any) => {
        let childNode = {
          data: {
            firma: q.firma,
            grup: q.grup,
            ad: q.ad,
            soyad: q.soyad,
            eposta: q.eposta,
            telefon: q.telefon,
            il: q.il,
            ilce: q.ilce
          }
        }

        node.children.push(childNode);
      });
      this.files.push(node);
    });
    return groupedArray;
  }

  groupByCity(data: any[]): any[] {
    this.selectedGroupType = GroupType.sehir;
    this.files = [];
    const groupedData: any = {};

    data.forEach(item => {
      const group = item.il;
      if (!groupedData[group]) {
        groupedData[group] = [];
      }
      groupedData[group].push(item);
    });

    const groupedArray = Object.keys(groupedData).map(key => ({
      il: key,
      items: groupedData[key]
    }));


    groupedArray.forEach((element: any) => {
      let node = {
        data: {
          il: element.il
        },
        children: [
          {
            data: {
            }
          }
        ]
      };
      element.items.forEach((q: any) => {
        let childNode = {
          data: {
            firma: q.firma,
            grup: q.grup,
            ad: q.ad,
            soyad: q.soyad,
            eposta: q.eposta,
            telefon: q.telefon,
            il: q.il,
            ilce: q.ilce
          }
        }

        node.children.push(childNode);
      });
      this.files.push(node);
    });
    return groupedArray;
  }

  groupByGrup(data: any[]): any[] {
    this.selectedGroupType = GroupType.grup;
    this.files = [];
    const groupedData: any = {};

    data.forEach(item => {
      const group = item.grup;
      if (!groupedData[group]) {
        groupedData[group] = [];
      }
      groupedData[group].push(item);
    });

    const groupedArray = Object.keys(groupedData).map(key => ({
      grup: key,
      items: groupedData[key]
    }));


    groupedArray.forEach((element: any) => {
      let node = {
        data: {
          grup: element.grup
        },
        children: [
          {
            data: {
            }
          }
        ]
      };
      element.items.forEach((q: any) => {
        let childNode = {
          data: {
            firma: q.firma,
            grup: q.grup,
            ad: q.ad,
            soyad: q.soyad,
            eposta: q.eposta,
            telefon: q.telefon,
            il: q.il,
            ilce: q.ilce
          }
        }

        node.children.push(childNode);
      });
      this.files.push(node);
    });
    return groupedArray;
  }

}
