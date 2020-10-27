<template>
    <ul>
      <VideoListItem 
        v-for="video in videos" 
        :video="video"
        :key="video.etag"/> <!--Ini bind(menurunkan nilai) video yang di dapat dari videos ke componen VideoListItem  -->
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem'
export default {
    name :'VideoList',
    components: {
      VideoListItem
    },
    props:{
      videos: Array
    },
};
</script>

<style>

</style>