<template>
    <div id='app' class="container">
        <SearchBar @searchChange="onSearch"/>
        <div v-if="rowEnable === true" class="row">
            <VideoDetail :video="selectedVideo" />
            <VideoList :videos="videos" @videoSelect="onVideoSelect" />
        </div>
        <div v-else>
            <VideoDetail :video="selectedVideo" />
            <VideoList :videos="videos" @videoSelect="onVideoSelect" />
        </div>
   </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import axios from 'axios'
//const API_KEY = 'AIzaSyAGem9seQTk1ahP6u2f48Sls557UyvkAYQ'
//const API_KEY_1 ='AIzaSyBCzHIBG06Dzb4Dtc-iW66u_t11rza4dI0'
const API_KEY_2 = 'AIzaSyBjj_K6lIvTpH8U4yd69G6OLwiFgExXbOk'

export default {
    name: 'App',
    data(){
        return {
            videos: [],
            selectedVideo: null, 
            rowEnable: false 
        }
    },
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    methods: {
        onSearch(searchTerm){
            axios
            .get('https://www.googleapis.com/youtube/v3/search', {
                params:{
                    key: API_KEY_2,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            })
            .then(response => {
                this.rowEnable = false 
                this.selectedVideo = null
                this.videos = response.data.items;
                this.videos.push({
                    collumn: false 
                }) 
            })
        },
        onVideoSelect(video){
            this.rowEnable = true 
            this.selectedVideo = video
        }
    },
}
</script>

