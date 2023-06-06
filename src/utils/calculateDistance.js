export function calculateDistance(lat1,lon1,lat2,lon2){
    if((lat1 === lat2) && (lon1 === lon2)){
        return 0
    } else {
        const R = 6371e3; 
        const radlat1 = lat1 * Math.PI/180;
        const radlat2 = lat2 * Math.PI/180;
        const deltaPhi = (lat2-lat1) * Math.PI/180;
        const deltaLambda = (lon2-lon1) * Math.PI/180;

        const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c; //in metres
        return distance
    }
}