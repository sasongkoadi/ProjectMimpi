<template >
   <ul v-if="videos[5].collumn === false" class="list-group">
      <VideoListItem 
      v-for="video in videos" 
      :video="video"
      :key="video.etag" 
      @videoSelect="onVideoSelect">
      </VideoListItem>
   </ul>
   <ul v-else class="list-group col-md-4" >
      <VideoListItem 
      v-for="video in videos" 
      :video="video"
      :key="video.etag" 
      @videoSelect="onVideoSelect">
      </VideoListItem>
   </ul>
</template>

<script>
import VideoListItem  from './VideoListItem'
export default {
   name: 'VideoList',
   data(){
      return {
         collumn: "list-group" 
      }
   },
   props: {
      videos: Array
   },
   components:{
       VideoListItem
   },
   methods: {
      onVideoSelect(video){
         this.$emit('videoSelect', video)
         this.videos[5].collumn = true
      }
   },
}
</script>

<style>
    
</style>