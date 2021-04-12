Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    films: [],
    serietv:[],
    search: "",
  },

  methods:{
    add:function(){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a2391ef42653febeddc812031ec86499&query=${this.search}`)
           .then((response) =>{

             // const results =response.data.results;
             // this.films =this.films.concat(results);
             // console.log(this.films);
             this.films = response.data.results;
             console.log(this.films);
           });
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=a2391ef42653febeddc812031ec86499&query=${this.search}`)
                .then((response) =>{
                
                  // const results = response.data.results;
                  // this.films = this.films.concat(results);
                  // console.log(this.films);
                  this.serietv = response.data.results;
                });
    }
  }


});
