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
    genere:"",
    generi: [],
    actors:[],
  },

  methods:{
    cast:function(id){
      axios.get(`${this.uri}/movie/${id}/credits?api_key=${this.api_key}`)
           .then((response) =>{
             const results = response.data.cast ;
                for (var i = 0; i < 5; i++) {
                  let name = results[i].name;
                    this.actors.push(name);
                }
           });

    },
    add:function(){
      axios.get(`${this.uri}/search/movie?api_key=${this.api_key}&query=${this.search}&language=${this.language}`)
           .then((response) =>{
             const results = response.data.results ;
             // this.films =this.films.concat(results) concateno flm con serie tv;
             this.films = [...this.films, ...results ];

           });

      axios.get(`${this.uri}/search/tv?api_key=${this.api_key}&query=${this.search}&language=${this.language}`)
                .then((response) =>{
                  const results = response.data.results;
                  // this.films = this.films.concat(results)  concateno flm con serie tv;
                  this.films = [...this.films, ...results ];
                });
                this.films=[];
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

    votes:function(vote){
      let stars = '';
      for (var i = 1; i <= 5; i++){
         if (i <= Math.ceil(vote/2)) {
           stars += '<i class="fas fa-star colorato"></i>';

        }else {
           stars += '<i class="far fa-star"></i>';
        }
      }
      return stars; 
    },

  },
  mounted(){
    axios.get(`${this.uri}/genre/movie/list?api_key=${this.api_key}`)
         .then((response) =>{
          this.generi = response.data.genres;
         });
  },

});
