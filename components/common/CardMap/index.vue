<template>
  <el-card
    :body-style="{ padding: '0px' }"
    class="cursor-pointer rounded-[8px]"
  >
    <gmap-map :center="center" :zoom="15" style="width: 100%; height: 150px">
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <button type="button" style="background-color: pink">Hello!</button>
        <ul>
          <li>List Item</li>
          <li>Another One</li>
        </ul>
      </gmap-info-window>

      <gmap-marker
        v-for="(m, i) in markers"
        :key="i"
        :position="m.position"
        :clickable="true"
        @click="toggleInfoWindow(m, i)"
      ></gmap-marker>
    </gmap-map>
    <div class="p-[10px]">
      <div class="flex items-start justify-between">
        <div class="flex flex-col">
          <span class="text-[16px] font-bold">name map</span>
          <span class="text-[13px] text-[blue]">description map</span>
        </div>
        <i class="el-icon-star-on text-[red]"></i>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-[4px]">
          <i class="el-icon-error text-[red] text-[12px]"></i>
          <span class="text-[12px] text-[#888]">sos</span>
        </div>
        <el-button type="danger" class="py-[5px] bg-[red]">Danger</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'CardMap',
  data: () => {
    return {
      center: {
        lat: 47.376332,
        lng: 8.547511,
      },
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      // optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      markers: [
        {
          position: {
            lat: 47.376332,
            lng: 8.547511,
          },
          infoText: 'Marker 1',
        },
      ],
    }
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.infoText

      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      }
      // if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
  },
}
</script>

<style></style>
