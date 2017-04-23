//start to rub with vue
var arr = Array();
var app = new Vue({
    el: "#myapp",
    data : {
        message : "",
        datestr : ["45 days","75 Day","105 Days","6 Months","9 Months","10 Months","15 months","18 Months","2 years","5 Years","10 Years"],
        dateres : arr
    },
    methods : {
        blow : function(){
            this.dateres.push("harish");
        },
        dotheDate : function(){
            alert('hi');
        }
    }
})

$(function(){

    $("#datepicker").datepicker();
    $("#datepicker").datepicker("option", "dateFormat","DD, d MM, yy");

})