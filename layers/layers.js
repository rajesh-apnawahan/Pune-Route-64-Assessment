var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pimpalesaudagar_1 = new ol.format.GeoJSON();
var features_Pimpalesaudagar_1 = format_Pimpalesaudagar_1.readFeatures(json_Pimpalesaudagar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimpalesaudagar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimpalesaudagar_1.addFeatures(features_Pimpalesaudagar_1);
var lyr_Pimpalesaudagar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimpalesaudagar_1, 
                style: style_Pimpalesaudagar_1,
                popuplayertitle: "Pimpale saudagar",
                interactive: true,
                title: '<img src="styles/legend/Pimpalesaudagar_1.png" /> Pimpale saudagar'
            });
var format_PimpleGaurav_2 = new ol.format.GeoJSON();
var features_PimpleGaurav_2 = format_PimpleGaurav_2.readFeatures(json_PimpleGaurav_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpleGaurav_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpleGaurav_2.addFeatures(features_PimpleGaurav_2);
var lyr_PimpleGaurav_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpleGaurav_2, 
                style: style_PimpleGaurav_2,
                popuplayertitle: "Pimple Gaurav",
                interactive: true,
                title: '<img src="styles/legend/PimpleGaurav_2.png" /> Pimple Gaurav'
            });
var format_Keshavnagar_3 = new ol.format.GeoJSON();
var features_Keshavnagar_3 = format_Keshavnagar_3.readFeatures(json_Keshavnagar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keshavnagar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keshavnagar_3.addFeatures(features_Keshavnagar_3);
var lyr_Keshavnagar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Keshavnagar_3, 
                style: style_Keshavnagar_3,
                popuplayertitle: "Keshavnagar",
                interactive: true,
                title: '<img src="styles/legend/Keshavnagar_3.png" /> Keshavnagar'
            });
var format_Yavatmal_4 = new ol.format.GeoJSON();
var features_Yavatmal_4 = format_Yavatmal_4.readFeatures(json_Yavatmal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yavatmal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yavatmal_4.addFeatures(features_Yavatmal_4);
var lyr_Yavatmal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yavatmal_4, 
                style: style_Yavatmal_4,
                popuplayertitle: "Yavatmal",
                interactive: true,
                title: '<img src="styles/legend/Yavatmal_4.png" /> Yavatmal'
            });
var format_Lahagaon_5 = new ol.format.GeoJSON();
var features_Lahagaon_5 = format_Lahagaon_5.readFeatures(json_Lahagaon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahagaon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahagaon_5.addFeatures(features_Lahagaon_5);
var lyr_Lahagaon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahagaon_5, 
                style: style_Lahagaon_5,
                popuplayertitle: "Lahagaon",
                interactive: true,
                title: '<img src="styles/legend/Lahagaon_5.png" /> Lahagaon'
            });
var format_KirkeeBoundary_6 = new ol.format.GeoJSON();
var features_KirkeeBoundary_6 = format_KirkeeBoundary_6.readFeatures(json_KirkeeBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkeeBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkeeBoundary_6.addFeatures(features_KirkeeBoundary_6);
var lyr_KirkeeBoundary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KirkeeBoundary_6, 
                style: style_KirkeeBoundary_6,
                popuplayertitle: "Kirkee Boundary",
                interactive: true,
                title: '<img src="styles/legend/KirkeeBoundary_6.png" /> Kirkee Boundary'
            });
var format_PimpreChinchwadboundary_7 = new ol.format.GeoJSON();
var features_PimpreChinchwadboundary_7 = format_PimpreChinchwadboundary_7.readFeatures(json_PimpreChinchwadboundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpreChinchwadboundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpreChinchwadboundary_7.addFeatures(features_PimpreChinchwadboundary_7);
var lyr_PimpreChinchwadboundary_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpreChinchwadboundary_7, 
                style: style_PimpreChinchwadboundary_7,
                popuplayertitle: "Pimpre Chinchwad boundary",
                interactive: true,
                title: '<img src="styles/legend/PimpreChinchwadboundary_7.png" /> Pimpre Chinchwad boundary'
            });
var format_PuneGeoBoundary_8 = new ol.format.GeoJSON();
var features_PuneGeoBoundary_8 = format_PuneGeoBoundary_8.readFeatures(json_PuneGeoBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneGeoBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneGeoBoundary_8.addFeatures(features_PuneGeoBoundary_8);
var lyr_PuneGeoBoundary_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneGeoBoundary_8, 
                style: style_PuneGeoBoundary_8,
                popuplayertitle: "Pune Geo Boundary",
                interactive: true,
                title: '<img src="styles/legend/PuneGeoBoundary_8.png" /> Pune Geo Boundary'
            });
var format_AllPunePopsep_9 = new ol.format.GeoJSON();
var features_AllPunePopsep_9 = format_AllPunePopsep_9.readFeatures(json_AllPunePopsep_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopsep_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopsep_9.addFeatures(features_AllPunePopsep_9);
var lyr_AllPunePopsep_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopsep_9, 
                style: style_AllPunePopsep_9,
                popuplayertitle: "All Pune Pop sep",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopsep_9.png" /> All Pune Pop sep'
            });
var format_AllPunePopReprojected_10 = new ol.format.GeoJSON();
var features_AllPunePopReprojected_10 = format_AllPunePopReprojected_10.readFeatures(json_AllPunePopReprojected_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopReprojected_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopReprojected_10.addFeatures(features_AllPunePopReprojected_10);
var lyr_AllPunePopReprojected_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopReprojected_10, 
                style: style_AllPunePopReprojected_10,
                popuplayertitle: "All Pune Pop Reprojected",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopReprojected_10.png" /> All Pune Pop Reprojected'
            });
