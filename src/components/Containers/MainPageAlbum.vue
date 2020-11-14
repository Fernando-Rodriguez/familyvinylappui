<template>
  <div class="main-container">
    <search-bar class="search-container" @button-clicked="SearchFunction"/>
    <div class="container">
      <div v-for="(album, index) in DisplayAlbums" v-bind:Key="index">
        <router-link v-bind:to="`/${album.id}/album`">
          <album-card v-bind:albumModel="album" @card-clicked="AlbumClickedOn"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumCard from '../InteractivePieces/AlbumCard';
import SearchBar from "@/components/InteractivePieces/SearchBar";
import GetToken from "@/Utilities/TokenManager";
import Albums from '../../TestData/Data';

export default {
  name: "MainPageAlbum",
  components:{
    SearchBar,
    AlbumCard
  },
  mounted() {
  //this.GetData();
  //this.GetFakeData();
  //GetToken();
    this.TokenManager();
  },

  methods:{

    AlbumClickedOn(params){
      let filterList = [];

      for(let i = 0; i < this.albumModelArray.length; i++ ){
        if(this.albumModelArray[i] === params){
          filterList.push(this.albumModelArray[i]);
        }
      }
      this.ClickedAlbum = filterList;
      this.ClickedAlbum.forEach(a => {
        alert(a.album);
      })

    },

    async TokenManager() {
      let statusCode = await this.GetData();

      if (statusCode !== 200) {
        await GetToken();
        await this.GetData();
      }
    },

    async GetData(){
      const token = localStorage.getItem("token");

      try{
        const response = await fetch("https://familyvinylapp.azurewebsites.net/api/ownedalbums", {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          redirect: 'follow', // manual, *follow, error
        });

        const data = await response.json();
        const albums = data.owned_Albums;
        this.albumModelArray = albums;
        this.DisplayAlbums = this.albumModelArray;
        return response.statusCode;
      }
      catch(e) {
        console.log(e);
      }
    },

    SearchFunction(searchParam){

      if(searchParam === ""){
        this.DisplayAlbums = this.albumModelArray;
      }
      else{
        this.DisplayAlbums = this.albumModelArray.filter((album) => {
          return (
              album.album.toLowerCase() === searchParam.toLowerCase() ||
              album.artist.toLowerCase() === searchParam.toLowerCase());
        });
      }
    },
    GetFakeData(){
      this.DisplayAlbums = Albums.owned_Albums;
      this.albumModelArray = Albums.owned_Albums;
    }

  },

  data(){
    return {
      albumModelArray: [],
      SearchStuff: "",
      DisplayAlbums: [],
      ClickedAlbum: []
    };
  }
}

</script>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container{
  box-sizing: border-box;
  background-color: #171717;
  margin:10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>