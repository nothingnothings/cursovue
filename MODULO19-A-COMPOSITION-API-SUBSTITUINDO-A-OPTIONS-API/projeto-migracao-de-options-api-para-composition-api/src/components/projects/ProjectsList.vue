<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { watch, ref, computed, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],

  setup(props) {
    //methods
    const updateSearch = (val) => {
      enteredSearchTerm.value = val;
    };

    //data
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    //computed
    const hasProjects = computed(() => {
      return props.user.projects && availableProjects.value.length > 0;
    });

    const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return props.user.projects;
    });

    //watch
    watch(enteredSearchTerm, (val) => {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val;
        }
      }, 300);
    });

    // watch(props.user, () => { ////NÃO PODEMOS FAZER WATCH DE 'user' EM SI, PQ O 'user' EM SI __ NAÕ É UM REACTIVE VALUE...
    // watch(props, () => {  ////como 'props' é um REACTIVE OBJECT, é possível fazer WATCH de seu value...
    //   enteredSearchTerm.value = '';
    // });

    // PORÉM, MELHOR DO QUE ISSO É __ FAZER WATCH DA REF DE 'user', que pode ser extraída por meio de 'toRefs' e OBJECT DESTRUCTURING, tipo assim:

    const { user } = toRefs(props);

    watch(user, () => {
      enteredSearchTerm.value = '';
    });

    return {
      enteredSearchTerm,
      activeSearchTerm,
      hasProjects,
      availableProjects,
      updateSearch,
    };
  },

  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //   };
  // },
  // computed: {
  //   hasProjects() {
  //     return this.user.projects && this.availableProjects.length > 0;
  //   },
  //   availableProjects() {
  //     if (this.activeSearchTerm) {
  //       return this.user.projects.filter((prj) =>
  //         prj.title.includes(this.activeSearchTerm)
  //       );
  //     }
  //     return this.user.projects;
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   },
  //   user() {
  //     this.enteredSearchTerm = '';
  //   },
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>