var format_hospital_11 = new ol.format.GeoJSON();
var features_hospital_11 = format_hospital_11.readFeatures(json_hospital_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_11.addFeatures(features_hospital_11);
var lyr_hospital_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospital_11, 
                style: style_hospital_11,
                popuplayertitle: "hospital",
                interactive: true,
                title: '<img src="styles/legend/hospital_11.png" /> hospital'
            });
var format_Industries_12 = new ol.format.GeoJSON();
var features_Industries_12 = format_Industries_12.readFeatures(json_Industries_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_12.addFeatures(features_Industries_12);
var lyr_Industries_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industries_12, 
                style: style_Industries_12,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_12.png" /> Industries'
            });
var format_Temple_13 = new ol.format.GeoJSON();
var features_Temple_13 = format_Temple_13.readFeatures(json_Temple_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_13.addFeatures(features_Temple_13);
var lyr_Temple_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_13, 
                style: style_Temple_13,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_13.png" /> Temple'
            });
var format_Offices_14 = new ol.format.GeoJSON();
var features_Offices_14 = format_Offices_14.readFeatures(json_Offices_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offices_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offices_14.addFeatures(features_Offices_14);
var lyr_Offices_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Offices_14, 
                style: style_Offices_14,
                popuplayertitle: "Offices",
                interactive: true,
                title: '<img src="styles/legend/Offices_14.png" /> Offices'
            });
var format_PublicBuildings_15 = new ol.format.GeoJSON();
var features_PublicBuildings_15 = format_PublicBuildings_15.readFeatures(json_PublicBuildings_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_15.addFeatures(features_PublicBuildings_15);
var lyr_PublicBuildings_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicBuildings_15, 
                style: style_PublicBuildings_15,
                popuplayertitle: "Public Buildings",
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_15.png" /> Public Buildings'
            });
var format_trafficsignal_16 = new ol.format.GeoJSON();
var features_trafficsignal_16 = format_trafficsignal_16.readFeatures(json_trafficsignal_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trafficsignal_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trafficsignal_16.addFeatures(features_trafficsignal_16);
var lyr_trafficsignal_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trafficsignal_16, 
                style: style_trafficsignal_16,
                popuplayertitle: "traffic signal",
                interactive: true,
                title: '<img src="styles/legend/trafficsignal_16.png" /> traffic signal'
            });
var format_Rt64DMtrs_17 = new ol.format.GeoJSON();
var features_Rt64DMtrs_17 = format_Rt64DMtrs_17.readFeatures(json_Rt64DMtrs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64DMtrs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64DMtrs_17.addFeatures(features_Rt64DMtrs_17);
var lyr_Rt64DMtrs_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64DMtrs_17, 
                style: style_Rt64DMtrs_17,
                popuplayertitle: "Rt 64D Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt64DMtrs_17.png" /> Rt 64D Mtrs'
            });
var format_64DStops_18 = new ol.format.GeoJSON();
var features_64DStops_18 = format_64DStops_18.readFeatures(json_64DStops_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_64DStops_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_64DStops_18.addFeatures(features_64DStops_18);
var lyr_64DStops_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_64DStops_18, 
                style: style_64DStops_18,
                popuplayertitle: "64D Stops",
                interactive: true,
    title: '64D Stops<br />\
    <img src="styles/legend/64DStops_18_0.png" /> 1.0<br />\
    <img src="styles/legend/64DStops_18_1.png" /> 10.0<br />\
    <img src="styles/legend/64DStops_18_2.png" /> 11.0<br />\
    <img src="styles/legend/64DStops_18_3.png" /> 12.0<br />\
    <img src="styles/legend/64DStops_18_4.png" /> 13.0<br />\
    <img src="styles/legend/64DStops_18_5.png" /> 14.0<br />\
    <img src="styles/legend/64DStops_18_6.png" /> 15.0<br />\
    <img src="styles/legend/64DStops_18_7.png" /> 2.0<br />\
    <img src="styles/legend/64DStops_18_8.png" /> 3.0<br />\
    <img src="styles/legend/64DStops_18_9.png" /> 4.0<br />\
    <img src="styles/legend/64DStops_18_10.png" /> 5.0<br />\
    <img src="styles/legend/64DStops_18_11.png" /> 6.0<br />\
    <img src="styles/legend/64DStops_18_12.png" /> 7.0<br />\
    <img src="styles/legend/64DStops_18_13.png" /> 8.0<br />\
    <img src="styles/legend/64DStops_18_14.png" /> 9.0<br />\
    <img src="styles/legend/64DStops_18_15.png" /> <br />'
        });
var format_Rt64Pop1000Mtrs_19 = new ol.format.GeoJSON();
var features_Rt64Pop1000Mtrs_19 = format_Rt64Pop1000Mtrs_19.readFeatures(json_Rt64Pop1000Mtrs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Pop1000Mtrs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Pop1000Mtrs_19.addFeatures(features_Rt64Pop1000Mtrs_19);
var lyr_Rt64Pop1000Mtrs_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Pop1000Mtrs_19, 
                style: style_Rt64Pop1000Mtrs_19,
                popuplayertitle: "Rt 64 Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt64Pop1000Mtrs_19.png" /> Rt 64 Pop 1000 Mtrs'
            });
