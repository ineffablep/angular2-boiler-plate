import {
  TableModel,
  ColumnModel,
  EnumFieldType,
  EnumEditType
} from '../../sui/sui.table/sui.table.model';
import { Component, Injectable } from '@angular/core';

@Component({
  templateUrl: './sample.table.component.html'
})
export class TableSampleComponent {
  getTableModel() {
    let pic = new ColumnModel('picture', 'Picture', EnumFieldType.image);
    pic.canFilter = false;
    pic.canSort = false;
    let id = new ColumnModel('_id', 'Id');
    id.identityField = true;
    id.hidden = true;
    let eye = new ColumnModel('eyeColor', 'EyeColor', EnumFieldType.select);
    //  eye.showInQuickFilter = true;
    let age = new ColumnModel('age', 'Age', EnumFieldType.number);
    //  age.showInQuickFilter=true;
    let columns = [
      id,
      new ColumnModel('index', 'Index'),
      new ColumnModel('isActive', 'IsActive', EnumFieldType.checkbox),
      new ColumnModel('balance', 'Balance', EnumFieldType.text),
      pic,
      age,
      eye,
      new ColumnModel('fullName', 'FullName'),
      new ColumnModel('company', 'Company'),
      new ColumnModel('email', 'Email', EnumFieldType.email),
      new ColumnModel('phone', 'Phone', EnumFieldType.tel),
      new ColumnModel('address', 'Address'),
      new ColumnModel('registered', 'Registered'),
      new ColumnModel('latitude', 'Latitude'),
      new ColumnModel('longitude', 'Longitude'),
    ];

    let json = [
      {
        '_id': '5822004292107815742d5695',
        'index': 0,
        'isActive': false,
        'balance': '$1,642.05',
        'picture': 'http://placehold.it/32x32',
        'age': 32,
        'eyeColor': 'brown',
        'name': {
          'first': 'Mccray',
          'last': 'Mcdonald'
        },
        'fullName': 'Robert  , Mathis',
        'company': 'LUDAK',
        'email': 'mccray.mcdonald@ludak.ca',
        'phone': '+1 (947) 600-3682',
        'address': '335 Newton Street, Kiskimere, Wisconsin, 1497',
        'about': 'Dolore eiusmod culpa Lorem velit qui. Irure mollit ad amet culpa ullamco. Voluptate consequat eiusmod qui in qui excepteur nisi qui culpa amet enim. Est ut esse laboris labore labore sunt irure elit proident tempor eiusmod ipsum excepteur adipisicing. Ea exercitation ea sint nisi ut ea aliqua magna incididunt nisi dolor non. Tempor et elit cillum ipsum culpa do.',
        'registered': 'Friday, February 7, 2014 6:02 PM',
        'latitude': '-11.948974',
        'longitude': '-54.896103',
        'tags': [
          'aliquip',
          'quis',
          'veniam',
          'ullamco',
          'enim'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '5822004279c237f6f2ac465a',
        'index': 1,
        'isActive': true,
        'balance': '$1,622.50',
        'picture': 'http://placehold.it/32x32',
        'age': 34,
        'eyeColor': 'brown',
        'name': {
          'first': 'Penny',
          'last': 'Reid'
        },
        'fullName': 'Petra  , Mack',
        'company': 'TUBESYS',
        'email': 'penny.reid@tubesys.name',
        'phone': '+1 (857) 478-2364',
        'address': '797 Amherst Street, Whitestone, Iowa, 1953',
        'about': 'Occaecat non reprehenderit ea laborum labore. Anim pariatur esse laborum aliqua laboris. Incididunt labore excepteur nostrud esse irure reprehenderit cillum minim aute cupidatat consequat enim aliqua. Nulla ullamco dolor sit laboris eiusmod pariatur consequat nisi dolor id ad. Amet sint officia anim non magna veniam deserunt amet dolore Lorem fugiat commodo id officia. Dolor ad eu aliquip Lorem amet sit voluptate occaecat voluptate sunt ad ut.',
        'registered': 'Tuesday, December 9, 2014 4:39 PM',
        'latitude': '62.867688',
        'longitude': '32.68535',
        'tags': [
          'nulla',
          'laboris',
          'consectetur',
          'officia',
          'sunt'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '58220042622ff0dc731196d7',
        'index': 2,
        'isActive': true,
        'balance': '$1,320.78',
        'picture': 'http://placehold.it/32x32',
        'age': 39,
        'eyeColor': 'green',
        'name': {
          'first': 'Alexander',
          'last': 'Velazquez'
        },
        'fullName': 'Mclean  , Faulkner',
        'company': 'AUSTEX',
        'email': 'alexander.velazquez@austex.com',
        'phone': '+1 (817) 546-2016',
        'address': '704 Cass Place, Ventress, Guam, 9256',
        'about': 'Amet culpa voluptate ea ex qui. Enim exercitation laboris ullamco consequat reprehenderit. Consectetur ad pariatur quis adipisicing culpa aute consectetur labore ullamco eiusmod aliquip non nisi.',
        'registered': 'Wednesday, October 15, 2014 5:50 PM',
        'latitude': '39.796207',
        'longitude': '-15.930848',
        'tags': [
          'quis',
          'in',
          'cillum',
          'aliquip',
          'magna'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '582200427ce82c1e755720eb',
        'index': 3,
        'isActive': true,
        'balance': '$2,243.75',
        'picture': 'http://placehold.it/32x32',
        'age': 38,
        'eyeColor': 'blue',
        'name': {
          'first': 'Perez',
          'last': 'Sims'
        },
        'fullName': 'Elsie  , Albert',
        'company': 'ISOLOGIX',
        'email': 'perez.sims@isologix.net',
        'phone': '+1 (967) 459-3106',
        'address': '502 Schweikerts Walk, Muir, North Dakota, 2396',
        'about': 'Aliquip amet irure irure commodo nulla proident. Irure reprehenderit eu qui dolore quis in in ipsum exercitation culpa dolor ut. Non nostrud nostrud non excepteur in elit fugiat mollit aliquip enim aliqua labore. Sit do Lorem ex culpa ea reprehenderit cupidatat pariatur. Nisi laboris anim ex elit fugiat qui. Officia anim elit ea exercitation sunt commodo. Duis fugiat nulla voluptate aliqua adipisicing irure.',
        'registered': 'Sunday, June 15, 2014 3:55 PM',
        'latitude': '-41.639579',
        'longitude': '-73.484034',
        'tags': [
          'fugiat',
          'ipsum',
          'non',
          'do',
          'aliquip'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '58220042cb34ccf36847c59b',
        'index': 4,
        'isActive': false,
        'balance': '$1,847.62',
        'picture': 'http://placehold.it/32x32',
        'age': 34,
        'eyeColor': 'brown',
        'name': {
          'first': 'Alberta',
          'last': 'Burgess'
        },
        'fullName': 'Rhea  , Stein',
        'company': 'ZORK',
        'email': 'alberta.burgess@zork.biz',
        'phone': '+1 (894) 589-3347',
        'address': '385 Allen Avenue, Norris, Indiana, 7453',
        'about': 'Cillum labore do quis officia in aliqua voluptate enim ipsum do laboris consectetur esse sint. Voluptate in ullamco do reprehenderit velit irure in consequat eu Lorem Lorem eu dolore. Proident eiusmod reprehenderit tempor qui elit laborum amet consequat. Ipsum Lorem eiusmod in occaecat labore dolor. Est excepteur in esse eu est. Adipisicing consectetur nostrud cillum aliqua commodo id culpa cillum dolor culpa fugiat. Eiusmod labore culpa aliqua nostrud enim.',
        'registered': 'Sunday, October 18, 2015 11:25 PM',
        'latitude': '40.505539',
        'longitude': '-3.327058',
        'tags': [
          'nulla',
          'reprehenderit',
          'et',
          'quis',
          'ipsum'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '5822004223150412d8e7fac1',
        'index': 5,
        'isActive': false,
        'balance': '$1,581.04',
        'picture': 'http://placehold.it/32x32',
        'age': 24,
        'eyeColor': 'blue',
        'name': {
          'first': 'Valenzuela',
          'last': 'Chase'
        },
        'fullName': 'Tessa  , Mcgowan',
        'company': 'NEOCENT',
        'email': 'valenzuela.chase@neocent.co.uk',
        'phone': '+1 (828) 445-3400',
        'address': '785 Manor Court, Tuttle, Maryland, 3962',
        'about': 'Magna commodo consectetur aliqua minim non pariatur culpa qui. Laborum aliqua est labore esse. Consequat laboris laboris amet ex cillum ipsum esse aute est mollit ut. Veniam nostrud quis exercitation tempor. Aliqua Lorem velit in exercitation voluptate reprehenderit deserunt. Ex nisi cillum ad dolor ipsum qui adipisicing ex excepteur quis sunt.',
        'registered': 'Monday, June 16, 2014 2:00 AM',
        'latitude': '20.539711',
        'longitude': '32.102505',
        'tags': [
          'cillum',
          'velit',
          'enim',
          'ut',
          'proident'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '5822004244abca9653342f96',
        'index': 6,
        'isActive': true,
        'balance': '$3,196.24',
        'picture': 'http://placehold.it/32x32',
        'age': 25,
        'eyeColor': 'brown',
        'name': {
          'first': 'Lowery',
          'last': 'Saunders'
        },
        'fullName': 'Marianne  , Berg',
        'company': 'DYMI',
        'email': 'lowery.saunders@dymi.info',
        'phone': '+1 (847) 456-3946',
        'address': '292 Jamison Lane, Corinne, New Mexico, 1968',
        'about': 'Nostrud voluptate laborum ea anim laboris sit. Quis laborum velit excepteur irure tempor laboris. Quis voluptate sint ad ad occaecat voluptate culpa magna adipisicing nulla deserunt dolore mollit duis. Lorem non anim pariatur ad Lorem est. Occaecat exercitation commodo cupidatat nulla sunt nostrud anim magna in duis minim consequat est duis.',
        'registered': 'Sunday, December 6, 2015 11:47 PM',
        'latitude': '47.731289',
        'longitude': '-147.809055',
        'tags': [
          'cillum',
          'elit',
          'sunt',
          'laboris',
          'cupidatat'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '582200423e00e45524a8173b',
        'index': 7,
        'isActive': true,
        'balance': '$1,611.09',
        'picture': 'http://placehold.it/32x32',
        'age': 23,
        'eyeColor': 'brown',
        'name': {
          'first': 'Nolan',
          'last': 'Thomas'
        },
        'fullName': 'Spence  , Dawson',
        'company': 'ZAPPIX',
        'email': 'nolan.thomas@zappix.me',
        'phone': '+1 (944) 533-3827',
        'address': '666 Adelphi Street, Hoagland, Florida, 9509',
        'about': 'Reprehenderit excepteur laboris sint officia id dolore ullamco magna adipisicing cupidatat laboris. Nisi amet elit velit enim ad ex proident nulla ex Lorem magna commodo esse ea. Ipsum cupidatat sint cillum tempor non ut quis nostrud cupidatat excepteur ut. Culpa aute ad eu labore ullamco cillum consequat magna consectetur quis.',
        'registered': 'Tuesday, September 6, 2016 8:03 PM',
        'latitude': '17.502017',
        'longitude': '-26.059856',
        'tags': [
          'minim',
          'ut',
          'in',
          'nulla',
          'dolore'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '58220042939d4e30fd503b78',
        'index': 8,
        'isActive': false,
        'balance': '$1,180.38',
        'picture': 'http://placehold.it/32x32',
        'age': 32,
        'eyeColor': 'blue',
        'name': {
          'first': 'Mayra',
          'last': 'Garza'
        },
        'fullName': 'Lesley  , May',
        'company': 'MEDICROIX',
        'email': 'mayra.garza@medicroix.tv',
        'phone': '+1 (813) 413-3990',
        'address': '340 Diamond Street, Eden, Nevada, 2308',
        'about': 'Eu ipsum adipisicing cillum incididunt id mollit labore deserunt consequat. Ea adipisicing aute adipisicing irure elit adipisicing laborum ex velit. Cillum sit aute ex excepteur minim laborum adipisicing nulla veniam nulla.',
        'registered': 'Tuesday, September 15, 2015 12:17 PM',
        'latitude': '-5.823432',
        'longitude': '-78.815426',
        'tags': [
          'amet',
          'incididunt',
          'aute',
          'laborum',
          'in'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        '_id': '58220042c63de3b62991907e',
        'index': 9,
        'isActive': false,
        'balance': '$1,029.10',
        'picture': 'http://placehold.it/32x32',
        'age': 22,
        'eyeColor': 'blue',
        'name': {
          'first': 'Rachael',
          'last': 'Durham'
        },
        'fullName': 'Ericka  , Sargent',
        'company': 'MARKETOID',
        'email': 'rachael.durham@marketoid.io',
        'phone': '+1 (892) 548-3962',
        'address': '899 Olive Street, Barstow, Illinois, 1095',
        'about': 'Consequat non Lorem minim anim. Et sit aute ut elit cupidatat incididunt dolore minim elit amet cillum. Sint culpa sint esse quis exercitation. Dolore aliquip velit ullamco aute esse adipisicing consectetur. Mollit velit amet cupidatat velit nulla tempor eu anim.',
        'registered': 'Saturday, July 9, 2016 4:26 AM',
        'latitude': '54.294723',
        'longitude': '12.948833',
        'tags': [
          'tempor',
          'tempor',
          'exercitation',
          'nisi',
          'anim'
        ],
        'range': [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      }
    ];

    let tble = new TableModel(columns, json);
    //tble.getUrl = 'http://gbrdcr00017n02:5500/api/qs/kafka/topics/predefined/rubbish';
    tble.editType = EnumEditType.DialogEdit;
    // tble.cssClass = 'sui-table-all sui-padding-large sui-medium';
    // tble.tableHeader = 'Sample Table';
    // // tble.style = {'background-color': '#eeeeee'};
    // tble.headerCssClass = 'sui-padding';
    // // tble.headerStyle = {'color': '#666666', 'background-color': '#dcdcd'};
    return tble;
  }
}
