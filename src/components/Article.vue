<template>
  <div class="am-g am-g-fixed blog-fixed blog-content">
    <div class="am-u-sm-12">
      <a id="startReplacehold"></a>
      <article class="am-article blog-article-p">
        <div class="am-article-hd">
          <h1 class="am-article-title blog-text-center">{{ article.title }}</h1>
          <p class="am-article-meta blog-text-center">
              <span><a href="#" class="blog-color">{{ renderCategory }} &nbsp;</a></span>-
              <span>{{ dateFormat(article.createDate) }}</span>
          </p>
        </div>        
        <div class="am-article-bd">
        <img src="assets/i/f17.jpg" alt="" class="blog-entry-img blog-article-margin">          
        <p class="am-article-lead" v-html="compliedMarkDown(article.content)" v-highlight></p>
        </div>
      </article>
        
        <!-- <div class="am-g blog-article-widget blog-article-margin">
          <div class="am-u-lg-4 am-u-md-5 am-u-sm-7 am-u-sm-centered blog-text-center">
            <span class="am-icon-tags"> &nbsp;</span><a href="#">标签</a> , <a href="#">TAG</a> , <a href="#">啦啦</a>
            <hr>
            <a href=""><span class="am-icon-qq am-icon-fw am-primary blog-icon"></span></a>
            <a href=""><span class="am-icon-wechat am-icon-fw blog-icon"></span></a>
            <a href=""><span class="am-icon-weibo am-icon-fw blog-icon"></span></a>
          </div>
        </div> -->

        <hr>
        <ul class="am-pagination blog-article-margin">
          <li class="am-pagination-prev">
            <a href="javascript:void(0);" :class="prevArticleClass" @click="initArticle(prev_article.id)">&laquo; {{ prev_article.title }}</a>

          </li>
          <li class="am-pagination-next">
            <a href="javascript:void(0);" :class="nextArticleClass" @click="initArticle(next_article.id)">{{ next_article.title }} &raquo;</a>
          </li>
        </ul>
        
        <hr>

        <form class="am-form am-g">
            <h3 class="blog-comment">评论</h3>
          <fieldset>
            <div class="am-form-group am-u-sm-4 blog-clear-left">
              <input type="text" class="" placeholder="名字">
            </div>
            <div class="am-form-group am-u-sm-4">
              <input type="email" class="" placeholder="邮箱">
            </div>

            <div class="am-form-group am-u-sm-4 blog-clear-right">
              <input type="password" class="" placeholder="网站">
            </div>
        
            <div class="am-form-group">
              <textarea class="" rows="5" placeholder="一字千金"></textarea>
            </div>
        
            <p><button type="submit" class="am-btn am-btn-default">发表评论</button></p>
          </fieldset>
        </form>

        <hr>
    </div>
  </div>
</template>

<script>
import dateUtil from '../utils/dateUtil'
import stringUtil from '../utils/stringUtil'
import marked from 'marked'
import vHighlight from 'highlight.js'

export default {
  data: () => {
    return {
      article: {},
      prev_article: {'id': null, 'title': '没有了'},
      next_article: {'id': null, 'title': '没有了'}
    }
  },
  components: {
    marked,
    vHighlight
  },
  beforeMount() {
    this.initArticle(this.$route.query.id);
    this.initMarked();
  },
  methods: {
    initArticle: function(id) {
      if(id == null) {
        return ;
      }

      this.$axios.get('/apis/article/' + id)
        .then( (res) => {
          if (res.data.code == 1) {
            let map = res.data.data;
            this.article = map['article'];

            if(!stringUtil.isNull(map['prev'])) {
              this.prev_article = map['prev'];
            } else {
              this.prev_article = {'id': null, 'title': '没有了'};
            }
            if(!stringUtil.isNull(map['next'])) {
              this.next_article = map['next'];
            } else {
              this.next_article = {'id': null, 'title': '没有了'};
            }

            window.setTimeout(function() {
              $("html, body").animate({ scrollTop: $("#startReplacehold").offset().top }, {duration: 100, easing: "swing" });
            }, 100); 
          }
        } );
    },
    initMarked() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });
    },
    dateFormat: function(value) {
      return dateUtil.format('yyyy-MM-dd', value);
    },
    compliedMarkDown(content) {
      if(!stringUtil.isNull(content)) {
        return marked(content, { sanitize: true });
      } else {
        return '';
      }
    }
  },
  computed: {
    prevArticleClass: function() {
      return {
        'page_disabled': this.prev_article.id == null
      }
    },
    nextArticleClass: function() {
      return {
        'page_disabled': this.next_article.id == null
      }
    },
    renderCategory: function() {
      return this.article.category != null ? this.article.category.name : '';
    }
  }
}
</script>

<style>
pre {
  padding: 0px;
  border: none;
}

.am-g {
  text-align: left;
}

.page_disabled {
  background-color: #e6e6e6 !important;
  color: inherit;
  cursor: default;
}
.page_disabled a:hover {
  color: inherit;
}
.page_disabled a:visited {
  color: inherit;
  background-color: #fff;
}

.am-article-lead {
  word-wrap: break-word;
}

#searchForm {
  display: none;
}
</style>
