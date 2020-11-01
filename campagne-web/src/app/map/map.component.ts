import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj.js';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import TileJson from 'ol/source/TileJson';
import VectorSource from 'ol/source/Vector';
import {Icon,Style} from 'ol/style';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
map;
chicago;
VectorSource;
vectorLayer;
rasterLayer;
  constructor() { }

  ngOnInit(): void {
   this.initilizeMap();
  }
  initilizeMap() {
  this.chicago=new Feature({
  geometry:new Point(fromLonLat([-87.623177, 41.881832]))
 });
 this.chicago.setStyle(new Style({
 image:new Icon(({
 color:'#8959AB',
 crossOrigin:'anonymous',
 src:'assets/img/mark.jpg',
 imgSize:[20,20]
 }))
 }));
 this.VectorSource=new VectorSource({
 features:[this.chicago]
 });
 this.vectorLayer=new VectorLayer({
 source:this.VectorSource
 });
  this.rasterLayer=new TileLayer({
  source:new TileJson({
  url:'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
   crossOrigin:''
  })
 });
      this.map = new Map({
        target: 'map',
        layers: [this.rasterLayer,this.vectorLayer],
        view: new View({
          center: fromLonLat([2.896372,44.60240]),
          zoom: 3
        })
      });
    }

}