var format_Rt64Pop500Mtrs_20 = new ol.format.GeoJSON();
var features_Rt64Pop500Mtrs_20 = format_Rt64Pop500Mtrs_20.readFeatures(json_Rt64Pop500Mtrs_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Pop500Mtrs_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Pop500Mtrs_20.addFeatures(features_Rt64Pop500Mtrs_20);
var lyr_Rt64Pop500Mtrs_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Pop500Mtrs_20, 
                style: style_Rt64Pop500Mtrs_20,
                popuplayertitle: "Rt 64 Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt64Pop500Mtrs_20.png" /> Rt 64 Pop 500 Mtrs'
            });
var format_Rt64Pop250Mtrs_21 = new ol.format.GeoJSON();
var features_Rt64Pop250Mtrs_21 = format_Rt64Pop250Mtrs_21.readFeatures(json_Rt64Pop250Mtrs_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Pop250Mtrs_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Pop250Mtrs_21.addFeatures(features_Rt64Pop250Mtrs_21);
var lyr_Rt64Pop250Mtrs_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Pop250Mtrs_21, 
                style: style_Rt64Pop250Mtrs_21,
                popuplayertitle: "Rt 64 Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt64Pop250Mtrs_21.png" /> Rt 64 Pop 250 Mtrs'
            });
var format_Rt64Pop100Mtrs_22 = new ol.format.GeoJSON();
var features_Rt64Pop100Mtrs_22 = format_Rt64Pop100Mtrs_22.readFeatures(json_Rt64Pop100Mtrs_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Pop100Mtrs_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Pop100Mtrs_22.addFeatures(features_Rt64Pop100Mtrs_22);
var lyr_Rt64Pop100Mtrs_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Pop100Mtrs_22, 
                style: style_Rt64Pop100Mtrs_22,
                popuplayertitle: "Rt 64 Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt64Pop100Mtrs_22.png" /> Rt 64 Pop 100 Mtrs'
            });
var format_Rt64StopPop_23 = new ol.format.GeoJSON();
var features_Rt64StopPop_23 = format_Rt64StopPop_23.readFeatures(json_Rt64StopPop_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64StopPop_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64StopPop_23.addFeatures(features_Rt64StopPop_23);
var lyr_Rt64StopPop_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64StopPop_23, 
                style: style_Rt64StopPop_23,
                popuplayertitle: "Rt 64 Stop Pop",
                interactive: true,
    title: 'Rt 64 Stop Pop<br />\
    <img src="styles/legend/Rt64StopPop_23_0.png" /> 10 min<br />'
        });
var format_Rt64Hospital_24 = new ol.format.GeoJSON();
var features_Rt64Hospital_24 = format_Rt64Hospital_24.readFeatures(json_Rt64Hospital_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Hospital_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Hospital_24.addFeatures(features_Rt64Hospital_24);
var lyr_Rt64Hospital_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Hospital_24, 
                style: style_Rt64Hospital_24,
                popuplayertitle: "Rt 64 Hospital",
                interactive: true,
                title: '<img src="styles/legend/Rt64Hospital_24.png" /> Rt 64 Hospital'
            });
var format_Rt64Offices_25 = new ol.format.GeoJSON();
var features_Rt64Offices_25 = format_Rt64Offices_25.readFeatures(json_Rt64Offices_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Offices_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Offices_25.addFeatures(features_Rt64Offices_25);
var lyr_Rt64Offices_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Offices_25, 
                style: style_Rt64Offices_25,
                popuplayertitle: "Rt 64 Offices",
                interactive: true,
                title: '<img src="styles/legend/Rt64Offices_25.png" /> Rt 64 Offices'
            });
var format_Rt64PSU_26 = new ol.format.GeoJSON();
var features_Rt64PSU_26 = format_Rt64PSU_26.readFeatures(json_Rt64PSU_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64PSU_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64PSU_26.addFeatures(features_Rt64PSU_26);
var lyr_Rt64PSU_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64PSU_26, 
                style: style_Rt64PSU_26,
                popuplayertitle: "Rt 64 PSU",
                interactive: true,
                title: '<img src="styles/legend/Rt64PSU_26.png" /> Rt 64 PSU'
            });
var format_Rt64Temple_27 = new ol.format.GeoJSON();
var features_Rt64Temple_27 = format_Rt64Temple_27.readFeatures(json_Rt64Temple_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Temple_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Temple_27.addFeatures(features_Rt64Temple_27);
var lyr_Rt64Temple_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Temple_27, 
                style: style_Rt64Temple_27,
                popuplayertitle: "Rt 64 Temple",
                interactive: true,
                title: '<img src="styles/legend/Rt64Temple_27.png" /> Rt 64 Temple'
            });
var format_Rt64Signal_28 = new ol.format.GeoJSON();
var features_Rt64Signal_28 = format_Rt64Signal_28.readFeatures(json_Rt64Signal_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Signal_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Signal_28.addFeatures(features_Rt64Signal_28);
var lyr_Rt64Signal_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Signal_28, 
                style: style_Rt64Signal_28,
                popuplayertitle: "Rt 64 Signal",
                interactive: true,
                title: '<img src="styles/legend/Rt64Signal_28.png" /> Rt 64 Signal'
            });
var format_Rt64Ridership_29 = new ol.format.GeoJSON();
var features_Rt64Ridership_29 = format_Rt64Ridership_29.readFeatures(json_Rt64Ridership_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Ridership_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Ridership_29.addFeatures(features_Rt64Ridership_29);
var lyr_Rt64Ridership_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Ridership_29, 
                style: style_Rt64Ridership_29,
                popuplayertitle: "Rt 64 Ridership",
                interactive: true,
                title: '<img src="styles/legend/Rt64Ridership_29.png" /> Rt 64 Ridership'
            });
