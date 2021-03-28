<template>
  <div>
    <!-- <h2 class="t-h-2 m-l-b">Articles categories</h2>
    <div class="articles-filters m-xl-b">
      <Button
        v-for="(item, index) in categories"
        :key="index"
        black
        class="m-l-r"
        :active="item.active"
        @click.native="changeCategory(item.label, item.active)"
      >
        {{ item.label }}
      </Button>
    </div> -->
    <Grid class="m-xl-tb">
      <Row>
        <h2 class="t-h-2 m-l-b">Articles categories</h2>
        <div class="articles-filters m-xl-b">
          <Button
            v-for="(item, index) in categories"
            :key="index"
            black
            class="m-l-r"
            :active="item.active"
            @click.native="changeCategory(item.label, item.active)"
          >
            {{ item.label }}
          </Button>
        </div>
      </Row>
      <Row class="articles">
        <Column
          v-for="(article, index) in filter"
          :key="index + article"
          :lg="5"
          :md="8"
          :sm="16"
          style="padding: unset; margin-bottom: 2rem;"
        >
          <article
            class="articles-item p-xl-all"
            @mouseenter="article.active = true"
            @mouseleave="article.active = false"
          >
            <div class="articles-item-meta">
              <h6 class="t-h-6 p-m-b">{{ article.date }}</h6>
              <Tag :active="article.active">{{ article.category }}</Tag>
            </div>
            <div class="articles-item-content" :data-category="article.category">
              <h3 class="t-h-3 m-xl-b">{{ article.title }}</h3>
              <div class="article-paragraph">
                <p
                  class="t-p m-xl-b"
                  v-if="!article.active"
                >
                  {{ article.paragraph }}
                </p>
              </div>
              <Button
                v-if="article.active"
                class="m-xl-b"
                black
                :link="article.link"
              >
                Read more
              </Button>
            </div>
          </article>
        </Column>
      </Row>
    </Grid>
  </div>
</template>

<script>
import Button from './Button';
import Grid from './Grid';
import Column from './Column';
import Row from './Row';
import Tag from './Tag';
export default {
  components: {
    Grid,
    Row,
    Column,
    Button,
    Tag,
  },
  data() {
    return {
      categories: [],
      category: 'all',
      articles: [
        {
          date: '11.06.2020',
          active: false,
          title: 'Jak daleko sięga wolność słowa?',
          category: 'law',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.wprost.pl/nauka/10047383/jak-daleko-siega-wolnosc-slowa.html',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'Wybór będzie kobietą ',
          category: 'politics',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/3336490516451996/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'TVPiS przelało czarę goryczy',
          category: 'law',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/3320388204728894/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'Kto daje i odbiera, ten się w piekle poniewiera',
          category: 'politics',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/3299816783452703/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'Między nami, wilkami',
          category: 'politics',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/2342704515830606/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'Czy wolność znaczy to samo co bezpieczeństwo?',
          category: 'lifestyle',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/1189858587781877/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'I kto jest debeściak?',
          category: 'lifestyle',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/1138361222931614/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'Polska - (nie)demokratyczne państwo (bez)prawa',
          category: 'law',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/1134261283341608/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'Dlaczego ludzie nienawidzą Ameryki?',
          category: 'lifestyle',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/913393985428340/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'Wolna amerykanka?',
          category: 'law',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/933852090049196/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'There’s no truth without Ruth',
          category: 'law',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/1169279473173122/',
        },
        {
          date: '11.06.2020',
          active: false,
          title: 'Zaufaj nogom',
          category: 'law',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit debitis culpa minima architecto!',
          link: 'https://www.facebook.com/PrawoiPolityka/photos/a.431205510313859/980644548703283/',
        },
      ]
    }
  },
  computed: {
    isActive() {
    },
    filter() {
      if (this.category === 'all') {
        return this.articles
      } else {
        return this.articles.filter((item) => item.category === this.category)
      }
    }
  },
  created() {
    const arr = []
    let categories = this.articles.map((item) => item.category);
    categories = Array.from(new Set(categories))
    categories.forEach((item) => {
      const arrItem = { label : item, active: false }
      arr.push(arrItem)
    })
    const all = { label : 'all', active: true }
    arr.push(all)
    this.categories = arr
  },
  methods: {
    changeCategory(category, active) {
      if (active) {
        return
      }
      this.category = category;
      this.categories.forEach((item) => {
        const cat = item;
        cat.active = false;
      })
      const index = this.categories.findIndex(item => item.label === category)
      this.categories[index].active = true;
    },
  }
}
</script>
<style lang="scss" scoped>
  @use '../style/colors';
  @use '../style/spacing';
  @use '../style/typography';

  .articles {
    justify-content: space-between;
    &-filters {
      display:flex;
      width: 100%;
    }
    &-paragraph {
      width: 100%;
      height: 50px;
    }
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 300px;
      width: 400px;
      border: 2px solid colors.$c-black;
      background-color: colors.$c-white;

      @media (max-width: 1650px) {
        width: 350px;
      }

      @media (max-width: 1024px) {
        width: 250px;
      }

      &:hover {
        background-color: colors.$c-black;
        cursor: pointer;

        .t-h-3,
        .t-h-5,
        .t-h-6,
        .t-p {
          color: colors.$c-white;
        }
      }

      &-content {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;

        .btn {
          &:hover {
            border: 2px solid colors.$c-white;
          }
        }

        .t-h-5 {
          text-transform: uppercase;
        }

        .t-p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

      }
    }

  }
</style>
