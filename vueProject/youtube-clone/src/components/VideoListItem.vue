<template >
   <li class="list-group-item media">
      <img class="mr-3"  :src="thumbnailVid"/>
      <div class="media-body">
         {{ video.snippet.title }}
      </div>
         
   </li> 
</template>

<script>
export default {
   name: 'VideoListItem',
   props: {
      video: Object
   },
   computed: {
      thumbnailVid(){
         return this.video.snippet.thumbnails.default.url 
      }
   }
} 
</script>

<style >
    
</style>