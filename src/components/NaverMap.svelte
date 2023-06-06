<script>
    import {onMount} from 'svelte'
import { run } from 'svelte/internal';
    import {calculateDistance}from '../utils/calculateDistance'
    //VARIABLES
    let map = null;
    let location = {latitude: 37.5666805, longitude:126.9784147}
    let marker = null;
    let watchId; 
    let path = [];
    let polyline;
    let isRunning = false;
    let runningDistance = 0

    onMount(() => {
        //Map Instantiation
        let mapOptions = {
            center: new naver.maps.LatLng(location.latitude,location.longitude),
            zoom: 17,
        } 
        map = new naver.maps.Map('map', mapOptions);
        //Marker Instantiation
        marker = new naver.maps.Marker({
            position:  new naver.maps.LatLng(location.latitude,location.longitude),
            map: map
        })

        //Callback functions for GEOLOCATION API
        const successCallback = (position) => {
            let prevLocation = location
            location = position.coords;
            

            //MapUpdateLocation
            let updatedLocation = new naver.maps.LatLng(location.latitude,location.longitude);
            map.setCenter(updatedLocation);
            marker.setPosition(updatedLocation);
            if(isRunning){
                const distance = calculateDistance(prevLocation.latitude,prevLocation.longitude,location.latitude,location.longitude)
                console.log(distance)
                runningDistance += distance
                path.push(updatedLocation);
                drawPath(path);
            }
        } 

        const errorCallback = (error) => {
            console.log(error);
        }

        watchId = navigator.geolocation.watchPosition(successCallback,errorCallback,{enableHighAccuracy: true});
    })

    //function for handling RUNNING
    const startRunning =  () => {
        isRunning = true;
        console.log('started running')
    }
    const stopRunning = () => {
        isRunning = false;
        console.log('stopped running')
        console.log(runningDistance)
    }
    //function for drawing running trail
    const drawPath = (path) => {
        if(polyline){
            polyline.setPath(path);
        } else {
            polyline = new naver.maps.Polyline({
                map:map,
                path: path,
                strokeColor: '#f00',
                strokeWeight: 3
            })
        }
    }
</script>

<div>
    <div id="map"></div>
    <div>
        {#if isRunning}
        <button on:click={stopRunning}>Stop Running</button>
        {:else}
        <button on:click={startRunning}>Start Running</button>
        {/if}
    </div>
</div>

<style>
    #map{
        width: 100%;
        height: 400px;
    }
</style>