<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li v-for="hero in heroes" :key="hero.id">
        <router-link :to="`/detail/${hero.id}`">
          <span class="badge">{{ hero.id }}</span>
          {{ hero.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Hero } from '../Hero';
import { uppercase } from '@/filters/uppercase';
import { HeroService } from '@/services/HeroService';

export default Vue.extend({
  name: 'HeroesComponent',
  data() {
    return {
      heroes: [] as Hero[],
      heroService: HeroService
    };
  },
  created() {
    this.getHeroes();
  },
  methods: {
    getHeroes() {
      this.heroService
        .getHeroes()
        .then((heroes: Hero[]) => (this.heroes = heroes));
    }
  },
  filters: {
    uppercase
  }
});
</script>

<style lang="scss" scoped>
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607d8b;
  background-color: #ddd;
  left: 0.1em;
}

.heroes a {
  color: #333;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color: #607d8b;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}
</style>
