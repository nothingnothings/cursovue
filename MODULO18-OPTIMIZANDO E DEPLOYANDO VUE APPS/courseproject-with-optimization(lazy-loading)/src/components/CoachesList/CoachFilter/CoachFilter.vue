<template>
  <base-card>
    <h2>Find your Coach</h2>
    <span class="filter-option">
      <!-- <input
        type="checkbox"
        id="frontend"
        checked
        @change="toggleFilter('frontend')"
      /> -->
      <input
        type="checkbox"
        id="frontend"
        checked
        @change="
          (event) => {
            toggleFilter(event);
          }
        "
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <!-- <input
        type="checkbox"
        id="backend"
        checked
        @change="toggleFilter('backend')"
      /> -->
      <input
        type="checkbox"
        id="backend"
        checked
        @change="
          (event) => {
            toggleFilter(event);
          }
        "
      />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <!-- <input
        type="checkbox"
        id="career"
        checked
        @change="toggleFilter('career')"
      /> -->
      <input
        type="checkbox"
        id="career"
        checked
        @change="
          (event) => {
            toggleFilter(event);
          }
        "
      />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  emits: ["toggle-filter"],

  methods: {
    toggleFilter(
      event
      // filterType
    ) {
      //   switch (filterType) {
      //     case "frontend":
      //       this.filters.frontend = !this.filters.frontend;
      //       break;
      //     case "backend":
      //       this.filters.backend = !this.filters.backend;
      //       break;
      //     case "career":
      //       this.filters.career = !this.filters.career;
      //   }

      const inputId = event.target.id; //backend, frontend, career
      const isActive = event.target.checked; //true or false

      const updatedFilters = {
        ...this.filters,
      };

      updatedFilters[inputId] = isActive;

      this.filters = updatedFilters;

      this.$emit("toggle-filter", updatedFilters);
    },
  },
};
</script>
<style>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}
.filter-option label {
  margin-left: 0.25rem;
}
.filter-option.active label {
  font-weight: bold;
}
</style>