var format_Rt64RevAssessment_30 = new ol.format.GeoJSON();
var features_Rt64RevAssessment_30 = format_Rt64RevAssessment_30.readFeatures(json_Rt64RevAssessment_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64RevAssessment_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64RevAssessment_30.addFeatures(features_Rt64RevAssessment_30);
var lyr_Rt64RevAssessment_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64RevAssessment_30, 
                style: style_Rt64RevAssessment_30,
                popuplayertitle: "Rt 64 Rev Assessment",
                interactive: true,
    title: 'Rt 64 Rev Assessment<br />\
    <img src="styles/legend/Rt64RevAssessment_30_0.png" /> 0.1<br />\
    <img src="styles/legend/Rt64RevAssessment_30_1.png" /> 0.2<br />\
    <img src="styles/legend/Rt64RevAssessment_30_2.png" /> 0.5<br />\
    <img src="styles/legend/Rt64RevAssessment_30_3.png" /> 1.20<br />\
    <img src="styles/legend/Rt64RevAssessment_30_4.png" /> <br />'
        });
var format_Rt64StopPopDissolved_31 = new ol.format.GeoJSON();
var features_Rt64StopPopDissolved_31 = format_Rt64StopPopDissolved_31.readFeatures(json_Rt64StopPopDissolved_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64StopPopDissolved_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64StopPopDissolved_31.addFeatures(features_Rt64StopPopDissolved_31);
var lyr_Rt64StopPopDissolved_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64StopPopDissolved_31, 
                style: style_Rt64StopPopDissolved_31,
                popuplayertitle: "Rt 64 Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt64StopPopDissolved_31.png" /> Rt 64 Stop Pop Dissolved'
            });
var format_Rt64UMtrs_32 = new ol.format.GeoJSON();
var features_Rt64UMtrs_32 = format_Rt64UMtrs_32.readFeatures(json_Rt64UMtrs_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64UMtrs_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64UMtrs_32.addFeatures(features_Rt64UMtrs_32);
var lyr_Rt64UMtrs_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64UMtrs_32, 
                style: style_Rt64UMtrs_32,
                popuplayertitle: "Rt 64U Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt64UMtrs_32.png" /> Rt 64U Mtrs'
            });
var format_PassengerAssessmentRt64xlsx_33 = new ol.format.GeoJSON();
var features_PassengerAssessmentRt64xlsx_33 = format_PassengerAssessmentRt64xlsx_33.readFeatures(json_PassengerAssessmentRt64xlsx_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassengerAssessmentRt64xlsx_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassengerAssessmentRt64xlsx_33.addFeatures(features_PassengerAssessmentRt64xlsx_33);
var lyr_PassengerAssessmentRt64xlsx_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PassengerAssessmentRt64xlsx_33, 
                style: style_PassengerAssessmentRt64xlsx_33,
                popuplayertitle: "Passenger Assessment Rt 64.xlsx",
                interactive: true,
    title: 'Passenger Assessment Rt 64.xlsx<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_0.png" /> Bhairoba Nala Police Chowky<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_1.png" /> Bhekrai Nagar<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_2.png" /> Dhangar Baba<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_3.png" /> Golibar Maidan<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_4.png" /> Hadapsar Gadital<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_5.png" /> Karve Nagar<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_6.png" /> Kondhwagate<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_7.png" /> Kothrud Stand<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_8.png" /> Malwadi<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_9.png" /> Nda 10 No. Gate<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_10.png" /> Nehru Stadium<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_11.png" /> Sahitya Parishad<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_12.png" /> Sndt College<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_13.png" /> Uttam Nagar<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_14.png" /> Vaiduwadi<br />\
    <img src="styles/legend/PassengerAssessmentRt64xlsx_33_15.png" /> <br />'
        });
var format_Rt64Distance_34 = new ol.format.GeoJSON();
var features_Rt64Distance_34 = format_Rt64Distance_34.readFeatures(json_Rt64Distance_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Distance_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Distance_34.addFeatures(features_Rt64Distance_34);
var lyr_Rt64Distance_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Distance_34, 
                style: style_Rt64Distance_34,
                popuplayertitle: "Rt 64 Distance",
                interactive: true,
                title: '<img src="styles/legend/Rt64Distance_34.png" /> Rt 64 Distance'
            });
