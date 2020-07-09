<template>
  <div v-if="hero">
    <h2>{{ hero.name | uppercase }} Details</h2>
    <div>
      <span>id:</span>
      {{ hero.id }}
    </div>
    <div>
      <label>
        name:
        <input v-model="hero.name" placeholder="name" />
      </label>
    </div>
    <button @click="goBack()">go back</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Hero } from '../Hero';
import { uppercase } from '@/filters/uppercase';
import { HeroService } from '../services/HeroService';

export default Vue.extend({
  name: 'HeroDetailComponent',
  props: {
    id: {
      type: String,
      validator: (value: string): boolean => {
        const parsedValue = parseInt(value, 10);
        return isNaN(parsedValue) ? false : true;
      }
    }
  },
  data() {
    return {
      hero: null as null | Hero,
      heroService: HeroService
    };
  },
  computed: {
    parsedId(): number {
      return parseInt(this.id, 10);
    }
  },
  created() {
    this.getHero();
  },
  methods: {
    getHero() {
      const id = this.parsedId;
      this.heroService
        .getHero(id)
        .then((hero: null | Hero) => (this.hero = hero));
    },
    goBack() {
      this.$router.back();
    }
  },
  filters: {
    uppercase
  }
});
</script>

<style lang="scss" scoped>
/* HeroDetailComponent's private CSS styles */
label {
  display: inline-block;
  width: 3em;
  margin: 0.5em 0;
  color: #607d8b;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: 0.4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>
