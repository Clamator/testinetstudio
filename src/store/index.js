import { Store } from 'vuex';
import usersModule from './modules/users.module';
import filtersModule from './modules/filters.module';

// здесь просто подключаем модули
function createStore() {
  const store = new Store({
    modules: {
        usersModule,
        filtersModule
    },
  });


  return store;
}

export default createStore;
