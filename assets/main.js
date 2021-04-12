Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    films: [],
    search: "",
  },

  methods:{
    add:function(){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a2391ef42653febeddc812031ec86499&query=${this.search}`)
           .then((response) =>{
             console.log(response.data.results);
             this.films = response.data.results;
             console.log(this.films);
           });
    }
  }


});
