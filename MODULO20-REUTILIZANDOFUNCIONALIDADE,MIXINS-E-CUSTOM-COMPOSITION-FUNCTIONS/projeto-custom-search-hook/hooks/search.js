import { ref, watch, computed } from 'vue';

export default function search(items, itemName) {
  // este hook receberá uma propriedade de 'props' como parameter..
  //data
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  //methods
  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
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
          console.log(item);
          return item.title.includes(activeSearchTerm.value);
        }
      });
    } else if (items) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  return [enteredSearchTerm, activeSearchTerm, availableItems, updateSearch];
}
