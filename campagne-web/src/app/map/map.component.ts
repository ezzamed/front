import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
//import { fromLonLat } from 'ol/proj.js';
import * as olProj from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
//import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import TileJson from 'ol/source/TileJson';
import VectorSource from 'ol/source/Vector';
import { Icon, Style, Stroke} from 'ol/style';

import VectorLayer from 'ol/layer/Vector';
import TileLayer from 'ol/layer/Tile';
import { CampagnevacService } from '../services/campagnevac.service';
import { ThrowStmt } from '@angular/compiler';

import Vector from 'ol/layer/Vector';

import LineString from 'ol/geom/LineString';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map;
  public chicago;
  public vectorSource;
  public vectorLayer;
  public rasterLayer;
  public camps;
  public agents;
  public camp;
  public agent;
  public places;
  public markerSource;

  constructor(private campService: CampagnevacService) { }

  ngOnInit(){
    this.campService.getAllCampagnes()
    .subscribe((res)=>{
      this.camps=res;
    })
    this.campService.getAllAgents()
    .subscribe((res)=>{
      this.agents = res;
    })
    this.markerSource = new VectorSource();
    this.vectorLayer = new VectorLayer();
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new Vector({
          source: this.markerSource,
        }),
        this.vectorLayer
      ],
      view: new View({
        center: olProj.fromLonLat([-15.964884, 18.079500]),
        zoom: 1
      })
    });
  }

  afficher(){
    var coords = [];
    this.places = [];
    //var place: {};
    this.campService.getAgentCampagnesVaccinations(this.camp, this.agent)
    .subscribe((res)=>{
      let data;//: any;
      data = res;
      data.map(vac=>{
        let marker = {"lon": vac.longiude, "lat": vac.latitude};
        this.places.push(marker);
        console.log(vac.id);
      });
      this.places.map((place)=>{
        coords.push([place.lon, place.lat]);
        this.addMarker(place.lon, place.lat);
      });
      var lineString = new LineString(coords);
      // transform to EPSG:3857
      lineString.transform('EPSG:4326', 'EPSG:3857');
      
      // create the feature
      var feature = new Feature({
        geometry: lineString,
        name: 'Line'
      });
      
      var lineStyle = new Style({
        stroke: new Stroke({
          color: '#ffcc33',
          width: 10
        })
      });
      
      var source = new VectorSource({
        features: [feature]
      });
      var vector = new VectorLayer({
        source: source,
        style: [lineStyle]
      });
      this.map.addLayer(vector);
      
      //console.log(this.places);
    })
  }

  addMarker(lon, lat) {
    console.log('lon:', lon);
    console.log('lat:', lat);
  
    var iconFeature = new Feature({
      geometry: new Point(olProj.transform([lon, lat], 'EPSG:4326',
        'EPSG:3857')),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });
  
    this.markerSource.addFeature(iconFeature);
  }

  submit(data){
    this.camp = data.camp;
    this.agent = data.agent;
    this.afficher();
  }

  /*
  ngOnInit(): void {

    this.initilizeMap();
  }*/
  initilizeMap() {
    /*
    this.chicago = new Feature({
      geometry: new Point(fromLonLat([-87.623177, 41.881832]))
    });
    this.chicago.setStyle(new Style({
      image: new Icon(({
        color: '#8959AB',
        crossOrigin: 'anonymous',
        src: 'assets/img/mark.jpg',
        imgSize: [20, 20]
      }))
    }));
    
    this.vectorSource = new VectorSource({
      features: [this.chicago]
    });
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });
    
    this.rasterLayer = new TileLayer({
      source: new TileJson({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
        crossOrigin: ''
      })
    });
    this.map = new Map({
      target: 'map',
      layers: [this.rasterLayer, this.vectorLayer],
      view: new View({
        center: fromLonLat([2.896372, 44.60240]),
        zoom: 3
      })
    });
    */
  }

}
