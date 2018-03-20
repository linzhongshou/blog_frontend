<template>
  <div>
    <nav class="am-g am-g-fixed blog-fixed blog-nav">
      <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only blog-button" data-am-collapse="{target: '#blog-collapse'}" ><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

      <div class="am-collapse am-topbar-collapse" id="blog-collapse">
        <ul class="am-nav am-nav-pills am-topbar-nav">
          <router-link to="/index" tag="li" active-class="am-active" @click.native="tabClick('index')"><a>首页</a></router-link>
          <router-link to="/about" tag="li" active-class="am-active" @click.native="tabClick('about')"><a>关于我</a></router-link>
        </ul>
        <form class="am-topbar-form am-topbar-right am-form-inline" role="search" id="searchForm">
          <div class="am-input-group">
            <input type="text" class="am-form-field am-input-sm" v-model="searchContent" placeholder="文章搜索">
            <span class="am-input-group-btn">
              <button class="am-btn am-btn-success" type="button" @click="searchArticle()"><span class="am-icon-search"></span> </button>
            </span>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import stringUtil from '@/utils/stringUtil'
import bus from '@/assets/js/bus'

export default {
  data: () => {
    return {
      searchContent: ''
    }
  },
  methods: {
    searchArticle: function() {
      let content = stringUtil.trimString(this.searchContent);
      bus.$emit('searchArticle', content);
    },
    tabClick: function(tab) {
      if('index' == tab) {
        window.document.forms[0].style.display = 'block';
      } else {
        window.document.forms[0].style.display = 'none';
      }
    }
  }
}
</script>


<style>
.am-btn-success {
  background-color: #10D07A;
  border-color: #10D07A !important;
}
</style>