var format_Rt64WealthIndex_35 = new ol.format.GeoJSON();
var features_Rt64WealthIndex_35 = format_Rt64WealthIndex_35.readFeatures(json_Rt64WealthIndex_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64WealthIndex_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64WealthIndex_35.addFeatures(features_Rt64WealthIndex_35);
var lyr_Rt64WealthIndex_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64WealthIndex_35, 
                style: style_Rt64WealthIndex_35,
                popuplayertitle: "Rt 64 Wealth Index",
                interactive: true,
    title: 'Rt 64 Wealth Index<br />\
    <img src="styles/legend/Rt64WealthIndex_35_0.png" /> 1.018 - 1.056<br />\
    <img src="styles/legend/Rt64WealthIndex_35_1.png" /> 1.056 - 1.094<br />\
    <img src="styles/legend/Rt64WealthIndex_35_2.png" /> 1.094 - 1.132<br />\
    <img src="styles/legend/Rt64WealthIndex_35_3.png" /> 1.132 - 1.169<br />\
    <img src="styles/legend/Rt64WealthIndex_35_4.png" /> 1.169 - 1.207<br />\
    <img src="styles/legend/Rt64WealthIndex_35_5.png" /> 1.207 - 1.245<br />\
    <img src="styles/legend/Rt64WealthIndex_35_6.png" /> 1.245 - 1.283<br />\
    <img src="styles/legend/Rt64WealthIndex_35_7.png" /> 1.283 - 1.321<br />\
    <img src="styles/legend/Rt64WealthIndex_35_8.png" /> 1.321 - 1.359<br />\
    <img src="styles/legend/Rt64WealthIndex_35_9.png" /> 1.359 - 1.397<br />\
    <img src="styles/legend/Rt64WealthIndex_35_10.png" /> 1.397 - 1.435<br />\
    <img src="styles/legend/Rt64WealthIndex_35_11.png" /> 1.435 - 1.472<br />\
    <img src="styles/legend/Rt64WealthIndex_35_12.png" /> 1.472 - 1.51<br />\
    <img src="styles/legend/Rt64WealthIndex_35_13.png" /> 1.51 - 1.548<br />\
    <img src="styles/legend/Rt64WealthIndex_35_14.png" /> 1.548 - 1.586<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pimpalesaudagar_1.setVisible(true);lyr_PimpleGaurav_2.setVisible(true);lyr_Keshavnagar_3.setVisible(true);lyr_Yavatmal_4.setVisible(true);lyr_Lahagaon_5.setVisible(true);lyr_KirkeeBoundary_6.setVisible(true);lyr_PimpreChinchwadboundary_7.setVisible(true);lyr_PuneGeoBoundary_8.setVisible(true);lyr_AllPunePopsep_9.setVisible(true);lyr_AllPunePopReprojected_10.setVisible(true);lyr_hospital_11.setVisible(true);lyr_Industries_12.setVisible(true);lyr_Temple_13.setVisible(true);lyr_Offices_14.setVisible(true);lyr_PublicBuildings_15.setVisible(true);lyr_trafficsignal_16.setVisible(true);lyr_Rt64DMtrs_17.setVisible(true);lyr_64DStops_18.setVisible(true);lyr_Rt64Pop1000Mtrs_19.setVisible(true);lyr_Rt64Pop500Mtrs_20.setVisible(true);lyr_Rt64Pop250Mtrs_21.setVisible(true);lyr_Rt64Pop100Mtrs_22.setVisible(true);lyr_Rt64StopPop_23.setVisible(true);lyr_Rt64Hospital_24.setVisible(true);lyr_Rt64Offices_25.setVisible(true);lyr_Rt64PSU_26.setVisible(true);lyr_Rt64Temple_27.setVisible(true);lyr_Rt64Signal_28.setVisible(true);lyr_Rt64Ridership_29.setVisible(true);lyr_Rt64RevAssessment_30.setVisible(true);lyr_Rt64StopPopDissolved_31.setVisible(true);lyr_Rt64UMtrs_32.setVisible(true);lyr_PassengerAssessmentRt64xlsx_33.setVisible(true);lyr_Rt64Distance_34.setVisible(true);lyr_Rt64WealthIndex_35.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pimpalesaudagar_1,lyr_PimpleGaurav_2,lyr_Keshavnagar_3,lyr_Yavatmal_4,lyr_Lahagaon_5,lyr_KirkeeBoundary_6,lyr_PimpreChinchwadboundary_7,lyr_PuneGeoBoundary_8,lyr_AllPunePopsep_9,lyr_AllPunePopReprojected_10,lyr_hospital_11,lyr_Industries_12,lyr_Temple_13,lyr_Offices_14,lyr_PublicBuildings_15,lyr_trafficsignal_16,lyr_Rt64DMtrs_17,lyr_64DStops_18,lyr_Rt64Pop1000Mtrs_19,lyr_Rt64Pop500Mtrs_20,lyr_Rt64Pop250Mtrs_21,lyr_Rt64Pop100Mtrs_22,lyr_Rt64StopPop_23,lyr_Rt64Hospital_24,lyr_Rt64Offices_25,lyr_Rt64PSU_26,lyr_Rt64Temple_27,lyr_Rt64Signal_28,lyr_Rt64Ridership_29,lyr_Rt64RevAssessment_30,lyr_Rt64StopPopDissolved_31,lyr_Rt64UMtrs_32,lyr_PassengerAssessmentRt64xlsx_33,lyr_Rt64Distance_34,lyr_Rt64WealthIndex_35];
lyr_Pimpalesaudagar_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpleGaurav_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Keshavnagar_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Yavatmal_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Lahagaon_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KirkeeBoundary_6.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpreChinchwadboundary_7.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PuneGeoBoundary_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_AllPunePopsep_9.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_AllPunePopReprojected_10.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'Area': 'Area', });
lyr_hospital_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'mobile': 'mobile', 'parking': 'parking', 'internet_a': 'internet_a', 'image': 'image', 'fax': 'fax', 'ele': 'ele', 'barrier': 'barrier', 'access': 'access', 'entrance': 'entrance', 'air_condit': 'air_condit', 'addr_floor': 'addr_floor', 'name_es': 'name_es', 'not_operat': 'not_operat', 'descriptio': 'descriptio', 'power': 'power', 'alt_name': 'alt_name', 'opening_ho': 'opening_ho', 'closing_ho': 'closing_ho', 'email': 'email', 'contact_we': 'contact_we', 'addr_quart': 'addr_quart', 'phone_mobi': 'phone_mobi', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'operator_t': 'operator_t', 'check_date': 'check_date', 'contact_ph': 'contact_ph', 'building': 'building', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'operator': 'operator', 'addr_subur': 'addr_subur', 'designatio': 'designatio', 'website': 'website', 'phone': 'phone', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'opening__1': 'opening__1', 'level': 'level', 'addr_hou_1': 'addr_hou_1', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'emergency': 'emergency', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'internet_1': 'internet_1', 'addr_stree': 'addr_stree', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'name': 'name', 'addr_subdi': 'addr_subdi', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', });
lyr_Industries_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_Temple_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', });
lyr_Offices_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'mobile': 'mobile', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'ref': 'ref', 'alt_name_e': 'alt_name_e', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'opening_ho': 'opening_ho', 'image': 'image', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'contact_tw': 'contact_tw', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'addr_count': 'addr_count', 'government': 'government', 'air_condit': 'air_condit', 'name_el': 'name_el', 'name_hi': 'name_hi', 'official_n': 'official_n', 'addr_floor': 'addr_floor', 'check_date': 'check_date', 'alt_name_m': 'alt_name_m', 'name_fr': 'name_fr', 'addr_unit': 'addr_unit', 'addr_full': 'addr_full', 'name_en': 'name_en', 'start_date': 'start_date', 'level': 'level', 'contact_mo': 'contact_mo', 'addr_place': 'addr_place', 'descriptio': 'descriptio', 'fax': 'fax', 'email': 'email', 'addr_neigh': 'addr_neigh', 'addr_local': 'addr_local', 'alt_name': 'alt_name', 'opening__1': 'opening__1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'entrance': 'entrance', 'smoking': 'smoking', 'phone': 'phone', 'addr_city': 'addr_city', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'website': 'website', 'landuse': 'landuse', 'name': 'name', 'building': 'building', });
lyr_PublicBuildings_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', });
lyr_trafficsignal_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', });
lyr_Rt64DMtrs_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_64DStops_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Stop_Name_Marathi': 'Stop_Name_Marathi', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_Rt64Pop1000Mtrs_19.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt64Pop500Mtrs_20.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt64Pop250Mtrs_21.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt64Pop100Mtrs_22.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt64StopPop_23.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt64Hospital_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'mobile': 'mobile', 'parking': 'parking', 'internet_a': 'internet_a', 'image': 'image', 'fax': 'fax', 'ele': 'ele', 'barrier': 'barrier', 'access': 'access', 'entrance': 'entrance', 'air_condit': 'air_condit', 'addr_floor': 'addr_floor', 'name_es': 'name_es', 'not_operat': 'not_operat', 'descriptio': 'descriptio', 'power': 'power', 'alt_name': 'alt_name', 'opening_ho': 'opening_ho', 'closing_ho': 'closing_ho', 'email': 'email', 'contact_we': 'contact_we', 'addr_quart': 'addr_quart', 'phone_mobi': 'phone_mobi', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'operator_t': 'operator_t', 'check_date': 'check_date', 'contact_ph': 'contact_ph', 'building': 'building', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'operator': 'operator', 'addr_subur': 'addr_subur', 'designatio': 'designatio', 'website': 'website', 'phone': 'phone', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'opening__1': 'opening__1', 'level': 'level', 'addr_hou_1': 'addr_hou_1', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'emergency': 'emergency', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'internet_1': 'internet_1', 'addr_stree': 'addr_stree', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'name': 'name', 'addr_subdi': 'addr_subdi', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt64Offices_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'mobile': 'mobile', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'ref': 'ref', 'alt_name_e': 'alt_name_e', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'opening_ho': 'opening_ho', 'image': 'image', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'contact_tw': 'contact_tw', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'addr_count': 'addr_count', 'government': 'government', 'air_condit': 'air_condit', 'name_el': 'name_el', 'name_hi': 'name_hi', 'official_n': 'official_n', 'addr_floor': 'addr_floor', 'check_date': 'check_date', 'alt_name_m': 'alt_name_m', 'name_fr': 'name_fr', 'addr_unit': 'addr_unit', 'addr_full': 'addr_full', 'name_en': 'name_en', 'start_date': 'start_date', 'level': 'level', 'contact_mo': 'contact_mo', 'addr_place': 'addr_place', 'descriptio': 'descriptio', 'fax': 'fax', 'email': 'email', 'addr_neigh': 'addr_neigh', 'addr_local': 'addr_local', 'alt_name': 'alt_name', 'opening__1': 'opening__1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'entrance': 'entrance', 'smoking': 'smoking', 'phone': 'phone', 'addr_city': 'addr_city', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'website': 'website', 'landuse': 'landuse', 'name': 'name', 'building': 'building', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt64PSU_26.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt64Temple_27.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt64Signal_28.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt64Ridership_29.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'layer': 'layer', 'Pax': 'Pax', 'Pax/Pop': 'Pax/Pop', });
lyr_Rt64RevAssessment_30.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'layer': 'layer', 'Pax': 'Pax', 'Revenue': 'Revenue', 'Rev/Pax': 'Rev/Pax', 'Rev/Pop': 'Rev/Pop', });
lyr_Rt64StopPopDissolved_31.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', });
lyr_Rt64UMtrs_32.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PassengerAssessmentRt64xlsx_33.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Stg': 'Stg', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Pax': 'Pax', 'Pax_Day': 'Pax_Day', 'Pax_': 'Pax_', });
lyr_Rt64Distance_34.set('fieldAliases', {'Name': 'Name', 'length': 'length', 'Distance': 'Distance', });
lyr_Rt64WealthIndex_35.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'Name': 'Name', 'Pop': 'Pop', });
lyr_Pimpalesaudagar_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpleGaurav_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Keshavnagar_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Yavatmal_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Lahagaon_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KirkeeBoundary_6.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpreChinchwadboundary_7.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PuneGeoBoundary_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_AllPunePopsep_9.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_AllPunePopReprojected_10.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'Area': 'TextEdit', });
lyr_hospital_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'mobile': 'TextEdit', 'parking': 'TextEdit', 'internet_a': 'TextEdit', 'image': 'TextEdit', 'fax': 'TextEdit', 'ele': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'entrance': 'TextEdit', 'air_condit': 'TextEdit', 'addr_floor': 'TextEdit', 'name_es': 'TextEdit', 'not_operat': 'TextEdit', 'descriptio': 'TextEdit', 'power': 'TextEdit', 'alt_name': 'TextEdit', 'opening_ho': 'TextEdit', 'closing_ho': 'TextEdit', 'email': 'TextEdit', 'contact_we': 'TextEdit', 'addr_quart': 'TextEdit', 'phone_mobi': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'contact_ph': 'TextEdit', 'building': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_house': 'TextEdit', 'operator': 'TextEdit', 'addr_subur': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'opening__1': 'TextEdit', 'level': 'TextEdit', 'addr_hou_1': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'internet_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'addr_subdi': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', });
lyr_Industries_12.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', });
lyr_Temple_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', });
lyr_Offices_14.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'power': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'mobile': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'company': 'TextEdit', 'branch_wik': 'TextEdit', 'branch_w_1': 'TextEdit', 'ref': 'TextEdit', 'alt_name_e': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'building_l': 'TextEdit', 'phone_mobi': 'TextEdit', 'short_name': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'image': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'contact_tw': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_count': 'TextEdit', 'government': 'TextEdit', 'air_condit': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'official_n': 'TextEdit', 'addr_floor': 'TextEdit', 'check_date': 'TextEdit', 'alt_name_m': 'TextEdit', 'name_fr': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'contact_mo': 'TextEdit', 'addr_place': 'TextEdit', 'descriptio': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_local': 'TextEdit', 'alt_name': 'TextEdit', 'opening__1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'name_mr': 'TextEdit', 'entrance': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'addr_city': 'TextEdit', 'designatio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'website': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', });
lyr_PublicBuildings_15.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', });
lyr_trafficsignal_16.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', });
lyr_Rt64DMtrs_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_64DStops_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Stop_Name_Marathi': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_Rt64Pop1000Mtrs_19.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt64Pop500Mtrs_20.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt64Pop250Mtrs_21.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt64Pop100Mtrs_22.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt64StopPop_23.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt64Hospital_24.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'mobile': 'TextEdit', 'parking': 'TextEdit', 'internet_a': 'TextEdit', 'image': 'TextEdit', 'fax': 'TextEdit', 'ele': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'entrance': 'TextEdit', 'air_condit': 'TextEdit', 'addr_floor': 'TextEdit', 'name_es': 'TextEdit', 'not_operat': 'TextEdit', 'descriptio': 'TextEdit', 'power': 'TextEdit', 'alt_name': 'TextEdit', 'opening_ho': 'TextEdit', 'closing_ho': 'TextEdit', 'email': 'TextEdit', 'contact_we': 'TextEdit', 'addr_quart': 'TextEdit', 'phone_mobi': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'contact_ph': 'TextEdit', 'building': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_house': 'TextEdit', 'operator': 'TextEdit', 'addr_subur': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'opening__1': 'TextEdit', 'level': 'TextEdit', 'addr_hou_1': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'internet_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'addr_subdi': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt64Offices_25.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'power': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'mobile': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'company': 'TextEdit', 'branch_wik': 'TextEdit', 'branch_w_1': 'TextEdit', 'ref': 'TextEdit', 'alt_name_e': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'building_l': 'TextEdit', 'phone_mobi': 'TextEdit', 'short_name': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'image': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'contact_tw': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_count': 'TextEdit', 'government': 'TextEdit', 'air_condit': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'official_n': 'TextEdit', 'addr_floor': 'TextEdit', 'check_date': 'TextEdit', 'alt_name_m': 'TextEdit', 'name_fr': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'contact_mo': 'TextEdit', 'addr_place': 'TextEdit', 'descriptio': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_local': 'TextEdit', 'alt_name': 'TextEdit', 'opening__1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'name_mr': 'TextEdit', 'entrance': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'addr_city': 'TextEdit', 'designatio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'website': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt64PSU_26.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt64Temple_27.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt64Signal_28.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt64Ridership_29.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'layer': 'TextEdit', 'Pax': 'Range', 'Pax/Pop': 'TextEdit', });
lyr_Rt64RevAssessment_30.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'layer': 'TextEdit', 'Pax': 'TextEdit', 'Revenue': 'TextEdit', 'Rev/Pax': 'TextEdit', 'Rev/Pop': 'TextEdit', });
lyr_Rt64StopPopDissolved_31.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', });
lyr_Rt64UMtrs_32.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_PassengerAssessmentRt64xlsx_33.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Stg': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'Pax': 'TextEdit', 'Pax_Day': 'TextEdit', 'Pax_': 'TextEdit', });
lyr_Rt64Distance_34.set('fieldImages', {'Name': '', 'length': '', 'Distance': '', });
lyr_Rt64WealthIndex_35.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'Name': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Pimpalesaudagar_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpleGaurav_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Keshavnagar_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Yavatmal_4.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Lahagaon_5.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KirkeeBoundary_6.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpreChinchwadboundary_7.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PuneGeoBoundary_8.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_AllPunePopsep_9.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_AllPunePopReprojected_10.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_hospital_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'mobile': 'hidden field', 'parking': 'hidden field', 'internet_a': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'ele': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'entrance': 'hidden field', 'air_condit': 'hidden field', 'addr_floor': 'hidden field', 'name_es': 'hidden field', 'not_operat': 'hidden field', 'descriptio': 'hidden field', 'power': 'hidden field', 'alt_name': 'hidden field', 'opening_ho': 'hidden field', 'closing_ho': 'hidden field', 'email': 'hidden field', 'contact_we': 'hidden field', 'addr_quart': 'hidden field', 'phone_mobi': 'hidden field', 'wheelchair': 'hidden field', 'start_date': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'contact_ph': 'hidden field', 'building': 'hidden field', 'addr_neigh': 'hidden field', 'addr_house': 'hidden field', 'operator': 'hidden field', 'addr_subur': 'hidden field', 'designatio': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'opening__1': 'hidden field', 'level': 'hidden field', 'addr_hou_1': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'internet_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_count': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'name': 'header label - visible with data', 'addr_subdi': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', });
lyr_Industries_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_Temple_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', });
lyr_Offices_14.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'mobile': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'ref': 'hidden field', 'alt_name_e': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'image': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'contact_tw': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'addr_state': 'hidden field', 'addr_distr': 'hidden field', 'addr_count': 'hidden field', 'government': 'hidden field', 'air_condit': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'official_n': 'hidden field', 'addr_floor': 'hidden field', 'check_date': 'hidden field', 'alt_name_m': 'hidden field', 'name_fr': 'hidden field', 'addr_unit': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'contact_mo': 'hidden field', 'addr_place': 'hidden field', 'descriptio': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'addr_neigh': 'hidden field', 'addr_local': 'hidden field', 'alt_name': 'hidden field', 'opening__1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'entrance': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'addr_city': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'website': 'hidden field', 'landuse': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', });
lyr_PublicBuildings_15.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', });
lyr_trafficsignal_16.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'hidden field', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'junction': 'hidden field', });
lyr_Rt64DMtrs_17.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_64DStops_18.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'hidden field', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Stop_Name_Marathi': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_Rt64Pop1000Mtrs_19.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt64Pop500Mtrs_20.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt64Pop250Mtrs_21.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt64Pop100Mtrs_22.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt64StopPop_23.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt64Hospital_24.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'mobile': 'hidden field', 'parking': 'hidden field', 'internet_a': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'ele': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'entrance': 'hidden field', 'air_condit': 'hidden field', 'addr_floor': 'hidden field', 'name_es': 'hidden field', 'not_operat': 'hidden field', 'descriptio': 'hidden field', 'power': 'hidden field', 'alt_name': 'hidden field', 'opening_ho': 'hidden field', 'closing_ho': 'hidden field', 'email': 'hidden field', 'contact_we': 'hidden field', 'addr_quart': 'hidden field', 'phone_mobi': 'hidden field', 'wheelchair': 'hidden field', 'start_date': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'contact_ph': 'hidden field', 'building': 'hidden field', 'addr_neigh': 'hidden field', 'addr_house': 'hidden field', 'operator': 'hidden field', 'addr_subur': 'hidden field', 'designatio': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'opening__1': 'hidden field', 'level': 'hidden field', 'addr_hou_1': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'internet_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_count': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'name': 'header label - visible with data', 'addr_subdi': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt64Offices_25.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'mobile': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'ref': 'hidden field', 'alt_name_e': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'image': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'contact_tw': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'addr_state': 'hidden field', 'addr_distr': 'hidden field', 'addr_count': 'hidden field', 'government': 'hidden field', 'air_condit': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'official_n': 'hidden field', 'addr_floor': 'hidden field', 'check_date': 'hidden field', 'alt_name_m': 'hidden field', 'name_fr': 'hidden field', 'addr_unit': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'contact_mo': 'hidden field', 'addr_place': 'hidden field', 'descriptio': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'addr_neigh': 'hidden field', 'addr_local': 'hidden field', 'alt_name': 'hidden field', 'opening__1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'entrance': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'addr_city': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'website': 'hidden field', 'landuse': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt64PSU_26.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt64Temple_27.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt64Signal_28.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'hidden field', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'junction': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt64Ridership_29.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Pax/Pop': 'header label - visible with data', });
lyr_Rt64RevAssessment_30.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Revenue': 'inline label - visible with data', 'Rev/Pax': 'inline label - visible with data', 'Rev/Pop': 'header label - visible with data', });
lyr_Rt64StopPopDissolved_31.set('fieldLabels', {'AA_MINS': 'header label - visible with data', 'AA_MODE': 'header label - visible with data', 'Pop': 'header label - visible with data', });
lyr_Rt64UMtrs_32.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_PassengerAssessmentRt64xlsx_33.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Stg': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Pax_Day': 'inline label - visible with data', 'Pax_': 'inline label - visible with data', });
lyr_Rt64Distance_34.set('fieldLabels', {'Name': 'header label - visible with data', 'length': 'inline label - visible with data', 'Distance': 'inline label - visible with data', });
lyr_Rt64WealthIndex_35.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'rwi': 'hidden field', 'error': 'hidden field', 'Name': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt64WealthIndex_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});