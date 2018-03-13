import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ship = [
      { id: 1, name: 'теплоход Чкалов'},
      { id: 2, name: 'пароход Гагарин'},
      { id: 3, name: 'крейсер Варяг'},
      { id: 4, name: 'теплоход Нижний Новгород'}
    ];
    const route = [
      { id: 1, name: 'Нижний Новгород - Астрахань' },
      { id: 2, name: 'Москва - Санкт-Петербург' },
      { id: 3, name: 'Калининград - Санкт-Петербург' }
    ];
    const port = [
      { id: 1, name: 'Речной вокзал' },
      { id: 2, name: 'Окский грузовой порт' },
      { id: 3, name: 'Чкаловск' },
      { id: 4, name: 'Астрахань' },
      { id: 5, name: 'Москва' },
      { id: 6, name: 'Санкт-Петербург' }
    ];
    return {ship, route, port};
  }
}
