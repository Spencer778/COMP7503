"use strict";(self["webpackChunkechartshow"]=self["webpackChunkechartshow"]||[]).push([[884],{884:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var i=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"pageContent onePage"},[t("div",{staticClass:"pageTitle"},[e._v(" Labour ")]),t("div",{staticClass:"onePage-items"},[t("div",{staticClass:"onePageOne onePageThree mr20 br10 p0",attrs:{id:"echartFour1"}}),t("div",{staticClass:"onePageOne onePageThree mr20 br10 p0",attrs:{id:"echartFour2"}})]),t("div",{staticClass:"onePage-items"},[t("div",{staticClass:"onePageOne onePageThree mr20 br10 p0",attrs:{id:"echartFour3"}}),t("div",{staticClass:"onePageOne onePageThree mr20 br10 p0",attrs:{id:"echartFour4"}})])])}],l={name:"labour",data(){return{}},mounted(){this.$nextTick((()=>{this.getLoadEcharts(),this.getLoadEcharts2(),this.getLoadEcharts3(),this.getLoadEcharts4()}))},methods:{getLoadEcharts4(){let e=this.$echarts.init(document.getElementById("echartFour4")),t={title:{text:"Number of People in Establishments by Industry",x:"left",y:"top",padding:[20,10,5,30]},grid:{left:"0",right:"20",bottom:"10",containLabel:!0},xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{show:!1,textStyle:{color:"#F5784C",fontSize:"16"}},data:[{value:"10%",itemStyle:{color:"#FFCB9B"}},{value:"20%",itemStyle:{color:"#FFCB9B"}},{value:"30%",itemStyle:{color:"#FFCB9B"}},{value:"40%",itemStyle:{color:"#FFCB9B"}},{value:"50%",itemStyle:{color:"#FFCB9B"}}]},{type:"category",offset:-10,position:"left",axisLine:{show:!1},inverse:!1,axisTick:{show:!1},axisLabel:{interval:0,color:["#f4f7fe"],align:"left",verticalAlign:"bottom",lineHeight:32,fontSize:10},data:["Edu","Human","Finance","Food","Wholesale"]}],series:[{zlevel:1,type:"bar",barWidth:10,animationDuration:1500,data:[{value:679541,itemStyle:{color:"#08dc9a"}},{value:250532,itemStyle:{color:"#08dc9a"}},{value:233431,itemStyle:{color:"#08dc9a"}},{value:214091,itemStyle:{color:"#08dc9a"}},{value:205532,itemStyle:{color:"#08dc9a"}}],align:"center",itemStyle:{normal:{barBorderRadius:10}}},{type:"bar",barWidth:10,barGap:"-100%",margin:"20",data:[2673222,2673222,2673222,2673222,2673222],textStyle:{fontSize:10,color:"#fff"},itemStyle:{normal:{color:"#f4f7fe",fontSize:10,barBorderRadius:30}}}]};e.setOption(t)},getLoadEcharts3(){let e=this.$echarts.init(document.getElementById("echartFour3")),t={title:{text:"Number of Vacancies in Establishments by Industry",x:"left",y:"top",padding:[20,10,5,30]},grid:{left:"0",right:"20",bottom:"10",containLabel:!0},xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{show:!1,textStyle:{color:"#F5784C",fontSize:"16"}},data:[{value:"10%",itemStyle:{color:"#FFCB9B"}},{value:"20%",itemStyle:{color:"#FFCB9B"}},{value:"30%",itemStyle:{color:"#FFCB9B"}},{value:"40%",itemStyle:{color:"#FFCB9B"}},{value:"50%",itemStyle:{color:"#FFCB9B"}}]},{type:"category",offset:-10,position:"left",axisLine:{show:!1},inverse:!1,axisTick:{show:!1},axisLabel:{interval:0,color:["#f4f7fe"],align:"left",verticalAlign:"bottom",lineHeight:32,fontSize:10},data:["Edu","Human","Finance","Food","Wholesale"]}],series:[{zlevel:1,type:"bar",barWidth:10,animationDuration:1500,data:[{value:8481,itemStyle:{color:"#08dc9a"}},{value:6490,itemStyle:{color:"#08dc9a"}},{value:5775,itemStyle:{color:"#08dc9a"}},{value:10671,itemStyle:{color:"#08dc9a"}},{value:7441,itemStyle:{color:"#08dc9a"}}],align:"center",itemStyle:{normal:{barBorderRadius:10}}},{type:"bar",barWidth:10,barGap:"-100%",margin:"20",data:[62498,62498,62498,62498,62498],textStyle:{fontSize:10,color:"#fff"},itemStyle:{normal:{color:"#f4f7fe",fontSize:10,barBorderRadius:30}}}]};e.setOption(t)},getLoadEcharts2(){let e=this.$echarts.init(document.getElementById("echartFour2")),t={title:{text:"Unemployment Rate (Seasonally Adjusted)",y:"top",padding:[10,10,5,10]},grid:{bottom:30,top:60,left:50,right:20},legend:{orient:"vertical",x:"right",y:"top",icon:"circle",align:"right",padding:[10,10,5,10]},xAxis:{type:"category",boundaryGap:!1,data:["15-19","20-24","15-24",">=25"],axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{type:"value"},tooltip:{trigger:"axis",axisPointer:{type:"line"}},series:[{data:[14.1,10.8,11.2,3.5],name:"By Age Group(%)",type:"line",smooth:!1,showSymbol:!1,lineStyle:{color:"#61a4e4"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#61a4e4"},{offset:1,color:"white"}],global:!1}}}]};t&&e.setOption(t),e.resize()},getLoadEcharts(){let e=this.$echarts.init(document.getElementById("echartFour1")),t={title:{text:"Labour Force (Million)",x:"left",y:"top",padding:[10,10,5,10]},grid:{bottom:30,top:60,left:50,right:20},legend:{orient:"vertical",x:"right",y:"top",icon:"circle",align:"right",padding:[10,10,5,10]},xAxis:{type:"category",boundaryGap:!1,data:["15-24","25-29","30-34","35-39","40-44","45-49","50-54","55-60",">=60"],axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{type:"value"},tooltip:{trigger:"axis",axisPointer:{type:"line"}},series:[{data:[200.1,379.6,443.1,468.4,479.9,452.4,452.7,406.2,513.7],name:"Thousand",type:"line",smooth:!1,showSymbol:!1,grid:{x:70,y:40,x2:15,y2:20},lineStyle:{color:"#ff8a8a"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#ff8a8a"},{offset:1,color:"white"}],global:!1}}}]};t&&e.setOption(t),e.resize()}}},r=l,s=a(1001),n=(0,s.Z)(r,i,o,!1,null,"ea9b5372",null),c=n.exports}}]);
//# sourceMappingURL=884.52934082.js.map