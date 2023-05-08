import { ref, watch, computed } from 'vue';

export default function search(items, itemName) {
  // este hook receberá uma propriedade de 'props' como parameter..
  //data
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');
  const sorting = ref(null);

  //methods
  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };

  const sort = (mode) => {
    sorting.value = mode;
  };
  //watch

  watch(enteredSearchTerm, (val) => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  //computed
  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) => {
        //'items.value' pq se trata de 1 REF...

        if (itemName === 'user') {
          return item.fullName.includes(activeSearchTerm.value);
        }

        if (itemName === 'project') {
          return item.value.title.includes(activeSearchTerm.value);
        }
      });
    } else if (items) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  const displayedItems = computed(() => {
    if (!sorting.value) {
      return availableItems.value;
    }
    return availableItems.value.slice().sort((u1, u2) => {
      if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  return [
    enteredSearchTerm,
    activeSearchTerm,
    availableItems,
    displayedItems,
    updateSearch,
    sort,
  ];
}
