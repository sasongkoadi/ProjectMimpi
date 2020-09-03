<template>
    <div id='app' class="container">
        <SearchBar @searchChange="onSearch"/>
        <VideoList :videos="videos" />
    </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import axios from 'axios'
const API_KEY = 'AIzaSyAGem9seQTk1ahP6u2f48Sls557UyvkAYQ'

export default {
    name: 'App',
    data(){
        return {
            videos: []
        }
    },
    components: {
        SearchBar,
        VideoList
    },
    methods: {
        onSearch(searchTerm){
            axios
            .get('https://www.googleapis.com/youtube/v3/search', {
                params:{
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            })
            .then(response => {
                this.videos = response.data.items;
                console.log(this.videos);    
            })
        }
    },
}
</script>

