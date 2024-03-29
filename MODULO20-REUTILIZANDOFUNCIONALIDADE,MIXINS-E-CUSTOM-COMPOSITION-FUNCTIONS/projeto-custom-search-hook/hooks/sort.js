import { ref, computed } from 'vue';

export default function useSort(availableItems, sortProperty = 'fullName') {
  const sorting = ref(null);

  const displayedItems = computed(() => {
    console.log('UPDATED');
    if (!sorting.value) {
      return availableItems.value;
    }
    return availableItems.value.slice().sort((u1, u2) => {
      if (sorting.value === 'asc' && u1[sortProperty] > u2[sortProperty]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (
        sorting.value === 'desc' &&
        u1[sortProperty] > u2[sortProperty]
      ) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  const sort = (mode) => {
    sorting.value = mode;
  };

  return [displayedItems, sorting, sort];
}
