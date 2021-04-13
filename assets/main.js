Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    films: [],
    // serietv:[],
    search: "",
    uri:"https://api.themoviedb.org/3",
    api_key:"a2391ef42653febeddc812031ec86499",
    language:"it",
  },

  methods:{
    add:function(){
      axios.get(`${this.uri}/search/movie?api_key=${this.api_key}&query=${this.search}&language=${this.language}`)
           .then((response) =>{
             const results = response.data.results;
             // this.films =this.films.concat(results);
             //anche questa this.films = response.data.results;
             // console.log(this.films);
             this.films = [...this.films, ...results ];
             console.log(this.films);
           });
      axios.get(`${this.uri}/search/tv?api_key=${this.api_key}&query=${this.search}&language=${this.language}`)
                .then((response) =>{
                  const results = response.data.results;
                  // this.films = this.films.concat(results)  concateno flm con serie tv;
                  // console.log(this.films); this.serietv = response.data.results;
                  this.films = [...this.films, ...results ];
                });
    },
    get_title: function(obj){
       if (obj.title) {
          return obj.title;
       }else {
         return obj.name;
       }
    },
    get_original_title:function(obj){
      if (obj.original_title) {
         return obj.original_title;
      }else {
        return obj.original_name;
      }
    },
    vote:function(voto){
      return Math.round(voto / 2)
    }

  }


});
